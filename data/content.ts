// All site copy lives here, in English and Traditional Chinese.
// Edit this file to update the site; components only handle layout.

export type Lang = 'en' | 'zh';
export type L = { en: string; zh: string };

export const PROFILE = {
  name: 'Ching-Hsiang Chang',
  nickname: 'Adam',
  email: 'lavouver96@gmail.com',
  avatarUrl: 'https://drive.google.com/thumbnail?id=1yEC-EG124Dnv2WqTA7kY-aX0SA1HCeOQ&sz=w1000',
  resumeUrl: './resume/Ching-Hsiang_Chang_Resume.pdf',
  socials: {
    github: 'https://github.com/AdamXiang',
    linkedin: 'https://www.linkedin.com/in/ching-hsiang-chang-782281217/',
    medium: 'https://medium.com/@adams-chang',
    instagram: 'https://www.instagram.com/sw_abroad_adam/',
  },
};

export const UI = {
  nav: {
    projects: { en: 'Work', zh: '作品' },
    work: { en: 'Experience', zh: '經歷' },
    journey: { en: 'Eswatini', zh: '史瓦帝尼' },
    about: { en: 'About', zh: '關於我' },
    resume: { en: 'Download résumé', zh: '下載履歷' },
  },
  hero: {
    // Three lines, one per stage of the path: bronze, silver, gold.
    lines: [
      { en: 'Raised pigs.', zh: '養過豬' },
      { en: 'Studied brains.', zh: '念過腦科學' },
      { en: 'Now I build data pipelines.', zh: '現在寫資料管線' },
    ] as L[],
    sub: {
      en: 'I am Adam, a data engineer at Cathay Life Insurance in Taipei. Animal science at NTU, brain science at NYCU, nearly eight months on a pig farm in Eswatini, and somewhere along the way I found out that what I like most is making messy data behave.',
      zh: '嗨，我是 Adam，現在在國泰人壽當資料工程師。臺大動科出身，碩士念的是腦科學，當兵那年人在史瓦帝尼的豬場。路繞得有點遠，不過我蠻確定自己喜歡的就是把亂七八糟的資料弄到能用。',
    },
    status: { en: 'Data engineer at Cathay Life Insurance', zh: '現職：國泰人壽 資料工程師' },
    seeProjects: { en: 'See my work', zh: '看我的作品' },
    scroll: { en: '237 days in Eswatini, further down', zh: '往下滑，還有在史瓦帝尼的 237 天' },
  },
  lineage: {
    title: { en: 'How I got here, drawn as a pipeline', zh: '我怎麼走到這裡的' },
    hint: { en: 'Select a stage to see what it added.', zh: '點一下看每一段留下什麼。' },
  },
  work: {
    title: { en: 'Where I have worked', zh: '工作經歷' },
    lead: {
      en: 'Six teams across insurance, consulting, hardware and market research. The common thread is taking slow, manual data work and making it fast and automatic.',
      zh: '待過保險、顧問、硬體、市調，一共六個團隊。做的事情其實很像：把原本又慢又要人工顧的資料流程，改成跑得快、自己會跑。',
    },
    more: { en: 'Show all details', zh: '看完整內容' },
    less: { en: 'Show less', zh: '收起來' },
    now: { en: 'Now', zh: '現職' },
  },
  projects: {
    title: { en: 'Things I built', zh: '我做的東西' },
    lead: {
      en: 'Three of them are live, so you can open them right now. The rest are on GitHub.',
      zh: '有三個已經上線，現在就能點進去玩。其他的都放在 GitHub。',
    },
    featuredTitle: { en: 'If you only open a few repos', zh: 'GitHub 上最想給你看的幾個' },
    featuredLead: {
      en: 'The ones I would walk you through in an interview.',
      zh: '面試的時候如果只能講幾個，我會挑這些。',
    },
    outlineTitle: { en: 'Everything else, sorted', zh: '全部專案，分類好了' },
    search: { en: 'Search by name or tool, for example Kafka', zh: '搜尋專案或工具，像是 Kafka' },
    all: { en: 'All', zh: '全部' },
    none: { en: 'No project matches that search. Try a tool name such as dbt or Spark.', zh: '找不到耶。換個工具名稱試試，像 dbt 或 Spark。' },
    count: { en: 'projects', zh: '個專案' },
    allRepos: { en: 'See every repository on GitHub', zh: '到 GitHub 看全部' },
    code: { en: 'Code on GitHub', zh: '看程式碼' },
  },
  journey: {
    title: { en: '237 days in Eswatini', zh: '在史瓦帝尼的 237 天' },
    lead: {
      en: 'From November 2024 to July 2025 I served my diplomatic alternative service with the Taiwan Technical Mission in Eswatini, on a project to improve the country\'s pig industry. I wrote a diary entry for nearly every one of those days.',
      zh: '2024 年 11 月出發，隔年 7 月回來。我是外交替代役，單位是駐史瓦帝尼技術團，做養豬計畫。從上飛機那天起我每天在 IG 發一篇日記，沒想到真的撐到回台灣。',
    },
    heatTitle: { en: 'The diary as data', zh: '把日記拿來畫圖' },
    heatLead: {
      en: 'One square per day. Brighter squares are days I took more photos. Ringed squares open a photo.',
      zh: '一格是一天，越亮代表那天拍越多。有白框的可以點開看照片。',
    },
    stats: [
      { n: '237', label: { en: 'days abroad', zh: '天' } },
      { n: '231', label: { en: 'diary entries', zh: '篇日記' } },
      { n: '1,400+', label: { en: 'photos and clips', zh: '張照片和影片' } },
    ],
    day: { en: 'Day', zh: '第' },
    dayUnit: { en: '', zh: ' 天' },
    photos: { en: 'photos', zh: '張' },
    noEntry: { en: 'no entry', zh: '這天沒寫' },
    hover: { en: 'Hover or tap a square to read the day.', zh: '滑過去或點一下，看那天是哪一天。' },
    fewer: { en: 'Fewer', zh: '少' },
    more: { en: 'More', zh: '多' },
    close: { en: 'Close', zh: '關閉' },
    prev: { en: 'Previous photo', zh: '上一張' },
    next: { en: 'Next photo', zh: '下一張' },
    igNote: { en: 'The full diary lives on Instagram', zh: '完整的日記都在 IG' },
  },
  about: {
    title: { en: 'About me', zh: '關於我' },
    education: { en: 'Education', zh: '學歷' },
    skills: { en: 'Tools I use', zh: '常用工具' },
    certs: { en: 'Certifications', zh: '證照' },
    clubs: { en: 'Outside the classroom', zh: '學生時期的社團' },
  },
  contact: {
    title: { en: 'Say hello', zh: '找我聊聊' },
    lead: {
      en: 'The fastest way to reach me is email. I usually reply within a day.',
      zh: '寫信最快，我通常當天就會回。',
    },
    copy: { en: 'Copy email address', zh: '複製 Email' },
    copied: { en: 'Email address copied', zh: '複製好了' },
    resumeNote: { en: 'One page, PDF, in English.', zh: '英文版，一頁 PDF。' },
  },
};

