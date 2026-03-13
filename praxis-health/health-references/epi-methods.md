# Epidemiological Methods for Evaluation Reference

## Table of Contents
1. Scope and Orientation
2. Measures of Disease Frequency and Burden
3. Measures of Association and Effect (including Screening Test Performance, Morbidity Measurement)
4. Standardisation
5. Mortality Measurement
6. Surveillance Data for Evaluation
7. Routine Health Information Systems as Epidemiological Data
8. Survey Methods for Health Evaluation
9. Epidemiological Study Designs in Evaluation Context
10. Outbreak Investigation as Evaluation Data
11. Analytical Considerations Specific to Health Data

---

## 1. Scope and Orientation

This sub-skill provides health-specific measurement and analytical methods that complement the general quantitative and qualitative methods in PRAXIS's `analysis-reporting.md`. It covers the epidemiological concepts and techniques that health evaluators need to measure disease, death, and health system performance correctly.

### What This Sub-Skill Adds

PRAXIS core covers regression, sampling theory, descriptive statistics, and qualitative analysis. These are necessary but not sufficient for health evaluation. Health evaluators also need to:

- Distinguish between incidence and prevalence and know when each matters for their evaluation question
- Measure mortality correctly, including in settings where vital registration is incomplete
- Interpret and use routine health data (DHIS2, surveillance) as evaluation data, understanding their epidemiological limitations
- Understand disease burden metrics (DALYs, QALYs) when they encounter them in cost-effectiveness analyses or programme documents
- Apply standardisation when comparing health indicators across populations with different demographic structures
- Conduct or commission health surveys using cluster-sampling methodology specific to health outcome measurement
- Interpret biomarker data collected during evaluation fieldwork

### When to Use

Use this sub-skill whenever the evaluation measures health outcomes — disease incidence, prevalence, mortality, morbidity, nutritional status, disability, or any clinical or population health indicator. Also use when the evaluation relies on routine health data (HMIS, surveillance) as a primary data source and needs to assess its epidemiological validity.

### Relationship to Other Sub-Skills

- **HSS Evaluation**: Covers system-level indicators (readiness, coverage, financial protection). This sub-skill covers how to measure the health outcomes that system strengthening is ultimately expected to improve.
- **Disease Programme Evaluation**: Covers disease-specific measurement cascades (HIV cascade, malaria case management, TB treatment outcomes). This sub-skill covers the underlying epidemiological methods those cascades depend on.
- **Health Economics**: Uses DALYs and QALYs for cost-effectiveness analysis. This sub-skill defines these metrics; Health Economics covers how to use them in economic evaluation.
- **RMNCAH and Nutrition**: Uses many of the mortality and survey methods covered here, particularly maternal mortality estimation, child mortality measurement, and anthropometric assessment.

---

## 2. Measures of Disease Frequency and Burden

### Incidence vs. Prevalence

These are the two fundamental measures of disease frequency. Confusing them is one of the most common errors in health programme evaluation.

**Prevalence**: The proportion of a population that has a condition at a specific point in time (point prevalence) or during a defined period (period prevalence). Prevalence reflects the existing burden of disease. It is influenced by both the rate at which new cases occur and how long cases last (duration).

**Incidence**: The rate at which new cases of a condition occur in a population over a defined period. Incidence reflects the risk of developing a condition.

**Why the distinction matters for evaluation**:

A programme that improves HIV treatment (keeping people alive longer) will *increase* HIV prevalence even as it reduces HIV incidence and mortality. If the evaluation reports "HIV prevalence increased during the programme period" without distinguishing this from incidence, it will incorrectly suggest the programme failed. Conversely, a programme that improves case detection (finding existing cases) will appear to increase disease incidence even if the true incidence is unchanged or declining.

Always specify which measure you are using and why. For outcome evaluation, incidence is typically more informative about programme effects on disease transmission or risk. For burden assessment and service planning, prevalence is more relevant.

### Calculating Incidence

**Cumulative incidence (risk)**: Number of new cases during a defined period / Population at risk at the start of the period. Assumes the full population is followed for the entire period. Appropriate when follow-up is complete and the period is short.

**Incidence rate (person-time)**: Number of new cases / Total person-time at risk. Accounts for varying follow-up times (people entering and leaving the population, loss to follow-up, competing events). The denominator is measured in person-years, person-months, or person-days. Appropriate for open populations and longitudinal follow-up.

**Attack rate**: Cumulative incidence in the context of a defined outbreak or exposure event. Despite the name, it is a proportion (risk), not a rate.

For Foundation users: Explain incidence as "how many new cases appeared" and prevalence as "how many total cases exist right now." Use the bathtub analogy: incidence is the water flowing in, recovery and death are the water flowing out, and prevalence is the water level at any moment.

For Practitioner users: Ensure the evaluation correctly specifies the numerator (new cases vs. existing cases), denominator (total population vs. population at risk), and time period. Flag when programme monitoring data confuse incidence with prevalence.

For Advanced users: Discuss person-time denominators, competing risks, and the relationship between incidence, prevalence, and duration (P ≈ I × D for steady-state conditions and rare diseases).

### Calculating Prevalence

**Point prevalence**: Number of existing cases at a specific time / Total population at that time. The most common measure in cross-sectional surveys.

**Period prevalence**: Number of existing cases at any point during a defined period / Average population during that period. Less commonly used; includes both prevalent cases at the start and incident cases during the period.

### Mortality Measures

**Crude mortality rate (CMR)**: Total deaths / Mid-period population, usually expressed per 1,000 population per year. In emergency settings, expressed per 10,000 per day (emergency threshold: CMR >1/10,000/day).

**Cause-specific mortality rate**: Deaths from a specific cause / Mid-period population. Requires accurate cause-of-death ascertainment.

**Proportional mortality**: Deaths from a specific cause / Total deaths. Not a rate — it tells you the relative importance of a cause of death within total mortality, not the risk of dying from that cause. Useful when population denominators are unavailable.

**Case fatality rate (CFR)**: Deaths from a disease / Number of cases of that disease. Measures the severity/lethality of a condition among those affected. Sensitive to case ascertainment: if only severe cases are detected, CFR will be artificially high. If mild cases are included, CFR will be lower.

