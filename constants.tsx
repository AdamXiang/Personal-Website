import { Profile, Experience, Project, Skill } from './types';

export const PROFILE: Profile = {
  name: "Ching-Hsiang Chang",
  title: "Data Engineer. Rooted in Animal and Brain Science.",
  email: "lavouver96@gmail.com",
  phone: "(+886) 922 554 637",
  location: "Taipei City, Taiwan",
  summary: "Data Engineer designing reliable data pipelines & cloud solutions. Enabling businesses to unlock insights with Python, SQL, Databricks, DBT & Azure. Background in brain science research and data analytics.",
  avatarUrl: "https://ui-avatars.com/api/?name=Ching+Hsiang+Chang&background=random",
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
      "Engineered High-Performance ETL Pipelines (99% Efficiency Gain).",
      "Optimized ingestion of massive meteorological datasets.",
      "Defined strategic roadmap for migrating data operations from Azure to Microsoft Fabric.",
      "Developed Python-based HandlerFactory for automation."
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
      "Optimized creative workflows by engineering a Smart Demand Application Form in Google Sheets."
    ],
    technologies: ["Tableau", "Google Sheets API", "Data Automation"]
  },
  {
    id: "exp-3",
    role: "Data Analyst Intern",
    company: "uppeta",
    period: "Apr. 2024 - Jun. 2024",
    description: [
      "Led data analysis for 5+ client projects.",
      "Engineered custom automation scripts using Google Apps Script (GAS) to streamline internal workflows."
    ],
    technologies: ["Google Apps Script", "Data Analysis", "Automation"]
  },
  {
    id: "exp-4",
    role: "Data Engineer Intern",
    company: "CXG",
    period: "Jul. 2023 - Apr. 2024",
    description: [
      "Reduced operational reporting time by 75% by engineering a real-time Quality & Customer Management dashboard using Power BI, Azure Synapse Analytics, and T-SQL.",
      "Designed scalable Medallion Architecture."
    ],
    technologies: ["Power BI", "Azure Synapse", "T-SQL", "Azure Data Factory", "Medallion Architecture"]
  },
  {
    id: "exp-5",
    role: "Data Analyst Intern",
    company: "Cathay Financial Holdings",
    period: "Feb. 2023 - Jul. 2023",
    description: [
      "Designed a FHIR-compliant Database Architecture.",
      "Pioneered GenAI-Driven Data Transformation using ChatGPT prompt workflows.",
      "Developed an End-to-End Medical Chatbot."
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
      "Collaborated with Shopee to optimize store expansion costs using web scraping and Google APIs.",
      "Partnered with Gogoro to process over 80 million battery exchange records using Pandas and NumPy, utilized Geopandas to identify commercial hotspots, and built a Streamlit web app to visualize user riding habits."
    ]
  },
  {
    id: "club-2",
    role: "Member",
    company: "National Tsing Hua University Management Consulting Club",
    period: "Sep. 2021 - Jun. 2022",
    description: [
      "Leveraged biomedical knowledge to analyze a biotech startup's technical advantages.",
      "Applied hypothesis-driven methods to identify customer pain points and optimized marketing strategies, successfully growing subscriptions by 300% (from 20 to 60) within one year."
    ]
  },
  {
    id: "club-3",
    role: "Club President / Public Relations",
    company: "National Taiwan University  Star Rain Club",
    period: "Sep. 2020 - Feb. 2021",
    description: [
      "Revamped recruitment strategies to achieve 300% member growth and 100% retention.",
      "Secured 100k NTD in sponsorship by promoting club values.",
      "Organized autism awareness campaigns for over 120 elementary students and social events for 30+ autistic teenagers."
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
    id: "proj-2",
    title: "AirBnB Project with dbt & Snowflake",
    description: "End-to-end data pipeline transforming raw AirBnB data into analytical insights using dbt and Snowflake.",
    technologies: ["dbt", "Snowflake", "SQL", "Data Modeling"],
    repoUrl: "https://github.com/AdamXiang/AirBnB-Project-with-dbt-and-Snowflake"
  },
  {
    id: "proj-3",
    title: "Realtime Logs Processing",
    description: "Scalable architecture for processing and analyzing application logs in real-time.",
    technologies: ["Kafka", "Spark Streaming", "Python"],
    repoUrl: "https://github.com/AdamXiang/Realtime-Logs-Processing"
  },
  {
    id: "proj-4",
    title: "Databricks with Lakeflow & Medallion",
    description: "Implementation of the Lakehouse architecture using Databricks and Lakeflow.",
    technologies: ["Databricks", "Spark", "Delta Lake", "Medallion Architecture"],
    repoUrl: "https://github.com/AdamXiang/databricks_with_Lakeflow-and-Medallion"
  },
  {
    id: "proj-5",
    title: "dbt with Medallion Architecture",
    description: "Structured data transformation layer implementing Bronze, Silver, and Gold layers using dbt.",
    technologies: ["dbt", "SQL", "Data Warehousing"],
    repoUrl: "https://github.com/AdamXiang/dbt-with-medallion-architecture"
  },
  {
    id: "proj-6",
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