export const ABOUT: L[] = [
  {
    en: 'I like the unglamorous half of data work: the ingestion that never drops a row, the model a new analyst can read on day one, the dashboard that refreshes before anyone asks.',
    zh: '資料工程裡我最有成就感的，反而是那些沒人會特別稱讚的部分。資料進來一筆都沒少，新同事打開 model 不用問我就看得懂，報表在大家上班前就自己更新好了。',
  },
  {
    en: 'At Cathay Life I am moving pipelines from IBM DataStage to dbt. Before that, at DATARGET, I took a 40-minute ETL job to under a minute per file by replacing Pandas with parallel ClickHouse Local, and at CXG I cut reporting time by 75% with Power BI on Azure Synapse.',
    zh: '現在在國泰人壽，主要在把 pipeline 從 IBM DataStage 搬到 dbt。前一份在創代科技，有一支 ETL 每個檔案要跑 40 分鐘，我把 Pandas 換成平行跑的 ClickHouse Local 之後不到 1 分鐘。更早在 CXG 實習，用 Power BI 接 Azure Synapse，報表時間少了 75%。',
  },
  {
    en: 'Lately my evenings go to AI agents: how to give a model tools, how to keep it honest, and how to prove it behaves. Away from a keyboard you will probably find me on a court.',
    zh: '最近下班都在玩 AI Agent，想搞懂怎麼讓模型用工具、怎麼不讓它亂講，還有到底要怎麼測。沒在寫程式的時候，大概在球場上。',
  },
];

export type Stage = {
  id: 'bronze' | 'silver' | 'gold';
  layer: L;
  title: L;
  place: L;
  years: string;
  kept: L;
};

export const LINEAGE: Stage[] = [
  {
    id: 'bronze',
    layer: { en: 'Bronze: raw', zh: 'Bronze 原始' },
    title: { en: 'Animal Science', zh: '動物科學' },
    place: { en: 'National Taiwan University, B.S.', zh: '臺大動科系' },
    years: '2017 – 2021',
    kept: {
      en: 'Living things do not produce clean data. I learned to collect it anyway, and that training later sent me to a pig farm in Eswatini.',
      zh: '動物不會乖乖給你乾淨的數據。那四年學到的是資料再髒也要想辦法收回來。後來會去史瓦帝尼的豬場，也是因為念這個。',
    },
  },
  {
    id: 'silver',
    layer: { en: 'Silver: refined', zh: 'Silver 清理' },
    title: { en: 'Brain Science', zh: '腦科學' },
    place: { en: 'National Yang Ming Chiao Tung University, M.S.', zh: '陽明交大腦科所' },
    years: '2021 – 2024',
    kept: {
      en: 'Research taught me to doubt a result until the method holds up. I took my first data internships alongside the degree, and never really left.',
      zh: '做研究被訓練成看到漂亮的結果先懷疑，回頭檢查方法有沒有問題。碩二開始去國泰金控和 CXG 實習，碰到資料工程之後就回不去了。',
    },
  },
  {
    id: 'gold',
    layer: { en: 'Gold: in use', zh: 'Gold 可用' },
    title: { en: 'Data Engineering', zh: '資料工程' },
    place: { en: 'Cathay Life, DATARGET, Logitech, uppeta, CXG, Cathay Financial', zh: '國泰人壽、創代科技、羅技、uppeta、CXG、國泰金控' },
    years: '2023 – now',
    kept: {
      en: 'Pipelines, models and dashboards that teams rely on every day: a 40-minute job brought under a minute, reporting time cut by 75%, a DataStage estate moving to dbt.',
      zh: '現在做的是別人每天上班會用到的東西。40 分鐘的 ETL 壓到 1 分鐘內、報表時間少 75%，目前在把 DataStage 的流程一支一支搬到 dbt。',
    },
  },
];

export type Job = {
  id: string;
  role: L;
  company: L;
  period: string;
  current?: boolean;
  headline: L;
  bullets: L[];
  tech: string[];
};

