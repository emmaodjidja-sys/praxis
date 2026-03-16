// ============================================================================
// PRAXIS Data Quality Improvement Planner — Engine
// ============================================================================
// Handles: plan generation from assessment, timeline sequencing, resource
// constraints, notification generation, progress analytics
// ============================================================================

/**
 * DEPENDENCY CHAIN SEQUENCING
 *
 * The core logic: actions at lower dependency levels must come before higher
 * levels. Within each level, critical actions come before high-priority,
 * which come before medium. Red-rated levels get the full action library.
 * Amber levels get critical and high only. Green levels are skipped entirely.
 *
 * The time gap between levels depends on the rating and the level's position
 * in the chain. Lower levels (tools, completeness) get less buffer because
 * they're foundational and must be resolved fast. Higher levels get more
 * buffer because they depend on lower-level improvements taking effect.
 */

// Week gaps between dependency levels based on the rating of the completed level
const LEVEL_GAP_WEEKS = {
  tools:        { red: 5, amber: 3 },
  completeness: { red: 8, amber: 4 },
  timeliness:   { red: 6, amber: 3 },
  accuracy:     { red: 10, amber: 5 },
  dataUse:      { red: 8, amber: 4 },
  governance:   { red: 8, amber: 4 },
};

/**
 * Resource constraint adjustments
 * When transport or staffing is limited, certain actions take longer
 * or need to be scheduled differently
 */
const RESOURCE_MULTIPLIERS = {
  transport: {
    adequate: 1.0,
    limited:  1.5,
    minimal:  2.0,
  },
  staffing: {
    low:    1.0,
    medium: 1.3,
    high:   1.8,
  }
};

function addWeeks(dateStr, weeks) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + Math.ceil(weeks) * 7);
  return d;
}

function getStaffingPressure(facilities, meStaff) {
  const ratio = facilities / Math.max(meStaff, 1);
  if (ratio <= 20) return "low";
  if (ratio <= 40) return "medium";
  return "high";
}

/**
 * Generate a complete, sequenced action plan from an assessment
 */
export function generatePlan(assessment, context, levels, actionLib) {
  const { startDate, facilities, meStaff, transport } = context;
  const staffingPressure = getStaffingPressure(facilities || 30, meStaff || 1);
  const actions = [];
  let cumulativeWeekOffset = 0;

  for (const level of levels) {
    const rating = assessment[level.id];

    if (rating === "green" || !rating) continue;

    const levelActions = actionLib[level.id] || [];

    const filtered = rating === "red"
      ? levelActions
      : levelActions.filter(a => a.priority === "critical" || a.priority === "high");

    filtered.forEach((template, index) => {
      let adjustedWeeks = template.weeks;
      if (template.resources === "transport") {
        adjustedWeeks *= RESOURCE_MULTIPLIERS.transport[transport] || 1;
      }
      if (template.role === "district_me") {
        adjustedWeeks *= RESOURCE_MULTIPLIERS.staffing[staffingPressure] || 1;
      }
      adjustedWeeks = Math.ceil(adjustedWeeks);

      const actionStart = addWeeks(startDate, cumulativeWeekOffset + template.offset);
      const actionDeadline = addWeeks(actionStart.toISOString(), adjustedWeeks);

      actions.push({
        id: `${level.id}-${index}`,
        levelId: level.id,
        levelName: level.name,
        levelOrder: level.order,
        levelColor: level.color,
        title: template.title,
        role: template.role,
        priority: template.priority,
        frequency: template.freq,
        protocol: template.protocol,
        resources: template.resources,
        outputDoc: template.outputDoc,
        verification: template.verification,
        baseWeeks: template.weeks,
        adjustedWeeks: adjustedWeeks,
        startDate: actionStart.toISOString(),
        deadline: actionDeadline.toISOString(),
        status: "not_started",
        completedDate: null,
        notes: "",
      });
    });

    const maxOffset = filtered.length > 0
      ? Math.max(...filtered.map(a => a.offset + a.weeks))
      : 0;
    const gapWeeks = LEVEL_GAP_WEEKS[level.id]?.[rating] || 4;
    cumulativeWeekOffset += maxOffset + gapWeeks;
  }

  return actions;
}


/**
 * Compute action status accounting for overdue
 */
export function enrichActions(actions) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return actions.map(a => {
    if (a.status === "completed") return { ...a, displayStatus: "completed" };
    const deadline = new Date(a.deadline);
    deadline.setHours(0, 0, 0, 0);
    if (deadline < now) return { ...a, displayStatus: "overdue" };
    return { ...a, displayStatus: a.status };
  });
}


