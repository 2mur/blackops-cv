### > PROJECT: AVALANCHE TOKENS ETL

**DATA:** AVALANCHE C-CHAIN TOKEN TXS
**DESC:** Automated ingestion, transformation, and reporting of normal network transactions.

#### [ SYSTEM ARCHITECTURE ]
A serverless, containerized pipeline engineered on Google Cloud Platform for high-reliability batch processing.

* **ORCHESTRATION:** Cloud Workflows (`workflow.yaml`) controls the step-by-step execution state, handling retries and sequential task triggering.
* **COMPUTE:** Dockerized Python environments executed via Cloud Run jobs to ensure isolated and scalable data processing.
* **PIPELINE PHASES:**
  * `ingest.py`: Extracts raw transaction ledgers from the target nodes.
  * `process.py` & `users.py`: Cleanses payloads and maps user behavioral clusters.
  * `report.py`: Generates formatted HTML analytics files for strategic review.

#### [ FEATURES ]
* Zero-maintenance serverless execution.
* Automated HTML report generation for non-technical operatives.
* Modular codebase allowing rapid deployment of new analytical models.