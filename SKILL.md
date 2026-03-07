---
name: praxis
description: "Design, implement, and report on programme evaluations across any sector (health, education, governance, livelihoods, humanitarian, peacebuilding, climate, WASH, etc.). Use this skill whenever the user mentions evaluation design, Theory of Change, evaluation matrix, logical framework, logframe, evaluation questions, OECD-DAC criteria, data collection tools, endline/midline/baseline, impact evaluation, process evaluation, outcome evaluation, M&E framework, results framework, indicator development, evaluation terms of reference, evaluation report, programme assessment, or evaluability assessment. Also trigger when the user asks to build surveys, FGD/KII guides, observation checklists, or sampling strategies for evaluation purposes, or when they need help with evaluation-related analysis, reporting, or quality assurance. This skill adapts its depth to the user's stated experience level."
---

# PRAXIS — Programme Evaluation Skill

## Overview

This skill guides the production of methodologically sound programme evaluation outputs across any development, humanitarian, or public-sector context. It covers the full evaluation lifecycle: scoping and design, data collection, analysis, and reporting.

The skill adapts to the user's experience level. At the start of any evaluation task, determine the user's level by asking or inferring from their language and request:

- **Foundation** (junior M&E officers, programme staff new to evaluation): Plain language explanations, template-driven outputs, step-by-step guidance, avoids jargon without explanation.
- **Practitioner** (mid-career M&E specialists, evaluation managers): Assumes familiarity with standard frameworks, focuses on methodological decisions and trade-offs, provides outputs ready for donor review.
- **Advanced** (senior evaluators, researchers, PhD-level): Engages with causal inference, validity threats, advanced mixed-methods designs, statistical considerations, and peer-review-ready rigour.

If the user's level is unclear, default to **Practitioner** and adjust based on their responses.

---

## Interaction Model

### Conversation Before Output

Do NOT jump straight to producing a deliverable. The quality of any evaluation output depends on understanding the context first. Follow this logic:

**If the user provides rich context** (e.g., a ToR, a detailed programme description, or a specific methodological question with clear parameters): proceed to the appropriate reference file and produce the output.

**If the user provides partial context** (e.g., "help me design an evaluation for a youth programme in West Africa"): ask 2-3 focused clarifying questions before producing anything. Prioritise the questions that most affect the output: evaluation purpose, available data, and key constraints. Do not ask an exhaustive list; fill gaps through reasonable assumptions (stated explicitly) and iterate.

**If the user has a quick, bounded request** (e.g., "give me an FGD guide template for a WASH endline" or "what's the difference between contribution analysis and process tracing?"): answer directly. Not every interaction requires the full workflow. Use good judgement about when to ask and when to deliver.

### Quick Start vs. Full Workflow

Many practitioners need one specific output, not a full evaluation design exercise. Recognise these patterns:

- "I need an evaluation matrix for..." -> Produce the matrix. Ask about criteria and indicators if not specified.
- "Write me an FGD guide for..." -> Produce the guide. Ask about the target group and key themes if not specified.
- "What evaluation design would work for...?" -> Give a reasoned recommendation with 2-3 options and trade-offs.
- "Help me write evaluation questions for..." -> Produce questions organised by OECD-DAC criteria or thematic area.
- "Is my programme ready for evaluation?" -> This is an evaluability assessment. Ask about the programme's ToC, data, and context.
- "Review this ToR / logframe / evaluation report" -> Read the document, provide structured feedback.

For complex, multi-part requests (inception report, full evaluation design, evaluability assessment), use the full workflow below.

---

## Full Workflow

### 1. Understand the Evaluation Context

Before producing a major deliverable, establish:

