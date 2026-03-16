// ============================================================================
// PRAXIS Data Quality Improvement Planner — Action Library
// ============================================================================
// Each action has:
//   - title: what the action is
//   - role: who does it (district_me | facility_ic | facility_clerk | national_me | regional_me)
//   - priority: critical | high | medium
//   - weeks: duration in weeks
//   - offset: weeks after level start
//   - freq: once | daily | weekly | monthly | quarterly | annually
//   - protocol: step-by-step instructions a real person can follow
//   - resources: what's needed (transport, budget, connectivity, none)
//   - verification: how to confirm the action was done properly
//   - outputDoc: what document or artefact the action produces
// ============================================================================

export const ROLES = {
  district_me:    { label: "District M&E Officer",   short: "District M&E",  color: "#0e7490" },
  regional_me:    { label: "Regional M&E Officer",    short: "Regional M&E",  color: "#1d4ed8" },
  facility_ic:    { label: "Facility In-Charge",      short: "Facility IC",   color: "#7c3aed" },
  facility_clerk: { label: "Facility Data Clerk",     short: "Data Clerk",    color: "#059669" },
  national_me:    { label: "National M&E Unit",       short: "National M&E",  color: "#be123c" },
};

export const DEPENDENCY_LEVELS = [
  {
    id: "tools",
    name: "Tools & Infrastructure",
    order: 1,
    color: "#6366f1",
    description: "Registers, reporting forms, DHIS2 access, connectivity, devices",
    rationale: "If facilities don't have the physical and digital tools to record and transmit data, nothing else in the chain can function. This is always the first thing to fix. It is often the cheapest.",
    question: "Do all facilities have the data collection tools and system access needed to report?",
    subQuestions: [
      "Are standardised registers and tally sheets physically available at all facilities?",
      "Are reporting form versions current, consistent, and in the correct language?",
      "Do all reporting points have active DHIS2 (or national HMIS) login credentials?",
      "Is internet connectivity sufficient for electronic submission at the reporting level?",
      "Are functional devices (computer, tablet, phone) available for data entry?",
      "Is electrical power reliable enough to support electronic reporting?"
    ],
    greenCriteria: "All facilities have current registers, functioning DHIS2 access, and sufficient connectivity to submit electronically or a documented paper-to-district workflow.",
    amberCriteria: "Most facilities have tools and access, but 10-30% have gaps in registers, credentials, or connectivity that are addressable within 3 months.",
    redCriteria: "More than 30% of facilities lack basic data collection tools, or DHIS2 is not deployed/accessible at the reporting level, or critical infrastructure gaps (power, connectivity) affect the majority of facilities."
  },
  {
    id: "completeness",
    name: "Reporting Completeness",
    order: 2,
    color: "#0891b2",
    description: "Facility reporting rates, geographic coverage, reporting unit registration",
    rationale: "A system where 60% of facilities report has a coverage bias that no amount of accuracy improvement can fix. The invisible 40% is almost certainly different from the reporting 60%. Completeness is also the easiest dimension to monitor because it is a binary: did the facility submit or not?",
    question: "What percentage of expected facility reports are actually submitted each period?",
    subQuestions: [
      "Is facility reporting completeness ≥80% across all disease areas?",
      "Is completeness uniform across regions and facility types, or concentrated in urban/accessible areas?",
      "Are all expected reporting units registered in DHIS2 (no missing facilities)?",
      "Are population denominators based on recent census projections?",
      "Is community-level data captured and integrated into facility reports?"
    ],
    greenCriteria: "Reporting completeness ≥80% across all disease areas, with no significant geographic gaps (variation between provinces <20 percentage points).",
    amberCriteria: "Completeness 60-79% nationally, or ≥80% nationally but with significant subnational gaps.",
    redCriteria: "Completeness <60%, or critical geographic gaps that would bias any aggregate estimate."
  },
  {
    id: "timeliness",
    name: "Reporting Timeliness",
    order: 3,
    color: "#0d9488",
    description: "On-time submission rates, reporting calendar adherence, data flow speed",
    rationale: "Late reports create operational problems: delayed outbreak response, late stockout detection, stale data for programme decisions. Late reporting also correlates with lower accuracy because data is reconstructed from memory rather than recorded contemporaneously.",
    question: "Are facility reports submitted within the national reporting deadline?",
    subQuestions: [
      "Is ≥80% of facility reports submitted by the national deadline?",
      "Is there a clear, written reporting calendar communicated to all facilities?",
      "Do facilities compile data progressively (weekly tallies) or scramble at month-end?",
      "Are there systematic bottlenecks at specific levels (facility→district→national)?",
      "How long does it take for submitted data to be available in the national DHIS2 instance?"
    ],
    greenCriteria: "≥80% of reports submitted within the national deadline, with progressive data compilation at facility level.",
    amberCriteria: "60-79% timely, or improving trend but not yet at target.",
    redCriteria: "<60% timely, with no improvement trend, or most facilities compile data retrospectively at month-end."
  },
  {
    id: "accuracy",
    name: "Data Accuracy & Verification",
    order: 4,
    color: "#d97706",
    description: "Verification ratios, internal consistency, outlier detection, supervision-based verification",
    rationale: "Accuracy requires verification, which requires supervision visits, which require transport and budget. It only makes sense to invest heavily in accuracy once completeness and timeliness are reasonable, because verifying data from 60% of facilities that report late is a poor use of scarce supervision time.",
    question: "Does the data reported in DHIS2 match what is recorded in facility source documents?",
    subQuestions: [
      "Has a Data Quality Review (DQR) been conducted in the past 2 years?",
      "Is the most recent verification ratio within ±10% for key indicators?",
      "Are DHIS2 validation rules configured and actively monitored?",
      "Do logical consistency checks pass (e.g., tested ≥ positive ≥ treated)?",
      "Are there known patterns of over- or under-reporting for specific indicators?",
      "Is there a system for detecting and correcting outliers before data is used?"
    ],
    greenCriteria: "Most recent DQR verification ratio within ±10% for key indicators. Validation rules active. No significant OIG findings on data accuracy.",
    amberCriteria: "Verification ratio within ±10-30%, or no recent DQR but routine verification occurring at district level.",
    redCriteria: "Verification ratio >30% discrepancy, or no DQR ever conducted, or OIG findings documenting material accuracy problems."
  },
  {
    id: "dataUse",
    name: "Data Use for Decisions",
    order: 5,
    color: "#7c3aed",
    description: "Data review meetings, feedback loops, evidence-based planning, data demand",
    rationale: "Using data for decision-making only works when people trust the data, which requires reasonable accuracy. Pushing data use before data quality is adequate can be counterproductive because it erodes trust in the system. But once quality is adequate, data use creates a reinforcing loop: better decisions generate demand for better data.",
    question: "Is data actively used for decision-making at district and facility level?",
    subQuestions: [
      "Are regular data review meetings held at district level with documented action points?",
      "Do facilities receive structured feedback on their data and performance?",
      "Is programme data used in resource allocation and planning decisions?",
      "Do health workers and managers trust the data enough to base decisions on it?",
      "Are data-driven targets set and tracked at facility and district level?"
    ],
    greenCriteria: "Regular data review meetings at district level with documented decisions. Facilities receive feedback. Data visibly influences resource allocation.",
    amberCriteria: "Some data review occurring but irregular, or review meetings happen but don't produce documented decisions or changes in practice.",
    redCriteria: "No structured data review at district or facility level. Data is collected and transmitted but not analysed or used locally."
  },
  {
    id: "governance",
    name: "System Integration & Governance",
    order: 6,
    color: "#be123c",
    description: "Data quality policy, TWGs, accountability, parallel system harmonisation, sustainability",
    rationale: "This is long-term, multi-cycle work. Governance structures sustain the improvements made at lower levels. Without accountability and institutional structures, data quality improvements erode when project funding or external support ends.",
    question: "Are institutional structures in place to sustain data quality improvements?",
    subQuestions: [
      "Does a national or district data quality policy exist and get implemented?",
      "Is there a functioning HMIS Technical Working Group or equivalent coordination body?",
      "Are there accountability mechanisms for data quality performance?",
      "Are parallel disease-specific reporting systems being harmonised or integrated?",
      "Is data quality included in health worker job descriptions and performance reviews?",
      "Is there a costed data quality improvement plan with government funding commitment?"
    ],
    greenCriteria: "Policy exists and is implemented. Governance body functional. Data quality in performance management. Integration plan for parallel systems.",
    amberCriteria: "Policy exists but implementation is partial. TWG meets irregularly. Some accountability but not systematic.",
    redCriteria: "No policy or governance structure. No accountability for data quality. Multiple fragmented parallel systems with no integration plan."
  }
];

