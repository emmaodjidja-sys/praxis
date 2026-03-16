import { useState } from "react";
import { CheckCircle2, ChevronDown, Play, Pause, FileText, RefreshCw, Zap } from "lucide-react";
import { ROLES, DEPENDENCY_LEVELS } from "../lib/dqi-action-library";
import { daysUntil, formatDate } from "../lib/dqi-engine";

function Dot({ color, size = 8 }) {
  return (
    <span
      style={{ width: size, height: size, borderRadius: size, background: color, display: "inline-block", flexShrink: 0 }}
    />
  );
}

const RATING_COLORS = { green: "#10b981", amber: "#f59e0b", red: "#ef4444" };

export default function ActionPlanScreen({
  project, assessment, enriched, updateStatus,
}) {
  const [expanded, setExpanded] = useState(null);
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = enriched.filter(
    a =>
      (filterRole === "all" || a.role === filterRole) &&
      (filterStatus === "all" || a.displayStatus === filterStatus)
  );

  const grouped = {};
  filtered.forEach(a => {
    if (!grouped[a.levelId]) grouped[a.levelId] = [];
    grouped[a.levelId].push(a);
  });
  const orderedKeys = DEPENDENCY_LEVELS.filter(l => grouped[l.id]).map(l => l.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-xl font-bold text-stone-900 tracking-tight">
        Implementation Action Plan
      </h1>
      <p className="text-xs text-stone-400 mb-4">
        {filtered.length} actions · {project.district}, {project.country}
      </p>

      {/* Filters */}
      <div className="flex gap-2 mb-5 flex-wrap">
        <select
          className="text-[11px] border border-stone-200 rounded-lg px-2 py-1.5 bg-white"
          value={filterRole}
          onChange={e => setFilterRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          {Object.entries(ROLES).map(([k, v]) => (
            <option key={k} value={k}>{v.short}</option>
          ))}
        </select>
        <select
          className="text-[11px] border border-stone-200 rounded-lg px-2 py-1.5 bg-white"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="not_started">Not Started</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>

      {/* Grouped actions by level */}
      {orderedKeys.map(levelId => {
        const lv = DEPENDENCY_LEVELS.find(l => l.id === levelId);
        const acts = grouped[levelId];
        const done = acts.filter(a => a.status === "completed").length;

        return (
          <div key={levelId} className="mb-8">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold"
                style={{ background: lv.color }}
              >
                {lv.order}
              </div>
              <span className="text-sm font-semibold text-stone-800">{lv.name}</span>
              <Dot color={RATING_COLORS[assessment[levelId]] || "#d1d5db"} />
              <span className="text-[10px] text-stone-400">{done}/{acts.length} done</span>
            </div>

            <div className="space-y-2 ml-9">
              {acts.map(a => {
                const d = daysUntil(a.deadline);
                const ov = a.displayStatus === "overdue";
                const isExpanded = expanded === a.id;

                return (
                  <div
                    key={a.id}
                    className={`bg-white rounded-xl border ${
                      ov
                        ? "border-red-200"
                        : a.status === "completed"
                        ? "border-emerald-100"
                        : "border-stone-200"
                    } ${isExpanded ? "shadow-lg" : ""}`}
                  >
                    {/* Header row */}
                    <div
                      className="p-3.5 cursor-pointer select-none"
                      onClick={() => setExpanded(isExpanded ? null : a.id)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-[13px] font-medium ${
                                a.status === "completed"
                                  ? "text-stone-400 line-through"
                                  : "text-stone-900"
                              }`}
                            >
                              {a.title}
                            </span>
                            {a.priority === "critical" && a.status !== "completed" && (
                              <span className="text-[9px] px-1.5 py-0.5 bg-red-50 text-red-600 rounded font-semibold uppercase">
                                Critical
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap text-[10px]">
                            <span
                              className="px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: (ROLES[a.role]?.color || "#888") + "12",
                                color: ROLES[a.role]?.color,
                              }}
                            >
                              {ROLES[a.role]?.short}
                            </span>
                            <span className="text-stone-400">
                              {formatDate(a.startDate)} → {formatDate(a.deadline)}
                            </span>
                            <span className="text-stone-400 capitalize">{a.frequency}</span>
                            {a.adjustedWeeks !== a.baseWeeks && (
                              <span className="text-stone-400">
                                ({a.adjustedWeeks}w adjusted)
                              </span>
                            )}
                            {a.status !== "completed" && d >= 0 && d <= 7 && (
                              <span className="text-amber-600 font-semibold">
                                {d === 0 ? "Due today" : `${d}d left`}
                              </span>
                            )}
                            {ov && (
                              <span className="text-red-600 font-semibold">
                                {Math.abs(d)}d overdue
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {a.status === "not_started" && a.displayStatus !== "overdue" && (
                            <button
                              onClick={e => { e.stopPropagation(); updateStatus(a.id, "in_progress"); }}
                              className="p-1 rounded hover:bg-blue-50"
                            >
                              <Play className="w-3.5 h-3.5 text-blue-500" />
                            </button>
                          )}
                          {a.status === "in_progress" && (
                            <button
                              onClick={e => { e.stopPropagation(); updateStatus(a.id, "not_started"); }}
                              className="p-1 rounded hover:bg-stone-100"
                            >
                              <Pause className="w-3.5 h-3.5 text-stone-400" />
                            </button>
                          )}
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              updateStatus(a.id, a.status === "completed" ? "not_started" : "completed");
                            }}
                            className={`p-1 rounded ${
                              a.status === "completed" ? "hover:bg-stone-100" : "hover:bg-emerald-50"
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 ${
                                a.status === "completed" ? "text-emerald-500" : "text-stone-300"
                              }`}
                            />
                          </button>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-stone-300 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-stone-100 pt-3 space-y-3">
                        <div>
                          <div className="text-[11px] font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                            <FileText className="w-3 h-3" />
                            Implementation Protocol
                          </div>
                          <div className="text-[11px] text-stone-600 leading-[1.7] bg-stone-50 rounded-lg p-3">
                            {a.protocol}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-stone-50 rounded-lg p-2.5">
                            <div className="text-[10px] font-semibold text-stone-500 uppercase tracking-wide mb-1">
                              Output Document
                            </div>
                            <div className="text-[11px] text-stone-700">{a.outputDoc}</div>
                          </div>
                          <div className="bg-stone-50 rounded-lg p-2.5">
                            <div className="text-[10px] font-semibold text-stone-500 uppercase tracking-wide mb-1">
                              Verification
                            </div>
                            <div className="text-[11px] text-stone-700">{a.verification}</div>
                          </div>
                        </div>

                        {a.frequency !== "once" && (
                          <div className="flex items-center gap-1.5 text-[10px] text-stone-500">
                            <RefreshCw className="w-3 h-3" />
                            Recurring: {a.frequency}. After setup, this becomes a standing routine.
                          </div>
                        )}

                        {a.resources && a.resources !== "none" && (
                          <div className="flex items-center gap-1.5 text-[10px] text-stone-500">
                            <Zap className="w-3 h-3" />
                            Requires: {a.resources}
                            {a.adjustedWeeks !== a.baseWeeks &&
                              ` (adjusted from ${a.baseWeeks}w to ${a.adjustedWeeks}w for your constraints)`}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <div className="text-center text-sm text-stone-400 py-12">No actions match filters</div>
      )}
    </div>
  );
}
