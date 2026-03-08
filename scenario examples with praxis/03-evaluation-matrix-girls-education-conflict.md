# Evaluation Design: Integrated Immunisation Strengthening and Outbreak Preparedness Programme

## Scenario

**Test prompt**: "We need an evaluation design for a 5-year, $45M Gavi-funded programme operating across Ethiopia, Mozambique, and Bangladesh. The programme has three components: (1) routine immunisation system strengthening at district level, including cold chain upgrades, health worker training, and community mobilisation through women's groups; (2) zero-dose child identification and catch-up vaccination using digitised microplanning and GIS mapping; and (3) outbreak preparedness and response capacity building, with simulation exercises and rapid response team training for cholera, measles, and meningitis. We're at the 3-year mark. Gavi wants an outcome evaluation with a value-for-money component. We have DHIS2 administrative data, a baseline household survey from Year 1 (n=4,800 per country), and WHO-UNICEF coverage estimates. The programme operates in 120 districts total (40 per country), with no randomisation at the start."

---

## Evaluation Design

### 1. Evaluation Purpose and Scope

This is a **summative outcome evaluation with a value-for-money component**, commissioned by Gavi at the 3-year mark of a 5-year programme. The evaluation serves dual purposes: accountability (is the investment producing results?) and learning (which components and delivery models are working, where, and why?).

The evaluation addresses all three programme components but treats them as an integrated package rather than three separate evaluations. Cross-component synergies (e.g., community mobilisation boosting both routine coverage and zero-dose identification) are analytically important.

### 2. Evaluation Questions

Organised by OECD-DAC criteria, with Gavi's value-for-money framework layered in:

**Relevance**
- EQ1: To what extent does the programme address the most critical barriers to immunisation coverage and outbreak preparedness in each country context?
- EQ2: How well has the programme adapted its design to the distinct health system architectures and epidemiological profiles across the three countries?

**Effectiveness**
- EQ3: To what extent has the programme contributed to increased routine immunisation coverage (DTP3, MCV1, MCV2) in target districts?
- EQ4: To what extent has the programme reduced the number of zero-dose children in target districts, and through which identification and outreach strategies?
- EQ5: Has outbreak preparedness capacity improved, as measured by simulation performance, response time to detected outbreaks, and outbreak containment outcomes?
- EQ6: What unintended effects (positive or negative) has the programme produced on the broader health system?

**Efficiency / Value for Money**
- EQ7: What is the cost per additional child vaccinated (cost-effectiveness) across the three countries and programme components?
- EQ8: How does the programme's cost-effectiveness compare with benchmarks from similar immunisation investments?

**Sustainability**
- EQ9: To what extent are programme-supported systems (cold chain, digital microplanning, community mobilisation structures, rapid response teams) likely to continue functioning after programme funding ends?

### 3. Evaluation Design

#### Overall Approach

A **mixed-methods contribution analysis** supplemented by quasi-experimental methods where data permits. The absence of randomisation and the system-wide nature of the intervention (district-level health system strengthening) rule out experimental designs. The availability of DHIS2 data across all districts, including non-programme districts, creates an opportunity for quasi-experimental comparison.

#### Quantitative Component

**Primary design: Difference-in-Differences (DiD)** using DHIS2 administrative data.

Rationale: DHIS2 provides monthly immunisation coverage data at the district level for both programme and non-programme districts across all three countries. This time-series structure supports a DiD design comparing trends in programme districts against non-programme districts.

Design elements:
- Treatment group: 120 programme districts (40 per country)
- Comparison group: Matched non-programme districts selected using baseline characteristics (coverage levels, poverty index, distance to health facilities, district population, urbanisation rate)
- Outcome variables: DTP3 coverage, MCV1 coverage, MCV2 coverage, dropout rate (DTP1-DTP3), zero-dose estimates
- Time periods: Monthly data from 24 months pre-programme through Year 3
- Matching: Use propensity score matching or coarsened exact matching at baseline to select the most comparable non-programme districts. Test parallel trends in the pre-programme period.
- Analysis: Two-way fixed effects with district and time fixed effects. Cluster-robust standard errors at the district level. Event study specification to test for pre-trends and dynamic treatment effects.