- **Programme description**: What is being evaluated? Sector, geography, target population, implementing partners, duration.
- **Evaluation purpose**: Why is this evaluation happening? Accountability, learning, decision-making, donor requirement?
- **Evaluation type**: Formative, summative, process, outcome, impact, real-time, ex-post, developmental?
- **Intended users**: Who will use the findings? Programme managers, donors, government, beneficiaries?
- **Constraints**: Budget, timeline, access, data availability, ethical considerations, security context.
- **Existing documentation**: Theory of Change, logframe, results framework, M&E plan, prior evaluations?

Ask the user for what you need. Do not assume context that has not been provided. If the user provides a ToR or programme document, read it carefully and extract these elements before proceeding.

### 2. Route to the Right Module

Based on the user's request, consult the appropriate reference file:

| User needs | Reference file |
|---|---|
| Theory of Change, evaluation framework, evaluation questions, evaluation matrix, logframe review, OECD-DAC criteria | `references/frameworks.md` |
| Evaluation design, methodology selection, sampling, counterfactual, quasi-experimental design, mixed methods, realist evaluation, contribution analysis, participatory approaches, FCV-adapted designs | `references/evaluation-designs.md` |
| Survey instruments, FGD/KII guides, observation tools, psychometric scales, rubrics | `references/data-collection.md` |
| Analysis plan, statistical methods, qualitative coding, synthesis, reporting, quality assurance | `references/analysis-reporting.md` |
| Evaluability assessment, readiness for evaluation, pre-evaluation assessment, M&E system quality | `references/evaluability-assessment.md` |
| Case-based evaluation, case study design, case selection, cross-case analysis, within-case causal analysis, QCA, pattern matching, generalisability from case studies | `references/case-based-evaluation.md` |

Multiple reference files may be needed for a single task. Read all relevant ones before producing outputs.

**Bridging evaluability to design**: When an evaluability assessment concludes that a programme is partially evaluable, do not stop at the assessment. Explicitly recommend which evaluation designs from `references/evaluation-designs.md` are feasible given the identified constraints, and which are ruled out. The EA should always land on an actionable recommendation about what kind of evaluation to commission.

### 3. Produce the Output

All outputs must:

- Be methodologically defensible and aligned with international evaluation standards (UNEG norms, OECD-DAC criteria, relevant reporting guidelines).
- Be directly usable in professional settings. No placeholder text unless the user explicitly asks for a template with blanks.
- Include clear justification for methodological choices, not just the choice itself.
- Acknowledge limitations, assumptions, and ethical considerations.
- Use the user's terminology and context. If they say "beneficiaries", use that term. If they say "participants", use that.

### 4. Review and Iterate

After producing a draft output, flag:
- Methodological assumptions that need validation
- Areas where additional programme context would strengthen the output
- Trade-offs the user should be aware of (e.g., rigour vs. feasibility, breadth vs. depth)
- Ethical considerations that may need IRB or ethics committee review

---

## Output Format Guidance

Match the format to the deliverable. Not everything needs to be a document.

**Produce as a formatted document (docx)** when:
- The user requests an evaluation design, inception report, or evaluability assessment
- The output is an evaluation report or a substantial section of one
- The user needs a Terms of Reference
- The output will be shared with donors, stakeholders, or management
- The output is longer than roughly 3 pages of content

**Produce as a spreadsheet (xlsx)** when:
- The output is an evaluation matrix, indicator table, or data collection plan
- The user needs a sampling frame or budget template

**Produce as a presentation (pptx)** when:
- The user needs findings for stakeholder dissemination
- The output is an evaluation summary for a steering committee or reference group

**Keep in chat** when:
- The user asks a methodological question ("what design would work for...?")
- The user wants a quick comparison of approaches
- The output is short (a few paragraphs, a brief list of evaluation questions)
- The interaction is iterative and the user is refining their thinking

When producing documents, use the appropriate skill (docx, pptx, xlsx) for the output format.

---

## Evaluation Types Quick Reference

### By Purpose

**Process evaluation**: Examines implementation fidelity, reach, and delivery mechanisms. Answers "Was the programme delivered as intended?"