**Key child and maternal mortality indicators**:

| Indicator | Numerator | Denominator | Expression |
|---|---|---|---|
| Neonatal mortality rate (NMR) | Deaths in the first 28 days of life | Live births | Per 1,000 live births |
| Infant mortality rate (IMR) | Deaths in the first year of life | Live births | Per 1,000 live births |
| Under-5 mortality rate (U5MR) | Deaths before age 5 | Live births | Per 1,000 live births |
| Maternal mortality ratio (MMR) | Maternal deaths | Live births | Per 100,000 live births |
| Stillbirth rate | Stillbirths (≥28 weeks gestation) | Total births (live births + stillbirths) | Per 1,000 total births |

Note: The maternal mortality *ratio* uses live births as the denominator (not women of reproductive age). The maternal mortality *rate* uses women of reproductive age as the denominator. Both are used; the ratio is more common in global health. Always specify which you are reporting.

### Disease Burden Metrics

**Disability-Adjusted Life Years (DALYs)**: A composite measure of disease burden combining premature mortality and disability.

DALY = YLL + YLD

- **Years of Life Lost (YLL)**: Deaths × (Standard life expectancy at age of death − Age at death). Captures the mortality burden.
- **Years Lived with Disability (YLD)**: Number of prevalent cases × Disability weight × Average duration. Captures the morbidity burden. Disability weights range from 0 (perfect health) to 1 (death).

**Quality-Adjusted Life Years (QALYs)**: Used in cost-utility analysis. One QALY = one year of life in perfect health. Years of life are weighted by a health-related quality of life score (0 = death, 1 = perfect health). QALYs are gained by interventions that extend life, improve quality, or both.

**DALYs vs. QALYs**: DALYs measure burden (higher = worse); QALYs measure health gain (higher = better). DALYs are the standard metric in global health burden estimation (Global Burden of Disease study) and are used in WHO-CHOICE and many LMIC cost-effectiveness analyses. QALYs are the standard in HTA and cost-effectiveness analysis in high-income settings (NICE, ICER).

For Foundation users: Explain DALYs as "a way of measuring how much health a disease takes away from a population — both through early death and through living with illness." Evaluators will encounter DALYs primarily in programme documents (burden of disease justifications) and in cost-effectiveness analyses produced by economists. Evaluators do not typically calculate DALYs themselves.

For Practitioner users: Know the components and be able to interpret DALY estimates in programme documents. Understand that disability weights are contested and context-dependent.

For Advanced users: Discuss the assumptions and controversies: age weighting (currently not applied in GBD), discount rates, disability weight derivation methods, and the ethical debate around valuing life years equally regardless of age or disability status.

---

## 3. Measures of Association and Effect

### Measures of Relative Effect

When an evaluation compares outcomes between a programme group and a comparison group, the choice of effect measure depends on the study design and the outcome measure.

**Risk ratio (relative risk, RR)**: Risk in the exposed/programme group / Risk in the unexposed/comparison group. Interpretable as "how many times more (or less) likely is the outcome in the programme group?" Valid when the study follows a defined population over time (cohort design, RCT).

**Rate ratio**: Incidence rate in one group / Incidence rate in another group. Used when person-time denominators are available. Accounts for varying follow-up.

**Odds ratio (OR)**: Odds of the outcome in the programme group / Odds of the outcome in the comparison group. The standard measure for case-control studies and logistic regression. For rare outcomes (<10% prevalence), the OR approximates the RR. For common outcomes, the OR exaggerates the RR — this is a frequent source of misinterpretation in health evaluation. When reporting ORs from logistic regression, flag whether the outcome is common enough that the OR may overestimate the true relative risk.

**Prevalence ratio (PR)**: Prevalence in one group / Prevalence in another group. Used in cross-sectional studies. More interpretable than the prevalence odds ratio for common outcomes. Can be estimated using modified Poisson regression (Poisson with robust standard errors) or log-binomial regression.

**Hazard ratio (HR)**: From Cox proportional hazards regression. The ratio of hazard rates between groups at any point in time, assuming proportional hazards. Used in survival analysis (see Section 11).

### Measures of Absolute Effect

**Risk difference (attributable risk)**: Risk in the programme group − Risk in the comparison group. Measures the absolute change in risk attributable to the programme (or exposure). More useful for decision-making than relative measures because it conveys the actual magnitude of difference.

**Number needed to treat (NNT)**: 1 / Risk difference. The number of people who need to receive the intervention for one additional person to benefit. Clinically intuitive and useful for translating evaluation findings into programme planning: "For every 20 women enrolled in the programme, one additional safe delivery was achieved."

**Number needed to harm (NNH)**: 1 / Absolute risk increase. The equivalent for adverse effects.

### Population Attributable Fraction (PAF)

The proportion of disease in the total population attributable to a specific exposure or risk factor. PAF depends on both the strength of association (RR) and the prevalence of the exposure.

PAF = Prevalence of exposure × (RR − 1) / [1 + Prevalence of exposure × (RR − 1)]

**When evaluators encounter PAF**: Programme justification documents may cite PAF to argue for targeting a specific risk factor. Cost-effectiveness analyses may use PAF to estimate the potential impact of reducing a risk factor. Evaluators should understand PAF as a theoretical maximum — it assumes the association is causal and that complete elimination of the exposure is achievable, neither of which is typically true.

### Confounding

A confounder is a variable that is associated with both the exposure/programme and the outcome, and is not on the causal pathway between them. Confounding distorts the observed association between the programme and the outcome.

**In evaluation terms**: If programme and comparison areas differ systematically (e.g., programme areas are wealthier), and wealth independently affects health outcomes, then wealth confounds the programme-outcome association. The observed difference between areas may be partly or wholly due to wealth differences, not the programme.

**Addressing confounding in evaluation**:
- Design stage: Randomisation (RCT), matching, restriction, stratification
- Analysis stage: Stratified analysis, regression adjustment, propensity score methods
- Cross-reference to PRAXIS `analysis-reporting.md` and `evaluation-designs.md` for full treatment of these methods

