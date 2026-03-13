# Worked Example: Cost-Effectiveness Analysis of a Maternal Health Quality Improvement Programme in Tanzania

## Scenario

A FCDO-funded maternal health programme in Tanzania (2022-2025, £12M) introduced a quality improvement (QI) collaborative across 120 health facilities in 6 regions. The QI collaborative used PDSA cycles targeting three clinical practices: active management of the third stage of labour (AMTSL), use of the partograph, and magnesium sulphate for pre-eclampsia/eclampsia. The programme also included mentorship visits, an SMS-based data feedback system, and district-level learning sessions every quarter. An endline evaluation using a stepped-wedge design (3 waves of 40 facilities each, 6 months apart) found that the QI programme significantly improved adherence to all three clinical practices and reduced institutional maternal case fatality from 1.8% to 0.9%. FCDO has requested a cost-effectiveness analysis as part of the final evaluation to inform the VfM assessment and potential scale-up to all regions.

## Sub-Skills Exercised

- Health Economics (primary — CEA methodology, costing, ICER, sensitivity analysis, scale-up costing)
- RMNCAH and Nutrition (maternal health quality indicators, EmOC, MDSR data)
- HSS Evaluation (quality improvement evaluation, facility assessment)
- Implementation Science (fidelity, RE-AIM dimensions)
- Epidemiological Methods (case fatality rates, mortality estimation, DALYs)
- Donor Frameworks (FCDO VfM 4E framework)

---

## Cost-Effectiveness Analysis

### Study Design

**Type**: Trial-based cost-effectiveness analysis conducted alongside the stepped-wedge evaluation.

**Perspective**: Primary analysis from the programme/provider perspective. Secondary analysis from the societal perspective (adding patient costs and productivity gains from averted maternal deaths).

**Comparator**: Standard care (pre-QI facility-level practice). The stepped-wedge design provides the comparator from control-period facilities.

**Time horizon**: 3 years (programme duration). Sensitivity analysis with a 10-year horizon using modelled outcomes (LiST) for sustained quality improvements.

**Discount rate**: 3% per year for both costs and outcomes (WHO-CHOICE standard). Sensitivity analysis at 0% and 5%.

**Outcome measures**: (1) Cost per maternal death averted, (2) Cost per DALY averted, (3) Cost per additional woman receiving quality EmOC (effective coverage measure).

### Costing

#### Cost Categories

**Programme costs (ingredients-based)**:

| Cost Category | Items | Data Source |
|---|---|---|
| QI collaborative management | National and regional QI coordinators, office costs, coordination | Programme financial records, salary scales |
| Mentorship | Mentor recruitment, training, transport, per diem, supervision of mentors | Programme records, mentor time logs |
| Learning sessions | Quarterly district learning sessions (venue, transport, facilitation, materials) | Event budgets, attendance records |
| SMS data feedback system | Platform development, SMS costs, data management | IT contracts, telecom invoices |
| Facility-level QI teams | Time of facility QI team members (opportunity cost), QI materials | Time allocation study at sampled facilities |
| Training | Initial QI methodology training, clinical refresher training | Training budgets, participant records |
| M&E | Evaluation costs, data collection, analysis | Evaluation budget |

**Health system costs (already incurred, not additional)**:

Existing facility staff time, existing drugs and supplies (oxytocin, magnesium sulphate, partographs). These are not additional programme costs but are needed for the societal perspective.

**Patient costs (societal perspective only)**:

Transport to facility, out-of-pocket payments, time costs. Collected through patient exit interviews at a subsample of facilities.

#### Costing Methods

Use ingredients-based costing for all programme costs. Collect resource use data from programme financial records (top-down for total expenditure) and from a subsample of 24 facilities (4 per region, bottom-up for facility-level costs including opportunity costs of staff time).

Value staff time using government salary scales. Value volunteer/donated time at the local unskilled wage rate. Annualise capital costs (vehicles, equipment) using straight-line depreciation. Adjust all costs to 2025 GBP using the Tanzania CPI and the Bank of England GBP deflator.

#### Scale-Up Cost Estimation

For the scale-up scenario (all regions in Tanzania), adjust programme costs:
- **Decrease**: Per-facility mentorship costs decrease as mentor-to-facility ratios improve with geographic density; learning session costs per facility decrease with more participants per session; M&E and management overhead is spread across more facilities
- **Increase**: Marginal cost of reaching remote facilities increases; additional mentor recruitment needed; national coordination complexity increases
- **Change in character**: Transition from project-funded coordinators to government-funded positions; TA costs decrease as local QI expertise develops

Present scale-up cost estimates with a range (optimistic, central, pessimistic) and explicit assumptions for each adjustment.

