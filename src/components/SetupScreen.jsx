import { ArrowRight } from "lucide-react";

export default function SetupScreen({ project, setProject, onContinue }) {
  const update = (key, value) => setProject(p => ({ ...p, [key]: value }));

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-xl font-bold text-stone-900 tracking-tight">
        Set Up Your Context
      </h1>
      <p className="text-xs text-stone-500 mt-1 mb-6">
        Your district, resources, and constraints determine what is realistic and how actions are sequenced.
      </p>

      <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-4">
        {[
          ["Country", "country", "e.g., Mozambique"],
          ["District / Province", "district", "e.g., Nampula Province"],
          ["Grant Reference", "grant", "e.g., MOZ-H-MOH GC7"],
        ].map(([label, key, placeholder]) => (
          <div key={key}>
            <label className="block text-[11px] font-medium text-stone-600 mb-1">
              {label}
            </label>
            <input
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-stone-800 focus:border-transparent"
              value={project[key]}
              onChange={e => update(key, e.target.value)}
              placeholder={placeholder}
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-medium text-stone-600 mb-1">
              Health Facilities
            </label>
            <input
              type="number"
              min="1"
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-stone-800"
              value={project.facilities}
              onChange={e => update("facilities", +e.target.value || 1)}
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-stone-600 mb-1">
              M&E Officers Available
            </label>
            <input
              type="number"
              min="1"
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-stone-800"
              value={project.meStaff}
              onChange={e => update("meStaff", +e.target.value || 1)}
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-stone-600 mb-1">
            Transport Availability
          </label>
          <select
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-stone-800"
            value={project.transport}
            onChange={e => update("transport", e.target.value)}
          >
            <option value="adequate">Adequate: weekly visits feasible</option>
            <option value="limited">Limited: monthly visits feasible</option>
            <option value="minimal">Minimal: quarterly visits only</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-stone-600 mb-1">
            Start Date
          </label>
          <input
            type="date"
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-stone-800"
            value={project.startDate}
            onChange={e => update("startDate", e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!project.country || !project.district}
        className="mt-5 w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-stone-800 disabled:opacity-30 flex items-center justify-center gap-2"
      >
        Continue to Assessment
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
