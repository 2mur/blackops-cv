### > PROJECT: DEXTRADES TERMINAL

**DATA:** AVALANCHE DEFI MARKETS
**DESC:** Comprehensive EDA, ML training, evaluation, and hourly trading simulation.

#### [ SYSTEM ARCHITECTURE ]
A multi-module, reactive command terminal engineered to synthesize blockchain telemetry and machine learning inferences into actionable intelligence.

* **MACHINE LEARNING INTEGRATION:** Dedicated modules to track statistical viability. Evaluates model accuracy, R-squared values, and Receiver Operating Characteristic (ROC) curves.
* **ALGORITHMIC DECISIONS:** Incorporates a Bayesian Reinforcement Learning (RL) dashboard to visualize action probabilities and recommend greedy policy decisions for trading.


#### [ BOARDS ]
* **Price Tracking:** `prices_board.html` - Custom visualization of token pricing against native assets with granular time-series scrubbing.
* **Asset Tracking:** `users.html`, `pnl_animation.html` - Live monitoring of wallet portfolios, transaction graphs and calculating net profit (USD), mapping aggregate network flows, and generating automated alerts for anomalous wallet dumping events.
* **Survival Analysis:** `pressure.html` - Simulation of queue system, where users participating follow probabilistic exit distributions, allowing for the extraction of 24-hour residual market pressure and active holder decay rates.
* **EDA/Feature Time Series/ML Evaluation:** `features.html`, `eda_board.html`, `inference.html` - Recharts to render complex, multi-axis data including time series feature Exploratory Data Analysis (EDA), feature distributions with statistical tests, PCA/UMAP/PHATE plots and accuracy metrics/confusion matrices for ML inference.
* **Reinforcement Learning:** `reinforcement.html` - Maps state-action distributions using Bayesian evaluation to autonomously dictate greedy policy executions and optimize the overarching trading strategy.
* **Simulation:** `oracle.html` - HF trading terminal interface for reviewing automated trade execution logs and simulated profitability.