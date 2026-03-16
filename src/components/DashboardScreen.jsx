import { AlertTriangle, CheckCircle2, Play, ArrowUpRight } from "lucide-react";
import { ROLES } from "../lib/dqi-action-library";
import { daysUntil, formatDate, formatDateFull } from "../lib/dqi-engine";

function Dot({ color, size = 10 }) {
  return (
    <span
      style={{ width: size, height: size, borderRadius: size, background: color, display: "inline-block", flexShrink: 0 }}
    />
  );
}

const RATING_COLORS = { green: "#10b981", amber: "#f59e0b", red: "#ef4444" };

export default function DashboardScreen({
  project, assessment, enriched, stats, updateStatus, setView,
}) {
  const next = enriched
    .filter(a => a.displayStatus !== "completed")
    .sort((a, b) => {
      const ao = a.displayStatus === "overdue" ? 0 : 1;
      const bo = b.displayStatus === "overdue" ? 0 : 1;
      if (ao !== bo) return ao - bo;
      if (a.levelOrder !== b.levelOrder) return a.levelOrder - b.levelOrder;
      const pri = { critical: 0, high: 1, medium: 2 };
      return (pri[a.priority] || 2) - (pri[b.priority] || 2);
    })
    .slice(0, 8);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-stone-900">
          {project.district}, {project.country}
        </h1>
        <p className="text-xs text-stone-400 mt-0.5">
          {project.grant} · {stats.total} actions · Started {formatDateFull(project.startDate)}
        </p>
      </div>

      {/* Overdue banner */}
      {stats.overdue > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 mb-5 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-red-800">
              {stats.overdue} overdue action{stats.overdue > 1 ? "s" : ""}
            </div>
            <div className="text-xs text-red-600 mt-0.5">
              Overdue at lower levels blocks all progress above.
            </div>
          </div>
        </div>
      )}

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { l: "Completed", v: stats.completed, s: `of ${stats.total}`, cl: "text-emerald-700", bg: "bg-emerald-50" },
          { l: "In Progress", v: stats.inProgress, s: "active", cl: "text-blue-700", bg: "bg-blue-50" },
          { l: "Overdue", v: stats.overdue, s: "need action", cl: "text-red-700", bg: "bg-red-50" },
          { l: "Progress", v: `${stats.progressPct}%`, s: "overall", cl: "text-stone-900", bg: "bg-stone-100" },
        ].map((s, i) => (
          <div key={i} className={`${s.bg} rounded-xl p-4 border border-stone-100`}>
            <div className={`text-2xl font-bold ${s.cl}`}>{s.v}</div>
            <div className="text-[11px] text-stone-500 mt-0.5">{s.l} · {s.s}</div>
          </div>
        ))}
      </div>

      {/* Level progress */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 mb-5">
        <div className="text-xs font-medium text-stone-700 mb-3">
          Progress by Dependency Level
        </div>
        <div className="space-y-2.5">
          {stats.levelProgress.map(lv => {
            const p = lv.total ? Math.round(lv.completed / lv.total * 100) : 0;
            return (
              <div key={lv.id} className="flex items-center gap-3">
                <div className="w-40 flex items-center gap-2">
                  <Dot color={RATING_COLORS[assessment[lv.id]] || "#d1d5db"} size={8} />
                  <span className="text-[11px] text-stone-700 truncate">{lv.name}</span>
                </div>
                <div className="flex-1 h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${p}%`, background: lv.color }}
                  />
                </div>
                <span className="text-[11px] text-stone-500 w-14 text-right">
                  {lv.completed}/{lv.total}
                  {lv.overdue > 0 && <span className="text-red-500 ml-1">({lv.overdue}!)</span>}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next actions */}
      <div className="bg-white rounded-xl border border-stone-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-medium text-stone-700">What to Tackle Next</div>
          <button
            onClick={() => setView("actions")}
            className="text-[11px] text-stone-400 hover:text-stone-600 flex items-center gap-1"
          >
            Full plan
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-1.5">
          {next.map(a => {
            const d = daysUntil(a.deadline);
            const ov = d < 0;
            return (
              <div
                key={a.id}
                className={`flex items-center gap-3 p-2.5 rounded-lg ${
                  ov ? "bg-red-50/70" : d <= 3 ? "bg-amber-50/50" : "bg-stone-50/70"
                }`}
              >
                <Dot color={a.levelColor} size={8} />
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium text-stone-800 truncate">
                    {a.title}
                  </div>
                  <div className="text-[10px] text-stone-400 flex items-center gap-2 mt-0.5">
                    <span style={{ color: ROLES[a.role]?.color }} className="font-medium">
                      {ROLES[a.role]?.short}
                    </span>
                    <span>{a.frequency}</span>
                    {a.priority === "critical" && (
                      <span className="text-red-500 font-semibold uppercase text-[9px]">Critical</span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0 mr-1">
                  <div className={`text-[11px] font-semibold ${
                    ov ? "text-red-600" : d <= 3 ? "text-amber-600" : "text-stone-500"
                  }`}>
                    {ov ? `${Math.abs(d)}d overdue` : d === 0 ? "Today" : `${d}d`}
                  </div>
                  <div className="text-[10px] text-stone-400">{formatDate(a.deadline)}</div>
                </div>
                <div className="flex gap-1 shrink-0">
                  {a.status !== "in_progress" && (
                    <button
                      onClick={() => updateStatus(a.id, "in_progress")}
                      className="p-1 rounded hover:bg-blue-100"
                      title="Start"
                    >
                      <Play className="w-3.5 h-3.5 text-blue-500" />
                    </button>
                  )}
                  <button
                    onClick={() => updateStatus(a.id, "completed")}
                    className="p-1 rounded hover:bg-emerald-100"
                    title="Complete"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </button>
                </div>
              </div>
            );
          })}
          {next.length === 0 && (
            <div className="text-xs text-stone-400 text-center py-6">All actions completed</div>
          )}
        </div>
      </div>
    </div>
  );
}
