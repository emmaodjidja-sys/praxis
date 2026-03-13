# PRAXIS Health

**A health sector evaluation module for [PRAXIS](https://github.com/emmaodjidja-sys/praxis). Part of the PRAXIS AI for Good Lab.**

PRAXIS Health extends the core PRAXIS programme evaluation skill with health-sector-specific methodology. It covers evaluation of health systems, disease programmes, maternal and child health, nutrition, health economics, implementation science, and donor-specific reporting frameworks.

## What PRAXIS Health Adds

PRAXIS core provides evaluation methodology that works across any sector. PRAXIS Health provides the health-specific layer:

- **Health systems strengthening evaluation**: WHO building blocks, facility assessment, health financing, governance, quality improvement, system resilience, humanitarian health evaluation, political economy analysis
- **Epidemiological methods**: Disease measurement, mortality estimation, surveillance data interpretation, cluster surveys, biomarkers, standardisation, screening test evaluation
- **Health economics**: Costing, cost-effectiveness, cost-utility, cost-benefit, budget impact analysis, value for money, equity-weighted economic evaluation
- **Disease programme evaluation**: HIV/AIDS (95-95-95 cascade), TB, malaria (including elimination), immunisation, NCDs, NTDs, AMR, mental health (mhGAP, MHPSS)
- **RMNCAH and nutrition**: Continuum of care, EmOC, quality of maternal care, newborn health, child health, CMAM with Sphere standards, IYCF, anthropometry, SMART surveys, SQUEAC/SLEAC, IPC/Cadre Harmonise, UNICEF conceptual framework
- **Implementation science**: RE-AIM, CFIR, implementation outcomes, fidelity-adaptation balance, hybrid designs, scale-up, sustainability
- **Donor reporting frameworks**: Global Fund, PEPFAR, Gavi, World Bank, WHO, USAID, FCDO, EU, GIZ

## Structure

PRAXIS Health lives within the main PRAXIS repository:

```
praxis/
├── SKILL.md                                            # Core PRAXIS skill file
├── references/                                         # Core reference files
├── scenario examples with praxis/                      # Core worked examples
├── praxis-health/                                      # Health sector module
│   ├── SKILL.md                                        # Health module routing and overview
│   ├── health-references/
│   │   ├── hss-evaluation.md                           # Health systems strengthening
│   │   ├── epi-methods.md                              # Epidemiological methods
│   │   ├── health-economics.md                         # Health economics
│   │   ├── disease-programme.md                        # Disease programmes
│   │   ├── rmncah-nutrition.md                         # RMNCAH and nutrition
│   │   ├── implementation-science.md                   # Implementation science
│   │   └── donor-frameworks.md                         # Donor reporting frameworks
│   ├── health-examples/
│   │   ├── 01-global-fund-rssh-evaluation-mozambique.md
│   │   ├── 02-cea-maternal-health-qi-tanzania.md
│   │   ├── 03-hiv-cascade-pepfar-transition-zambia.md
│   │   ├── 04-emergency-nutrition-evaluation-burkina-faso.md
│   │   └── 05-uhc-reform-evaluation-kenya.md
│   └── README.md
├── README.md
└── LICENSE
```

## Worked Examples

Five full evaluation outputs from realistic scenarios, ordered by complexity:

1. **Global Fund RSSH evaluation design** (Mozambique): $18M grant covering HMIS, supply chain, CHW expansion, and PBF. Contribution analysis with ITS, DiD, CFIR, sustainability analysis.

2. **Cost-effectiveness analysis** (Tanzania): Maternal health QI collaborative. Costing, ICER, PSA, LiST, FCDO VfM, scale-up cost estimation, CHEERS 2022.

3. **HIV treatment cascade evaluation** (Zambia): PEPFAR transition. 95-95-95 cascade, QCA, CFIR, transition readiness, COP-aligned outputs.

4. **Emergency nutrition response evaluation** (Burkina Faso): Multi-donor programme in conflict-affected Sahel. SQUEAC coverage, CMAM vs Sphere standards, SMART interpretation, contribution analysis, IPC, access-constrained design.

5. **National UHC reform evaluation** (Kenya): Multi-donor evaluation of national reform across 47 counties. DiD, synthetic control, household expenditure survey, facility assessment, CFIR, PEA, fiscal sustainability, CEA, equity analysis, harmonised multi-donor reporting.

## The PRAXIS AI for Good Lab

PRAXIS Health is part of an evolving collection of AI-powered methodology tools built to strengthen evaluation and research practice in development, health, and humanitarian contexts. The long-term vision is an AI for Good Lab — open-source tools that put rigorous methodology within reach of every practitioner, regardless of institutional affiliation or budget.

Current modules:
- **PRAXIS** (core): Programme evaluation across any sector
- **PRAXIS Health**: Health sector evaluation

Planned modules:
- **PRAXIS PVE**: Preventing and countering violent extremism evaluation
- **PRAXIS Climate**: Climate adaptation and mitigation evaluation

## Contributing

Contributions are welcome. Priority areas: additional worked examples, French/Spanish/Portuguese/Arabic translations, country-specific donor framework adaptations, digital health evaluation methodology, One Health evaluation approaches, and KoboToolbox/ODK integration.

To contribute, fork the repository, make your changes, and submit a pull request.

## Background

Built by [Emmanuel Nene Odjidja](https://github.com/emmaodjidja-sys), an M&E specialist and epidemiologist with 12+ years of experience in programme evaluation across health, peacebuilding, and development contexts. Currently M&E Specialist: Research, Design and Learning at GCERF. Prior experience at WHO, Global Fund, and USAID/CRC.

## License

MIT License. See the repository [LICENSE](../LICENSE) for details.
