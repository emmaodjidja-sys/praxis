# Data Collection Instruments Reference

## Table of Contents
1. General Instrument Design Principles
2. Structured Surveys and Questionnaires
3. Focus Group Discussion Guides
4. Key Informant Interview Guides
5. Observation Tools
6. Document Review Frameworks
7. Validated Scales and Indices
8. Informed Consent Templates
9. Piloting and Pre-Testing

---

## 1. General Instrument Design Principles

All data collection instruments must:

- Directly link to the evaluation matrix: every item should trace back to an evaluation question and indicator
- Be appropriate for the target respondent (literacy, language, cultural context, power dynamics)
- Be field-tested before deployment
- Include clear instructions for enumerators/facilitators
- Specify skip logic and routing where applicable
- Include metadata fields: date, location, enumerator ID, respondent ID, consent status, start/end time
- Be designed for the intended data collection platform (paper, ODK, KoboToolbox, SurveyCTO, etc.)

### Language and Translation

- Draft in the language of analysis, then translate
- Use forward-backward translation for validated scales
- Cognitive testing in local languages to catch meaning shifts
- Avoid idioms, double negatives, leading questions, and compound questions
- If designing for KoboToolbox or ODK: structure variable names as concise question summaries (e.g., hh_food_consumption_score, not q_12b)

---

## 2. Structured Surveys and Questionnaires

### Structure

A well-structured survey follows this flow:

1. **Identification section**: Survey metadata, location codes, enumerator info
2. **Consent module**: Read informed consent, record agreement
3. **Screening/eligibility**: Verify the respondent meets inclusion criteria
4. **Demographics**: Age, sex, education, household composition, location
5. **Core modules**: Organised thematically (e.g., livelihoods, health, education, governance)
6. **Sensitive modules**: Place toward the end after rapport is established (income, conflict exposure, violence, mental health)
7. **Closing**: Thank respondent, provide referral information if sensitive topics covered

### Question Types

**Closed-ended** (for quantitative analysis):
- Single-select: "What is your primary source of income?" with mutually exclusive options
- Multi-select: "Which of the following services have you accessed?" with instructions on how many can be selected
- Likert scales: Use consistent anchoring (e.g., 1=Strongly disagree to 5=Strongly agree). 5-point is standard; 4-point forces a direction (no neutral)
- Numeric: Exact values (age, income, distance). Specify units and acceptable ranges
- Date/time: Specify format

**Open-ended** (use sparingly in structured surveys):
- For responses that cannot be pre-coded
- For capturing unanticipated responses ("Other, specify: ____")
- For brief qualitative insights in otherwise quantitative instruments

### Skip Logic

Define skip patterns clearly. Format:
- "If Q5 = 'No', skip to Q12"
- For digital platforms, programme as relevant conditions

### Common Problems to Avoid

- Double-barrelled questions ("Do you feel safe and respected?")
- Leading questions ("Don't you agree that the programme was effective?")
- Recall periods that are too long (respondents cannot accurately recall beyond 7 days for frequent events, 12 months for major events)
- Acquiescence bias: Mix positively and negatively worded items in Likert scales
- Social desirability: Use indirect questioning for sensitive topics (list experiments, randomised response, endorsement experiments for Advanced users)
- Overly long instruments: 45-60 minutes maximum for household surveys; 20-30 for individual interviews

---

## 3. Focus Group Discussion Guides

### Structure

**Opening (5-10 minutes)**:
- Welcome and introduction
- Purpose of the discussion
- Ground rules (confidentiality, respect, one person speaks at a time, no right or wrong answers)
- Consent process (verbal or written, recorded)
- Permission to record

**Warm-up question (5 minutes)**:
- Non-threatening, easy to answer, gets everyone talking
- Example: "Can you tell me a little about your community and what daily life looks like here?"

**Key questions (40-60 minutes)**:
- 5-8 main questions, organised from general to specific
- Each question should have 2-3 probes/follow-up prompts
- Move from descriptive (what happened?) to interpretive (why do you think that happened?) to evaluative (what difference did it make?)