**Residual confounding**: Even after adjustment, uncontrolled confounding may remain — due to unmeasured variables, imprecisely measured confounders, or model misspecification. Always discuss residual confounding as a limitation when reporting adjusted associations.

### Effect Modification (Interaction)

Effect modification occurs when the effect of the programme differs across subgroups defined by a third variable. Unlike confounding, effect modification is not a bias — it is substantively informative.

**In evaluation terms**: If a training programme reduces maternal mortality in facilities with adequate supplies but not in facilities without supplies, supply availability is an effect modifier. This finding is evaluatively important — it tells you a condition under which the programme works.

Test for effect modification by including interaction terms in regression models or by conducting stratified analysis. When effect modification is found, report stratum-specific effects rather than a single pooled estimate. This is particularly relevant for equity analysis: assessing whether programme effects differ by sex, wealth, geography, or other equity dimensions.

### Screening and Diagnostic Test Performance

When evaluating programmes that involve case detection, screening, or diagnosis, evaluators need to assess or interpret test performance metrics.

**Sensitivity**: Proportion of truly positive individuals correctly identified by the test. Sensitivity = True positives / (True positives + False negatives). High sensitivity is needed when missing a case has serious consequences (e.g., HIV screening, TB case detection). A highly sensitive test has few false negatives.

**Specificity**: Proportion of truly negative individuals correctly identified by the test. Specificity = True negatives / (True negatives + False positives). High specificity is needed when a false positive has serious consequences (e.g., confirmatory testing, treatment initiation). A highly specific test has few false positives.

**Positive predictive value (PPV)**: Proportion of test-positive results that are truly positive. PPV depends on both test sensitivity/specificity and disease prevalence in the tested population. In low-prevalence populations, even a highly specific test will have a low PPV — most positives will be false positives. This is critical for evaluators assessing screening programmes in low-prevalence settings.

**Negative predictive value (NPV)**: Proportion of test-negative results that are truly negative. In high-prevalence populations, NPV may be low even with a sensitive test.

**Why this matters for evaluation**: If a programme's case detection strategy relies on a test with poor sensitivity in the target population, the programme will systematically undercount cases — and the evaluation's incidence estimates will be biased downward. If the test has poor specificity, the programme (and evaluation) will overcount cases. Always assess and report the performance characteristics of the diagnostic tools used in the programme and evaluation.

**For evaluation of screening programmes**: Assess not just test performance but the full screening cascade: eligible population → screened → test-positive → confirmatory testing → diagnosis → treatment initiation. Drop-off at each step reduces effective programme coverage regardless of test accuracy.

### Morbidity and Functional Status Measurement

Many health evaluations measure outcomes beyond mortality and disease counts. Morbidity burden, disability, and health-related quality of life are increasingly common programme outcome indicators, particularly for NCD programmes, rehabilitation, mental health, and chronic disease management.

**Self-reported morbidity**: Household surveys commonly ask about illness episodes in a defined recall period (typically 2-4 weeks). Limitations: subjective, influenced by health-seeking behaviour norms, perception of illness varies by education and culture. More useful for measuring care-seeking behaviour than true morbidity.

**Functional status and disability**: WHODAS 2.0 (WHO Disability Assessment Schedule) is the standard instrument for measuring functional impairment across six domains (cognition, mobility, self-care, getting along, life activities, participation). Already included in PRAXIS's validated scales. The Washington Group Short Set (WG-SS) is the standard for identifying persons with disabilities in population surveys — it measures functional difficulty in six core domains using a four-level response scale.

**Health-related quality of life (HRQoL)**:
- **EQ-5D**: Five dimensions (mobility, self-care, usual activities, pain/discomfort, anxiety/depression) with 3 or 5 severity levels. Produces a single utility score (0-1) and a visual analogue scale (0-100). The most widely used HRQoL instrument in health economics and evaluation. Utility scores are used to calculate QALYs (see Section 2).
- **SF-36 / SF-12**: 36-item (or 12-item short form) questionnaire measuring eight health domains. Produces physical and mental health component scores. Widely validated but more burdensome than EQ-5D.

**For evaluation purposes**: Choose the HRQoL instrument based on the evaluation question, target population, and available validation data. EQ-5D is preferred when QALYs are needed for economic evaluation. SF-36/SF-12 provides richer domain-specific data. Both require culturally adapted and validated versions — do not use translations without evidence of cross-cultural validity in the target population.

---

## 4. Standardisation

### Why Standardisation Matters

When comparing health indicators (mortality rates, disease incidence) between two populations or between the same population at two time points, differences in demographic composition — particularly age and sex — can create spurious differences or mask real ones.

A district with a younger population will have a lower crude mortality rate than a district with an older population, regardless of health system quality. If the evaluation compares mortality across programme and comparison districts without standardisation, differences may reflect demography rather than programme effects.

### When to Standardise

Standardisation is necessary when:
- Comparing mortality or disease rates between populations with different age/sex structures
- Comparing rates over time in a population with changing age structure (e.g., ageing population, or population affected by migration)
- The evaluation uses aggregate population-level rates (not individual-level data with regression adjustment)

Standardisation is not necessary when:
- The evaluation uses individual-level data and adjusts for age/sex in regression models (regression adjustment achieves the same goal)
- The populations being compared have very similar demographic structures
- The indicator is already age-specific (e.g., under-5 mortality rate, neonatal mortality rate)

### Direct Standardisation

Apply the age-specific rates from each population to a common standard population to calculate what each population's rate would be if it had the same age structure.

**Steps**:
1. Calculate age-specific rates in each population
2. Choose a standard population (WHO World Standard Population, national census, or the combined study population)
3. For each age group: multiply the age-specific rate by the standard population count for that age group
4. Sum across age groups and divide by the total standard population

**Requires**: Age-specific rates in each population (sufficient data to calculate rates within age strata). If age-specific data are unavailable, use indirect standardisation.

### Indirect Standardisation and the SMR

When age-specific rates in the study population are unstable (small numbers), apply a reference population's age-specific rates to the study population's age structure to calculate the expected number of events. Compare expected to observed.

**Standardised Mortality Ratio (SMR)** = Observed deaths / Expected deaths