export const EXPERIENCE: Job[] = [
  {
    id: 'cathay-life',
    role: { en: 'Data Engineer', zh: '資料工程師' },
    company: { en: 'Cathay Life Insurance', zh: '國泰人壽' },
    period: 'May 2026 – Present',
    current: true,
    headline: {
      en: 'Moving pipelines from IBM DataStage to dbt, with deployment and maintenance time cut by more than half.',
      zh: '把 Pipeline 從 IBM DataStage 遷移至 dbt，部署與維護時間縮減 50% 以上。',
    },
    bullets: [
      {
        en: 'Designed scalable ETL pipelines with IBM DataStage on a medallion architecture, implementing change data capture and SCD Type 2, and refactored legacy workflows for a 30% gain in overall run efficiency.',
        zh: '運用 IBM DataStage 結合 Medallion 架構（獎牌式架構）設計具高擴展性的 ETL 資料管線，並實作 Capture Data Change 與 SCD Type 2 機制；重構舊有工作流程，提升整體執行效率達 30%。',
      },
      {
        en: 'Drove the modern data transformation effort by migrating pipelines from DataStage to dbt, which simplified the system and added version control, automated testing and data lineage, cutting deployment and maintenance time by more than 50%.',
        zh: '推動 Modern Data Transformation，將 Pipeline 由 DataStage 遷移至 dbt，大幅簡化系統複雜度，並導入版本控制、自動化測試及資料血緣追蹤，成功縮減 50% 以上的部署與維護時間。',
      },
    ],
    tech: ['IBM DataStage', 'dbt', 'Medallion', 'CDC', 'SCD Type 2'],
  },
  {
    id: 'datarget',
    role: { en: 'Data Engineer', zh: '資料工程師' },
    company: { en: 'DATARGET', zh: '創代科技 DATARGET' },
    period: 'Nov 2025 – Apr 2026',
    headline: {
      en: 'Cut ETL time from 40 minutes to under 1 minute per file.',
      zh: '單一檔案的 ETL 時間由 40 分鐘降至 1 分鐘內。',
    },
    bullets: [
      {
        en: 'Found the bottleneck in a Pandas-based ETL and led the move to parallel processing with ClickHouse Local, which sidesteps the Python GIL: a 99% reduction in processing time.',
        zh: '找出 Pandas ETL 的效能瓶頸，主導改採平行處理搭配 ClickHouse Local，避開 Python GIL 限制，處理時間減少 99%。',
      },
      {
        en: 'Replaced standard SQL inserts with MSSQL BCP for 30 to 80 times faster ingestion, and wrote a Python HandlerFactory (OOP, abstract base classes) that generates schemas automatically.',
        zh: '以 MSSQL BCP 取代一般 SQL 寫入，資料匯入速度提升 30 至 80 倍；另以 Python（OOP、抽象基底類別）開發 HandlerFactory，自動產生 Schema。',
      },
      {
        en: 'Designed the migration plan from Azure to Microsoft Fabric and introduced Airflow and dbt with the data team, with shared code standards.',
        zh: '規劃 Azure 轉移至 Microsoft Fabric 的遷移方案，並與資料團隊導入 Airflow、dbt 及統一的程式規範。',
      },
      {
        en: 'Traced geospatial errors to latitude and longitude rounding and fixed conflicting time-series logic, recovering 25 times more valid data points for forecasting models.',
        zh: '查出經緯度進位造成的地理精度誤差，並修正時間序列邏輯衝突，使預測模型可用的有效資料點增加 25 倍。',
      },
      {
        en: 'Compared Apache Superset and Metabase for leadership, then deployed the chosen tool in Docker for geospatial analytics.',
        zh: '向主管報告 Apache Superset 與 Metabase 的比較評估，並以 Docker 部署選定工具，供地理空間分析使用。',
      },
    ],
    tech: ['Python', 'ClickHouse', 'MSSQL BCP', 'Airflow', 'dbt', 'Microsoft Fabric', 'Docker'],
  },
  {
    id: 'logitech',
    role: { en: 'Go-to-Market Intern', zh: 'GTM 實習生' },
    company: { en: 'Logitech', zh: '羅技 Logitech' },
    period: 'Jul 2024 – Aug 2024',
    headline: {
      en: 'Gave the go-to-market team a live view of product metrics.',
      zh: '建置自動化 Tableau 儀表板，讓 GTM 團隊即時掌握產品指標。',
    },
    bullets: [
      {
        en: 'Built an automated Tableau dashboard of product performance so launch decisions no longer waited on manual reports.',
        zh: '開發自動更新的 Tableau 產品成效儀表板，上市決策不必再等人工報表。',
      },
      {
        en: 'Built a smart Google Sheets form with the design team that removed manual data entry from their creative workflow.',
        zh: '與設計團隊合作製作 Google Sheets 智慧表單，省去設計流程中的人工輸入。',
      },
    ],
    tech: ['Tableau', 'Google Sheets'],
  },
  {
    id: 'uppeta',
    role: { en: 'Data Analyst Intern', zh: '資料分析實習生' },
    company: { en: 'uppeta', zh: 'uppeta' },
    period: 'Apr 2024 – Jun 2024',
    headline: {
      en: 'Turned user behaviour data into advice for 5+ clients.',
      zh: '參與 5 個以上客戶專案，以使用者行為資料提出改善建議。',
    },
    bullets: [
      {
        en: 'Worked on more than five client projects, presenting performance models that improved user registration.',
        zh: '參與 5 個以上客戶專案，分析使用者行為並提出成效模型，提升註冊表現。',
      },
      {
        en: 'Wrote Google Apps Script automations that cleared manual data bottlenecks for the team.',
        zh: '以 Google Apps Script 開發自動化工具，解決團隊人工處理資料的瓶頸。',
      },
    ],
    tech: ['Google Apps Script', 'Google Sheets'],
  },
  {
    id: 'cxg',
    role: { en: 'Data Engineer Intern', zh: '資料工程實習生' },
    company: { en: 'CXG', zh: 'CXG' },
    period: 'Jul 2023 – Apr 2024',
    headline: {
      en: 'Cut reporting time by 75% with Power BI on Azure Synapse.',
      zh: '以 Power BI 搭配 Azure Synapse，報表時間縮短 75%。',
    },
    bullets: [
      {
        en: 'Worked with operations managers to replace slow reporting with a real-time Power BI and Azure Synapse solution.',
        zh: '與營運經理合作，以 Power BI 與 Azure Synapse 建置即時報表方案，取代原有流程。',
      },
      {
        en: 'Standardised a medallion architecture (bronze, silver, gold) as the single source of truth for analysts.',
        zh: '建立並統一 Medallion 架構（Bronze、Silver、Gold），作為分析師的單一資料來源。',
      },
      {
        en: 'Built ELT and HTTP API ingestion pipelines in Azure Data Factory that kept scheduled refreshes on time.',
        zh: '於 Azure Data Factory 開發 ELT 及 HTTP API 匯入管線，排程更新準時率 100%。',
      },
      {
        en: 'Moved legacy Excel workflows to Metabase with SQL transformations on Azure Synapse.',
        zh: '將既有 Excel 作業移轉至 Metabase，並於 Azure Synapse 撰寫 SQL 轉換。',
      },
    ],
    tech: ['Power BI', 'Azure Synapse', 'Azure Data Factory', 'T-SQL', 'Metabase'],
  },
  {
    id: 'cathay',
    role: { en: 'Data Analyst Intern', zh: '資料分析實習生' },
    company: { en: 'Cathay Financial Holdings', zh: '國泰金控' },
    period: 'Feb 2023 – Jul 2023',
    headline: {
      en: 'Designed a FHIR-standard schema for sharing medical records.',
      zh: '設計符合 FHIR 標準的醫療資料交換 Schema。',
    },
    bullets: [
      {
        en: 'Designed a FHIR-standard entity-relationship schema that reduced data exchange latency between hospitals by 75%.',
        zh: '設計符合 FHIR 標準的 ER Schema，跨院資料交換延遲降低 75%。',
      },
      {
        en: 'Built a medical LINE bot end to end with Flask and MongoDB, fed by automated scraping pipelines.',
        zh: '以 Flask、MongoDB 從頭開發醫療 LINE Bot，並串接自動化爬蟲。',
      },
      {
        en: 'Designed ChatGPT prompt workflows that automated XML-to-JSON conversion of legacy medical records.',
        zh: '設計 ChatGPT Prompt 流程，將舊有醫療紀錄由 XML 自動轉為 JSON。',
      },
    ],
    tech: ['FHIR', 'Python', 'Flask', 'MongoDB'],
  },
];