**Closing (5-10 minutes)**:
- Summary question: "Of everything we've discussed, what is the most important issue for you?"
- Catch-all: "Is there anything we haven't discussed that you think is important for us to know?"
- Thank participants, explain next steps

### Facilitation Notes

Include in the guide:
- Target group composition (who should be in this FGD and who should not)
- Ideal group size (6-10 participants)
- Seating arrangement recommendations
- Notes on power dynamics (separate FGDs by sex, age, status where relevant)
- When to use participatory tools (ranking, mapping, timeline exercises)
- What to do if sensitive disclosures occur

### Participatory Methods to Embed in FGDs

- **Community mapping**: Participants draw a map of their community, marking services, safe/unsafe areas, programme locations
- **Timeline/trend analysis**: Participants construct a timeline of key events and changes
- **Ranking/scoring**: Participants rank items (e.g., programme activities by usefulness)
- **Venn diagrams**: Map relationships between institutions and stakeholders
- **Body mapping**: For health or wellbeing topics, participants mark experiences on a body outline
- **Photovoice**: Participants take photos and discuss them (requires advance preparation)

---

## 4. Key Informant Interview Guides

### Structure

**Introduction (5 minutes)**:
- Interviewer introduction, evaluation purpose, confidentiality, consent, estimated duration
- Permission to record

**Background (5-10 minutes)**:
- Respondent's role, tenure, relationship to the programme

**Core questions (30-45 minutes)**:
- 8-12 main questions, tailored to the informant's area of knowledge
- Open-ended, using "how" and "to what extent" rather than "did"
- Include probes for each question
- Sequence: descriptive first, then analytical, then forward-looking

**Closing (5 minutes)**:
- Recommendations question: "Based on your experience, what would you recommend for the future?"
- Anything else? "Is there anything important that I haven't asked about?"
- Thank, explain next steps

### KII vs. FGD Decision

Use KIIs for:
- Senior stakeholders (government officials, programme directors, donors)
- Sensitive topics where group dynamics would inhibit honesty
- Technical questions requiring specialised knowledge
- Individual experiences that vary significantly

Use FGDs for:
- Community perspectives and norms
- Generating discussion and surfacing disagreements
- Understanding shared experiences
- When group dynamics themselves are informative

---

## 5. Observation Tools

### Structured Observation Checklists

Used for: Facility assessments, classroom observations, service delivery quality, infrastructure inspections.

**Design principles**:
- Observable behaviours only (what you can see and count, not what you infer)
- Binary (present/absent) or scaled (quality rating 1-4 with clear anchors for each level)
- Organised by domain or theme
- Include space for qualitative notes alongside structured items
- Training observers to consistent standards (inter-rater reliability)

**Example domains**: Facility cleanliness, staff-client interaction, availability of supplies, adherence to protocols, waiting times, accessibility for persons with disabilities.

### Unstructured Observation

Used for: Context mapping, understanding daily routines, process evaluation.

Provide observers with a framework (what to pay attention to) rather than a checklist. Document through field notes organised by: setting, actors, activities, interactions, and observer reflections (distinguish observations from interpretations).

---

## 6. Document Review Frameworks

### When to Use

Document review is typically the first data collection activity in an evaluation. It provides context, identifies questions, and reduces the burden on primary data collection.

### Document Types

- Programme design documents (proposals, logframes, ToC)
- Implementation records (activity reports, monitoring data, meeting minutes)
- Financial records (budgets, expenditure reports)
- Prior evaluations and assessments
- External documents (government policies, sector reports, academic literature)

### Review Framework

Create a structured extraction template:

| Document | Date | Source | Key Information | Relevance to EQ | Data Quality Notes |
|---|---|---|---|---|---|
| Annual report 2023 | Dec 2023 | Programme office | Output achievement data | EQ2, EQ3 | Self-reported, no verification |

---

## 7. Validated Scales and Indices

When measuring constructs (resilience, wellbeing, social cohesion, food security, mental health), prioritise validated scales over ad-hoc questions.

### Commonly Used Scales in Evaluation

