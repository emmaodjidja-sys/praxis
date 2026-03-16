import { Bell, Database, Trash2, X } from "lucide-react";
import NotificationPanel from "./NotificationPanel";

export default function NavigationBar({
  view, setView, plan, notifs, notifOpen, setNotifOpen, onReset
}) {
  return (
    <div className="bg-white border-b border-stone-200 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-stone-900 flex items-center justify-center">
            <Database className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-stone-900 tracking-tight leading-none">
              PRAXIS
            </div>
            <div className="text-[9px] text-stone-400 uppercase tracking-[0.15em] leading-none mt-0.5">
              Data Quality Planner
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {plan.length > 0 && (
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-1.5 rounded-md hover:bg-stone-50"
            >
              <Bell className="w-4 h-4 text-stone-400" />
              {notifs.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center font-bold">
                  {notifs.length}
                </span>
              )}
            </button>
          )}

          {plan.length > 0 && ["dash", "actions", "assess"].map(v => (
            <button
              key={v}
              onClick={() => { setView(v); setNotifOpen(false); }}
              className={`text-[11px] px-2 py-1 rounded-md ${
                view === v
                  ? "bg-stone-900 text-white"
                  : "text-stone-400 hover:bg-stone-100"
              }`}
            >
              {v === "dash" ? "Dashboard" : v === "actions" ? "Action Plan" : "Assessment"}
            </button>
          ))}

          {plan.length > 0 && (
            <button
              onClick={onReset}
              className="p-1.5 rounded-md hover:bg-red-50 ml-0.5"
              title="Reset"
            >
              <Trash2 className="w-3.5 h-3.5 text-stone-300 hover:text-red-400" />
            </button>
          )}
        </div>
      </div>

      {/* Notification dropdown */}
      {notifOpen && notifs.length > 0 && (
        <NotificationPanel notifs={notifs} onClose={() => setNotifOpen(false)} />
      )}
    </div>
  );
}
