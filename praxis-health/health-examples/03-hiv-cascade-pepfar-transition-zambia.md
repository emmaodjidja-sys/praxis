# Worked Example: HIV Treatment Cascade Evaluation for PEPFAR Transition in Zambia

## Scenario

PEPFAR is transitioning its HIV programme support in Zambia toward greater partner government responsibility. PEPFAR Zambia has requested an evaluation of the current state of the HIV treatment cascade in 8 high-burden provinces, focusing on identifying where the largest cascade gaps remain, what explains geographic variation in cascade performance, and which programme components are most and least ready for government transition. The evaluation will inform the COP planning process. Available data include: ZAMPHIA (Zambia Population-Based HIV Impact Assessment) from 2021, HMIS/DHIS2 facility data, PEPFAR MER indicator data, SmartCare electronic patient records, and the Sustainability Index and Dashboard (SID) scores. Budget is $400K, timeline is 6 months.

## Sub-Skills Exercised

- Disease Programme Evaluation (primary — HIV cascade, 95-95-95, key populations, PMTCT)
- Epidemiological Methods (prevalence vs. incidence, cohort analysis, LTFU, surveillance data interpretation)
- HSS Evaluation (health workforce, supply chain, data systems assessment)
- Implementation Science (sustainability assessment, adoption, CFIR for transition readiness)
- Donor Frameworks (PEPFAR MER indicators, SID, COP planning)

---

## Evaluation Design

### Evaluation Purpose

Summative-formative: Assess current cascade performance (summative) and generate actionable recommendations for COP planning and transition strategy (formative).

### Evaluation Questions

**EQ1**: What is the current state of the HIV treatment cascade (first, second, and third 95) nationally and by province, and where are the largest absolute gaps?

**EQ2**: What patient, facility, and system-level factors explain geographic variation in cascade performance across the 8 provinces?

**EQ3**: To what extent are critical HIV programme functions (testing, treatment, viral load monitoring, supply chain, data systems) ready for transition to government management?

**EQ4**: Which populations are being left behind in the cascade, and what are the barriers to reaching them?

### Methodology

#### Cascade Analysis (EQ1)

Construct the treatment cascade at national and provincial level using multiple data sources:

**First 95 (diagnosis)**:
- Numerator: Estimated number of PLHIV who know their status. Derived from ZAMPHIA self-report of prior HIV diagnosis, validated with biomarker (ARV detection in blood among those not reporting ART use).
- Denominator: Estimated total PLHIV. From Spectrum/EPP modelled estimates, validated against ZAMPHIA prevalence data.
- Supplement with MER indicator HTS_TST_POS (number testing positive) to assess recent testing trends and yield by modality.

**Second 95 (treatment)**:
- Numerator: Number currently on ART. From SmartCare patient records (deduplicated), cross-validated with MER TX_CURR and HMIS ART registers.
- Denominator: Estimated number diagnosed. From first 95 numerator.
- Assess linkage: Time from positive test to ART initiation (from SmartCare). Proportion initiating ART within 7 days of diagnosis (MER TX_NEW / HTS_TST_POS proxy, with caveats about denominators).

**Third 95 (viral suppression)**:
- Numerator: Number with viral load <1000 copies/ml among those with a VL result. From SmartCare/laboratory information system.
- Denominator: Number on ART with a VL test in the past 12 months.
- Assess VL testing coverage: Proportion of TX_CURR with a VL result (MER TX_PVLS denominator / TX_CURR). Where VL testing coverage is low, the third 95 numerator is upwardly biased (those tested may be a non-random subset).

**Combined cascade**: Calculate the proportion of all estimated PLHIV who are virally suppressed (product of the three stages). Present cascade diagrams nationally and by province, with absolute numbers at each stage showing where the largest gaps (in absolute terms) exist.

**Data quality assessment**: Before constructing the cascade, assess data quality:
- SmartCare: Deduplication quality, completeness of viral load records, LTFU coding accuracy
- HMIS/DHIS2: Reporting completeness by facility and province
- MER data: Consistency between MER and HMIS (MER data are often more complete because PEPFAR-supported sites have dedicated M&E staff)
- ZAMPHIA: Survey design, response rates, biomarker refusal rates, weighting

#### Cross-Provincial Analysis (EQ2)

**Quantitative**: Construct province-level cascade indicators and correlate with potential explanatory variables: facility density, ART site density, health workforce per capita, stockout rates (from LMIS), testing modality mix, urban/rural ratio, poverty indicators, distance to services, and PEPFAR investment intensity per PLHIV.

Use multiple regression or QCA to identify which combinations of factors are associated with better cascade performance. QCA is appropriate given the small number of provinces (8 cases) — too few for stable regression but sufficient for set-theoretic analysis.

