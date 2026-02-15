
import { Profile, Experience, Project, Skill } from './types';

export const PROFILE: Profile = {
  name: "Ching-Hsiang Chang",
  title: "Data Engineer. Began From Animal and Brain Science.",
  email: "lavouver96@gmail.com",
  phone: "(+886) 922 554 637",
  location: "Taipei City, Taiwan",
  summary: "Data Engineer designing reliable data pipelines & cloud solutions. Enabling businesses to unlock insights with Python, SQL, Databricks, DBT & Azure. Background in brain science research and data analytics.",
  avatarUrl: "https://drive.google.com/thumbnail?id=1yEC-EG124Dnv2WqTA7kY-aX0SA1HCeOQ&sz=w1000",
  socials: {
    linkedin: "https://www.linkedin.com/in/ching-hsiang-chang-782281217/",
    github: "https://github.com/AdamXiang",
    email: "mailto:lavouver96@gmail.com"
  }
};

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Data Engineer",
    company: "DATARGET",
    period: "Nov. 2025 - Present",
    description: [
      "Spearheaded High-Performance ETL Innovation (99% Efficiency Gain): Identified performance bottlenecks and led the architectural transition from standard Pandas to Parallel + ClickHouse Local. This initiative successfully bypassed Python GIL limitations, reducing processing time from 40 minutes to under 1 minute per file.",
      "Strategic Architecture & Workflow Orchestration: Aligned technical roadmaps with business scalability goals by designing the migration strategy from Azure to Microsoft Fabric. Collaborated with the data team to implement Airflow and dbt, enforcing code standards that improved maintainability.",
      "Database Optimization & Process Automation: Enhanced engineering best practices by developing a Python-based HandlerFactory (OOP/ABC) for automated schema generation. Optimized system throughput by replacing standard SQL with MSSQL BCP, achieving a 30-80x increase in ingestion speeds.",
      "Data Quality Resolution & Analytical Thinking: Conducted root cause analysis to diagnose critical geospatial precision errors (Lat/Lon rounding) and time-series logic conflicts. Ensured data reliability for forecasting models by recovering 25x more valid data points.",
      "BI Infrastructure & Stakeholder Management: Facilitated leadership decision-making by conducting and presenting a technical trade-off analysis (Usability vs. Customization) for Apache Superset and Metabase. Deployed the optimal Dockerized solution to drive geospatial analytics adoption."
    ],
    technologies: ["Python", "ClickHouse", "Airflow", "dbt", "Azure", "Microsoft Fabric", "Docker"]
  },
  {
    id: "exp-2",
    role: "GTM Intern",
    company: "Logitech",
    period: "Jul. 2024 - Aug. 2024",
    description: [
      "Accelerated Go-to-Market decision-making by developing an automated Product Performance Dashboard in Tableau.",
      "Collaborated with the design team to optimize creative workflows by engineering a 'Smart' Google Sheets form; eliminated manual entry overhead to focus resources on high-value tasks."
    ],
    technologies: ["Tableau", "Google Sheets API", "Data Automation"]
  },
  {
    id: "exp-3",
    role: "Data Analyst Intern",
    company: "uppeta",
    period: "Apr. 2024 - Jun. 2024",
    description: [
      "Consulted on 5+ client projects by translating complex user behavior data into actionable strategies; presented performance models in Google Sheets that drove improvements in user registration.",
      "Spearheaded internal process automation by engineering Google Apps Scripts (GAS); resolved manual data bottlenecks and maximized team processing throughput."
    ],
    technologies: ["Google Apps Script", "Data Analysis", "Automation"]
  },
  {
    id: "exp-4",
    role: "Data Engineer Intern",
    company: "CXG",
    period: "Jul. 2023 - Apr. 2024",
    description: [
      "Partnered with Operations Managers to identify reporting inefficiencies and engineered a real-time Power BI/Azure Synapse solution, reducing reporting time by 75%.",
      "Orchestrated automated ELT pipelines in Azure Data Factory by coordinating member updates; guaranteed data accuracy and eliminated manual intervention for stakeholders.",
      "Modernized the BI infrastructure by migrating legacy Excel workflows to Metabase; translated business needs into optimized SQL transformations on Azure Synapse.",
      "Architected and standardized a scalable Medallion Architecture (Bronze/Silver/Gold) to ensure data quality and establish a reliable single source of truth for Data Analysts.",
      "Optimized operational efficiency by refining Power Query transformations and ELT loading strategies from Azure Data Lake, significantly improving dataset performance.",
      "Ensured 100% data timeliness by orchestrating HTTP API ingestion pipelines in Azure Data Factory, enabling scheduled analytics refreshes."
    ],
    technologies: ["Power BI", "Azure Synapse", "T-SQL", "Azure Data Factory", "Medallion Architecture", "Excel", "Metabase"]
  },
  {
    id: "exp-5",
    role: "Data Analyst Intern",
    company: "Cathay Financial Holdings",
    period: "Feb. 2023 - Jul. 2023",
    description: [
      "Bridged the gap between technical and medical compliance by designing a FHIR-standard ER schema; reduced inter-hospital data exchange latency by 75%.",
      "Pioneered GenAI adoption by designing ChatGPT prompt workflows to automate XML-to-JSON conversion, accelerating legacy medical record transformation cycles.",
      "Addressed patient resource accessibility gaps by developing an end-to-end medical LINEbot (Flask/MongoDB); integrated automated scraping pipelines to serve real-time information."
    ],
    technologies: ["FHIR", "GenAI", "Flask", "MongoDB", "Selenium", "Python"]
  }
];