SMR > 1: More deaths than expected (worse than reference)
SMR < 1: Fewer deaths than expected (better than reference)

The SMR is commonly used in occupational epidemiology and in comparing small populations to national benchmarks. In evaluation, it is useful when comparing facility or district performance against a national or regional benchmark.

**Limitation**: SMRs from different study populations are not directly comparable to each other (each uses a different standard). For comparing multiple populations with each other, use direct standardisation.

For Foundation users: Explain standardisation as "adjusting for the fact that populations have different mixes of old and young people, so we can make a fair comparison." Use an example: "District A has more elderly residents, so its death rate is naturally higher. Standardisation lets us compare what the death rates would look like if both districts had the same age mix."

For Practitioner users: Know when to standardise, which method to use, and how to interpret standardised rates. Always report the standard population used.

For Advanced users: Discuss the choice of standard population and its impact on results, variance estimation for standardised rates, and alternatives (regression-based adjustment, Mantel-Haenszel methods).

---

## 5. Mortality Measurement

Mortality is one of the most important outcome indicators in health evaluation, and one of the most difficult to measure accurately in LMICs where vital registration is incomplete.

### Direct Mortality Estimation from Household Surveys

**Retrospective mortality surveys**: Household surveys that ask about deaths in the household during a defined recall period. The standard approach for estimating crude mortality rate and under-5 mortality rate in emergency and development settings.

**SMART survey methodology**: The Standardized Monitoring and Assessment of Relief and Transitions (SMART) methodology combines a retrospective mortality survey with an anthropometric nutrition assessment. It is the standard for emergency nutrition and mortality assessment.

Key design features:
- Recall period: Typically 90 days (3 months) for mortality. Shorter periods reduce recall bias but require larger samples. Longer periods increase recall bias and are affected by seasonal variation.
- Household definition: Must be clearly defined and consistently applied. Variations in household definition can substantially affect mortality estimates.
- Inclusion of deaths: Deaths that occurred during the recall period, including of household members who have since left or of entire households that have dissolved. Capturing deaths in dissolved households is methodologically challenging and often underestimates mortality.
- Sample size: Typically 30 clusters × 30 households for standard precision. Calculated based on expected mortality rate, desired precision, and design effect.
- Cluster sampling: Two-stage cluster sampling with probability proportional to size (PPS) selection of clusters. See Section 8 for cluster survey methodology.

**Birth history method (DHS)**: Full birth histories collected from women of reproductive age (15-49). The standard method for estimating child mortality (NMR, IMR, U5MR) in national surveys. Provides mortality estimates for defined periods before the survey (typically 5-year periods going back 10-15 years). Enables trend analysis but is subject to recall error and displacement of events across time boundaries.

### Indirect Mortality Estimation

Used when direct measurement is not feasible.

**Brass method**: Uses the proportion of children dead among those ever born to women in each age group (15-19, 20-24, ..., 45-49) to estimate child mortality. Requires only summary data (children ever born, children surviving) rather than full birth histories. Less precise than direct estimation but simpler to collect.

**Sisterhood method for maternal mortality**: Asks respondents about the survival of their adult sisters and whether any sisters died during pregnancy, delivery, or the postpartum period. The indirect sisterhood method produces a maternal mortality ratio estimate referring to approximately 12 years before the survey. The direct sisterhood method can produce more recent estimates but requires larger samples.

**Limitations of indirect methods**: Estimates refer to past periods (not current mortality); they rely on demographic models with assumptions about fertility and mortality patterns that may not hold in the study population; they cannot produce cause-specific mortality estimates.

### Verbal Autopsy

Verbal autopsy (VA) is a structured interview conducted with the caregiver or family member of a deceased person to determine the probable cause of death. Used when medical certification of cause of death is unavailable, which is the majority of deaths in LMICs.

**WHO Verbal Autopsy standards**: The WHO provides standardised VA questionnaires (for neonatal, child, and adult deaths) and guidelines for cause-of-death assignment.

**Cause-of-death assignment methods**:
- **Physician-coded VA (PCVA)**: Two or more physicians independently review the VA questionnaire and assign a cause of death using ICD coding. The traditional method but time-consuming, expensive, and subject to inter-rater variability.
- **Computer-coded VA (CCVA)**: Algorithms (InterVA, InSilicoVA, SmartVA) assign cause of death based on symptom patterns. More consistent and scalable than PCVA. SmartVA (developed by IHME) uses a shortened questionnaire and automated coding. InterVA uses a Bayesian probabilistic model.
- **Expert algorithm**: Predefined decision rules based on symptom patterns. Less flexible than probabilistic methods.

**Limitations**: VA cannot distinguish between conditions with similar symptom profiles (e.g., pneumonia vs. malaria in children); accuracy varies by cause of death (better for injury, measles, neonatal tetanus; worse for non-communicable diseases and co-morbid conditions); quality depends heavily on respondent recall, interviewer training, and the interval between death and interview.

**For evaluation purposes**: VA is appropriate when the evaluation needs cause-specific mortality data and medical certification is unavailable. Report the coding method used, the proportion of deaths assigned to "indeterminate" cause, and the known limitations for the causes of interest.

### Capture-Recapture Methods

Used to estimate total mortality (or total cases) when no single source captures all events. The method compares overlap between two or more independent data sources to estimate the total number of events, including those missed by all sources.

**Two-source capture-recapture**: If Source A captures a events, Source B captures b events, and c events appear in both sources:
Estimated total = (a × b) / c

**Assumptions**: Sources are independent (capture by one source does not affect capture by the other); the population is closed during the study period; all events have an equal probability of capture; events are correctly matched between sources.

**In evaluation**: Useful for estimating undercount in mortality reporting, disease surveillance, or case detection. For example, comparing facility death records with community-based death reporting to estimate total deaths in a catchment area. Violation of assumptions (especially independence) is common and biases results — discuss these limitations explicitly.

For Advanced users: Multi-source capture-recapture using log-linear models relaxes the independence assumption. Bayesian approaches can incorporate prior information about capture probabilities.

### Excess Mortality Estimation