export const EDUCATION = [
  {
    school: { en: 'National Yang Ming Chiao Tung University', zh: '國立陽明交通大學' } as L,
    degree: { en: 'M.S., Brain Science', zh: '腦科學研究所 碩士' } as L,
    period: '2021 – 2024',
  },
  {
    school: { en: 'National Taiwan University', zh: '國立臺灣大學' } as L,
    degree: { en: 'B.S., Animal Science', zh: '動物科學技術學系 學士' } as L,
    period: '2017 – 2021',
  },
];

export const CERTS: string[] = [
  'Databricks Certified Data Engineer Associate',
  'Databricks Knowledge Badge: Automated Deployment with Declarative Automation Bundles',
  'Relational Databases (RDBMS) Essentials',
  'Using Databases with Python',
  'SQL: A Practical Introduction for Querying Databases',
];

export const SKILLS: { group: L; items: string[] }[] = [
  { group: { en: 'Languages', zh: '語言' }, items: ['Python', 'SQL', 'PySpark'] },
  {
    group: { en: 'Pipelines and orchestration', zh: 'Pipeline 與排程' },
    items: ['dbt', 'Apache Airflow', 'IBM DataStage', 'Azure Data Factory', 'Kafka', 'Spark', 'Flink'],
  },
  {
    group: { en: 'Platforms and storage', zh: '平台與資料庫' },
    items: ['Databricks', 'Azure Synapse', 'Snowflake', 'ClickHouse', 'SQL Server', 'MongoDB', 'Apache Iceberg'],
  },
  {
    group: { en: 'Analytics', zh: '報表與視覺化' },
    items: ['Power BI', 'Tableau', 'Metabase', 'Apache Superset', 'Google Sheets'],
  },
  {
    group: { en: 'AI engineering', zh: 'AI 相關' },
    items: ['LangGraph', 'LangChain', 'RAG', 'MCP', 'DeepEval'],
  },
];

export const CLUBS: { role: L; org: L; period: string; note: L }[] = [
  {
    role: { en: 'Member', zh: '社員' },
    org: { en: 'NTU Data Analytics Club', zh: '臺大資料分析與決策社' },
    period: '2022 – 2023',
    note: {
      en: 'Worked with Shopee on store expansion strategy, and processed 80M+ Gogoro battery records into a Streamlit app.',
      zh: '跟蝦皮合作做展店分析。另一個專案處理了八千多萬筆 Gogoro 換電紀錄，最後做成 Streamlit 給他們看。',
    },
  },
  {
    role: { en: 'Member', zh: '社員' },
    org: { en: 'NTHU Management Consulting Club', zh: '清大管理顧問社' },
    period: '2021 – 2022',
    note: {
      en: 'Used hypothesis-driven research to find user pain points for a startup; the resulting campaign grew subscriptions 300% in a year.',
      zh: '幫一間新創找使用者痛點，先立假說再去驗證。後來他們照這個方向做行銷，訂閱數一年多了三倍。',
    },
  },
  {
    role: { en: 'President', zh: '社長' },
    org: { en: 'NTU Star Rain Club', zh: '臺大星雨社' },
    period: '2020 – 2021',
    note: {
      en: 'Tripled membership, raised NT$100k in sponsorship, and ran autism awareness events for 120+ students.',
      zh: '當社長那年社員變三倍，還拉到十萬塊贊助，辦了給一百二十幾個學生的自閉症推廣活動。',
    },
  },
];

// ---------- Projects ----------

export type LiveProject = {
  id: 'kitchen-clash' | 'feng' | 'bucket';
  name: L;
  url: string;
  kind: L;
  pitch: L;
  facts: L[];
  cta: L;
  note: L;
};

export const LIVE: LiveProject[] = [
  {
    id: 'kitchen-clash',
    name: { en: 'Kitchen Clash', zh: 'Kitchen Clash' },
    url: 'https://kitchen-clash.onrender.com',
    kind: { en: 'Browser game', zh: '網頁遊戲' },
    pitch: {
      en: 'A pickleball game you play in the browser. Rally against the computer or a friend online, talk over voice chat, and unleash special shots that would be at home in a sports anime.',
      zh: '一款匹克球遊戲，打開網頁就能玩，可以跟電腦打，也可以開房間找朋友連線，邊打邊開語音嗆對方。必殺技做得很中二，我是故意的。',
    },
    facts: [
      { en: '40 courts at world landmarks', zh: '40 個球場，都是世界景點' },
      { en: 'Online matches with voice chat', zh: '連線對戰，可以開語音' },
      { en: 'Nothing to download', zh: '不用下載' },
    ],
    cta: { en: 'Play in your browser', zh: '馬上玩' },
    note: { en: 'Hosted on a free tier, so the first load can take up to a minute.', zh: '用免費主機，第一次開要等個一分鐘，拜託等它一下。' },
  },
  {
    id: 'feng',
    name: { en: 'Feng Qi Lai (瘋起來)', zh: '瘋起來' },
    url: 'https://appointment-website-rust.vercel.app/events',
    kind: { en: 'Web app for friends', zh: '朋友揪團用的網站' },
    pitch: {
      en: 'A place for friends to rally each other: post an outing and see who is in, without asking around a group chat. Its slogan, 揪是這麼瘋, is a pun on "that is just how crazy we are".',
      zh: '做給朋友之間揪團用的。想約什麼就開一個活動，要跟的自己按參加，不用在群組裡一個一個問。標語是「揪是這麼瘋」。',
    },
    facts: [
      { en: 'Create and join events', zh: '開活動、按參加' },
      { en: 'Sign in to see what friends are planning', zh: '登入就看得到朋友在揪什麼' },
    ],
    cta: { en: 'Open the site', zh: '打開網站' },
    note: { en: 'Sign-up required to see events.', zh: '要先註冊才看得到活動。' },
  },
  {
    id: 'bucket',
    name: { en: 'Bucket List: Stay and Go', zh: '在地與出走 Bucket List' },
    url: 'https://claude.ai/artifact/UJhHupGpsrwhEVpS7QW3ps',
    kind: { en: 'Interactive list', zh: '可以蓋章的清單' },
    pitch: {
      en: 'A stamp book of things I want to do: one list for Taiwan, one for abroad, and a short list of things I have decided not to do. Each entry says whether it works solo or with friends and how much leave it costs. Share it with someone and you each stamp your own.',
      zh: '一本集章本，把想做的事分成留在台灣跟往國外兩份，另外還有一份「不做清單」。每一條都寫了能不能一個人做、要不要請假。完成就蓋一個章，也可以分享給另一個人，兩個人各蓋各的。',
    },
    facts: [
      { en: '118 things to do in Taiwan, 325 abroad', zh: '台灣 118 條、國外 325 條' },
      { en: 'Filter by who, how long and which month to apply', zh: '可以用同行人數、時間、申請月份篩選' },
      { en: 'Shared stamps and notes for two', zh: '兩個人共用，各蓋各的章' },
    ],
    cta: { en: 'Open the list', zh: '打開清單' },
    note: { en: 'Made as a Claude artifact.', zh: '用 Claude artifact 做的。' },
  },
];