**Food Security**:
- Food Consumption Score (FCS): WFP standard, 7-day recall, food group frequency and weighting
- Household Food Insecurity Access Scale (HFIAS): 9 items, 4-week recall
- Coping Strategies Index (CSI): Frequency of food-based coping behaviours
- Food Insecurity Experience Scale (FIES): FAO global standard, 8 items

**Livelihoods/Poverty**:
- Progress out of Poverty Index (PPI): Country-specific, 10-item scorecard
- Multidimensional Poverty Index (MPI): Health, education, living standards dimensions
- Asset index (constructed via PCA from asset ownership items)

**Wellbeing/Mental Health**:
- WHO-5 Wellbeing Index: 5 items, validated globally, 2-week recall
- PHQ-9: Depression screening, 9 items
- GAD-7: Anxiety screening, 7 items
- GHQ-12: General psychological distress
- PCL-5: PTSD symptom checklist (use with caution and referral protocols)
- WHODAS 2.0: Disability and functioning

**Social Cohesion/Trust**:
- Adapted Social Capital Assessment Tool (SOCAT)
- Generalised trust items from World Values Survey
- Intergroup contact and attitudes scales (context-specific)

**Resilience**:
- BRACED/DFID resilience measurement (subjective and objective dimensions)
- TANGO Resilience Index
- Context-specific resilience scales (e.g., BRAVE14 for PVE contexts)

**Gender**:
- Gender Equitable Men (GEM) Scale
- Women's Empowerment in Agriculture Index (WEAI)
- Decision-making and autonomy items

### Adaptation Considerations

When adapting validated scales:
- Do not modify wording of validated items without documenting and justifying changes
- Forward-backward translation minimum
- Cognitive testing in the target population
- If items are dropped or modified, the scale can no longer be compared to published norms
- Report Cronbach's alpha and factor structure for adapted scales
- For Advanced users: Discuss measurement invariance across groups, DIF analysis, and IRT approaches to cross-cultural psychometrics

---

## 8. Informed Consent Templates

Every primary data collection activity requires informed consent. The consent process must communicate:

1. **Who**: Identity of the evaluators and commissioning organisation
2. **What**: Purpose of the evaluation, what participation involves, estimated duration
3. **Voluntary**: Participation is voluntary; refusal or withdrawal has no consequences for services or benefits
4. **Risks**: Any risks from participation (including emotional distress from sensitive questions)
5. **Benefits**: Direct benefits (usually none) and indirect benefits (contributing to programme improvement)
6. **Confidentiality**: How data will be stored, who will access it, how it will be reported (anonymised)
7. **Contact**: Who to contact with questions or complaints
8. **Consent**: Explicit agreement (written signature, thumbprint, or verbal consent recorded by enumerator)

### Special Populations

- **Minors (under 18)**: Require parental/guardian consent AND child assent
- **Vulnerable populations**: Additional safeguarding protocols, referral pathways for distress or disclosure
- **Illiterate respondents**: Read consent aloud, use thumbprint or witnessed verbal consent
- **Remote/phone surveys**: Verbal consent, recorded, with option to call back for questions

---

## 9. Piloting and Pre-Testing

### Pre-Test

Small-scale test (5-10 respondents) to check:
- Question comprehension (do respondents understand what's being asked?)
- Response options (are they exhaustive and mutually exclusive?)
- Skip logic (does it work correctly?)
- Survey length (is it within acceptable duration?)
- Sensitive questions (do respondents show discomfort or refuse?)
- Translation accuracy

### Cognitive Testing

More rigorous than a pre-test. Interviewer probes respondents on their thought process:
- "What does this question mean to you?"
- "How did you arrive at your answer?"
- "Was anything confusing about this question?"

### Pilot

Larger-scale test (50-100 respondents for surveys) using the full data collection protocol. Analyse pilot data for:
- Item non-response patterns
- Response distributions (ceiling/floor effects)
- Scale reliability (Cronbach's alpha)
- Enumerator effects
- Data entry and cleaning workflow

Revise instruments based on pilot findings before full deployment.