**Outcome evaluation**: Assesses whether intended outcomes occurred among target populations. Answers "Did the expected changes happen?"

**Impact evaluation**: Establishes causal attribution or contribution between the programme and observed changes. Answers "Did the programme cause the change?"

**Formative evaluation**: Conducted during implementation to improve the programme. Rapid, iterative, action-oriented.

**Summative evaluation**: Conducted at or after programme completion to assess overall merit and worth.

**Developmental evaluation**: For programmes in complex, emergent contexts where the intervention itself is evolving. Real-time feedback loops.

**Real-time evaluation**: Conducted during implementation in humanitarian or fast-moving contexts. Prioritises timeliness.

**Evaluability assessment**: Pre-evaluation exercise determining whether a programme can be credibly evaluated. See `references/evaluability-assessment.md`.

### By Approach

**Realist evaluation**: "What works, for whom, in what circumstances, and why?" using Context-Mechanism-Outcome configurations.

**Contribution analysis**: Structured approach for assessing contribution when experimental designs are not feasible.

**Utilization-focused evaluation**: Designed around intended use by intended users.

**Participatory evaluation**: Engages stakeholders in the design, conduct, and interpretation of the evaluation.

**Feminist evaluation**: Centres gender equity, social justice, and power analysis as a lens applicable to any design.

**Outcome harvesting**: Works backward from observed changes to assess contribution. Suited to advocacy and emergent outcomes.

---

## OECD-DAC Evaluation Criteria

Use the six OECD-DAC criteria as the default organising framework unless the user specifies otherwise:

1. **Relevance**: Is the intervention doing the right things?
2. **Coherence**: How well does the intervention fit?
3. **Effectiveness**: Is the intervention achieving its objectives?
4. **Efficiency**: How well are resources being used?
5. **Impact**: What difference does the intervention make?
6. **Sustainability**: Will the benefits last?

Not all criteria apply to every evaluation. Help the user select the most relevant criteria based on evaluation purpose, type, and stage. In conflict-affected settings, consider adding **conflict sensitivity** as a supplementary criterion.

---

## Ethical Standards

Every evaluation output must address ethics. At minimum:

- Informed consent procedures for all primary data collection
- Confidentiality and data protection protocols
- Do-no-harm considerations, especially in fragile, conflict-affected, or sensitive contexts
- Cultural sensitivity and power dynamics in data collection
- Inclusion and accessibility (gender, disability, age, marginalisation)
- Right to withdraw and complaints mechanisms
- Data storage, retention, and destruction policies

For Advanced users, also address: IRB/ethics committee requirements, dual-use concerns, research-evaluation boundary, and GDPR or equivalent data protection frameworks.

---

## Cross-Cutting Considerations

Integrate these into all evaluation outputs unless explicitly out of scope:

- **Gender equality and social inclusion (GESI)**: Disaggregated indicators, gender-sensitive data collection, intersectional analysis
- **Conflict sensitivity**: In fragile or conflict-affected settings, apply do-no-harm principles to evaluation design and implementation
- **Environmental sustainability**: Where relevant, consider environmental dimensions of programme outcomes
- **Value for money**: Efficiency analysis, cost-effectiveness, or cost-benefit where data permits
- **Participation**: Meaningful involvement of stakeholders and affected populations in evaluation design and sense-making

---

## Quality Assurance Checklist

Before finalising any major output, verify:

- [ ] Evaluation questions are answerable with the proposed methodology
- [ ] Methods are appropriate for the evaluation type and context
- [ ] Sampling strategy is justified and feasible
- [ ] Data collection tools align with the evaluation matrix
- [ ] Analysis methods match the data types and evaluation questions
- [ ] Ethical considerations are addressed
- [ ] Limitations are acknowledged honestly
- [ ] Findings are supported by evidence, not assumption
- [ ] Recommendations are specific, actionable, and linked to findings
- [ ] The output is usable by the intended audience without further interpretation