export type Category = 'ai' | 'streaming' | 'lakehouse' | 'apps';

export const CATEGORIES: { id: Category; label: L; blurb: L }[] = [
  {
    id: 'ai',
    label: { en: 'AI agents', zh: 'AI Agent' },
    blurb: {
      en: 'Giving models tools, memory and guardrails, then testing whether they behave.',
      zh: '讓模型會用工具、記得住東西，然後想辦法測它有沒有亂來。',
    },
  },
  {
    id: 'streaming',
    label: { en: 'Streaming and CDC', zh: '串流與 CDC' },
    blurb: {
      en: 'Events as they happen: Kafka, Flink, Spark Structured Streaming and change data capture.',
      zh: '資料一進來就要處理的那種。Kafka、Flink、Spark Streaming 都玩過一輪。',
    },
  },
  {
    id: 'lakehouse',
    label: { en: 'Lakehouse and dbt', zh: 'Lakehouse 與 dbt' },
    blurb: {
      en: 'Batch pipelines and modelling: medallion layers, star schemas and tested transformations.',
      zh: '批次處理跟資料建模，我最熟的一塊。',
    },
  },
  {
    id: 'apps',
    label: { en: 'Apps and analysis', zh: '應用與分析' },
    blurb: {
      en: 'Backends, small web apps and analysis projects.',
      zh: '後端、小網站，還有學生時期的分析專案。',
    },
  },
];

export type Repo = {
  repo: string; // GitHub repository name
  title: L;
  desc: L;
  cat: Category;
  tech: string[];
  year: number;
  featured?: boolean;
};

const r = (
  repo: string,
  cat: Category,
  year: number,
  tech: string[],
  title: [string, string],
  desc: [string, string],
  featured = false,
): Repo => ({ repo, cat, year, tech, title: { en: title[0], zh: title[1] }, desc: { en: desc[0], zh: desc[1] }, featured });