Compares observed mortality during a period of interest (crisis, programme period) with expected mortality based on historical trends or a comparison population.

**Excess deaths** = Observed deaths − Expected deaths

**Expected mortality estimation**: Project historical mortality trends forward using time-series models, demographic projections, or average pre-crisis rates. The choice of baseline period and projection method significantly affects the estimate.

**When evaluators use this**: Evaluating the mortality impact of crises (epidemics, conflict, famine); evaluating whether a programme reduced mortality below what would have been expected; retrospective assessment of health system performance during shocks.

**Limitations**: Sensitive to the choice of baseline and projection model; requires reliable historical mortality data; cannot attribute excess mortality to specific causes without additional data.

### Specific Measurement Challenges

**Maternal mortality**: Rare event (even in high-burden settings, maternal deaths are infrequent relative to total births), subject to misclassification (distinguishing maternal from non-maternal deaths requires clinical information often unavailable), and affected by the denominator (live births vs. total births vs. pregnancies). Measuring change in maternal mortality at subnational or programme level typically requires very large samples or alternative approaches (process indicators as proxies, facility-based maternal death surveillance and response — MDSR).

**Neonatal mortality**: The measurement window matters — deaths in the first 28 days of life are classified as neonatal, but distinguishing neonatal from stillbirth requires accurate assessment of signs of life at birth. In settings without skilled birth attendance, misclassification between stillbirth and early neonatal death is common. Perinatal mortality (stillbirths + early neonatal deaths) may be a more reliable indicator in some settings.

**Mortality in mobile and displaced populations**: Standard household-based surveys may miss deaths in highly mobile populations. Dissolved households (where all members have died or dispersed) are systematically missed, leading to underestimation. In displacement settings, define the population and recall period carefully, and consider event-based approaches (tracking specific displacement events).

---

## 6. Surveillance Data for Evaluation

### Types of Surveillance

**Passive surveillance**: Health facilities and reporting units routinely report cases to the surveillance system. The backbone of national disease surveillance. Coverage depends on health-seeking behaviour and reporting compliance. Typically underestimates true incidence.

**Active surveillance**: Surveillance officers actively seek out cases through facility visits, community surveys, or laboratory screening. More complete but more expensive and typically limited in geographic scope.

**Sentinel surveillance**: A network of selected sites (sentinel sites) conducts enhanced surveillance for specific conditions. Provides higher-quality data from selected locations but is not nationally representative. Common for HIV (ANC sentinel surveillance), influenza, and antimicrobial resistance.

**Syndromic surveillance**: Monitors symptom patterns (syndromes) rather than confirmed diagnoses. Used for early detection of outbreaks and in settings where laboratory confirmation is limited.

**Event-based surveillance**: Captures reports of unusual health events from formal and informal sources (media, community reports). Complements indicator-based surveillance for early warning.

### Using Surveillance Data as Evaluation Outcome Data

Surveillance data can serve as evaluation outcome data (e.g., tracking malaria incidence before and after a net distribution programme) but require careful assessment.

**Opportunities**: Continuous temporal coverage (weekly/monthly data points); defined geographic coverage; standardised case definitions (in principle); enables ITS and trend analysis; low marginal cost.

**Limitations**:
- **Reporting completeness**: Not all cases present to health facilities; not all presenting cases are correctly diagnosed; not all diagnosed cases are reported. Changes in any of these steps during the evaluation period can create artefactual trends.
- **Case ascertainment bias**: If the programme improves diagnostic capacity or health-seeking behaviour, apparent increases in incidence may reflect better detection rather than true increases. This is one of the most common misinterpretations in health programme evaluation.
- **Representativeness**: Surveillance captures only cases that enter the health system. Populations with low access are systematically underrepresented.
- **Data quality**: Variable across sites and over time. Requires the same quality assessment as HMIS data (see HSS sub-skill Section 3.3).

**Guidance for evaluators**: When using surveillance data for evaluation, always assess and report whether changes in case detection, diagnostic practices, reporting completeness, or health-seeking behaviour could explain observed trends before attributing them to the programme. Plot reporting completeness alongside the outcome indicator over the evaluation period. If completeness changed substantially, adjust for it or flag the finding as unreliable.

### Integrated Disease Surveillance and Response (IDSR)

IDSR is the standard surveillance framework in Africa, integrating reporting for priority diseases into a single system. IDSR data are available through DHIS2 in many countries and can be used for evaluation, subject to the same quality caveats. Key quality indicators: timeliness of reporting, completeness of reporting, and proportion of suspected cases with laboratory confirmation.

---

## 7. Routine Health Information Systems as Epidemiological Data

### Deriving Epidemiological Indicators from HMIS/DHIS2 Data

HMIS data are facility-based service delivery data. They record what happens at facilities — visits, diagnoses, treatments, referrals, commodity dispensed. Converting these into epidemiological indicators requires additional steps:

**Incidence estimation from facility data**: Facility-reported cases / Estimated catchment population. This is not true population incidence — it is facility-based incidence, which systematically underestimates population incidence (misses cases that do not present to facilities) and may overestimate it in some scenarios (if patients come from outside the defined catchment area, or are counted multiple times).

**Coverage estimation**: Services delivered (numerator from HMIS) / Target population (denominator from population projections). Coverage estimates from HMIS are only as good as the denominator. If the denominator is inflated (outdated census), coverage appears lower. If deflated, coverage appears higher — and can exceed 100%, which is a common data quality flag.

**Utilisation rates**: Total facility visits / Estimated population. A measure of health-seeking behaviour and access, not disease incidence.

### The Denominator Problem

Facility-based data lack inherent population denominators. The number of malaria cases treated at a health centre cannot be converted to a population incidence rate without knowing the population served. Approaches to the denominator problem:

**Census projections**: The most common approach. Use national census data projected forward using assumed growth rates. Limitations: projections become less accurate over time, especially in areas with high migration, displacement, or rapid urbanisation. In many LMIC settings, census data are 10+ years old.

**Catchment area estimation**: Define each facility's catchment population based on geographic boundaries, administrative units, or distance thresholds. Problems: catchment areas overlap, patients cross boundaries, and catchment definitions may not reflect actual care-seeking patterns.