export const ACTION_LIBRARY = {
  // ════════════════════════════════════════════════════════════════════════
  // LEVEL 1: TOOLS & INFRASTRUCTURE
  // ════════════════════════════════════════════════════════════════════════
  tools: [
    {
      title: "Conduct register and form inventory at all facilities",
      role: "district_me",
      priority: "critical",
      weeks: 2,
      offset: 0,
      freq: "once",
      resources: "transport",
      outputDoc: "Facility tool inventory spreadsheet",
      verification: "Completed inventory list covering 100% of facilities with status per tool type",
      protocol: `Prepare a checklist of all required data collection tools by service area: OPD register, ANC register, delivery register, immunisation tally sheet, malaria register, HIV testing register, TB treatment card, HMIS monthly reporting form, stock cards. Visit or phone each facility. For each tool, document: (a) available and current version, (b) available but outdated version, (c) not available, (d) available but insufficient quantity (running out within 2 months). Record the facility name, type, and catchment population. Compile into a single spreadsheet with one row per facility. Sort by gap severity. This inventory becomes the procurement request and the baseline for tracking tool availability going forward. Target: complete within 2 weeks. If transport is limited, phone calls can substitute for visits at small facilities, but verify by phone that the in-charge is checking physically, not guessing.`
    },
    {
      title: "Procure and distribute missing data collection tools",
      role: "district_me",
      priority: "critical",
      weeks: 4,
      offset: 2,
      freq: "once",
      resources: "budget",
      outputDoc: "Distribution log with facility signatures",
      verification: "Signed distribution log; follow-up check at 10% of facilities confirming receipt",
      protocol: `From the inventory, compile a consolidated procurement list by tool type and quantity. Submit requisition to the regional/national level. If central procurement is slow (common), explore: (a) local printing of tally sheets and reporting forms using district budget, (b) requesting partner support (WHO, UNICEF, implementing NGO), (c) photocopying from a master copy as interim measure. When tools arrive, distribute using a signed log: facility name, tools received, quantity, date, recipient signature. Prioritise high-volume facilities and those with the most critical gaps. During distribution, provide a 15-minute orientation on correct use of any new or updated tools. For updated register versions, walk through the changes and common errors. Keep a copy of the distribution log as evidence for the grant performance framework.`
    },
    {
      title: "Verify and restore DHIS2 access at all reporting points",
      role: "district_me",
      priority: "critical",
      weeks: 2,
      offset: 1,
      freq: "once",
      resources: "connectivity",
      outputDoc: "DHIS2 access status register",
      verification: "Successful test login documented for every reporting facility",
      protocol: `Create a register with columns: facility name, username, password status (active/expired/unknown), last successful login date, device available (yes/no/shared), connectivity status. For each facility, either test the login yourself from the district office (if credentials are centrally managed) or phone the facility and ask them to log in while you are on the call. Document the result. For expired or locked accounts, submit a batch password reset request to the HMIS unit. For facilities that have never had accounts, submit new user creation requests. For facilities where the trained user has transferred, identify the new user and arrange credential handover. Set a target: 100% of reporting facilities with a confirmed working login within 2 weeks. This is non-negotiable because no access means no electronic reporting.`
    },
    {
      title: "Assess and resolve connectivity barriers at each facility",
      role: "district_me",
      priority: "high",
      weeks: 4,
      offset: 2,
      freq: "once",
      resources: "transport",
      outputDoc: "Connectivity assessment and solution plan",
      verification: "Each facility classified with a documented reporting pathway (electronic or paper-to-district)",
      protocol: `For every facility that cannot currently submit data electronically, classify the barrier: (a) no internet at all, (b) intermittent internet, (c) internet available but no device, (d) device available but no power, (e) all infrastructure present but user cannot operate. For each barrier type, identify the lowest-cost solution. No internet: establish a paper-to-district workflow where the facility submits paper forms to the district office by the deadline, and district staff enter into DHIS2. This is not ideal but is better than non-reporting. Intermittent internet: data entry can be done offline using DHIS2 Android app, which syncs when connectivity is available. No device: assess whether a shared device (rotated between nearby facilities) is feasible, or whether the district can provide a basic smartphone. No power: solar charger for phone-based reporting. Cannot operate: schedule targeted training (see Level 1 training action). Document the solution for each facility and set a follow-up date to confirm it is working.`
    },
    {
      title: "Conduct basic DHIS2 data entry training for facility staff",
      role: "district_me",
      priority: "high",
      weeks: 6,
      offset: 3,
      freq: "once",
      resources: "transport",
      outputDoc: "Training attendance register; post-training competency check",
      verification: "Each trained user demonstrates a successful test data entry (can be on training instance)",
      protocol: `Identify facilities where the person responsible for data entry has not received DHIS2 training or where the trained person has been replaced. Group nearby facilities (3-5 per session) for efficiency. Training content (half day): (1) logging in and navigating to the correct data entry form, (2) entering monthly data from the paper summary, (3) running the validation check before submission, (4) what to do when validation flags an error, (5) confirming successful submission. Use a training DHIS2 instance if available, or the live instance with a designated training period that will be deleted. Each participant must complete a test entry independently before the session ends. Provide a laminated one-page quick reference card with screenshots of the key steps. Schedule a follow-up phone call 2 weeks later to check whether they have successfully submitted the next month's report.`
    },
  ],

  // ════════════════════════════════════════════════════════════════════════
  // LEVEL 2: REPORTING COMPLETENESS
  // ════════════════════════════════════════════════════════════════════════
  completeness: [
    {
      title: "Configure DHIS2 completeness monitoring dashboard",
      role: "district_me",
      priority: "critical",
      weeks: 1,
      offset: 0,
      freq: "once",
      resources: "connectivity",
      outputDoc: "Saved DHIS2 dashboard (screenshot for documentation)",
      verification: "Dashboard shows completeness by facility for the current and previous 3 months, with non-reporters immediately visible",
      protocol: `In DHIS2, create a dashboard called "[District Name] Reporting Completeness". Add the following items: (1) A pivot table showing reporting completeness by facility for each dataset (HMIS monthly, disease-specific if separate) for the current month and previous 3 months. Configure it so facilities with 0% completeness are highlighted in red. (2) A chart showing the district's overall completeness trend over the past 12 months. (3) A map showing completeness by facility if geographic coordinates are configured. Save the dashboard and set it as your default view. This dashboard is now your primary monitoring tool. You will check it every Monday morning. If you cannot create the dashboard yourself, request support from the regional HMIS focal point or the DHIS2 system administrator. Do not skip this step — without a monitoring view, completeness tracking is guesswork.`
    },
    {
      title: "Establish the Monday completeness check routine",
      role: "district_me",
      priority: "critical",
      weeks: 1,
      offset: 1,
      freq: "weekly",
      resources: "connectivity",
      outputDoc: "Weekly follow-up log (simple notebook or spreadsheet)",
      verification: "Log shows weekly entries with facility names contacted and reasons documented",
      protocol: `Every Monday morning, before any other task, open your DHIS2 completeness dashboard. For each dataset, identify facilities that have not submitted for the most recent reporting period. Write down their names. Phone the facility in-charge directly — not the data clerk, the in-charge, because reporting is ultimately their responsibility. Ask three questions: (1) Are you aware your report has not been submitted? (2) What is preventing submission? (3) When will it be submitted? Document the answer in your follow-up log with the date. If the reason is a tool or access issue, escalate to the relevant Level 1 action. If the reason is workload or forgetfulness, agree a specific date for submission and follow up on that date. This single routine, done consistently every week, is the highest-return data quality intervention available to a district M&E officer. It typically increases completeness by 10-20 percentage points within 2-3 months through accountability alone.`
    },
    {
      title: "Verify and update the facility master list in DHIS2",
      role: "district_me",
      priority: "critical",
      weeks: 3,
      offset: 1,
      freq: "once",
      resources: "none",
      outputDoc: "Reconciled facility list with DHIS2 org unit list",
      verification: "DHIS2 org unit count matches official MoH facility register for the district",
      protocol: `Obtain the official Ministry of Health facility register for your district. Compare it with the list of organisational units in DHIS2 at the facility level. Identify: (a) facilities in the MoH register but missing from DHIS2 (these are invisible — their non-reporting isn't even counted), (b) facilities in DHIS2 that no longer exist or have been merged, (c) facilities with incorrect names, types, or geographic assignment. For missing facilities, submit a request to the DHIS2 administrator to add them as organisational units with the correct hierarchy. For defunct facilities, request deactivation. For naming errors, request correction. This reconciliation is essential because completeness is calculated as (reports received / reports expected). If the denominator is wrong, completeness figures are misleading. A district that appears to have 85% completeness might actually have 70% if 15% of facilities are missing from DHIS2 entirely.`
    },
    {
      title: "Identify and address root causes of chronic non-reporting",
      role: "district_me",
      priority: "high",
      weeks: 6,
      offset: 3,
      freq: "once",
      resources: "transport",
      outputDoc: "Non-reporting root cause analysis and action plan",
      verification: "Each chronically non-reporting facility has a documented root cause and assigned intervention",
      protocol: `After 4 weeks of running the Monday completeness check, you will have data on which facilities consistently fail to report. Classify each chronic non-reporter into one of these categories: (a) No tools or forms — route to Level 1 tool distribution. (b) No DHIS2 access or connectivity — route to Level 1 access restoration. (c) No trained staff — route to Level 1 training. (d) Staff present and trained but overwhelmed with clinical workload — explore whether reporting can be shifted to a dedicated time (e.g., last Friday of the month) or delegated to a community health worker. (e) No accountability — the facility knows it should report but faces no consequences for not reporting. This requires escalation to the District Health Officer for management action. (f) Facility is non-functional or has very low patient volume — verify with a physical visit whether the facility is actually operational. For each category, assign a specific intervention and a responsible person. Review progress monthly.`
    },
    {
      title: "Set facility-specific completeness targets with in-charges",
      role: "district_me",
      priority: "high",
      weeks: 4,
      offset: 4,
      freq: "once",
      resources: "transport",
      outputDoc: "Signed facility completeness commitment (simple one-page form)",
      verification: "Signed commitment forms collected from ≥80% of facilities",
      protocol: `During the next round of facility visits, sit with each facility in-charge and review their reporting history from DHIS2. Show them which months they submitted and which they missed. Agree on a completeness target: 100% submission (12 out of 12 months) should be the standard, but for facilities currently at 50% or below, agree on a stepped target (e.g., 80% for the next 6 months, then 100%). Write the target on a simple one-page form that both you and the in-charge sign. Leave a copy at the facility, keep a copy. This is not a punitive exercise. Frame it as: we need your data to plan resources for your catchment area. When your data is missing, your community is invisible in the planning process. Follow up on the commitment during subsequent supervision visits.`
    },
  ],

  // ════════════════════════════════════════════════════════════════════════
  // LEVEL 3: REPORTING TIMELINESS
  // ════════════════════════════════════════════════════════════════════════
  timeliness: [
    {
      title: "Create and distribute a reporting calendar to all facilities",
      role: "district_me",
      priority: "critical",
      weeks: 1,
      offset: 0,
      freq: "once",
      resources: "none",
      outputDoc: "One-page printed reporting calendar",
      verification: "Calendar physically posted at ≥80% of facilities (verify during next visit)",
      protocol: `Create a one-page reporting calendar for the year. Include: (1) the monthly HMIS report submission deadline (e.g., "by the 5th of the following month"), (2) recommended weekly tally days (e.g., "every Friday: tally the week's register entries onto the summary sheet"), (3) quarterly reporting deadlines if applicable, (4) dates of planned data review meetings, (5) phone number to call if there are problems with submission. Print enough copies for every facility plus the district office. Use colour and large font. Laminate if possible. Distribute to every facility with instructions to post it next to the data entry point (the desk where the register sits). During subsequent visits, check that the calendar is posted and visible. A surprising number of reporting timeliness problems come down to the fact that facility staff genuinely do not know the deadline.`
    },
    {
      title: "Train facility staff on the weekly tally routine",
      role: "district_me",
      priority: "high",
      weeks: 6,
      offset: 1,
      freq: "once",
      resources: "transport",
      outputDoc: "Training attendance record; sample completed weekly tally sheet",
      verification: "During next supervision visit, check whether weekly tally sheets are being used (physical evidence in the facility)",
      protocol: `The single most effective intervention for timeliness and accuracy is moving facilities from month-end batch compilation to weekly progressive tallying. Train the data clerk or in-charge on this routine: every Friday afternoon (or whatever day works for the facility's schedule), take each register used that week and tally the entries onto the monthly summary sheet. This means the summary sheet is progressively filled in throughout the month. At month end, the report is already 75% compiled — the data clerk only needs to add the final week and check the totals. This eliminates the month-end scramble where someone tries to count 4 weeks of register entries in one sitting, which is the primary source of both late reporting and transcription errors. During training, work through one week's registers together to demonstrate the process. Leave a simple job aid: "Friday Tally Checklist" listing each register and the corresponding row on the summary sheet.`
    },
    {
      title: "Set up deadline reminder system via WhatsApp or SMS",
      role: "district_me",
      priority: "medium",
      weeks: 1,
      offset: 2,
      freq: "monthly",
      resources: "none",
      outputDoc: "WhatsApp group or SMS distribution list",
      verification: "Reminder sent 3 days before each deadline (check sent messages)",
      protocol: `Create a WhatsApp group with all facility in-charges in the district (or use an existing one). If WhatsApp is not feasible, compile an SMS distribution list. Three days before the monthly reporting deadline, send a standardised reminder: "Reminder: the [month] HMIS report is due by [date]. Please submit via DHIS2 or deliver the paper form to the district office by this date. If you have any problems with submission, contact [name] at [number]." On the deadline day, send a second message: "Today is the deadline for [month] reports. The following facilities have not yet submitted: [list]. Please submit today." The public naming of non-reporters in the group creates peer accountability. Use this judiciously — the tone should be supportive, not punitive. Acknowledge facilities that submit on time: "Thank you to [list] for timely submission this month."`
    },
    {
      title: "Monitor and analyse timeliness patterns monthly",
      role: "district_me",
      priority: "high",
      weeks: 1,
      offset: 2,
      freq: "monthly",
      resources: "connectivity",
      outputDoc: "Monthly timeliness tracking sheet",
      verification: "Tracking sheet updated monthly with late reporters identified and contacted",
      protocol: `Within 48 hours of the reporting deadline, check DHIS2 for submission dates. Record which facilities submitted on time, which submitted late (and how many days late), and which have not submitted at all. After 3 months of tracking, analyse the pattern. Are the same facilities always late? This indicates a systemic issue at those facilities (staffing, workload, motivation) rather than a reminder problem. Are most facilities late by the same number of days? This might indicate the deadline itself is unrealistic given the data flow. Are facilities in certain geographic areas consistently late? This might indicate a connectivity or transport barrier. Share the timeliness analysis at the monthly data review meeting. Discuss what changes are needed. Adjust the strategy based on what the data tells you rather than applying the same interventions to every facility.`
    },
  ],

  // ════════════════════════════════════════════════════════════════════════
  // LEVEL 4: DATA ACCURACY & VERIFICATION
  // ════════════════════════════════════════════════════════════════════════
  accuracy: [
    {
      title: "Configure DHIS2 validation rules for key programme indicators",
      role: "national_me",
      priority: "critical",
      weeks: 3,
      offset: 0,
      freq: "once",
      resources: "connectivity",
      outputDoc: "Validation rule configuration documentation",
      verification: "Validation rules firing correctly on test data; district M&E officers trained to review violations",
      protocol: `Work with the DHIS2 system administrator to configure three types of validation rules. (1) Logical consistency rules: for HIV, "number tested ≥ number positive ≥ number started on ART". For malaria, "suspected cases ≥ tested ≥ confirmed ≥ treated". For immunisation, "DPT1 ≥ DPT3" and "Penta1 ≥ Measles1". For ANC, "ANC1 ≥ ANC4". These catch impossible values. (2) Outlier rules: flag any value more than 3 standard deviations from the facility's 12-month mean for that indicator. These catch transcription errors (e.g., entering 500 instead of 50). (3) Completeness rules: flag when expected data elements are left blank rather than entered as zero (zero means "measured and none found"; blank means "not reported", which is different). After configuration, train district M&E officers to run the validation violations report in DHIS2 and act on flagged values. Schedule this training within 2 weeks of rule deployment.`
    },
    {
      title: "Train facility staff on three pre-submission self-checks",
      role: "district_me",
      priority: "high",
      weeks: 6,
      offset: 2,
      freq: "once",
      resources: "transport",
      outputDoc: "Self-check job aid posted at facility; training attendance record",
      verification: "Job aid visible at ≥80% of facilities during next supervision visit",
      protocol: `At each facility, train the person who compiles the monthly report on three checks to perform before submitting. Check 1 — Register count: for the 2-3 highest-volume indicators (e.g., OPD visits, ANC first visits, children vaccinated), count the entries in the register for the month. Compare with the number on the report. If the difference is more than 10%, recount. Check 2 — Logical consistency: does the number tested exceed the number positive? Does ANC1 exceed ANC4? If not, find and correct the error. Check 3 — Month-on-month comparison: is any indicator more than 30% higher or lower than last month? If yes, this might be correct (seasonal variation, campaign, outbreak) or might be an error. Verify from the register. If correct, write a brief note explaining why (e.g., "malaria campaign in week 3"). Create a laminated job aid with these three checks and post it next to the data entry point.`
    },
    {
      title: "Establish monthly validation violation review at district level",
      role: "district_me",
      priority: "high",
      weeks: 1,
      offset: 3,
      freq: "monthly",
      resources: "connectivity",
      outputDoc: "Monthly validation review log",
      verification: "Log shows violations reviewed, facilities contacted, and corrections made each month",
      protocol: `Within one week of the reporting deadline (i.e., after most facilities have submitted), run the DHIS2 validation analysis for your district. Review all violations. For each violation: (1) identify the facility and the specific data element flagged, (2) assess whether it is likely a data entry error or a genuine value, (3) if likely an error, phone the facility and ask them to check the register and correct the value in DHIS2, (4) if they cannot access DHIS2, note the correct value and make the correction yourself (documenting the original and corrected values). Keep a log of all violations reviewed, the action taken, and the outcome. After 3 months, analyse the log: which facilities generate the most violations? Which types of errors are most common? Use this analysis to target training and supervision. Share summary findings at the monthly data review meeting.`
    },
    {
      title: "Conduct quarterly facility data verification visits",
      role: "district_me",
      priority: "critical",
      weeks: 2,
      offset: 4,
      freq: "quarterly",
      resources: "transport",
      outputDoc: "Verification visit report with verification ratios per indicator",
      verification: "Verification reports completed for ≥5 facilities per quarter with calculated ratios",
      protocol: `Select 5-8 facilities per quarter using these priority criteria: (1) facilities never previously visited for verification (highest priority), (2) high-volume facilities where errors have the largest impact on district aggregates, (3) facilities with repeated validation violations or outliers, (4) a random selection to maintain coverage over time. At each facility, select 3-5 key indicators (e.g., OPD visits, ANC1, DPT3, malaria cases confirmed, HIV tests). For each indicator, for the most recent complete quarter: pull the register, count the entries for each month, record the count, then compare with the value submitted in DHIS2. Calculate the verification ratio: (DHIS2 value / register count) × 100. A ratio of 90-110% is acceptable. Below 90% = under-reporting. Above 110% = over-reporting. Document each ratio. Discuss discrepancies with the facility staff immediately — this is a learning opportunity, not an audit. Help them understand where the error occurred (counting, transcription, entry) and how to prevent it. Leave a copy of the verification findings at the facility.`
    },
    {
      title: "Implement monthly facility-level mini data quality check",
      role: "facility_ic",
      priority: "high",
      weeks: 2,
      offset: 6,
      freq: "monthly",
      resources: "none",
      outputDoc: "Facility DQC register (simple logbook)",
      verification: "DQC register entries reviewed during quarterly supervision visits",
      protocol: `Each month, before the report is submitted, the facility in-charge performs a mini data quality check. This takes 30-60 minutes. Step 1: select 2 indicators (rotate indicators each month so all major indicators are covered over a year). Step 2: pull the register for those indicators. Step 3: count entries for the reporting month. Step 4: compare with the draft monthly report. Step 5: if the counts match (within 5%), initial the report as verified. Step 6: if there is a discrepancy, identify and correct the error before submission. Step 7: record the check in the facility DQC logbook: date, indicators checked, register count, report value, discrepancy (if any), action taken. This logbook is reviewed by the district M&E officer during quarterly verification visits. The in-charge should not check the same 2 indicators every month — rotate so that over 6 months, all key indicators have been checked at least once.`
    },
    {
      title: "Conduct annual comprehensive Data Quality Review",
      role: "regional_me",
      priority: "high",
      weeks: 4,
      offset: 8,
      freq: "annually",
      resources: "budget",
      outputDoc: "DQR report following WHO DQR framework",
      verification: "Published DQR report with district-level results and action plan",
      protocol: `Coordinate with the national HMIS unit and partners (WHO, Global Fund LFA) to conduct a formal Data Quality Review following the WHO DQR framework. The DQR has four components: (1) desk review of reporting completeness and timeliness using DHIS2 data, (2) district-level verification comparing DHIS2 data with district records, (3) facility-level assessment at a sample of facilities comparing source documents with reported data, (4) system assessment evaluating M&E capacity, data management practices, and supervision. The sample should include facilities from across the district, stratified by type and geography. For each sampled facility, verify 5-8 key indicators across the three disease areas. The DQR report provides the authoritative baseline (or progress measurement) for data accuracy. Share findings with the district health management team and develop a costed remediation plan. The DQR findings should feed directly back into the action plan generated by this tool.`
    },
  ],

  // ════════════════════════════════════════════════════════════════════════
  // LEVEL 5: DATA USE FOR DECISIONS
  // ════════════════════════════════════════════════════════════════════════
  dataUse: [
    {
      title: "Establish monthly district data review meeting",
      role: "district_me",
      priority: "critical",
      weeks: 2,
      offset: 0,
      freq: "monthly",
      resources: "none",
      outputDoc: "Meeting minutes with action points, responsible persons, and deadlines",
      verification: "Minutes documented monthly with evidence of follow-up on previous action points",
      protocol: `Institute a monthly data review meeting. Attendees: District Health Officer (or deputy), disease programme focal points (HIV, TB, malaria, EPI, RMNCAH), M&E officer, and on a rotating basis, 3-4 facility in-charges from priority facilities. Timing: 2 weeks after the reporting deadline (to allow data cleaning and validation). Duration: 90 minutes maximum. Agenda structure: (1) 10 minutes: data quality update (completeness, timeliness, validation violations this month), (2) 40 minutes: review of 3-5 key indicators by facility — identify facilities that are outliers (both high and low performers) and discuss why, (3) 20 minutes: review of action points from previous meeting — what was done, what was not, why, (4) 20 minutes: agree new action points with specific responsible persons and deadlines. Rules: no presentations longer than 5 minutes. Use DHIS2 dashboards projected on screen (or printed if no projector). The goal is decisions and action points, not information sharing. Circulate minutes within 48 hours.`
    },
    {
      title: "Create and distribute monthly facility feedback reports",
      role: "district_me",
      priority: "high",
      weeks: 3,
      offset: 2,
      freq: "monthly",
      resources: "connectivity",
      outputDoc: "One-page facility feedback report template",
      verification: "Reports distributed to ≥80% of facilities each month",
      protocol: `Design a one-page facility feedback report template. Content: facility name and month; 4-6 key indicators showing the facility's value, the district average, and the trend over the past 6 months (simple sparkline or arrow); a data quality score combining completeness and timeliness (e.g., green/amber/red); one or two specific observations (e.g., "your ANC4 coverage has dropped for 3 consecutive months — please review" or "immunisation coverage is above district average — well done"). Generate this report from DHIS2 data. If DHIS2 has the reporting capability, automate it. If not, create a simple spreadsheet template where you paste the data and it generates the reports. Distribute to each facility via WhatsApp (photo of the printed page), during supervision visits, or at the monthly data review meeting. The point is that facilities see their own data contextualised. Most facility staff never see their data after they submit it. This closes the feedback loop.`
    },
    {
      title: "Train facility teams on interpreting their own DHIS2 data",
      role: "district_me",
      priority: "medium",
      weeks: 8,
      offset: 4,
      freq: "once",
      resources: "transport",
      outputDoc: "Training attendance; facility data interpretation action plans",
      verification: "Facility staff can access their own dashboard and identify one trend from their data",
      protocol: `During facility visits, spend 30 minutes with the in-charge reviewing the facility's DHIS2 dashboard. Show them how to log in and navigate to their facility's data. Walk through one indicator together: what does this number mean? Is it going up or down? Why might that be? What does it suggest about services? Then ask them to look at a second indicator and interpret it themselves. The goal is not to teach epidemiology. The goal is to build the habit of looking at data and asking "what does this mean for my facility?" Leave them with one question to investigate before your next visit: "Next time I come, tell me why [specific indicator] changed between [month] and [month]." This creates a data use routine at the facility level. Track which facilities have received this training and schedule follow-ups. Over 6-8 months, cover all facilities.`
    },
    {
      title: "Integrate data review into every supervision visit protocol",
      role: "district_me",
      priority: "high",
      weeks: 2,
      offset: 4,
      freq: "quarterly",
      resources: "none",
      outputDoc: "Updated supervision checklist with data review section",
      verification: "Completed supervision checklists include data review section",
      protocol: `Add a mandatory data review section to the district supervision checklist. During every supervision visit, regardless of the primary purpose, the supervisor must: (1) ask the in-charge to show the most recent submitted DHIS2 report, (2) review 2 indicators together — are the trends consistent with what the in-charge observes clinically? (3) check whether the facility DQC logbook is being maintained (Level 4 action), (4) review any validation violations flagged for this facility in the past month, (5) document one data-related observation and one action point in the supervision report. This means that data quality is never a standalone activity — it is integrated into every supervisory interaction. Supervision without data review is incomplete. Update the supervision checklist to include these five items as a mandatory section that cannot be skipped.`
    },
  ],

  // ════════════════════════════════════════════════════════════════════════
  // LEVEL 6: SYSTEM INTEGRATION & GOVERNANCE
  // ════════════════════════════════════════════════════════════════════════
  governance: [
    {
      title: "Establish or reactivate district HMIS coordination body",
      role: "district_me",
      priority: "high",
      weeks: 4,
      offset: 0,
      freq: "once",
      resources: "none",
      outputDoc: "Terms of reference; membership list; meeting schedule",
      verification: "First meeting held with documented minutes and agreed terms of reference",
      protocol: `Convene or reactivate a district-level HMIS coordination body (Technical Working Group or equivalent). Membership: DHO or deputy (chair), district M&E officer (secretary), disease programme M&E focal points (HIV, TB, malaria, EPI), 2-3 facility in-charges representing different facility types, key partner representatives (WHO, implementing NGOs). Frequency: quarterly. Terms of reference: (1) review district data quality performance (completeness, timeliness, accuracy trends), (2) coordinate M&E activities across disease programmes to avoid duplication, (3) resolve data system issues (access, infrastructure, training needs), (4) oversee implementation of the data quality improvement plan, (5) prepare for and respond to DQR and OIG audit findings. Draft simple terms of reference (one page) and get DHO sign-off. Schedule the first meeting within 4 weeks. Keep minutes and track action points across meetings.`
    },
    {
      title: "Develop a costed 12-month data quality improvement plan",
      role: "district_me",
      priority: "high",
      weeks: 4,
      offset: 4,
      freq: "once",
      resources: "none",
      outputDoc: "12-month DQI plan with budget, targets, and responsibilities",
      verification: "Plan approved by DHO and shared with partners; budget items included in district health plan",
      protocol: `Based on the assessment results from this tool, write a 12-month district data quality improvement plan. Structure: (1) current status: summarise the dependency chain assessment ratings with evidence, (2) targets: set specific, measurable targets for each dependency level (e.g., completeness from 65% to 85% by month 6, quarterly verification visits covering 20 facilities by end of year), (3) activities: draw from the action plan generated by this tool, (4) budget: estimate costs for each activity (primarily transport, printing, training per diem — most data quality activities are low-cost), (5) responsibilities: assign each activity to a specific person with a deadline, (6) monitoring: how progress will be tracked (quarterly review at HMIS TWG). Get DHO sign-off. Share the plan with the CCM, Global Fund Country Team, and partners. Ensure budget items are reflected in the district annual health plan and the grant workplan. This plan becomes the accountability document for data quality improvement.`
    },
    {
      title: "Map and develop a harmonisation plan for parallel reporting systems",
      role: "national_me",
      priority: "medium",
      weeks: 8,
      offset: 4,
      freq: "once",
      resources: "none",
      outputDoc: "Reporting system map; harmonisation roadmap",
      verification: "Map completed showing all reporting flows; harmonisation priorities agreed with stakeholders",
      protocol: `At district level, map every data reporting flow: which forms go where, by which deadline, to which system, for which purpose. This typically reveals 5-10 parallel flows: HMIS monthly report to DHIS2, HIV cohort reports to the HIV programme database, TB notification to the TB programme, EPI reports to the immunisation programme, malaria reports to the malaria programme, LMIS reports for commodities, IDSR reports for surveillance. For each flow, document: the form, the data elements, the reporting frequency, the system, the responsible person, and the degree of overlap with the HMIS. Identify duplications: are the same data elements reported through multiple channels? Identify inconsistencies: are the same indicators defined differently in different systems? Develop a harmonisation roadmap with short-term actions (standardise definitions, reduce duplicate reporting) and long-term actions (integrate parallel systems into DHIS2). This is national-level work but needs district-level input on the reality of reporting burden.`
    },
    {
      title: "Integrate data quality into facility performance management",
      role: "district_me",
      priority: "medium",
      weeks: 8,
      offset: 8,
      freq: "once",
      resources: "none",
      outputDoc: "Updated facility performance assessment criteria; recognition mechanism",
      verification: "Data quality criteria included in next round of facility performance assessments",
      protocol: `Introduce data quality as a formal component of facility performance management. Three actions: (1) Include reporting completeness, timeliness, and DQC logbook maintenance in the facility performance assessment criteria. Weight data quality at 10-15% of the overall score. (2) Recognise top performers: at the quarterly HMIS TWG meeting or the annual district health review, publicly recognise the 3-5 facilities with the best data quality performance. This costs nothing but creates positive accountability. (3) Address persistent non-compliance: for facilities that consistently fail to report or show no improvement in data quality despite support, escalate through existing management channels. This is not about punishment — it is about ensuring that data quality improvement is taken as seriously as other aspects of facility performance. Frame it as: facilities that report well get better resource allocation because their needs are visible.`
    },
  ],
};