export const REPOS: Repo[] = [
  // ---- AI agents ----
  r('AdmGPT', 'ai', 2026, ['LangGraph', 'Claude', 'RAG', 'FastAPI', 'Chroma'], ['AdmGPT', 'AdmGPT'], [
    'A self-hosted, ChatGPT-style assistant on Claude and LangGraph: streaming chat, answers from your uploaded documents, web search and long-term memory.',
    '自己架的 ChatGPT。可以丟文件給它讀、會上網查資料，叫它記住的事情下次還記得。',
  ], true),
  r('AI-Agent-Evaluation', 'ai', 2026, ['DeepEval', 'LangChain', 'Claude'], ['AI Agent Evaluation', 'AI Agent 評測'], [
    'Tests a refund agent end to end with DeepEval. Seven metrics score its answers, its tool calls and its full reasoning trace.',
    'Agent 做出來之後怎麼知道它沒亂做？我拿一個退款 Agent 當例子，用 DeepEval 的七個指標去測，連它中間呼叫了哪些工具都檢查。',
  ], true),
  r('Multi-Agent-Travel-Planner', 'ai', 2026, ['LangGraph', 'FastAPI', 'Docker'], ['TripMate multi-agent planner', 'TripMate 旅遊規劃'], [
    'Four agents take a request such as "7 days in Japan under NT$60,000" and work through flights, hotels, an itinerary and a final answer.',
    '跟它說「日本七天、預算六萬」，四個 Agent 會分工去查機票、找飯店、排行程，最後整理成一份給你。',
  ], true),
  r('agentic-rag', 'ai', 2026, ['LangGraph', 'Pinecone', 'Tavily'], ['Agentic RAG', 'Agentic RAG'], [
    'A ten-node graph that changes its path with the question: retrieve, grade the documents, rewrite the query or fall back to web search.',
    '會自己判斷要走哪條路的 RAG。查到的文件不夠好就改寫問題重查，真的沒有就上網找。',
  ]),
  r('data-ai-agent', 'ai', 2026, ['LangGraph', 'PostgreSQL', 'Pandas'], ['AI data agent', 'AI 資料 Agent'], [
    'Turns a plain-language request into either a safe SQL query on PostgreSQL or an ETL job, routed by a top-level agent.',
    '用講的就能查資料庫或跑 ETL。有擋危險的 SQL，不會讓它把表刪掉。',
  ]),
  r('MCP_Server', 'ai', 2026, ['MCP', 'Python', 'SQLite'], ['MCP task server', 'MCP 任務伺服器'], [
    'A small task manager that AI agents use through the Model Context Protocol, with every layer shown in five short Python files.',
    '為了搞懂 MCP 寫的小專案。五個 Python 檔，一個檔案講一層。',
  ]),
  r('self-healing-project', 'ai', 2026, ['Airflow 3', 'LLM', 'Python'], ['Self-healing NLP pipeline', '會自己修的 NLP Pipeline'], [
    'An Airflow 3 batch pipeline that repairs dirty input before LLM inference and degrades gracefully when the model is unavailable.',
    '髒資料進來不會直接整批掛掉，會先試著修。模型連不上的時候也有備案，照樣跑得完。',
  ]),
  // ---- Streaming ----
  r('Realtime-Streaming-with-Apache-Flink', 'streaming', 2026, ['Flink', 'Kafka', 'Elasticsearch', 'Java'], ['E-commerce transactions with Flink', 'Flink 即時交易處理'], [
    'Processes transactions in under 100 ms with exactly-once guarantees, writing to both PostgreSQL and Elasticsearch.',
    '電商交易進來 100 毫秒內處理完，同時寫進 PostgreSQL 跟 Elasticsearch，而且保證不重複、不漏掉。',
  ], true),
  r('Anomaly-Detection-Pipeline', 'streaming', 2026, ['Kafka KRaft', 'Prometheus', 'Grafana', 'Docker'], ['IoT anomaly detection pipeline', 'IoT 異常偵測'], [
    'Simulates 50 smartwatches at up to 10,000 messages a second on a three-broker Kafka cluster, monitored with Prometheus and Grafana.',
    '假裝有 50 支智慧手錶一直送資料，最高每秒一萬筆，然後故意把 consumer 弄慢，看監控抓不抓得到。',
  ], true),
  r('Banking-Data-Digestion-with-Airflow-and-dbt', 'streaming', 2026, ['Debezium', 'Kafka', 'MinIO', 'Snowflake', 'dbt', 'Airflow'], ['Banking CDC pipeline', '銀行 CDC Pipeline'], [
    'Captures every insert, update and hard delete from PostgreSQL through Kafka into a data lake, then builds SCD Type 2 marts in Snowflake.',
    '銀行資料庫每一筆新增、修改、刪除都抓下來，一路送到 Snowflake，歷史版本用 SCD Type 2 留著。',
  ], true),
  r('Real-Stock-Market-Project-with-Snowflake-dbt-Airflow', 'streaming', 2026, ['Kafka', 'Snowflake', 'dbt', 'Airflow', 'Power BI'], ['Real-time stock market pipeline', '即時股市 Pipeline'], [
    'Streams live quotes from Finnhub through bronze, silver and gold layers to a real-time Power BI dashboard.',
    '接 Finnhub 的即時報價，過三層整理之後丟到 Power BI，畫面會自己跳。',
  ]),
  r('data-capture-change-project', 'streaming', 2026, ['Debezium', 'Kafka', 'PostgreSQL'], ['CDC with Debezium and Kafka', 'Debezium + Kafka 練習'], [
    'Streams row-level changes from PostgreSQL, including deletes, using log-based replication with almost no load on the source.',
    '不去查表，直接讀 PostgreSQL 的 log 抓異動。刪掉的資料也抓得到，對原本的資料庫幾乎沒負擔。',
  ]),
  r('smart-city-', 'streaming', 2026, ['Kafka', 'Spark', 'AWS S3', 'Docker'], ['Smart city streaming', '智慧城市串流'], [
    'Simulates a city-wide vehicle sensor network and processes it with Spark in Docker into an AWS data lake.',
    '模擬一整座城市的車輛感測器，用 Spark 處理完存到 AWS。',
  ]),
  r('realtime-data-streaming-with-Kafka-Spark-Cassandra', 'streaming', 2026, ['Kafka', 'Spark', 'Cassandra', 'Airflow'], ['Kafka, Spark and Cassandra', 'Kafka、Spark、Cassandra'], [
    'An event-driven pipeline from Airflow through Kafka and Spark Structured Streaming into Cassandra.',
    'Airflow 觸發之後，資料會經過 Kafka、Spark，最後進 Cassandra。我第一次一口氣串這麼多工具就是這個。',
  ]),
  r('End-to-End-Realtime-Streaming-with-Unstructured-Data', 'streaming', 2026, ['Spark', 'AWS S3', 'Glue', 'Athena'], ['Streaming unstructured data on AWS', '非結構化資料串流'], [
    'Spark Structured Streaming pulls structured fields out of raw text and JSON, lands them as Parquet on S3 and makes them queryable in Athena.',
    '從純文字跟 JSON 裡把欄位挖出來，存成 Parquet 放 S3，之後用 Athena 就能直接下 SQL。',
  ]),
  r('Stock-Market-Real-Time-Data-Analysis-Project', 'streaming', 2026, ['Kafka', 'AWS EC2', 'S3', 'Glue', 'Athena'], ['Stock data with Kafka on AWS', 'AWS 上的 Kafka 股市資料'], [
    'Replays 104K stock records through Kafka on EC2 into S3, with offset management and a crawler for Athena.',
    '在 EC2 上自己裝 Kafka，把十萬多筆股市資料重播一次送進 S3。',
  ]),
  r('Realtime-Logs-Processing', 'streaming', 2025, ['Kafka', 'Elasticsearch', 'Python'], ['Real-time log indexing', '即時 Log 索引'], [
    'Indexes application logs in real time with Kafka and Elasticsearch, end to end on free tiers.',
    'Log 一產生就進 Elasticsearch，馬上搜得到。全部用免費方案搭的。',
  ]),
  // ---- Lakehouse & dbt ----
  r('Weather_Analytics_Iceberg', 'lakehouse', 2026, ['Spark', 'Iceberg', 'Docker', 'Power BI'], ['Weather analytics on Apache Iceberg', 'Iceberg 天氣分析'], [
    'A Spark and Iceberg batch pipeline that handles corrections, late events and duplicate deliveries with idempotent MERGE INTO.',
    '專門處理麻煩的狀況：資料晚到、重複送、事後更正。重跑幾次結果都一樣。',
  ], true),
  r('FMCG-Domain-Data-Engineering-Project-with-Databricks', 'lakehouse', 2026, ['Databricks', 'PySpark', 'Delta Lake', 'AWS S3'], ['FMCG pipeline on Databricks', 'Databricks 快消品 Pipeline'], [
    'Merges a parent company and its subsidiary into one medallion pipeline with incremental loads, Delta MERGE and a BI dashboard.',
    '母公司跟子公司的資料格式不一樣，要併成同一條 pipeline。這種事在公司裡很常遇到。',
  ], true),
  r('Star-Schema-Build-up-from-S3-to-Snowflake-with-dbt', 'lakehouse', 2026, ['dbt', 'Snowflake', 'AWS S3'], ['S3 to Snowflake star schema', 'S3 到 Snowflake 的星狀模型'], [
    'Builds a star schema from Airbnb rental data with incremental loads, SCD Type 2 dimensions and metadata-driven models.',
    '拿 Airbnb 的資料從頭建一套 star schema，有做增量跟 SCD Type 2。',
  ]),
  r('Transformation-with-dbt-snowflake-airflow', 'lakehouse', 2026, ['dbt', 'Snowflake', 'Airflow', 'Cosmos'], ['dbt on Snowflake, run by Airflow', 'Airflow 跑 dbt'], [
    'Uses Astronomer Cosmos to run each dbt model as its own Airflow task, with staging, intermediate and mart layers.',
    '用 Cosmos 把每個 dbt model 變成一個 Airflow task，哪一個掛了一眼就看得出來。',
  ]),
  r('dbt-Netflix-project', 'lakehouse', 2026, ['dbt', 'Snowflake', 'AWS S3'], ['MovieLens analytics engineering', 'MovieLens dbt 專案'], [
    'Models the MovieLens 20M dataset using every core dbt feature: incremental models, snapshots, seeds, macros and custom tests.',
    '兩千萬筆電影評分。目標是把 dbt 的功能全部用過一遍，snapshot、macro、自訂測試都有。',
  ]),
  r('insurance-data-transfer-project', 'lakehouse', 2026, ['MongoDB', 'Airbyte', 'Snowflake', 'dbt', 'Power BI'], ['Insurance claims pipeline', '保險理賠 Pipeline'], [
    'Moves synthetic claims from MongoDB Atlas to Snowflake with Airbyte, transforms them with dbt and shows fraud analytics in Power BI.',
    '理賠資料從 MongoDB 搬到 Snowflake，最後在 Power BI 看哪些案件可能是詐保。',
  ]),
  r('Automated-ELT-pipeline-using-Airflow-dbt-Superset', 'lakehouse', 2026, ['Airflow', 'dbt', 'PostgreSQL', 'Superset'], ['Weather ELT with Superset', '天氣 ELT'], [
    'Pulls weather data from an API, transforms it with dbt on PostgreSQL and charts it in Superset: a right-sized stack with no cluster.',
    '資料量不大就不要硬上 Spark。這個只用 PostgreSQL 跟 dbt，一台機器就跑得動。',
  ]),
  r('databricks_with_Lakeflow-and-Medallion', 'lakehouse', 2025, ['Databricks', 'Lakeflow', 'Auto Loader'], ['Lakeflow and medallion on Databricks', 'Databricks Lakeflow'], [
    'Auto Loader and Lakeflow Pipelines for automated ingestion, incremental processing and dynamic fact and dimension tables.',
    '檔案丟進去就自動被讀走，只處理新的部分。',
  ]),
  r('Uber-Project-with-dbt', 'lakehouse', 2025, ['Databricks', 'dbt', 'Spark'], ['Lakehouse with Databricks and dbt', 'Databricks + dbt'], [
    'Combines Spark Structured Streaming and dbt snapshots to take raw sources through to analytics-ready models.',
    '前面用 Spark 收資料，後面交給 dbt 整理。',
  ]),
  r('dbt-with-medallion-architecture', 'lakehouse', 2025, ['dbt', 'CI/CD'], ['dbt medallion with CI/CD', 'dbt 加 CI/CD'], [
    'A dbt project that implements the medallion layers with a CI/CD workflow for reliable deployments.',
    '推 code 上去會自動跑測試，過了才部署。',
  ]),
  r('PySpark-Real-Time', 'lakehouse', 2025, ['PySpark', 'Databricks', 'Delta Lake'], ['PySpark patterns on Databricks', 'PySpark 常用寫法'], [
    'Reusable transformations, JSON flattening, incremental upserts, streaming Delta tables and SCD Type 2.',
    '把工作上常用到的 PySpark 寫法整理起來，像攤平 JSON、upsert、SCD Type 2。',
  ]),
  // ---- Apps & analysis ----
  r('Gogoro', 'apps', 2024, ['GeoPandas', 'Streamlit', 'Python'], ['Gogoro living circle', 'Gogoro 生活圈'], [
    'Models battery swap locations with 2D Gaussians to draw rider heatmaps, shown in a Streamlit dashboard.',
    '從換電紀錄推每個騎士平常在哪一帶活動，畫成熱區圖。資料分析社的專案。',
  ]),
  r('Challenge-Generator-with-React-and-FastAPI', 'apps', 2025, ['React', 'FastAPI'], ['Coding challenge generator', '程式題目產生器'], [
    'A full-stack app with a React front end and a FastAPI back end that generates practice challenges.',
    '會出程式練習題的小網站，前端 React、後端 FastAPI。',
  ]),
  r('FastAPI_with_Feed', 'apps', 2025, ['FastAPI', 'Python'], ['FastAPI feed service', 'FastAPI 動態牆'], [
    'A back-end service for a social feed, built to learn FastAPI project structure.',
    '學 FastAPI 的時候寫的，做一個社群動態牆的後端。',
  ]),
  r('Personal-Website', 'apps', 2026, ['React', 'TypeScript', 'Vite'], ['This website', '這個網站'], [
    'The site you are reading, built with React, TypeScript and Vite. The Eswatini diary chart is generated from my own Instagram export.',
    '就是你現在看的這個。史瓦帝尼那張圖是用我自己的 IG 匯出檔算出來的。',
  ]),
];