**Survey-derived denominators**: Use DHS or MICS data on health-seeking behaviour to estimate the proportion of cases that present to facilities, and back-calculate population estimates. Data-intensive and assumption-heavy, but can cross-validate other denominator approaches.

**Recommendation for evaluators**: Always report the denominator source, its vintage, and its limitations. When comparing HMIS-derived rates across areas or over time, assess whether denominator changes (not just numerator changes) could explain observed trends. If possible, triangulate HMIS-derived rates with survey-based estimates (DHS/MICS) for the same indicators.

### Adjusting for Health-Seeking Behaviour

Facility-based incidence is a function of both true incidence and health-seeking behaviour. If health-seeking behaviour changes during the evaluation period — because of improved access, reduced user fees, community mobilisation, or seasonal patterns — apparent changes in facility-based incidence may reflect utilisation changes rather than true epidemiological trends.

**Adjustment approaches**:
- Monitor total outpatient utilisation alongside disease-specific indicators. If both increase proportionally, a utilisation effect is likely.
- Use community-based surveys to estimate the proportion of cases seeking care at facilities. If this proportion changes over time, facility-based rates are not comparable.
- Apply a test positivity rate approach (for conditions with laboratory confirmation): if the proportion of tests that are positive (e.g., malaria test positivity rate) changes while total testing volume increases, the positivity rate may be a better indicator of true incidence trends than the number of confirmed cases.

---

## 8. Survey Methods for Health Evaluation

### Cluster Survey Methodology

Most health surveys in LMIC settings use multi-stage cluster sampling. Evaluators need to understand the implications for design, analysis, and interpretation.

**Two-stage cluster sampling (standard)**:
1. First stage: Select clusters (enumeration areas, villages, health facility catchment areas) using probability proportional to size (PPS). The probability of selection is proportional to the population of each cluster.
2. Second stage: Within selected clusters, select households using systematic random sampling, random walk, or complete enumeration of small clusters.

**WHO EPI cluster survey methodology**: Originally developed for estimating immunisation coverage. The classic 30×7 design (30 clusters × 7 households) has been updated. Current WHO guidance recommends calculating sample size based on expected coverage, desired precision, design effect, and non-response rate rather than using fixed cluster sizes.

### Sample Size Calculations for Health Indicators

Health survey sample sizes must account for:

**Design effect (DEFF)**: The ratio of the variance under cluster sampling to the variance that would be obtained under simple random sampling of the same size. Cluster sampling inflates variance because individuals within clusters tend to be more similar to each other than to the general population. DEFF depends on the intracluster correlation coefficient (ICC) and the cluster size.

DEFF = 1 + (cluster size − 1) × ICC

Typical DEFFs in health surveys range from 1.5 to 3.0. Higher for indicators that cluster geographically (wealth, sanitation) and lower for individual-level behaviours. Use DEFF from previous surveys in similar settings when available; default to 2.0 if no prior data exist.

**ICC (Intracluster Correlation Coefficient)**: Measures the degree of similarity within clusters. An ICC of 0 means individuals within clusters are no more similar than across clusters (DEFF = 1). An ICC of 1 means all individuals within a cluster are identical (maximum DEFF).

**Non-response adjustment**: Inflate the calculated sample size by the expected non-response rate (typically 5-15% for household surveys).

**Subgroup analysis**: If the evaluation requires estimates by subgroup (region, sex, age group, wealth quintile), the sample must be sufficient for each subgroup — not just the total. This often requires larger samples than initially expected.

**Key formulas**:

For estimating a proportion (coverage, prevalence):
n = DEFF × Z² × p(1−p) / d²
Where Z = z-score for desired confidence level (1.96 for 95%), p = expected proportion, d = desired precision (half-width of confidence interval).

For comparing two proportions (programme vs. comparison):
n per group = DEFF × (Z_α + Z_β)² × [p₁(1−p₁) + p₂(1−p₂)] / (p₁ − p₂)²
Where Z_α = z-score for significance level, Z_β = z-score for statistical power, p₁ and p₂ = expected proportions in each group.

For Foundation users: Provide the sample size calculation with all parameters filled in. Explain that cluster sampling requires larger samples than random sampling "because people in the same community tend to be similar to each other."

For Practitioner users: Walk through the calculation, discuss parameter choices (expected proportion, design effect, precision), and flag the sensitivity of the sample size to these choices.

For Advanced users: Discuss optimal allocation across clusters and strata, finite population corrections, sample size for complex indicators (ratios, rates), and simulation-based sample size estimation.

### Recall Bias and Measurement Error

**Recall periods for health surveys**:
- Acute illness (fever, diarrhoea, ARI): 2-week recall period (standard in DHS/MICS). Longer periods produce systematic underestimation.
- Health service utilisation: Event-dependent. Last pregnancy/delivery can be recalled with reasonable accuracy. General outpatient visits: 4-week recall maximum.
- Dietary intake: 24-hour recall (standard for dietary assessment) or 7-day food frequency. Longer periods are unreliable for specific foods.
- Major life events (births, deaths, migration): 12-month recall for frequency counts. Full birth histories can extend further but with increasing error.

**Telescoping**: Respondents move events forward in time (reporting events outside the recall window as if they occurred within it). More common for salient events. Can inflate estimates for short recall periods.

**Social desirability**: Respondents overreport desirable behaviours (exclusive breastfeeding, bednet use, handwashing) and underreport undesirable behaviours (alcohol use, unsafe sex). Consider indirect elicitation methods for sensitive topics (list experiments, randomised response — see PRAXIS `data-collection.md`).

### Biomarker Data in Evaluation

Biomarkers provide objective measurement that avoids self-report bias. Common biomarkers in health evaluation:

| Biomarker | What it Measures | Collection | Considerations |
|---|---|---|---|
| Dried blood spot (DBS) | HIV status, viral load, immunity markers | Finger/heel prick, filter paper | Requires cold chain for some assays; ethical consent for HIV testing |
| Malaria rapid diagnostic test (RDT) | Current malaria infection | Finger prick | Point-of-care result; sensitivity varies by species and parasitaemia |
| Malaria microscopy | Parasite species and density | Blood smear | Gold standard but requires trained microscopist and quality assurance |
| Haemoglobin (Hb) | Anaemia status | Finger prick, portable photometer | Point-of-care; altitude adjustment needed; cut-offs vary by age/sex/pregnancy |
| Anthropometry | Nutritional status | Weight, height/length, MUAC | Requires calibrated equipment and standardised technique; see RMNCAH sub-skill |
| Blood pressure | Hypertension screening | Automated sphygmomanometer | Multiple readings required (typically 3); posture and rest period standardised |
| Blood glucose | Diabetes screening | Finger prick or venous sample | Fasting vs. random glucose; HbA1c preferred for population screening |

**Quality assurance for biomarker data**: Standardise collection protocols; train and certify data collectors; use duplicate measurements; conduct inter-observer reliability testing; document equipment calibration; maintain cold chain where required; implement external quality assessment for laboratory-processed samples.

### Lot Quality Assurance Sampling (LQAS)

LQAS classifies small areas (supervision areas) as meeting or not meeting a coverage threshold, using small samples (typically 19 per area). It does not produce precise coverage estimates — it provides a binary classification (above or below a decision rule).

**When useful in evaluation**: Rapid assessment of whether programme coverage targets are met across multiple areas; identifying underperforming areas for targeted action; monitoring during implementation. Not a substitute for a full coverage survey when precise estimates are needed.

**Design**: Select 19 (or similar small number) individuals per supervision area using random or systematic sampling. Count the number with the outcome (e.g., vaccinated). Compare to the decision rule derived from the upper and lower thresholds. Classify the area accordingly.

**Limitations**: Small sample per area means individual area estimates have wide confidence intervals. LQAS is a classification tool, not an estimation tool. Aggregating across supervision areas can improve precision for higher-level estimates.

---

## 9. Epidemiological Study Designs in Evaluation Context

This section bridges epidemiological and evaluation design logic. It does not duplicate the full design descriptions in PRAXIS `evaluation-designs.md` but shows how classic epidemiological designs map to evaluation questions.

### Cohort Approach in Evaluation

Following a defined group of programme beneficiaries over time to measure outcomes. Epidemiologically, this is a prospective cohort with the programme as the exposure.

**When used**: Treatment programme evaluation (ART cohort, TB treatment cohort), longitudinal tracking of programme participants, measurement of attrition and loss to follow-up.

**Key epidemiological considerations**:
- **Loss to follow-up (LTFU)**: If LTFU is differential (sicker or poorer participants are more likely to drop out), remaining participants overestimate programme success. Always report LTFU rates and assess whether those lost differ systematically from those retained.
- **Survival analysis**: When the outcome is time-to-event (time to treatment failure, time to dropout, time to death), use Kaplan-Meier curves and Cox regression rather than simple proportions (see Section 11).
- **Competing risks**: If a participant dies of a non-programme-related cause, they can no longer experience the programme outcome. Standard survival analysis censors these events, which can bias estimates. Competing risk models (Fine-Gray) are more appropriate when competing events are common.

### Case-Control Logic in Evaluation

Comparing cases (individuals with a poor outcome) with controls (individuals without the outcome) to identify factors associated with the outcome. The direction is from outcome back to exposure/programme participation.

**When used in evaluation**: Maternal death reviews (comparing women who died with matched survivors to identify system failures); neonatal death audits; investigation of programme failures (why did some beneficiaries not achieve the outcome?).

**Key considerations**: Selection of controls must avoid selection bias (controls should come from the same source population as cases). Matching controls on key confounders (age, facility, timing) improves efficiency. Analysis uses conditional logistic regression for matched designs.

### Cross-Sectional Surveys

Point-in-time assessment of both exposure (programme participation) and outcome (health status) simultaneously. The dominant design for health programme baseline and endline surveys.

**Epidemiological limitation**: Cross-sectional data cannot establish temporal sequence (did the programme precede the outcome?). Prevalence, not incidence, is measured. Associations may reflect reverse causation (healthier people are more likely to participate) or survivorship bias (sicker participants have died and are not in the sample).

**Mitigations in evaluation**: Combine cross-sectional surveys at two time points (baseline–endline) to infer change. Use recall questions to establish temporal sequence (with recall bias caveats). Supplement with longitudinal programme monitoring data.

### Ecological Studies

Comparing population-level indicators (e.g., district-level mortality rates, coverage estimates) across areas with different levels of programme exposure.

**When used**: Large-scale programme evaluations using aggregate data (HMIS, DHS, census data) to compare programme and non-programme areas at the population level.

**The ecological fallacy**: Associations observed at the group level do not necessarily hold at the individual level. A district with higher programme coverage and lower mortality does not prove that programme beneficiaries had lower mortality — the association may be driven by other district-level factors (wealth, urbanisation, infrastructure). Always flag this limitation. Ecological designs provide suggestive evidence and are useful for hypothesis generation, not causal inference.

---

## 10. Outbreak Investigation as Evaluation Data

### When Outbreaks Generate Evaluation-Relevant Data

Outbreaks can serve as natural evaluation indicators:

- **Vaccine-preventable disease outbreaks** (measles, cholera, yellow fever): An outbreak may indicate programme failure — low coverage, cold chain breakdown, or missed populations. The outbreak itself becomes evidence for the evaluation.
- **Outbreak response performance**: How quickly and effectively the health system detected and responded to the outbreak is evidence of system capacity — directly relevant to HSS evaluations, particularly for surveillance and emergency preparedness components.
- **Antimicrobial resistance patterns**: Outbreaks of resistant organisms in healthcare settings indicate infection prevention and control failures — relevant for quality of care evaluation.

### Key Epidemiological Concepts for Evaluators

Evaluators do not typically conduct outbreak investigations, but they need to interpret outbreak data when it appears in their evaluation evidence base.

**Case definition**: The standardised criteria for classifying an individual as a case. Includes clinical criteria, laboratory criteria, and epidemiological linkage. Cases are classified as suspected, probable, or confirmed based on evidence strength. When interpreting outbreak data, always check whether the case definition changed during the outbreak (widening or narrowing the definition affects case counts).

