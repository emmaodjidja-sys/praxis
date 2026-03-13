# Worked Example: Evaluation Design for a Global Fund RSSH Grant in Mozambique

## Scenario

You are designing an independent evaluation of a 3-year Global Fund Resilient and Sustainable Systems for Health (RSSH) grant in Mozambique (2023-2026). The grant invested $18M across four modules: (1) HMIS strengthening including DHIS2 rollout to all district hospitals, (2) supply chain optimisation for HIV and malaria commodities, (3) community health worker programme expansion (adding 2,000 APEs — Agentes Polivalentes Elementares), and (4) health financing reform through introduction of performance-based financing in 40 districts. The evaluation is commissioned by the Country Coordinating Mechanism (CCM) ahead of the next funding request. The CCM wants evidence on whether the RSSH investments contributed to improved disease outcomes (HIV, TB, malaria) and what should be continued, modified, or dropped in the next grant cycle.

## Sub-Skills Exercised

- HSS Evaluation (primary — system-level ToC, building block assessment, PBF evaluation, HMIS quality)
- Disease Programme Evaluation (disease outcome indicators, cascades)
- Epidemiological Methods (routine data quality, ITS design, surveillance interpretation)
- Implementation Science (fidelity, adoption, CFIR for cross-district comparison)
- Donor Frameworks (Global Fund reporting, performance framework)

---

## Evaluation Design

### Evaluation Purpose and Scope

This is a summative evaluation assessing the contribution of the RSSH grant to health system strengthening and disease outcomes in Mozambique, with a formative component generating actionable recommendations for the next funding cycle.

**Primary evaluation users**: CCM, Global Fund Secretariat (for funding request), Ministry of Health (MISAU), Principal Recipient.

**Evaluation type**: Mixed-methods contribution analysis with embedded quasi-experimental components for the PBF module.

### Theory of Change

The grant operates through a systems-level ToC with four parallel investment pathways converging on intermediate system outcomes:

**HMIS pathway**: DHIS2 rollout → improved data completeness and timeliness → evidence-based decision-making at district level → better resource allocation → improved service delivery

**Supply chain pathway**: Logistics system optimisation → reduced stockout rates for HIV and malaria commodities → improved treatment continuity and case management quality → better disease outcomes

**CHW pathway**: APE expansion → increased community-level service delivery (malaria case management, TB referral, HIV testing referral, ANC promotion) → improved coverage and earlier care-seeking → better disease and RMNCAH outcomes

**PBF pathway**: Performance incentives at facility level → increased quantity and quality of priority services → improved coverage and quality → better health outcomes

**Cross-block interactions**: DHIS2 strengthening enables PBF verification (data needed to verify performance). Supply chain improvement enables CHW service delivery (APEs cannot treat malaria without RDTs and ACTs). PBF incentivises both data quality and service quality, reinforcing the HMIS pathway.

**Intermediate system outcomes**: Improved data reporting completeness, reduced commodity stockouts, increased service coverage (testing, treatment, prevention), improved clinical quality.

**Disease outcomes**: Improved HIV cascade performance (testing, linkage, viral suppression), improved TB case notification and treatment success, reduced malaria incidence and case fatality.

**Attribution gap**: The evaluation can credibly assess contribution to intermediate system outcomes. Contribution to disease outcomes is plausible but mediated by many factors outside the grant.

### Evaluation Questions

**EQ1 (Effectiveness — System Level)**: To what extent did the RSSH investments strengthen the targeted health system functions (HMIS, supply chain, community health, health financing)?

**EQ2 (Effectiveness — Disease Outcomes)**: To what extent did improvements in health system functions contribute to improved HIV, TB, and malaria programme performance?

**EQ3 (Implementation)**: How were the four RSSH modules implemented across districts, and what explains variation in implementation quality and outcomes?

**EQ4 (Efficiency)**: Were RSSH investments efficiently deployed? What was the cost of key outputs (cost per APE deployed, cost per facility in PBF, cost per DHIS2 site)?

**EQ5 (Sustainability)**: To what extent are the RSSH investments likely to be sustained after the grant period? Which investments are most and least sustainable?

**EQ6 (Equity)**: Did the RSSH investments reduce or widen equity gaps in service coverage and health outcomes across districts and population groups?

### Evaluation Matrix (Summary)

| EQ | Criteria | Key Indicators | Data Sources | Methods |
|---|---|---|---|---|
| EQ1 | Effectiveness (system) | DHIS2 reporting completeness, stockout rates, APE coverage, PBF coverage and payment timeliness | DHIS2 data, LMIS data, grant records, facility surveys | ITS analysis of routine data, facility assessment, KIIs |
| EQ2 | Effectiveness (disease) | HIV testing yield, ART retention, viral suppression, TB notification rate, treatment success, malaria incidence, test positivity | DHIS2 data, programme cohort data, PHIA data | ITS analysis, cascade analysis, contribution analysis |
| EQ3 | Implementation | Fidelity scores, adoption rates, barriers and facilitators by district | KIIs, FGDs, programme records, observation | CFIR-informed qualitative analysis, cross-district comparison |
| EQ4 | Efficiency | Unit costs by module, cost per output | Financial records, activity records | Ingredients-based costing, cost-efficiency analysis |
| EQ5 | Sustainability | Government co-financing, institutionalisation indicators, political commitment | Budget data, policy documents, KIIs | Sustainability assessment framework |
| EQ6 | Equity | Coverage and outcome indicators disaggregated by district wealth, urban/rural | DHIS2 data, DHS, facility surveys | Equity gap analysis, concentration indices |