// ---------- Eswatini journey ----------

// Photos or clips per diary day, Day 1 (23 Nov 2024) to Day 237 (17 Jul 2025).
// Generated from my Instagram export.
export const DIARY_START = '2024-11-23';
export const DIARY: number[] = [20,16,13,5,14,6,14,6,21,7,6,5,7,15,5,14,4,1,5,11,7,4,11,4,5,20,4,4,1,4,3,10,9,16,5,17,19,8,3,10,3,3,19,15,7,3,7,5,21,4,4,6,3,1,6,3,4,5,1,5,3,7,7,1,8,4,1,4,1,6,10,7,3,1,3,1,1,17,12,16,1,13,9,7,1,8,1,1,1,3,1,4,3,1,3,6,1,5,1,0,3,1,0,0,3,5,21,21,1,1,3,9,10,4,1,1,11,1,1,1,1,1,1,1,1,1,16,11,0,3,1,1,1,1,1,9,1,1,4,8,5,3,6,7,1,5,1,0,1,1,16,1,4,10,11,4,1,1,3,3,1,3,1,1,8,3,3,5,21,1,1,7,17,0,3,21,16,16,6,3,4,4,1,1,3,3,9,1,21,21,19,1,1,3,1,1,3,1,3,4,3,15,1,8,21,1,1,1,1,1,11,16,5,1,6,5,5,18,19,4,1,1,1,8,16,6,4,8,8,4,18,9,16,6,4,21,9];

export type Photo = { file: string; day: number; alt: L };

export type Chapter = {
  id: string;
  title: L;
  days: string;
  text: L;
  photos: Photo[];
};

const ph = (file: string, day: number, en: string, zh: string): Photo => ({ file, day, alt: { en, zh } });