/**
 * Generate notifications for upcoming and overdue actions
 */
export function generateNotifications(actions) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const notifs = [];

  actions.forEach(action => {
    if (action.status === "completed") return;
    const deadline = new Date(action.deadline);
    deadline.setHours(0, 0, 0, 0);
    const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) {
      notifs.push({
        ...action,
        type: "overdue",
        daysLeft,
        urgency: 3,
        message: `${Math.abs(daysLeft)} day${Math.abs(daysLeft) !== 1 ? "s" : ""} overdue`,
      });
    } else if (daysLeft <= 3) {
      notifs.push({
        ...action,
        type: "urgent",
        daysLeft,
        urgency: 2,
        message: daysLeft === 0 ? "Due today" : `Due in ${daysLeft} day${daysLeft !== 1 ? "s" : ""}`,
      });
    } else if (daysLeft <= 7) {
      notifs.push({
        ...action,
        type: "upcoming",
        daysLeft,
        urgency: 1,
        message: `Due in ${daysLeft} days`,
      });
    }
  });

  return notifs.sort((a, b) => b.urgency - a.urgency || a.daysLeft - b.daysLeft);
}


/**
 * Compute analytics for the dashboard
 */
export function computeStats(actions) {
  const enriched = enrichActions(actions);
  const total = actions.length;
  const completed = actions.filter(a => a.status === "completed").length;
  const inProgress = actions.filter(a => a.status === "in_progress").length;
  const overdue = enriched.filter(a => a.displayStatus === "overdue").length;
  const notStarted = total - completed - inProgress - overdue;
  const progressPct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const byLevel = {};
  enriched.forEach(a => {
    if (!byLevel[a.levelId]) {
      byLevel[a.levelId] = { id: a.levelId, name: a.levelName, color: a.levelColor, order: a.levelOrder, total: 0, completed: 0, overdue: 0 };
    }
    byLevel[a.levelId].total++;
    if (a.status === "completed") byLevel[a.levelId].completed++;
    if (a.displayStatus === "overdue") byLevel[a.levelId].overdue++;
  });
  const levelProgress = Object.values(byLevel).sort((a, b) => a.order - b.order);

  const starts = actions.map(a => new Date(a.startDate));
  const deadlines = actions.map(a => new Date(a.deadline));
  const earliest = starts.length > 0 ? new Date(Math.min(...starts)) : null;
  const latest = deadlines.length > 0 ? new Date(Math.max(...deadlines)) : null;
  const totalWeeks = earliest && latest ? Math.ceil((latest - earliest) / (7 * 24 * 60 * 60 * 1000)) : 0;

  const byRole = {};
  actions.forEach(a => {
    if (!byRole[a.role]) byRole[a.role] = { total: 0, completed: 0 };
    byRole[a.role].total++;
    if (a.status === "completed") byRole[a.role].completed++;
  });

  return {
    total, completed, inProgress, overdue, notStarted, progressPct,
    levelProgress, byRole, totalWeeks,
    earliestStart: earliest?.toISOString(),
    latestDeadline: latest?.toISOString(),
  };
}


/**
 * Get the next most important actions (for dashboard "what to do now")
 */
export function getNextActions(actions, limit = 5) {
  const enriched = enrichActions(actions);
  return enriched
    .filter(a => a.status !== "completed")
    .sort((a, b) => {
      const aOv = a.displayStatus === "overdue" ? 0 : 1;
      const bOv = b.displayStatus === "overdue" ? 0 : 1;
      if (aOv !== bOv) return aOv - bOv;
      if (a.levelOrder !== b.levelOrder) return a.levelOrder - b.levelOrder;
      const priOrder = { critical: 0, high: 1, medium: 2 };
      return (priOrder[a.priority] || 2) - (priOrder[b.priority] || 2);
    })
    .slice(0, limit);
}


/**
 * Format helpers
 */
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function formatDateFull(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function daysUntil(dateStr) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}


/**
 * localStorage persistence
 */
const STORAGE_KEY = "praxis-dqi-planner";

export function saveState(project, assessment, plan) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      project, assessment, plan, savedAt: new Date().toISOString()
    }));
    return true;
  } catch (e) {
    console.error("Save failed:", e);
    return false;
  }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
    return null;
  } catch {
    return null;
  }
}

export function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
