import { useState, useEffect, useCallback, useMemo } from "react";
import { RefreshCw } from "lucide-react";

import { DEPENDENCY_LEVELS, ACTION_LIBRARY } from "./lib/dqi-action-library";
import {
  generatePlan,
  enrichActions,
  generateNotifications,
  computeStats,
  saveState,
  loadState,
  clearState,
} from "./lib/dqi-engine";

import NavigationBar from "./components/NavigationBar";
import SetupScreen from "./components/SetupScreen";
import AssessmentScreen from "./components/AssessmentScreen";
import DashboardScreen from "./components/DashboardScreen";
import ActionPlanScreen from "./components/ActionPlanScreen";

const DEFAULT_PROJECT = {
  country: "",
  district: "",
  grant: "",
  facilities: 30,
  meStaff: 1,
  transport: "limited",
  startDate: new Date().toISOString().split("T")[0],
};

export default function App() {
  const [view, setView] = useState("loading");
  const [project, setProject] = useState(DEFAULT_PROJECT);
  const [assessment, setAssessment] = useState({});
  const [plan, setPlan] = useState([]);
  const [notifOpen, setNotifOpen] = useState(false);

  // Load persisted state on mount
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      if (saved.project) setProject(saved.project);
      if (saved.assessment) setAssessment(saved.assessment);
      if (saved.plan?.length) {
        setPlan(saved.plan);
        setView("dash");
      } else if (saved.assessment && Object.keys(saved.assessment).length >= 6) {
        setView("assess");
      } else {
        setView("setup");
      }
    } else {
      setView("setup");
    }
  }, []);

  // Persist on changes
  const persist = useCallback((p, a, pl) => {
    saveState(p, a, pl);
  }, []);

  // Derived data
  const enriched = useMemo(() => enrichActions(plan), [plan]);
  const notifs = useMemo(() => generateNotifications(plan), [plan]);
  const stats = useMemo(() => computeStats(plan), [plan]);

  // Action status updates
  const updateStatus = useCallback((id, status) => {
    setPlan(prev => {
      const updated = prev.map(a =>
        a.id === id
          ? { ...a, status, completedDate: status === "completed" ? new Date().toISOString() : null }
          : a
      );
      persist(project, assessment, updated);
      return updated;
    });
  }, [project, assessment, persist]);

  // Generate plan from assessment
  const handleGenerate = useCallback(() => {
    const newPlan = generatePlan(assessment, project, DEPENDENCY_LEVELS, ACTION_LIBRARY);
    setPlan(newPlan);
    persist(project, assessment, newPlan);
    setView("dash");
  }, [assessment, project, persist]);

  // Reset everything
  const handleReset = useCallback(() => {
    clearState();
    setProject(DEFAULT_PROJECT);
    setAssessment({});
    setPlan([]);
    setView("setup");
  }, []);

  // Loading screen
  if (view === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-50">
        <RefreshCw className="w-5 h-5 animate-spin text-stone-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <NavigationBar
        view={view}
        setView={setView}
        plan={plan}
        notifs={notifs}
        notifOpen={notifOpen}
        setNotifOpen={setNotifOpen}
        onReset={handleReset}
      />

      {view === "setup" && (
        <SetupScreen
          project={project}
          setProject={setProject}
          onContinue={() => {
            persist(project, assessment, plan);
            setView("assess");
          }}
        />
      )}

      {view === "assess" && (
        <AssessmentScreen
          assessment={assessment}
          setAssessment={setAssessment}
          onBack={() => setView("setup")}
          onGenerate={handleGenerate}
        />
      )}

      {view === "dash" && (
        <DashboardScreen
          project={project}
          assessment={assessment}
          enriched={enriched}
          stats={stats}
          updateStatus={updateStatus}
          setView={setView}
        />
      )}

      {(view === "actions" || view === "plan") && (
        <ActionPlanScreen
          project={project}
          assessment={assessment}
          enriched={enriched}
          updateStatus={updateStatus}
        />
      )}
    </div>
  );
}