export const EDUCATION = [
  {
    school: "National Yang Ming Chiao Tung University",
    degree: "Master's degree, Brain Science",
    period: "Sep. 2021 - Jun. 2024"
  },
  {
    school: "National Taiwan University",
    degree: "Bachelor's degree, Animal Sciences",
    period: "Sep. 2017 - Jan. 2021"
  }
];

export const MILITARY_SERVICE: Experience[] = [
  {
    id: "mil-1",
    role: "Diplomatic Alternative Service",
    company: "Taiwan Technical Mission in Eswatini",
    period: "Sep. 2024 - Jul. 2025",
    description: [
      "Served in the Kingdom of Eswatini as part of the Taiwan Technical Mission.",
      "This project aims to enhance eSwatini pig industry by concentrating on 4 aspects:",
      "1. Pig Genetics improvement",
      "2. Capacity building - Improve farmers' pig breeding efficiency",
      "3. Promote hygienic pork slaughter",
      "4. Stabilize pork market"
    ],
    technologies: ["Cross-cultural Communication", "Pig Industry", "Data Management"]
  }
];

export const CLUBS: Experience[] = [
  {
    id: "club-1",
    role: "Member",
    company: "National Taiwan University Data Analytics Club",
    period: "Sep. 2022 - Jun. 2023",
    description: [
      "Demonstrated cross-functional collaboration by partnering with Shopee to optimize store expansion strategies, leveraging data-driven problem-solving through web scraping and Google APIs.",
      "Translated complex data into actionable business insights by processing 80M+ Gogoro battery records; utilized Geopandas and built a Streamlit app to facilitate clear stakeholder communication and strategic decision-making."
    ]
  },
  {
    id: "club-2",
    role: "Member",
    company: "National Tsing Hua University Management Consulting Club",
    period: "Sep. 2021 - Jun. 2022",
    description: [
      "Applied critical thinking and cross-disciplinary adaptability by leveraging biomedical knowledge to evaluate a tech startup's competitive advantages and market positioning.",
      "Showcased customer-centric problem-solving by utilizing hypothesis-driven methods to uncover user pain points, ultimately driving a strategic marketing initiative that achieved a 300% subscription growth within one year."
    ]
  },
  {
    id: "club-3",
    role: "Club President / Public Relations",
    company: "National Taiwan University  Star Rain Club",
    period: "Sep. 2020 - Feb. 2021",
    description: [
      "Exercised transformational leadership and strategic planning to revamp recruitment initiatives, achieving 300% member growth and maintaining 100% team retention.",
      "Utilized persuasive communication and negotiation skills to align corporate sponsors with club values, successfully securing 100k NTD in funding.",
      "Demonstrated empathy and end-to-end project management by orchestrating autism awareness campaigns for 120+ students and inclusive social events for 30+ teenagers."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"

  },
  {
    id: "proj-1",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"

  },
  {
    id: "proj-2",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"

  },
  {
    id: "proj-3",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"

  },
  {
    id: "proj-4",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"

  },
  {
    id: "proj-5",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"

  },
  {
    id: "proj-6",
    title: "FastAPI with Feed",
    description: "Production-ready data lakehouse: AWS S3 → Snowflake → Star Schema with dbt. Implements Bronze-Silver-Gold medallion architecture with incremental loads, SCD Type 2 dimensions, metadata-driven pipelines, and ephemeral models. Airbnb rental data case study.",
    technologies: ["dbt", "Python", "Snowflak","S3", "Data Modelling"],
    repoUrl: "https://github.com/AdamXiang/Star-Schema-Build-up-from-S3-to-Snowflake-with-dbt"

  },
  {
    id: "proj-7",
    title: "FastAPI with Feed",
    description: "High-performance backend service engineered with FastAPI to handle real-time data feeds.",
    technologies: ["FastAPI", "Python", "AsyncIO"],
    repoUrl: "https://github.com/AdamXiang/FastAPI_with_Feed"
  },
  {
    id: "proj-8",
    title: "AirBnB Project with dbt & Snowflake",
    description: "End-to-end data pipeline transforming raw AirBnB data into analytical insights using dbt and Snowflake.",
    technologies: ["dbt", "Snowflake", "SQL", "Data Modeling"],
    repoUrl: "https://github.com/AdamXiang/AirBnB-Project-with-dbt-and-Snowflake"
  },
  {
    id: "proj-9",
    title: "Realtime Logs Processing",
    description: "Scalable architecture for processing and analyzing application logs in real-time.",
    technologies: ["Kafka", "Spark Streaming", "Python"],
    repoUrl: "https://github.com/AdamXiang/Realtime-Logs-Processing"
  },
  {
    id: "proj-10",
    title: "Databricks with Lakeflow & Medallion",
    description: "Implementation of the Lakehouse architecture using Databricks and Lakeflow.",
    technologies: ["Databricks", "Spark", "Delta Lake", "Medallion Architecture"],
    repoUrl: "https://github.com/AdamXiang/databricks_with_Lakeflow-and-Medallion"
  },
  {
    id: "proj-11",
    title: "dbt with Medallion Architecture",
    description: "Structured data transformation layer implementing Bronze, Silver, and Gold layers using dbt.",
    technologies: ["dbt", "SQL", "Data Warehousing"],
    repoUrl: "https://github.com/AdamXiang/dbt-with-medallion-architecture"
  },
  {
    id: "proj-12",
    title: "Uber Project with dbt",
    description: "Analytics engineering project modeling Uber trip data for business intelligence reporting.",
    technologies: ["dbt", "Google BigQuery", "Looker Studio"],
    repoUrl: "https://github.com/AdamXiang/Uber-Project-with-dbt"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Core",
    items: ["Python", "SQL", "Data Engineering", "ETL/ELT"]
  },
  {
    category: "Cloud & DB",
    items: ["Azure", "Databricks", "Microsoft SQL Server", "ClickHouse", "MongoDB"]
  },
  {
    category: "Tools & Frameworks",
    items: ["DBT", "Apache Airflow", "Apache Superset"]
  },
  {
    category: "Analytics",
    items: ["Power BI", "Tableau", "Google Sheets", "Excel", "Metabase"]
  }
];