Validity considerations:
- **Parallel trends**: Test with event study plot. If trends diverge pre-programme, DiD is compromised and the evaluation should fall back to ITS within programme districts only.
- **DHIS2 data quality**: Administrative data may have reporting completeness issues. Adjust for reporting rates or restrict analysis to districts with consistent reporting above a threshold (e.g., 80%+).
- **Spillover**: Non-programme districts may benefit from programme activities (trained health workers transferring, supply chain improvements reaching neighbouring districts). This would attenuate estimated effects. Document and discuss.
- **Staggered rollout**: If districts joined the programme at different times, apply the newer DiD estimators (Callaway-Sant'Anna or Sun-Abraham) to avoid bias from heterogeneous treatment effects.

**Household survey (endline)**:

The baseline household survey (n=4,800 per country) provides individual-level data on vaccination status, access barriers, care-seeking behaviour, and socioeconomic characteristics that DHIS2 cannot capture.

- Endline survey with comparable design and instruments in programme districts
- Add a comparison arm: survey non-programme districts to enable individual-level DiD or cross-sectional comparison
- Recommended sample: n=2,400 per country in programme districts + n=1,200 per country in matched comparison districts. This provides 80% power to detect a 5-percentage-point coverage difference with a design effect of 2.0 for cluster sampling.
- Stratify by urban/rural and by programme component intensity (districts receiving all three components vs. one or two)
- Oversample zero-dose-eligible households using the programme's GIS microplanning data as a supplementary sampling frame

**Cost data collection**:

For the value-for-money component:
- Extract programme expenditure data by country, district, and component from financial records
- Collect unit costs for key inputs (cold chain equipment, training events, community mobiliser payments, simulation exercises)
- Use the household survey to estimate incremental vaccinated children attributable to the programme
- Calculate cost per additional fully immunised child (cost-effectiveness ratio)
- Benchmark against Gavi's cost-effectiveness thresholds and published estimates from similar programmes (Immunization Delivery Cost Catalogue)

#### Qualitative Component

**Purpose**: Explain the quantitative patterns. Understand how and why coverage changed (or didn't) in different contexts. Capture unintended effects and sustainability prospects.

**Design**: Comparative case studies in 3 districts per country (9 total), selected to represent:
- High-performing districts (coverage increased substantially)
- Moderate-performing districts (some improvement)
- Low-performing or stagnant districts (limited change despite programme presence)

**Data collection per case study site**:
- KIIs with district health management team, EPI officers, cold chain technicians, community health workers (8-12 per site)
- KIIs with programme staff and implementing partners (4-6 per site)
- FGDs with caregivers of children under 2, stratified by vaccination status: fully vaccinated, partially vaccinated, zero-dose (2-3 FGDs per site)
- FGDs with women's group members involved in community mobilisation (1-2 per site)
- Facility observation: cold chain functionality, stock levels, record-keeping at 3-5 health facilities per site
- Document review: district microplans, outreach session records, outbreak response reports

**Outbreak preparedness assessment**:
- Review simulation exercise reports and after-action reviews
- KIIs with rapid response team members and public health emergency officers
- Track actual outbreak response performance: time from detection to response, containment outcomes, case fatality rates for measles, cholera, and meningitis outbreaks during the programme period
- Compare with pre-programme response data where available

#### Integration Strategy

**Convergent design with joint display**: Quantitative and qualitative data collected in parallel, analysed separately, then integrated at interpretation.

Joint display matrix:

| Evaluation Question | Quantitative Finding | Qualitative Finding | Integrated Interpretation |
|---|---|---|---|
| EQ3: Coverage change | DiD estimate of coverage gain in programme vs. comparison districts | Case study evidence on what drove coverage changes: supply-side (cold chain, outreach), demand-side (community mobilisation), system (microplanning, supervision) | Which mechanisms drove the coverage gains? Do the qualitative patterns explain variation across districts and countries? |
| EQ4: Zero-dose reduction | Change in estimated zero-dose children using survey and DHIS2 data | Caregiver FGDs on barriers to access; community mobiliser accounts of identification strategies | Which identification strategies reached which types of zero-dose children? What barriers remain? |
| EQ7: Cost-effectiveness | Cost per additional vaccinated child by country and component | Qualitative evidence on implementation efficiency, waste, duplication, and local cost factors | Are cost differences across countries explained by context or by implementation choices? |

### 4. Analytical Framework

**Contribution analysis**: Build the programme's contribution story for each component:

Component 1 (routine immunisation strengthening):
- Theory: Training + cold chain + supervision -> improved service delivery -> increased coverage
- Test: Did coverage increase more in programme districts? Did trained facilities perform better? Did cold chain functionality improve?
- Alternative explanations: National immunisation campaigns, other donor investments, seasonal factors

Component 2 (zero-dose identification):
- Theory: Digital microplanning + GIS mapping + targeted outreach -> identification of unreached children -> catch-up vaccination
- Test: Did zero-dose estimates decline? Which identification methods reached which populations? Did digital tools improve microplanning accuracy?
- Alternative explanations: Population movement, improved general access, data quality improvements creating the appearance of decline

Component 3 (outbreak preparedness):
- Theory: Training + simulation exercises + team formation -> faster, more effective outbreak response -> reduced morbidity/mortality
- Test: Did response times improve? Did simulation scores improve? Were actual outbreaks better contained?
- Alternative explanations: No major outbreaks during the period (cannot test preparedness without events), external technical support during outbreaks

### 5. Ethical Considerations

- Ethical approval required in all three countries (national health research ethics committees)
- Informed consent for household survey and qualitative data collection
- For zero-dose households: sensitive data on vaccination refusal or missed opportunities must be handled carefully. Ensure survey does not create stigma or pressure.
- Data linkage between DHIS2 and survey data must be anonymised
- Outbreak response data involving case fatality rates requires careful handling and should not identify individual facilities or health workers in reporting
- Community entry protocols through district health authorities and local leaders

### 6. Limitations

- No randomisation: DiD relies on the parallel trends assumption, which may not hold if programme districts were selected based on characteristics that also affect coverage trajectories
- DHIS2 data quality varies across countries and districts; reporting completeness adjustments may introduce their own biases
- Three-year assessment of a five-year programme: some outcomes (sustainability, outbreak preparedness maturation) may not yet be observable
- Cost data quality from programme financial systems may be uneven across countries
- Attribution to specific components is difficult when all three operate simultaneously in the same districts

### 7. Timeline

| Phase | Duration |
|---|---|
| Inception (design finalisation, ethical approvals, instrument development) | Months 1-3 |
| DHIS2 data extraction and cleaning | Months 2-4 |
| Household survey (endline + comparison) | Months 4-7 |
| Qualitative fieldwork (9 case study sites) | Months 5-8 |
| Cost data collection | Months 4-6 |
| Quantitative analysis | Months 7-9 |
| Qualitative analysis | Months 8-10 |
| Integration, synthesis, and draft report | Months 10-12 |
| Stakeholder validation and finalisation | Months 12-13 |

### 8. Team Composition

- Team leader: Senior evaluator with immunisation programme evaluation experience and mixed-methods expertise
- Quantitative lead: Health economist or epidemiologist with DiD/panel data experience and DHIS2 familiarity
- Qualitative lead: Health systems researcher with multi-country qualitative experience
- Country researchers: One per country, with local health system knowledge and language capabilities
- Cost analyst: Health economist for the value-for-money component
- Data manager: For DHIS2 extraction, survey data management, and quality assurance