### Methodology

#### Contribution Analysis (Overarching)

The evaluation uses contribution analysis as the overarching causal framework. For each RSSH module:
1. Articulate the specific causal claim (e.g., "DHIS2 rollout contributed to improved data quality")
2. Assess the evidence for each link in the ToC
3. Assess alternative explanations (concurrent investments, secular trends, policy changes)
4. Assemble a contribution story with a confidence assessment

#### Interrupted Time Series for System and Disease Indicators (EQ1, EQ2)

Use monthly DHIS2 data for system-level indicators (reporting completeness, stockout rates) and disease indicators (malaria incidence, test positivity, HIV testing volumes, TB notifications) to assess whether the grant period was associated with changes in level or trend.

**Prerequisites**: Conduct a data quality assessment using the WHO DQR framework before using DHIS2 data for ITS. Assess reporting completeness (threshold: ≥80%), internal consistency, and external consistency (compare with DHS/MICS where available). If data quality is insufficient for specific indicators or districts, exclude them from the ITS and flag the limitation.

**ITS specification**: Segmented regression with pre-grant (24+ months), implementation (36 months), and where possible post-grant segments. Include seasonal terms (harmonic functions for monthly data). Analyse at the national and provincial level. For the PBF module, compare PBF districts with non-PBF districts using a controlled ITS (DiD variant).

#### Difference-in-Differences for PBF (EQ1, EQ2)

The 40 PBF districts vs. remaining non-PBF districts provide a natural comparison. Use DiD with monthly facility-level DHIS2 data to estimate the effect of PBF on incentivised service indicators.

**Parallel trends assessment**: Test parallel trends in the 24 months before PBF introduction. If parallel trends do not hold, use matching (PSM on district characteristics) or synthetic control to improve comparability.

**Spillover assessment**: Assess whether non-incentivised services in PBF facilities changed (positive spillover from improved motivation, or negative spillover from distortion of effort).

#### CFIR-Informed Qualitative Assessment (EQ3)

Conduct KIIs and FGDs in a purposive sample of 8 districts (2 per province, selected for maximum variation on implementation intensity and context):
- District health management teams
- Facility managers and health workers in PBF and non-PBF facilities
- APEs and their supervisors
- DHIS2 focal points
- Community members

Code qualitative data to CFIR constructs (inner setting, outer setting, intervention characteristics, individual characteristics, process). Use cross-case analysis to identify which contextual and implementation factors distinguish high-performing from low-performing districts.

#### Costing (EQ4)

Ingredients-based costing of each module using grant financial records, supplemented by facility-level resource use data from the sampled districts. Calculate cost per key output: cost per APE deployed and supervised per year, cost per facility enrolled in PBF per year, cost per DHIS2 site established, cost per supply chain improvement unit. Present from the programme perspective with economic costs (including government contributions and donated resources).

#### Sustainability Assessment (EQ5)

Structured assessment across four dimensions:
- **Financial**: Government health budget trends, co-financing commitments, domestic resource mobilisation for each module
- **Institutional**: Integration into MISAU organigram, standard operating procedures, job descriptions, training curricula
- **Technical**: Local capacity to maintain DHIS2, manage supply chain systems, supervise APEs, and administer PBF without external TA
- **Political**: Political commitment to each module, alignment with national health strategy, champion identification

Data sources: Budget analysis, policy document review, KIIs with MISAU officials and development partners.

### Limitations

- ITS analysis cannot rule out concurrent factors (other donor investments, policy changes, economic trends) as alternative explanations. Contribution analysis addresses this qualitatively.
- DiD for PBF assumes that PBF district selection was not based on pre-existing performance trends. Assess and report selection criteria.
- DHIS2 data quality varies across districts and may introduce measurement error into quantitative analyses.
- The evaluation timeframe captures implementation effects but may be too short to assess sustained disease outcome changes.
- Qualitative findings from 8 districts may not generalise to all 40 PBF districts or all provinces.

### Reporting

**Primary report**: Full evaluation report following UNEG standards, with findings organised by evaluation question. Include a synthesis section assessing cross-module interactions.

**Global Fund-specific outputs**: Performance framework assessment table (target vs. achieved for all grant indicators), contribution narrative linking RSSH investments to disease outcomes (required for funding request), and sustainability assessment aligned with Global Fund sustainability, transition, and co-financing requirements.

**Policy brief**: 4-page summary for CCM and MISAU decision-making.

**District feedback**: 2-page summaries for each sampled district, presented to district health management teams.

### Ethical Considerations

- Ethics approval from Mozambique National Bioethics Committee
- Informed consent for all KIIs, FGDs, and facility observations
- Data protection for patient-level data accessed through DHIS2 and cohort records (anonymisation, secure storage, restricted access)
- Conflict of interest management: evaluators must be independent of the PR and Global Fund Secretariat
- Do-no-harm: ensure evaluation activities do not disrupt service delivery at sampled facilities