**Qualitative**: Conduct CFIR-informed KIIs and FGDs in 4 purposively selected provinces (2 high-performing, 2 low-performing on the cascade) to understand the implementation context:
- Provincial health directors and HIV coordinators
- Facility-level ART providers and data clerks
- Community health workers and peer educators
- PLHIV support group members
- PEPFAR implementing partner staff

Code to CFIR inner setting constructs (leadership engagement, implementation climate, available resources) and process constructs (executing, reflecting and evaluating). Identify which CFIR constructs distinguish high-performing from low-performing provinces.

#### Transition Readiness Assessment (EQ3)

Assess readiness across five programme functions, using the PEPFAR Sustainability Index and Dashboard (SID) as the starting framework, supplemented by primary data:

**Service delivery**: Government facility capacity to maintain ART services (staffing, clinical protocols, quality assurance) without PEPFAR-funded implementing partner support. Assess through facility readiness checklist and KIIs.

**Supply chain**: Government capacity to forecast, procure, and distribute ARVs and test kits. Assess stockout trends, LMIS functionality, and reliance on PEPFAR-funded supply chain versus government systems.

**Laboratory/viral load**: Government laboratory network capacity for viral load testing (equipment, reagents, sample transport, turnaround time). Assess what proportion of VL testing infrastructure is PEPFAR-funded versus government-funded.

**Data systems**: SmartCare sustainability (hosting, maintenance, technical support). HMIS/DHIS2 capacity to absorb HIV programme data currently in parallel PEPFAR systems. Assess government IT staffing and budget.

**Financing**: Government health budget allocation for HIV. Current co-financing levels. Gap between PEPFAR expenditure and government capacity to absorb. Analyse using national health accounts data and programme budget documents.

For each function, rate transition readiness as: ready (can transition now with minimal disruption), partially ready (can transition with defined support and timeline), or not ready (critical gaps that would cause service disruption).

#### Equity and Left-Behind Populations (EQ4)

**Cascade disaggregation**: Disaggregate the cascade by sex, age group (15-24, 25-34, 35-49, 50+), urban/rural, and province. Identify subgroups with the largest cascade gaps.

**Key populations**: Assess cascade performance among key populations (sex workers, MSM, people who inject drugs) using available programme data (KP_PREV, PP_PREV) and any key population-specific surveys. Acknowledge data limitations — routine data systems do not capture key population status, so assessment relies on key population-specific programme data and service delivery records.

**Men and young people**: ZAMPHIA and programme data consistently show that men (particularly ages 25-34) and young women (ages 15-24) have the largest cascade gaps. Conduct targeted qualitative inquiry into barriers for these groups: stigma, distance, economic barriers, service delivery preferences.

### Limitations

- The cascade combines data from different sources with different reference periods (ZAMPHIA 2021, MER quarterly, SmartCare continuous). Some indicators may not be directly comparable.
- LTFU from ART is a major data quality issue — patients coded as LTFU may have died, transferred, or silently transferred to another facility. Without active tracing, the second 95 numerator may be overestimated (if LTFU patients are still counted as TX_CURR) or underestimated (if they transferred and are counted at another facility).
- Province-level analysis (n=8) limits the statistical power of quantitative comparisons. QCA and qualitative analysis are more appropriate than regression for this number of cases.
- Key population data are incomplete. Programme data capture only those accessing services, not the total estimated key population.
- Transition readiness is inherently prospective and involves judgement. Triangulate across multiple informants and data sources.

### Reporting

**PEPFAR-specific outputs**:
- Cascade summary aligned with MER indicators (TX_CURR, TX_NEW, TX_PVLS, HTS_TST, HTS_TST_POS) with provincial disaggregation
- Transition readiness scorecard for each programme function by province
- Recommendations mapped to COP planning categories (service delivery, above-site, systems)
- SID-aligned sustainability assessment

**Ministry of Health outputs**:
- Provincial cascade profiles with actionable recommendations for provincial health directors
- Health system readiness assessment with specific gap-filling recommendations

**Presentation**: COP planning presentation (20 slides) for PEPFAR country team and MoH leadership, focusing on cascade gaps, transition readiness findings, and prioritised recommendations.

### Ethical Considerations

- No primary data collection from PLHIV patients (uses existing programme data and community-level qualitative data)
- SmartCare data accessed under existing data sharing agreements; all patient-level data anonymised before analysis
- KII/FGD consent protocols for all primary data collection
- PLHIV support group participation is voluntary; facilitators trained in sensitive interviewing
- Findings on provincial performance presented constructively — focus on system-level explanations, not blame