**Attack rate**: Cumulative incidence in the context of the outbreak. Attack rate = Number of cases / Population at risk during the outbreak period. The denominator must be the population at risk, not the total population.

**Line listing**: A structured table listing each case with demographic, clinical, and epidemiological information. The primary data management tool for outbreaks. Evaluators may encounter line lists as data sources.

**Epidemic curve**: A histogram of case counts by date of onset. The shape reveals the mode of transmission (point source, propagated, intermittent), the incubation period, and the trajectory of the outbreak. Evaluators should be able to interpret an epidemic curve to understand the outbreak context.

**Secondary attack rate**: Cases among contacts of primary cases / Total contacts exposed. Useful for evaluating the effectiveness of contact tracing, isolation, and infection prevention measures.

---

## 11. Analytical Considerations Specific to Health Data

### Survival Analysis

When the outcome is time-to-event (time to death, treatment failure, dropout, recovery), standard methods (proportions, means) are inappropriate because they cannot handle censoring — participants who have not yet experienced the event by the end of observation.

**Kaplan-Meier method**: Non-parametric estimation of the survival function (probability of surviving beyond each time point). Produces a survival curve that accounts for censoring. Compare curves between groups using the log-rank test.

**When to use in evaluation**: ART programme evaluation (time to viral suppression, time to treatment failure), TB treatment outcomes (time to cure, time to death), cohort follow-up studies, any programme evaluation measuring time-to-event outcomes.

**Cox proportional hazards regression**: Semi-parametric model estimating the effect of covariates on the hazard rate. Produces hazard ratios (HR). Assumes proportional hazards — the ratio of hazard rates between groups is constant over time. Test this assumption (Schoenfeld residuals, log-log plots). If violated, consider time-varying covariates, stratified Cox models, or parametric alternatives.

For Foundation users: Explain survival analysis as a method for answering "how long until...?" questions while accounting for the fact that "not everyone has been followed for the same amount of time." Use Kaplan-Meier curves as a visual tool.

For Practitioner users: Use Kaplan-Meier and Cox regression for programme cohort data. Know how to interpret hazard ratios and check the proportional hazards assumption.

For Advanced users: Competing risks models (Fine-Gray subdistribution hazard), frailty models for clustered survival data, parametric survival models (Weibull, exponential), and interval-censored data (common when follow-up visits are periodic rather than continuous).

### Competing Risks

When measuring one cause of death or one type of event in the presence of other events that preclude the outcome of interest. Standard survival analysis censors competing events, which can bias the cumulative incidence estimate of the event of interest.

**Example in evaluation**: An HIV treatment programme evaluation measuring time to AIDS-related death. If patients die of non-AIDS causes, standard Kaplan-Meier overestimates the probability of AIDS-related death. The Fine-Gray model estimates the subdistribution hazard, accounting for competing risks.

**When it matters**: When competing events are common relative to the event of interest; when the evaluation needs to report cause-specific outcomes (not just all-cause mortality).

### Zero-Inflated and Overdispersed Count Data

Health facility data often contain more zeros than expected under standard count distributions (Poisson). For example: many facilities report zero maternal deaths in a month (because maternal death is rare), but a few report multiple deaths. Standard Poisson regression underestimates the variance and produces misleadingly narrow confidence intervals.

**Solutions**:
- **Negative binomial regression**: Handles overdispersion (variance > mean) by adding a dispersion parameter. The default first-line alternative to Poisson when overdispersion is detected.
- **Zero-inflated models (ZIP, ZINB)**: Model the excess zeros as a separate process from the count process. Conceptually, there are two groups: facilities where the event cannot occur (structural zeros) and facilities where it can occur but may or may not (sampling zeros). Use when there is a theoretical reason for excess zeros.

**Detection**: Compare the observed proportion of zeros to the Poisson-predicted proportion. Test for overdispersion using the likelihood ratio test (Poisson vs. negative binomial) or the Cameron-Trivedi test.

### Spatial Analysis

Health outcomes are spatially structured — disease clusters, geographic variation in coverage, distance decay in service utilisation. Evaluators may encounter spatial analysis in several forms:

**Disease mapping**: Smoothed maps of disease incidence or mortality by area. Useful for identifying geographic patterns and high-burden areas. Bayesian spatial models (BYM model) smooth unstable estimates in areas with small populations.

**Cluster detection**: Identifying statistically significant clusters of high (or low) disease rates. SaTScan is the most widely used tool (spatial, temporal, and space-time scan statistics). In evaluation, cluster detection can identify areas where the programme had differential effects.

**Geographic variation in programme outcomes**: Mapping programme outcome indicators by area and assessing whether variation correlates with programme implementation intensity, contextual factors, or distance to services. Spatial regression (geographically weighted regression) can assess spatially varying associations.

For Foundation and Practitioner users: Be able to interpret disease maps and cluster analysis outputs. Know that geographic proximity creates correlation in health data (Tobler's First Law: "everything is related to everything else, but near things are more related than distant things"), which affects statistical inference if not accounted for.

For Advanced users: Discuss spatial autocorrelation (Moran's I), spatial regression models, geostatistical methods for continuous spatial data, and the Modifiable Areal Unit Problem (MAUP).

### Seasonality

Many health indicators show strong seasonal patterns — malaria incidence peaks during rainy seasons, respiratory infections peak during cold seasons, nutrition indicators worsen during lean seasons, and health service utilisation fluctuates seasonally.

**Why seasonality matters for evaluation**: If the evaluation compares data collected at different times of year (e.g., baseline in the dry season, endline in the rainy season), seasonal variation may be mistaken for programme effects or may mask real effects.

**Adjustments**:
- **Same-season comparison**: Collect baseline and endline data at the same time of year. The simplest and most robust approach.
- **Seasonal adjustment in ITS**: When using monthly/quarterly time-series data, include seasonal terms (harmonic terms: sine and cosine functions of time, or monthly dummy variables) in the ITS regression to separate seasonal patterns from intervention effects.
- **Year-on-year comparison**: Compare the same month/quarter across years rather than different months within a year.

Always report the timing of data collection and assess whether seasonal effects could influence findings.
