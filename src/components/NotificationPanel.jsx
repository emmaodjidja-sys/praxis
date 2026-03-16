import { X } from "lucide-react";
import { ROLES } from "../lib/dqi-action-library";
import { daysUntil } from "../lib/dqi-engine";

export default function NotificationPanel({ notifs, onClose }) {
  return (
    <div className="absolute right-4 top-12 w-80 bg-white rounded-lg shadow-xl border border-stone-200 z-50 overflow-hidden">
      <div className="p-2.5 border-b border-stone-100 flex justify-between items-center">
        <span className="text-xs font-semibold text-stone-800">Upcoming & Overdue</span>
        <button onClick={onClose}>
          <X className="w-3.5 h-3.5 text-stone-400" />
        </button>
      </div>
      <div className="max-h-72 overflow-y-auto">
        {notifs.slice(0, 12).map((n, i) => {
          const d = daysUntil(n.deadline);
          const ov = d < 0;
          return (
            <div
              key={i}
              className={`px-3 py-2.5 border-b border-stone-50 ${
                ov ? "bg-red-50/60" : "bg-amber-50/40"
              }`}
            >
              <div className="text-[11px] font-medium text-stone-800 leading-snug">
                {n.title}
              </div>
              <div className="text-[10px] mt-0.5 flex items-center gap-2">
                <span className={ov ? "text-red-600 font-semibold" : "text-amber-600 font-medium"}>
                  {ov
                    ? `${Math.abs(d)}d overdue`
                    : d === 0
                    ? "Due today"
                    : `${d}d left`}
                </span>
                <span className="text-stone-400">{ROLES[n.role]?.short}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