export const CHAPTERS: Chapter[] = [
  {
    id: 'landing',
    title: { en: 'Landing', zh: '抵達' },
    days: '1 – 16',
    text: {
      en: 'My first flight meal, my first transfer in Singapore, a ten-hour leg to Johannesburg, then a small plane into an airport whose only other aircraft belonged to the royal family. Everything after that was red dirt roads and a very large sky.',
      zh: '人生第一次吃飛機餐，第一次在新加坡轉機，再飛十個小時到約翰尼斯堡，最後換小飛機。降落的時候整個機場只停了一台飛機，是王室專用的。出了機場就是紅土路，天空大到有點不習慣。',
    },
    photos: [
      ph('d009-5', 9, 'A red dirt road curving past a tree under a blue sky', '紅土路'),
      ph('d016-0', 16, 'A country road with green fields and distant mountains', '往農場的路上'),
      ph('d009-6', 9, 'Two warthogs grazing in tall grass', '路邊就有疣豬'),
    ],
  },
  {
    id: 'farm',
    title: { en: 'The pig farm', zh: '豬場' },
    days: '3 – 230',
    text: {
      en: 'The job was the pig industry project: better genetics, better-trained farmers, cleaner slaughter and a steadier market. I spent two months in the artificial insemination house, where every dose was logged in a database called PigBase, and later drove hours to visit farmers who could lead their neighbours. It turns out a farm runs on data too.',
      zh: '技術團的計畫是幫史國把養豬這件事做起來，從豬種、教農民怎麼養，到屠宰和通路都管。我有兩個月天天待在 AI 房，這裡的 AI 是人工授精。採精、稀釋、包裝，每一劑都要登記進一個叫 PigBase 的系統。後來常常開好幾個小時的車去拜訪農戶。跑到非洲養豬，結果還是在顧資料。',
    },
    photos: [
      ph('d173-2', 173, 'A piglet looking straight at the camera under a heat lamp', '保溫燈下的小豬'),
      ph('d005-3', 5, 'A litter of piglets crowded together in a pen', '剛離乳的小豬'),
      ph('d173-1', 173, 'Piglets sleeping in the red glow of a heat lamp', '擠在一起睡'),
      ph('d173-5', 173, 'Young pigs on a smallholder farm', '農戶家的豬'),
    ],
  },
  {
    id: 'ceremony',
    title: { en: 'Ceremony', zh: '慶典' },
    days: '23, 154',
    text: {
      en: 'On Day 23 I walked for hours with a huge crowd in the year-end warriors\' ceremony, cheered on like a pop star for the first half and walking under a gold moon for the second. Months later I helped seat Taiwan\'s delegation at the King\'s birthday celebration.',
      zh: '第 23 天參加勇士節，跟一大群人去砍樹，再走好幾個小時的路。前半段沿路一直有人對我們歡呼，搞得好像明星出巡。走到後半段天黑了，月亮很大，是金黃色的。幾個月後的國王生日，我在體育場幫台灣團帶位。',
    },
    photos: [
      ph('d023-8', 23, 'Men in traditional dress gathered at night under a bright moon', '勇士節那晚的月亮'),
      ph('d154-6', 154, 'A stadium field filled with dancers in red, blue and yellow', '國王 57 歲生日'),
    ],
  },
  {
    id: 'wild',
    title: { en: 'Wild neighbours', zh: '野生動物' },
    days: '36 – 177',
    text: {
      en: 'On days off we went looking for animals. Rhinos slept in the mud a few metres from the truck, an elephant decided the road was his, and on a dawn bush walk a guide showed us how to find a scorpion with a blade of grass.',
      zh: '放假就去看動物。犀牛躺在泥巴裡睡覺，離車子只有幾公尺。大象就站在路中間。有一次清晨五點多起來走叢林，嚮導拿一根草伸進洞裡，真的釣出一隻蠍子。',
    },
    photos: [
      ph('d037-5', 37, 'A giraffe standing beneath a flat-topped acacia', '長頸鹿'),
      ph('d176-5', 176, 'An elephant standing across a dirt track', '擋路的大象'),
      ph('d107-3', 107, 'Two rhinos grazing in green bush', '犀牛'),
      ph('d176-8', 176, 'Rhinos resting in a mud wallow', '泡泥巴的犀牛'),
      ph('d177-7', 177, 'A giraffe feeding among dry trees', '清晨遇到的長頸鹿'),
      ph('d108-3', 108, 'Sunrise seen from a safari vehicle', '車上看日出'),
      ph('d036-7', 36, 'A lodge by the water with cloud covering the mountain behind', '住的地方'),
    ],
  },
  {
    id: 'high',
    title: { en: 'High ground', zh: '爬山' },
    days: '34 – 219',
    text: {
      en: 'Eswatini is small enough to cross in an afternoon and hilly enough that there is always something to climb. On Day 219, in my last month, a guide led us up the country\'s highest peak.',
      zh: '史瓦帝尼真的很小，開車一個下午就從這頭到那頭，但到處是山。最高峰一直沒去，拖到第 219 天、剩最後一個月才請嚮導帶我們上去。',
    },
    photos: [
      ph('d219-3', 219, 'Golden hills folding into a deep valley', '最高峰路上'),
      ph('d034-6', 34, 'Green hills rolling to the horizon', '雨季的山'),
      ph('d079-0', 79, 'A wide valley seen from a rocky summit', '山頂'),
      ph('d128-4', 128, 'Looking up through a tall pine forest', '松樹林'),
      ph('d219-6', 219, 'A rocky summit under a deep blue sky', '快到頂了'),
      ph('d218-5', 218, 'Sunset over a garden with mountains behind', '傍晚'),
    ],
  },
  {
    id: 'last',
    title: { en: 'Last light', zh: '最後幾週' },
    days: '189 – 237',
    text: {
      en: 'The final weeks went quickly: a music festival, a night in a beehive hut with warthogs asleep by the fire, a cane field burning on the horizon. On Day 237 I landed in Taiwan with nearly five kilos of liquor in my luggage and a diary I had managed to keep from the first day to the last.',
      zh: '最後那幾週咻一下就過了。MTN Bushfire 音樂節去了，蜂巢屋也住了，那晚營火旁邊躺了好幾隻疣豬在睡覺。有天回程看到一整片甘蔗田在燒，火超大。第 237 天落地台灣，行李箱裡有快五公斤的酒。七個半月說快不快、說慢不慢，日記倒是真的每天都有寫。',
    },
    photos: [
      ph('d231-1', 231, 'A field fire glowing orange beneath a wall of smoke', '燒甘蔗田'),
      ph('d212-0', 212, 'Warthogs asleep beside a campfire', '營火旁的疣豬'),
      ph('d211-2', 211, 'A traditional beehive hut among aloes', '蜂巢屋'),
      ph('d189-1', 189, 'The lit entrance gate of the MTN Bushfire festival at night', 'MTN Bushfire'),
      ph('d233-4', 233, 'Clouds reflected in a still lake', '湖'),
      ph('d236-0', 236, 'An orange dusk over an empty road', '回台灣前一天'),
    ],
  },
];