### Effectiveness

#### Maternal Deaths Averted

**From the evaluation**: The stepped-wedge analysis found a reduction in institutional maternal case fatality rate from 1.8% to 0.9% (adjusted OR 0.48, 95% CI 0.31-0.74). This translates to an estimated reduction of 0.9 maternal deaths per 100 women with direct obstetric complications treated at programme facilities.

**Estimating total deaths averted**: Number of women with major direct obstetric complications treated at the 120 facilities during the programme period (from facility records) × reduction in case fatality rate = estimated maternal deaths averted.

**Assumptions and limitations**: This estimate captures only facility-level deaths and only among women who reached a programme facility. It does not capture community-level mortality reduction (if QI improved referral practices and more women reached facilities alive) or mortality reduction from improved practices for uncomplicated deliveries. It also does not capture deaths among women who chose not to deliver at facilities. These limitations mean the estimate is likely conservative.

#### DALYs Averted

Calculate DALYs averted from maternal deaths averted:
- YLLs = Deaths averted × (Standard life expectancy at mean age of maternal death − Mean age of maternal death). Use WHO standard life table.
- YLDs = Estimated morbidity averted (near-miss cases averted) × Disability weight for severe maternal morbidity × Average duration. Near-miss cases estimated using the WHO near-miss criteria and facility records.

Total DALYs averted = YLLs + YLDs. Discount at 3% per year.

#### Effective Coverage

Calculate the increase in effective coverage of quality EmOC:
- Pre-QI: Proportion of women receiving all three target practices (AMTSL + partograph + MgSO4 where indicated) — from baseline clinical observation data
- Post-QI: Same proportion at endline
- Difference × number of women delivering at programme facilities = additional women receiving quality EmOC

### Results Presentation

#### ICER Calculation

ICER = (Total programme cost − Comparator cost) / (Outcomes with programme − Outcomes without programme)

Since the comparator is standard care with no additional programme cost, the incremental cost is the full programme cost. The incremental outcome is the deaths/DALYs averted.

Present three ICERs:
1. Cost per maternal death averted (most intuitive for programme managers)
2. Cost per DALY averted (comparable with published CEA evidence and thresholds)
3. Cost per additional woman receiving quality EmOC (process-level efficiency measure)

#### Sensitivity Analysis

**One-way**: Vary each major parameter across its plausible range. Key parameters: case fatality reduction (95% CI from the stepped-wedge analysis), programme cost (±20%), discount rate (0%, 3%, 5%), number of complications treated (±15%), disability weight for maternal morbidity. Present as tornado diagram.

**Scenario analysis**:
- Pessimistic: Upper bound of cost, lower bound of effectiveness, higher discount rate
- Optimistic: Lower bound of cost, upper bound of effectiveness, lower discount rate
- Scale-up: Adjusted costs at national scale, same effectiveness

**Probabilistic sensitivity analysis**: Assign distributions to all uncertain parameters (gamma for costs, beta for probabilities, lognormal for relative risks). Run 10,000 Monte Carlo iterations. Present as scatterplot on the cost-effectiveness plane and as a cost-effectiveness acceptability curve.

### Value for Money Assessment (FCDO 4E Framework)

**Economy**: Were inputs procured at reasonable cost? Compare mentor and coordinator salaries with government scales. Compare training and event costs with comparable programmes. Assess procurement efficiency.

**Efficiency**: What were the unit costs? Cost per facility in the QI collaborative per year. Cost per mentorship visit. Cost per PDSA cycle completed. Compare with published unit costs for QI programmes in similar settings.

**Effectiveness**: Did the programme achieve its intended outcomes? Report the stepped-wedge results: clinical practice adherence improvements, case fatality reduction, maternal deaths averted, DALYs averted. Present the ICER in context of published CEA evidence for maternal health interventions.

**Equity**: Was VfM equitable? Disaggregate coverage and outcome improvements by facility type (hospital vs. health centre), geography (urban vs. rural), and region. Assess whether the most disadvantaged facilities and populations benefited proportionally.

### Reporting

**CHEERS 2022 compliance**: Structure the CEA report following the CHEERS 2022 checklist. All 28 items addressed.

**FCDO outputs**: Full VfM section in the evaluation report structured around the 4E framework. Summary VfM statement suitable for Annual Review.

**Decision-relevant framing**: "The QI programme cost approximately £X per DALY averted, which compares favourably with other maternal health interventions in sub-Saharan Africa (DCP3 range: $X-$Y per DALY averted). At national scale, the programme would cost approximately £X per year and could avert an estimated X-Y maternal deaths annually."
