import { AlertTriangle, ArrowRight } from "lucide-react";
import { DEPENDENCY_LEVELS } from "../lib/dqi-action-library";

function Dot({ color, size = 8 }) {
  return (
    <span
      style={{ width: size, height: size, borderRadius: size, background: color, display: "inline-block", flexShrink: 0 }}
    />
  );
}

export default function AssessmentScreen({ assessment, setAssessment, onBack, onGenerate }) {
  const setRating = (levelId, rating) => {
    setAssessment(a => ({ ...a, [levelId]: rating }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-bold text-stone-900 tracking-tight">
        Dependency Chain Assessment
      </h1>
      <p className="text-xs text-stone-500 mt-1 mb-2">
        Rate each level based on current conditions. Implementation starts at the lowest broken level.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-6 text-[11px] text-amber-800 flex items-start gap-2">
        <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
        Rate honestly. An amber where red is accurate wastes time on actions that depend on unresolved foundations.
      </div>

      <div className="space-y-3">
        {DEPENDENCY_LEVELS.map(lv => (
          <div
            key={lv.id}
            className={`bg-white rounded-xl border ${
              assessment[lv.id] === "red"
                ? "border-red-200"
                : assessment[lv.id] === "amber"
                ? "border-amber-200"
                : assessment[lv.id] === "green"
                ? "border-emerald-200"
                : "border-stone-200"
            }`}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: lv.color }}
                >
                  {lv.order}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-stone-900">{lv.name}</div>
                  <div className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                    {lv.rationale}
                  </div>
                  <div className="mt-2.5 text-[11px] font-medium text-stone-700">
                    {lv.question}
                  </div>
                  <div className="mt-1.5 space-y-0.5">
                    {lv.subQuestions.map((s, j) => (
                      <div key={j} className="text-[10px] text-stone-400 pl-2 border-l border-stone-200">
                        {s}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-3">
                    {[
                      ["green", "Adequate", "#10b981", lv.greenCriteria],
                      ["amber", "Partial Gaps", "#f59e0b", lv.amberCriteria],
                      ["red", "Critical Gaps", "#ef4444", lv.redCriteria],
                    ].map(([value, label, color, desc]) => (
                      <div key={value} className="flex-1">
                        <button
                          onClick={() => setRating(lv.id, value)}
                          className={`w-full flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-medium border-2 transition-all ${
                            assessment[lv.id] === value
                              ? "border-stone-800 shadow-sm bg-white"
                              : "border-transparent bg-stone-50 hover:bg-stone-100"
                          }`}
                        >
                          <Dot color={color} />
                          {label}
                        </button>
                        {assessment[lv.id] === value && (
                          <div className="text-[9px] text-stone-400 mt-1 px-1 leading-snug">
                            {desc}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl text-sm border border-stone-200 text-stone-500 hover:bg-stone-50"
        >
          Back
        </button>
        <button
          onClick={onGenerate}
          disabled={Object.keys(assessment).length < 6}
          className="flex-1 bg-stone-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-stone-800 disabled:opacity-30 flex items-center justify-center gap-2"
        >
          Generate Action Plan
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
