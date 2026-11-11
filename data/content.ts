// All site copy lives here, in English and Traditional Chinese.
// Edit this file to update the site; components only handle layout.

export type Lang = 'en' | 'zh';
export type L = { en: string; zh: string };

export const PROFILE = {
  name: 'Ching-Hsiang Chang',
  nickname: 'Adam',
  email: 'lavouver96@gmail.com',
  phone: '(+886) 922 554 637',
  location: { en: 'Taipei, Taiwan', zh: '台灣台北' } as L,
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
    work: { en: 'Experience', zh: '工作經歷' },
    projects: { en: 'Projects', zh: '作品' },
    journey: { en: 'Eswatini', zh: '史瓦帝尼' },
    about: { en: 'About', zh: '關於我' },
    resume: { en: 'Download résumé', zh: '下載履歷' },
  },
  hero: {
    role: { en: 'Data engineer in Taipei', zh: '資料工程師，現居台北' },
    headline: {
      en: 'I build data pipelines people can trust.',
      zh: '我打造讓人放心使用的資料管線。',
    },
    sub: {
      en: 'I started with pigs and cattle, moved on to brain scans, and ended up moving data. The route was odd, but each stop taught me how to turn messy observations into something a team can decide with.',
      zh: '我從豬和牛開始，接著研究大腦，最後走進資料的世界。這條路有點繞，但每一站都教我同一件事：把雜亂的觀察整理成團隊能拿來做決定的資料。',
    },
    status: {
      en: 'Open to data engineer and data analyst roles',
      zh: '正在尋找資料工程師、資料分析師的機會',
    },
    seeProjects: { en: 'See what I built', zh: '看看我的作品' },
    lineageTitle: { en: 'My lineage, drawn the way I draw pipelines', zh: '用我畫資料管線的方式，畫我自己' },
    lineageHint: { en: 'Select a stage to see what it added.', zh: '點選任一階段，看它留下了什麼。' },
  },
  work: {
    title: { en: 'Where I have worked', zh: '我待過的地方' },
    lead: {
      en: 'Five teams across market research, finance, hardware and consulting. The common thread is taking slow, manual reporting and making it fast and automatic.',
      zh: '五個團隊，橫跨市場研究、金融、硬體與顧問業。共同點是把又慢又靠人工的報表，變得又快又自動。',
    },
    more: { en: 'Show all details', zh: '展開全部內容' },
    less: { en: 'Show less', zh: '收合' },
  },
  projects: {
    title: { en: 'Things I built', zh: '我做的東西' },
    lead: {
      en: 'Two products you can use right now, then an outline of my GitHub: every repo worth opening, grouped by what it teaches.',
      zh: '先是兩個現在就能玩的網站，接著是我的 GitHub 大綱：每一個值得點開的 repo，依主題分類。',
    },
    liveTitle: { en: 'Live on the web', zh: '已上線的網站' },
    outlineTitle: { en: 'GitHub outline', zh: 'GitHub 專案大綱' },
    search: { en: 'Search by name or tool, for example Kafka', zh: '用名稱或工具搜尋，例如 Kafka' },
    all: { en: 'All', zh: '全部' },
    none: { en: 'No project matches that search. Try a tool name such as dbt or Spark.', zh: '沒有符合的專案。試試工具名稱，例如 dbt 或 Spark。' },
    count: { en: 'projects', zh: '個專案' },
    allRepos: { en: 'See every repository on GitHub', zh: '在 GitHub 看全部 repo' },
    open: { en: 'Open the site', zh: '打開網站' },
    play: { en: 'Play in your browser', zh: '直接在瀏覽器玩' },
    wake: { en: 'Hosted on a free tier, so the first load can take up to a minute.', zh: '使用免費主機，第一次開啟可能要等一分鐘左右。' },
    login: { en: 'Sign-up required to see events.', zh: '需要註冊登入後才能看到活動。' },
  },
  journey: {
    title: { en: '237 days in Eswatini', zh: '在史瓦帝尼的 237 天' },
    lead: {
      en: 'From November 2024 to July 2025 I served my diplomatic alternative service with the Taiwan Technical Mission in Eswatini, working on a project to improve the country\'s pig industry. I wrote a diary entry for nearly every one of those days.',
      zh: '2024 年 11 月到 2025 年 7 月，我以外交替代役的身分派駐史瓦帝尼的台灣技術團，參與當地的養豬產業提升計畫。那段時間我幾乎每天都寫日記。',
    },
    heatTitle: { en: 'The diary as data', zh: '把日記當成資料來看' },
    heatLead: {
      en: 'One square per day. Brighter squares are days I took more photos. Ringed squares open a photo.',
      zh: '一格代表一天，顏色越亮代表那天拍得越多。有外框的格子可以點開照片。',
    },
    stats: [
      { n: '237', label: { en: 'days abroad', zh: '天的派駐' } },
      { n: '231', label: { en: 'diary entries', zh: '篇日記' } },
      { n: '1,400+', label: { en: 'photos and clips', zh: '張照片與影片' } },
    ],
    day: { en: 'Day', zh: '第' },
    dayUnit: { en: '', zh: ' 天' },
    photos: { en: 'photos', zh: '張照片' },
    noEntry: { en: 'no entry', zh: '沒有紀錄' },
    hover: { en: 'Hover or tap a square to read the day.', zh: '把游標移到格子上，或點一下，看看那一天。' },
    fewer: { en: 'Fewer', zh: '少' },
    more: { en: 'More', zh: '多' },
    close: { en: 'Close', zh: '關閉' },
    prev: { en: 'Previous photo', zh: '上一張' },
    next: { en: 'Next photo', zh: '下一張' },
    igNote: { en: 'The full diary lives on Instagram', zh: '完整日記在 Instagram' },
  },
  about: {
    title: { en: 'About me', zh: '關於我' },
    education: { en: 'Education', zh: '學歷' },
    skills: { en: 'Tools I use', zh: '我使用的工具' },
    certs: { en: 'Certifications', zh: '證照' },
    clubs: { en: 'Outside the classroom', zh: '課堂之外' },
  },
  contact: {
    title: { en: 'Say hello', zh: '跟我聊聊' },
    lead: {
      en: 'The fastest way to reach me is email. I usually reply within a day.',
      zh: '最快找到我的方式是寫信，我通常一天內會回覆。',
    },
    copy: { en: 'Copy email address', zh: '複製 Email' },
    copied: { en: 'Email address copied', zh: '已複製 Email' },
    resumeNote: { en: 'One page, PDF, in English.', zh: '一頁、PDF、英文版。' },
  },
};

export const ABOUT: L[] = [
  {
    en: 'I am a data engineer who likes the unglamorous half of the job: the ingestion that never drops a row, the model a new analyst can read on day one, the dashboard that refreshes before anyone asks.',
    zh: '我是一個喜歡把「不起眼的那一半」做好的資料工程師：一筆都不漏的資料匯入、新進分析師第一天就看得懂的資料模型、沒人催就自動更新的儀表板。',
  },
  {
    en: 'At DATARGET I moved a 40-minute ETL job to under a minute per file by replacing Pandas with parallel ClickHouse Local, and made database ingestion 30 to 80 times faster with MSSQL BCP. At CXG I cut reporting time by 75% with Power BI on Azure Synapse and set up the bronze, silver and gold layers the analysts still build on.',
    zh: '在創代科技，我把原本要跑 40 分鐘的 ETL，改用平行化的 ClickHouse Local 取代 Pandas，每個檔案縮短到 1 分鐘內；也用 MSSQL BCP 讓資料庫寫入速度提升 30 到 80 倍。在 CXG，我用 Power BI 加上 Azure Synapse 把報表時間縮短 75%，並建立分析師至今仍在使用的 Bronze、Silver、Gold 分層架構。',
  },
  {
    en: 'Lately I spend my evenings on AI agents: how to give a model tools, how to keep it honest, and how to prove it behaves. Away from a keyboard you will find me on a pickleball or tennis court.',
    zh: '最近的晚上我都在研究 AI Agent：怎麼讓模型使用工具、怎麼讓它不亂說、怎麼證明它的行為是對的。離開鍵盤的時候，我通常在匹克球場或網球場上。',
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
    place: { en: 'National Taiwan University, B.S.', zh: '國立臺灣大學 學士' },
    years: '2017 – 2021',
    kept: {
      en: 'Living things do not produce clean data. I learned to collect it anyway, and that training later sent me to a pig farm in Eswatini.',
      zh: '生物不會給你乾淨的資料，但我學會了照樣把它收集起來。這段訓練後來也把我帶到史瓦帝尼的豬場。',
    },
  },
  {
    id: 'silver',
    layer: { en: 'Silver: refined', zh: 'Silver 清理' },
    title: { en: 'Brain Science', zh: '腦科學' },
    place: { en: 'National Yang Ming Chiao Tung University, M.S.', zh: '國立陽明交通大學 碩士' },
    years: '2021 – 2024',
    kept: {
      en: 'Research taught me to doubt a result until the method holds up. I took my first data internships alongside the degree, and never really left.',
      zh: '做研究讓我習慣先懷疑結果，直到方法站得住腳。我在念書的同時開始第一份資料實習，從此就沒有離開過。',
    },
  },
  {
    id: 'gold',
    layer: { en: 'Gold: in use', zh: 'Gold 可用' },
    title: { en: 'Data Engineering', zh: '資料工程' },
    place: { en: 'Cathay, CXG, uppeta, Logitech, DATARGET', zh: '國泰金控、CXG、uppeta、羅技、創代科技' },
    years: '2023 – now',
    kept: {
      en: 'Pipelines, models and dashboards that teams rely on every day: a 40-minute job brought under a minute, reporting time cut by 75%.',
      zh: '團隊每天依賴的資料管線、模型與儀表板：40 分鐘的工作縮到 1 分鐘內，報表時間減少 75%。',
    },
  },
];

export type Job = {
  id: string;
  role: L;
  company: L;
  period: string;
  place: L;
  headline: L;
  bullets: L[];
  tech: string[];
};

export const EXPERIENCE: Job[] = [
  {
    id: 'datarget',
    role: { en: 'Data Engineer', zh: '資料工程師' },
    company: { en: 'DATARGET', zh: '創代科技 DATARGET' },
    period: 'Nov 2025 – Apr 2026',
    place: { en: 'Taiwan', zh: '台灣' },
    headline: {
      en: 'Cut ETL time from 40 minutes to under 1 minute per file.',
      zh: '把每個檔案的 ETL 時間從 40 分鐘縮短到 1 分鐘內。',
    },
    bullets: [
      {
        en: 'Found the bottleneck in a Pandas-based ETL and led the move to parallel processing with ClickHouse Local, which sidesteps the Python GIL: a 99% reduction in processing time.',
        zh: '找出 Pandas ETL 的效能瓶頸，主導改用平行化加 ClickHouse Local 的架構，繞開 Python GIL 的限制，處理時間減少 99%。',
      },
      {
        en: 'Replaced standard SQL inserts with MSSQL BCP for 30 to 80 times faster ingestion, and wrote a Python HandlerFactory (OOP, abstract base classes) that generates schemas automatically.',
        zh: '以 MSSQL BCP 取代一般 SQL 寫入，匯入速度提升 30 到 80 倍；並以 Python 撰寫 HandlerFactory（OOP、抽象基底類別）自動產生 schema。',
      },
      {
        en: 'Designed the migration plan from Azure to Microsoft Fabric and introduced Airflow and dbt with the data team, with shared code standards.',
        zh: '規劃從 Azure 遷移到 Microsoft Fabric 的策略，並與資料團隊一起導入 Airflow 與 dbt，建立共同的程式規範。',
      },
      {
        en: 'Traced geospatial errors to latitude and longitude rounding and fixed conflicting time-series logic, recovering 25 times more valid data points for forecasting models.',
        zh: '追查出經緯度四捨五入造成的地理精度錯誤，並修正時間序列邏輯衝突，讓預測模型可用的有效資料點增加 25 倍。',
      },
      {
        en: 'Compared Apache Superset and Metabase for leadership, then deployed the chosen tool in Docker for geospatial analytics.',
        zh: '為主管比較 Apache Superset 與 Metabase 的取捨，並以 Docker 部署最後選定的工具，用於地理空間分析。',
      },
    ],
    tech: ['Python', 'ClickHouse', 'MSSQL BCP', 'Airflow', 'dbt', 'Microsoft Fabric', 'Docker'],
  },
  {
    id: 'logitech',
    role: { en: 'Go-to-Market Intern', zh: 'GTM 實習生' },
    company: { en: 'Logitech', zh: '羅技 Logitech' },
    period: 'Jul 2024 – Aug 2024',
    place: { en: 'Taipei', zh: '台北' },
    headline: {
      en: 'Gave the go-to-market team a live view of product metrics.',
      zh: '讓 GTM 團隊即時看到產品指標。',
    },
    bullets: [
      {
        en: 'Built an automated Tableau dashboard of product performance so launch decisions no longer waited on manual reports.',
        zh: '建立自動更新的 Tableau 產品表現儀表板，上市決策不必再等人工報表。',
      },
      {
        en: 'Built a smart Google Sheets form with the design team that removed manual data entry from their creative workflow.',
        zh: '與設計團隊合作製作智慧化 Google Sheets 表單，省去創意流程中的人工輸入。',
      },
    ],
    tech: ['Tableau', 'Google Sheets'],
  },
  {
    id: 'uppeta',
    role: { en: 'Data Analyst Intern', zh: '資料分析實習生' },
    company: { en: 'uppeta', zh: 'uppeta' },
    period: 'Apr 2024 – Jun 2024',
    place: { en: 'Taipei', zh: '台北' },
    headline: {
      en: 'Turned user behaviour data into advice for 5+ clients.',
      zh: '把使用者行為資料變成給 5 家以上客戶的建議。',
    },
    bullets: [
      {
        en: 'Worked on more than five client projects, presenting performance models that improved user registration.',
        zh: '參與 5 個以上客戶專案，提出成效模型並改善使用者註冊表現。',
      },
      {
        en: 'Wrote Google Apps Script automations that cleared manual data bottlenecks for the team.',
        zh: '撰寫 Google Apps Script 自動化工具，解決團隊人工處理資料的瓶頸。',
      },
    ],
    tech: ['Google Apps Script', 'Google Sheets'],
  },
  {
    id: 'cxg',
    role: { en: 'Data Engineer Intern', zh: '資料工程實習生' },
    company: { en: 'CXG', zh: 'CXG' },
    period: 'Jul 2023 – Apr 2024',
    place: { en: 'Taipei', zh: '台北' },
    headline: {
      en: 'Cut reporting time by 75% with Power BI on Azure Synapse.',
      zh: '以 Power BI 加 Azure Synapse 將報表時間縮短 75%。',
    },
    bullets: [
      {
        en: 'Worked with operations managers to replace slow reporting with a real-time Power BI and Azure Synapse solution.',
        zh: '與營運經理合作，以即時的 Power BI 與 Azure Synapse 方案取代緩慢的報表流程。',
      },
      {
        en: 'Standardised a medallion architecture (bronze, silver, gold) as the single source of truth for analysts.',
        zh: '建立並標準化 Medallion 架構（Bronze、Silver、Gold），成為分析師唯一可信的資料來源。',
      },
      {
        en: 'Built ELT and HTTP API ingestion pipelines in Azure Data Factory that kept scheduled refreshes on time.',
        zh: '在 Azure Data Factory 建立 ELT 與 HTTP API 匯入管線，確保排程更新準時完成。',
      },
      {
        en: 'Moved legacy Excel workflows to Metabase with SQL transformations on Azure Synapse.',
        zh: '將舊有的 Excel 流程搬到 Metabase，並在 Azure Synapse 上撰寫 SQL 轉換。',
      },
    ],
    tech: ['Power BI', 'Azure Synapse', 'Azure Data Factory', 'T-SQL', 'Metabase'],
  },
  {
    id: 'cathay',
    role: { en: 'Data Analyst Intern', zh: '資料分析實習生' },
    company: { en: 'Cathay Financial Holdings', zh: '國泰金控' },
    period: 'Feb 2023 – Jul 2023',
    place: { en: 'Taipei', zh: '台北' },
    headline: {
      en: 'Designed a FHIR-standard schema for sharing medical records.',
      zh: '設計符合 FHIR 標準的醫療資料交換 schema。',
    },
    bullets: [
      {
        en: 'Designed a FHIR-standard entity-relationship schema that reduced data exchange latency between hospitals by 75%.',
        zh: '設計符合 FHIR 標準的 ER schema，讓醫院間的資料交換延遲減少 75%。',
      },
      {
        en: 'Built a medical LINE bot end to end with Flask and MongoDB, fed by automated scraping pipelines.',
        zh: '以 Flask 與 MongoDB 從頭建立醫療 LINE Bot，並串接自動化爬蟲管線。',
      },
      {
        en: 'Designed ChatGPT prompt workflows that automated XML-to-JSON conversion of legacy medical records.',
        zh: '設計 ChatGPT 提示流程，自動把舊有醫療紀錄從 XML 轉成 JSON。',
      },
    ],
    tech: ['FHIR', 'Python', 'Flask', 'MongoDB'],
  },
];

export const EDUCATION = [
  {
    school: { en: 'National Yang Ming Chiao Tung University', zh: '國立陽明交通大學' } as L,
    degree: { en: 'M.S., Brain Science', zh: '腦科學 碩士' } as L,
    period: '2021 – 2024',
  },
  {
    school: { en: 'National Taiwan University', zh: '國立臺灣大學' } as L,
    degree: { en: 'B.S., Animal Science', zh: '動物科學 學士' } as L,
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
    group: { en: 'Pipelines and orchestration', zh: '管線與排程' },
    items: ['Apache Airflow', 'dbt', 'Azure Data Factory', 'Kafka', 'Spark', 'Flink', 'Delta Live Tables'],
  },
  {
    group: { en: 'Platforms and storage', zh: '平台與儲存' },
    items: ['Databricks', 'Azure Synapse', 'Snowflake', 'ClickHouse', 'SQL Server', 'MongoDB', 'Apache Iceberg'],
  },
  {
    group: { en: 'Analytics', zh: '分析與視覺化' },
    items: ['Power BI', 'Tableau', 'Metabase', 'Apache Superset', 'Google Sheets'],
  },
  {
    group: { en: 'AI engineering', zh: 'AI 工程' },
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
      zh: '與蝦皮合作展店策略分析；處理超過 8,000 萬筆 Gogoro 電池資料並做成 Streamlit 應用。',
    },
  },
  {
    role: { en: 'Member', zh: '社員' },
    org: { en: 'NTHU Management Consulting Club', zh: '清大管理顧問社' },
    period: '2021 – 2022',
    note: {
      en: 'Used hypothesis-driven research to find user pain points for a startup; the resulting campaign grew subscriptions 300% in a year.',
      zh: '以假說驅動的方法找出新創公司的使用者痛點，後續行銷活動讓訂閱數一年成長 300%。',
    },
  },
  {
    role: { en: 'President', zh: '社長' },
    org: { en: 'NTU Star Rain Club', zh: '臺大星雨社' },
    period: '2020 – 2021',
    note: {
      en: 'Tripled membership, raised NT$100k in sponsorship, and ran autism awareness events for 120+ students.',
      zh: '社員人數成長三倍、募得新台幣 10 萬元贊助，並為 120 位以上學生舉辦自閉症推廣活動。',
    },
  },
];

// ---------- Projects ----------

export const LIVE = [
  {
    id: 'kitchen-clash',
    name: { en: 'Kitchen Clash', zh: 'Kitchen Clash 匹克球廚房對決' } as L,
    url: 'https://kitchen-clash.onrender.com',
    kind: { en: 'Browser game', zh: '網頁遊戲' } as L,
    pitch: {
      en: 'A pickleball game you play in the browser. Rally against the computer or a friend online, talk over voice chat, and unleash special shots that would be at home in a sports anime.',
      zh: '打開瀏覽器就能玩的匹克球遊戲。可以跟電腦對打，也可以線上跟朋友對戰、開語音聊天，還有像運動動漫一樣誇張的必殺技。',
    } as L,
    facts: [
      { en: '40 courts at world landmarks', zh: '40 個世界名勝球場' },
      { en: 'Online matches with voice chat', zh: '線上對戰加語音' },
      { en: 'Nothing to download', zh: '免下載' },
    ] as L[],
    note: 'wake' as const,
  },
  {
    id: 'feng',
    name: { en: 'Feng Qi Lai (瘋起來)', zh: '瘋起來' } as L,
    url: 'https://appointment-website-rust.vercel.app/events',
    kind: { en: 'Web app', zh: '網頁應用' } as L,
    pitch: {
      en: 'A place for friends to rally each other. Post an outing, see who is in, and stop losing plans in a group chat. Its slogan, 揪是這麼瘋, is a pun on "that is just how crazy we are".',
      zh: '讓朋友之間互相揪團的網站。發起活動、看誰要跟，不用再讓約會淹沒在群組訊息裡。標語是「揪是這麼瘋」。',
    } as L,
    facts: [
      { en: 'Create and join events', zh: '發起與參加活動' },
      { en: 'Sign in to see what friends are planning', zh: '登入後看朋友在揪什麼' },
    ] as L[],
    note: 'login' as const,
  },
];

export type Category = 'ai' | 'streaming' | 'lakehouse' | 'apps';

export const CATEGORIES: { id: Category; label: L; blurb: L }[] = [
  {
    id: 'ai',
    label: { en: 'AI agents', zh: 'AI Agent' },
    blurb: {
      en: 'Giving models tools, memory and guardrails, then testing whether they behave.',
      zh: '讓模型能用工具、有記憶、有防護，並測試它的行為是否正確。',
    },
  },
  {
    id: 'streaming',
    label: { en: 'Streaming and CDC', zh: '串流與 CDC' },
    blurb: {
      en: 'Events as they happen: Kafka, Flink, Spark Structured Streaming and change data capture.',
      zh: '即時處理事件：Kafka、Flink、Spark Structured Streaming 與異動資料擷取。',
    },
  },
  {
    id: 'lakehouse',
    label: { en: 'Lakehouse and dbt', zh: 'Lakehouse 與 dbt' },
    blurb: {
      en: 'Batch pipelines and modelling: medallion layers, star schemas and tested transformations.',
      zh: '批次管線與資料建模：Medallion 分層、星狀模型與有測試的轉換。',
    },
  },
  {
    id: 'apps',
    label: { en: 'Apps and analysis', zh: '應用與分析' },
    blurb: {
      en: 'Backends, small web apps and analysis projects.',
      zh: '後端服務、小型網頁應用與分析專案。',
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

export const REPOS: Repo[] = [
  // ---- AI agents ----
  {
    repo: 'AdmGPT',
    title: { en: 'AdmGPT', zh: 'AdmGPT' },
    desc: {
      en: 'A self-hosted, ChatGPT-style assistant on Claude and LangGraph: streaming chat, answers from your uploaded documents, web search and long-term memory.',
      zh: '自架的 ChatGPT 風格助理，以 Claude 與 LangGraph 打造：串流對話、根據上傳文件回答、網路搜尋與長期記憶。',
    },
    cat: 'ai',
    tech: ['LangGraph', 'Claude', 'RAG', 'FastAPI', 'Chroma'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'AI-Agent-Evaluation',
    title: { en: 'AI Agent Evaluation', zh: 'AI Agent 評測' },
    desc: {
      en: 'Tests a refund agent end to end with DeepEval. Seven metrics score its answers, its tool calls and its full reasoning trace.',
      zh: '用 DeepEval 完整評測一個退款 Agent，以七項指標檢查最終回答、工具呼叫與整段推理軌跡。',
    },
    cat: 'ai',
    tech: ['DeepEval', 'LangChain', 'Claude'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'Multi-Agent-Travel-Planner',
    title: { en: 'TripMate multi-agent planner', zh: 'TripMate 多 Agent 旅遊規劃' },
    desc: {
      en: 'Four agents take a request such as "7 days in Japan under NT$60,000" and work through flights, hotels, an itinerary and a final answer.',
      zh: '四個 Agent 接力處理「六萬元內的日本七日遊」這類需求：查機票、找飯店、排行程、寫出最後答案。',
    },
    cat: 'ai',
    tech: ['LangGraph', 'FastAPI', 'Docker'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'agentic-rag',
    title: { en: 'Agentic RAG', zh: 'Agentic RAG' },
    desc: {
      en: 'A ten-node graph that changes its path with the question: retrieve, grade the documents, rewrite the query or fall back to web search.',
      zh: '十個節點的流程圖，會依問題改變路徑：檢索、評分文件、改寫查詢，或改用網路搜尋。',
    },
    cat: 'ai',
    tech: ['LangGraph', 'Pinecone', 'Tavily'],
    year: 2026,
  },
  {
    repo: 'data-ai-agent',
    title: { en: 'AI data agent', zh: 'AI 資料 Agent' },
    desc: {
      en: 'Turns a plain-language request into either a safe SQL query on PostgreSQL or an ETL job, routed by a top-level agent.',
      zh: '把自然語言需求轉成安全的 PostgreSQL 查詢或 ETL 工作，由上層 Agent 自動分流。',
    },
    cat: 'ai',
    tech: ['LangGraph', 'PostgreSQL', 'Pandas'],
    year: 2026,
  },
  {
    repo: 'MCP_Server',
    title: { en: 'MCP task server', zh: 'MCP 任務伺服器' },
    desc: {
      en: 'A small task manager that AI agents use through the Model Context Protocol, with every layer shown in five short Python files.',
      zh: '讓 AI Agent 透過 Model Context Protocol 使用的小型任務管理工具，五個簡短的 Python 檔案展示每一層。',
    },
    cat: 'ai',
    tech: ['MCP', 'Python', 'SQLite'],
    year: 2026,
  },
  {
    repo: 'self-healing-project',
    title: { en: 'Self-healing NLP pipeline', zh: '自我修復的 NLP 管線' },
    desc: {
      en: 'An Airflow 3 batch pipeline that repairs dirty input before LLM inference and degrades gracefully when the model is unavailable.',
      zh: 'Airflow 3 批次管線，在 LLM 推論前自動修復髒資料，模型掛掉時也能優雅降級、照常跑完。',
    },
    cat: 'ai',
    tech: ['Airflow 3', 'LLM', 'Python'],
    year: 2026,
  },
  // ---- Streaming ----
  {
    repo: 'Realtime-Streaming-with-Apache-Flink',
    title: { en: 'E-commerce transactions with Flink', zh: 'Flink 即時電商交易處理' },
    desc: {
      en: 'Processes transactions in under 100 ms with exactly-once guarantees, writing to both PostgreSQL and Elasticsearch.',
      zh: '以低於 100 毫秒的延遲處理交易，具備 exactly-once 保證，同時寫入 PostgreSQL 與 Elasticsearch。',
    },
    cat: 'streaming',
    tech: ['Flink', 'Kafka', 'Elasticsearch', 'Java'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'Anomaly-Detection-Pipeline',
    title: { en: 'IoT anomaly detection pipeline', zh: 'IoT 異常偵測管線' },
    desc: {
      en: 'Simulates 50 smartwatches at up to 10,000 messages a second on a three-broker Kafka cluster, monitored with Prometheus and Grafana.',
      zh: '模擬 50 支智慧手錶、每秒最高 10,000 則訊息，跑在三節點 Kafka 叢集上，並以 Prometheus 與 Grafana 監控。',
    },
    cat: 'streaming',
    tech: ['Kafka KRaft', 'Prometheus', 'Grafana', 'Docker'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'Banking-Data-Digestion-with-Airflow-and-dbt',
    title: { en: 'Banking CDC pipeline', zh: '銀行 CDC 資料管線' },
    desc: {
      en: 'Captures every insert, update and hard delete from PostgreSQL through Kafka into a data lake, then builds SCD Type 2 marts in Snowflake.',
      zh: '擷取 PostgreSQL 的每一筆新增、修改與刪除，經 Kafka 進入資料湖，再於 Snowflake 建立 SCD Type 2 資料市集。',
    },
    cat: 'streaming',
    tech: ['Debezium', 'Kafka', 'MinIO', 'Snowflake', 'dbt', 'Airflow'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'Real-Stock-Market-Project-with-Snowflake-dbt-Airflow',
    title: { en: 'Real-time stock market pipeline', zh: '即時股市資料管線' },
    desc: {
      en: 'Streams live quotes from Finnhub through bronze, silver and gold layers to a real-time Power BI dashboard.',
      zh: '從 Finnhub 串流即時報價，經過 Bronze、Silver、Gold 三層，送到即時的 Power BI 儀表板。',
    },
    cat: 'streaming',
    tech: ['Kafka', 'Snowflake', 'dbt', 'Airflow', 'Power BI'],
    year: 2026,
  },
  {
    repo: 'data-capture-change-project',
    title: { en: 'CDC with Debezium and Kafka', zh: 'Debezium 加 Kafka 的 CDC' },
    desc: {
      en: 'Streams row-level changes from PostgreSQL, including deletes, using log-based replication with almost no load on the source.',
      zh: '以 log-based 複寫串流 PostgreSQL 的每一列異動（包含刪除），幾乎不增加來源資料庫負擔。',
    },
    cat: 'streaming',
    tech: ['Debezium', 'Kafka', 'PostgreSQL'],
    year: 2026,
  },
  {
    repo: 'smart-city-',
    title: { en: 'Smart city streaming', zh: '智慧城市串流' },
    desc: {
      en: 'Simulates a city-wide vehicle sensor network and processes it with Spark in Docker into an AWS data lake.',
      zh: '模擬全城的車輛感測器網路，以 Docker 中的 Spark 處理後寫入 AWS 資料湖。',
    },
    cat: 'streaming',
    tech: ['Kafka', 'Spark', 'AWS S3', 'Docker'],
    year: 2026,
  },
  {
    repo: 'realtime-data-streaming-with-Kafka-Spark-Cassandra',
    title: { en: 'Kafka, Spark and Cassandra', zh: 'Kafka、Spark 與 Cassandra' },
    desc: {
      en: 'An event-driven pipeline from Airflow through Kafka and Spark Structured Streaming into Cassandra.',
      zh: '事件驅動的管線：從 Airflow 經 Kafka、Spark Structured Streaming，寫入 Cassandra。',
    },
    cat: 'streaming',
    tech: ['Kafka', 'Spark', 'Cassandra', 'Airflow'],
    year: 2026,
  },
  {
    repo: 'End-to-End-Realtime-Streaming-with-Unstructured-Data',
    title: { en: 'Streaming unstructured data on AWS', zh: 'AWS 上的非結構化資料串流' },
    desc: {
      en: 'Spark Structured Streaming pulls structured fields out of raw text and JSON, lands them as Parquet on S3 and makes them queryable in Athena.',
      zh: '以 Spark Structured Streaming 從原始文字與 JSON 抽出結構化欄位，存成 S3 上的 Parquet，並可用 Athena 查詢。',
    },
    cat: 'streaming',
    tech: ['Spark', 'AWS S3', 'Glue', 'Athena'],
    year: 2026,
  },
  {
    repo: 'Stock-Market-Real-Time-Data-Analysis-Project',
    title: { en: 'Stock data with Kafka on AWS', zh: 'AWS 上的 Kafka 股市資料' },
    desc: {
      en: 'Replays 104K stock records through Kafka on EC2 into S3, with offset management and a crawler for Athena.',
      zh: '把 10.4 萬筆股市紀錄透過 EC2 上的 Kafka 重播到 S3，包含 offset 管理與供 Athena 使用的 crawler。',
    },
    cat: 'streaming',
    tech: ['Kafka', 'AWS EC2', 'S3', 'Glue', 'Athena'],
    year: 2026,
  },
  {
    repo: 'Realtime-Logs-Processing',
    title: { en: 'Real-time log indexing', zh: '即時 Log 索引' },
    desc: {
      en: 'Indexes application logs in real time with Kafka and Elasticsearch, end to end on free tiers.',
      zh: '以 Kafka 與 Elasticsearch 即時索引應用程式 log，全程使用免費方案。',
    },
    cat: 'streaming',
    tech: ['Kafka', 'Elasticsearch', 'Python'],
    year: 2025,
  },
  // ---- Lakehouse & dbt ----
  {
    repo: 'Weather_Analytics_Iceberg',
    title: { en: 'Weather analytics on Apache Iceberg', zh: 'Apache Iceberg 天氣分析' },
    desc: {
      en: 'A Spark and Iceberg batch pipeline that handles corrections, late events and duplicate deliveries with idempotent MERGE INTO.',
      zh: 'Spark 加 Iceberg 的批次管線，以冪等的 MERGE INTO 處理資料更正、遲到事件與重複送達。',
    },
    cat: 'lakehouse',
    tech: ['Spark', 'Iceberg', 'Docker', 'Power BI'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'FMCG-Domain-Data-Engineering-Project-with-Databricks',
    title: { en: 'FMCG pipeline on Databricks', zh: 'Databricks 快消品資料管線' },
    desc: {
      en: 'Merges a parent company and its subsidiary into one medallion pipeline with incremental loads, Delta MERGE and a BI dashboard.',
      zh: '把母公司與子公司的資料整合進同一條 Medallion 管線，包含增量載入、Delta MERGE 與 BI 儀表板。',
    },
    cat: 'lakehouse',
    tech: ['Databricks', 'PySpark', 'Delta Lake', 'AWS S3'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'Star-Schema-Build-up-from-S3-to-Snowflake-with-dbt',
    title: { en: 'S3 to Snowflake star schema', zh: '從 S3 到 Snowflake 的星狀模型' },
    desc: {
      en: 'Builds a star schema from Airbnb rental data with incremental loads, SCD Type 2 dimensions and metadata-driven models.',
      zh: '以 Airbnb 租屋資料建立星狀模型，包含增量載入、SCD Type 2 維度與 metadata 驅動的模型。',
    },
    cat: 'lakehouse',
    tech: ['dbt', 'Snowflake', 'AWS S3'],
    year: 2026,
  },
  {
    repo: 'Transformation-with-dbt-snowflake-airflow',
    title: { en: 'dbt on Snowflake, run by Airflow', zh: 'Airflow 排程的 dbt 加 Snowflake' },
    desc: {
      en: 'Uses Astronomer Cosmos to run each dbt model as its own Airflow task, with staging, intermediate and mart layers.',
      zh: '以 Astronomer Cosmos 讓每個 dbt 模型成為獨立的 Airflow 任務，分為 staging、intermediate 與 marts 三層。',
    },
    cat: 'lakehouse',
    tech: ['dbt', 'Snowflake', 'Airflow', 'Cosmos'],
    year: 2026,
  },
  {
    repo: 'dbt-Netflix-project',
    title: { en: 'MovieLens analytics engineering', zh: 'MovieLens 分析工程' },
    desc: {
      en: 'Models the MovieLens 20M dataset using every core dbt feature: incremental models, snapshots, seeds, macros and custom tests.',
      zh: '以 MovieLens 2,000 萬筆資料練習 dbt 的所有核心功能：增量模型、snapshot、seed、macro 與自訂測試。',
    },
    cat: 'lakehouse',
    tech: ['dbt', 'Snowflake', 'AWS S3'],
    year: 2026,
  },
  {
    repo: 'insurance-data-transfer-project',
    title: { en: 'Insurance claims pipeline', zh: '保險理賠資料管線' },
    desc: {
      en: 'Moves synthetic claims from MongoDB Atlas to Snowflake with Airbyte, transforms them with dbt and shows fraud analytics in Power BI.',
      zh: '以 Airbyte 把模擬的理賠資料從 MongoDB Atlas 搬到 Snowflake，用 dbt 轉換後在 Power BI 呈現詐欺分析。',
    },
    cat: 'lakehouse',
    tech: ['MongoDB', 'Airbyte', 'Snowflake', 'dbt', 'Power BI'],
    year: 2026,
  },
  {
    repo: 'Automated-ELT-pipeline-using-Airflow-dbt-Superset',
    title: { en: 'Weather ELT with Superset', zh: '天氣 ELT 與 Superset' },
    desc: {
      en: 'Pulls weather data from an API, transforms it with dbt on PostgreSQL and charts it in Superset: a right-sized stack with no cluster.',
      zh: '從 API 取得天氣資料，在 PostgreSQL 上以 dbt 轉換，並用 Superset 視覺化：不需要叢集、大小剛好的架構。',
    },
    cat: 'lakehouse',
    tech: ['Airflow', 'dbt', 'PostgreSQL', 'Superset'],
    year: 2026,
  },
  {
    repo: 'databricks_with_Lakeflow-and-Medallion',
    title: { en: 'Lakeflow and medallion on Databricks', zh: 'Databricks Lakeflow 與 Medallion' },
    desc: {
      en: 'Auto Loader and Lakeflow Pipelines for automated ingestion, incremental processing and dynamic fact and dimension tables.',
      zh: '以 Auto Loader 與 Lakeflow Pipelines 完成自動匯入、增量處理，以及動態的事實表與維度表。',
    },
    cat: 'lakehouse',
    tech: ['Databricks', 'Lakeflow', 'Auto Loader'],
    year: 2025,
  },
  {
    repo: 'Uber-Project-with-dbt',
    title: { en: 'Lakehouse with Databricks and dbt', zh: 'Databricks 加 dbt 的 Lakehouse' },
    desc: {
      en: 'Combines Spark Structured Streaming and dbt snapshots to take raw sources through to analytics-ready models.',
      zh: '結合 Spark Structured Streaming 與 dbt snapshot，把原始資料一路整理成可分析的模型。',
    },
    cat: 'lakehouse',
    tech: ['Databricks', 'dbt', 'Spark'],
    year: 2025,
  },
  {
    repo: 'dbt-with-medallion-architecture',
    title: { en: 'dbt medallion with CI/CD', zh: '有 CI/CD 的 dbt Medallion' },
    desc: {
      en: 'A dbt project that implements the medallion layers with a CI/CD workflow for reliable deployments.',
      zh: '以 dbt 實作 Medallion 分層，並加上 CI/CD 流程確保部署可靠。',
    },
    cat: 'lakehouse',
    tech: ['dbt', 'CI/CD'],
    year: 2025,
  },
  {
    repo: 'PySpark-Real-Time',
    title: { en: 'PySpark patterns on Databricks', zh: 'Databricks 上的 PySpark 常用模式' },
    desc: {
      en: 'Reusable transformations, JSON flattening, incremental upserts, streaming Delta tables and SCD Type 2.',
      zh: '可重複使用的轉換、JSON 攤平、增量 upsert、串流 Delta 資料表與 SCD Type 2。',
    },
    cat: 'lakehouse',
    tech: ['PySpark', 'Databricks', 'Delta Lake'],
    year: 2025,
  },
  // ---- Apps & analysis ----
  {
    repo: 'Gogoro',
    title: { en: 'Gogoro living circle', zh: 'Gogoro 生活圈分析' },
    desc: {
      en: 'Models battery swap locations with 2D Gaussians to draw rider heatmaps, shown in a Streamlit dashboard.',
      zh: '以二維高斯模型分析換電站位置，畫出騎士的生活圈熱區，並以 Streamlit 儀表板呈現。',
    },
    cat: 'apps',
    tech: ['GeoPandas', 'Streamlit', 'Python'],
    year: 2024,
  },
  {
    repo: 'Challenge-Generator-with-React-and-FastAPI',
    title: { en: 'Coding challenge generator', zh: '程式題目產生器' },
    desc: {
      en: 'A full-stack app with a React front end and a FastAPI back end that generates practice challenges.',
      zh: 'React 前端加 FastAPI 後端的全端應用，用來產生練習題目。',
    },
    cat: 'apps',
    tech: ['React', 'FastAPI'],
    year: 2025,
  },
  {
    repo: 'FastAPI_with_Feed',
    title: { en: 'FastAPI feed service', zh: 'FastAPI 動態牆服務' },
    desc: {
      en: 'A back-end service for a social feed, built to learn FastAPI project structure.',
      zh: '社群動態牆的後端服務，用來練習 FastAPI 的專案結構。',
    },
    cat: 'apps',
    tech: ['FastAPI', 'Python'],
    year: 2025,
  },
  {
    repo: 'Personal-Website',
    title: { en: 'This website', zh: '這個網站' },
    desc: {
      en: 'The site you are reading, built with React, TypeScript and Vite. The Eswatini diary chart is generated from my own Instagram export.',
      zh: '你正在看的這個網站，以 React、TypeScript 與 Vite 製作。史瓦帝尼的日記圖表來自我自己的 Instagram 匯出資料。',
    },
    cat: 'apps',
    tech: ['React', 'TypeScript', 'Vite'],
    year: 2026,
  },
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

export const CHAPTERS: Chapter[] = [
  {
    id: 'landing',
    title: { en: 'Landing', zh: '抵達' },
    days: '1 – 16',
    text: {
      en: 'My first flight meal, my first transfer in Singapore, a ten-hour leg to Johannesburg, then a small plane into an airport whose only other aircraft belonged to the royal family. Everything after that was red dirt roads and a very large sky.',
      zh: '第一次吃飛機餐、第一次在新加坡轉機、十個小時飛到約翰尼斯堡，再搭小飛機降落在一座停機坪上只有王室專機的機場。之後迎接我的是紅土路，還有很大很大的天空。',
    },
    photos: [
      { file: 'd009-5', day: 9, alt: { en: 'A red dirt road curving past a tree under a blue sky', zh: '藍天下的紅土路與一棵樹' } },
      { file: 'd016-0', day: 16, alt: { en: 'A country road with green fields and distant mountains', zh: '鄉間公路、綠色田野與遠山' } },
      { file: 'd009-6', day: 9, alt: { en: 'Two warthogs grazing in tall grass', zh: '兩隻疣豬在草地上覓食' } },
    ],
  },
  {
    id: 'farm',
    title: { en: 'The pig farm', zh: '豬場' },
    days: '3 – 230',
    text: {
      en: 'The job was the pig industry project: better genetics, better-trained farmers, cleaner slaughter and a steadier market. I spent two months in the artificial insemination house, where every dose was logged in a database called PigBase, and later drove hours to visit farmers who could lead their neighbours. It turns out a farm runs on data too.',
      zh: '我的工作是養豬產業提升計畫：改良豬種、訓練農民、推廣衛生屠宰、穩定市場。我在人工授精舍待了兩個月，每一劑精液都要登記到名為 PigBase 的資料庫；後來也開好幾個小時的車去拜訪能帶領鄰居的農戶。原來豬場也是靠資料在運作的。',
    },
    photos: [
      { file: 'd173-2', day: 173, alt: { en: 'A piglet looking straight at the camera under a heat lamp', zh: '保溫燈下直視鏡頭的小豬' } },
      { file: 'd005-3', day: 5, alt: { en: 'A litter of piglets crowded together in a pen', zh: '擠在欄舍裡的一窩小豬' } },
      { file: 'd173-1', day: 173, alt: { en: 'Piglets sleeping in the red glow of a heat lamp', zh: '在保溫燈紅光下睡覺的小豬' } },
      { file: 'd173-5', day: 173, alt: { en: 'Young pigs on a smallholder farm', zh: '小農戶豬舍裡的幼豬' } },
    ],
  },
  {
    id: 'ceremony',
    title: { en: 'Ceremony', zh: '慶典' },
    days: '23, 154',
    text: {
      en: 'On Day 23 I walked for hours with a huge crowd in the year-end warriors\' ceremony, cheered on like a pop star for the first half and walking under a gold moon for the second. Months later I helped seat Taiwan\'s delegation at the King\'s birthday celebration.',
      zh: '第 23 天，我跟著一大群人走了好幾個小時，參加年底的勇士節。前半段像明星一樣被沿路歡呼，後半段則是在金黃色的月亮下靜靜地走。幾個月後，我在國王的生日慶典上協助台灣代表團入座。',
    },
    photos: [
      { file: 'd023-8', day: 23, alt: { en: 'Men in traditional dress gathered at night under a bright moon', zh: '夜晚月光下身穿傳統服飾的人群' } },
      { file: 'd154-6', day: 154, alt: { en: 'A stadium field filled with dancers in red, blue and yellow', zh: '體育場上身穿紅藍黃服裝的表演者' } },
    ],
  },
  {
    id: 'wild',
    title: { en: 'Wild neighbours', zh: '野生的鄰居' },
    days: '36 – 177',
    text: {
      en: 'On days off we went looking for animals. Rhinos slept in the mud a few metres from the truck, an elephant decided the road was his, and on a dawn bush walk a guide showed us how to find a scorpion with a blade of grass.',
      zh: '放假的時候我們就去找動物。犀牛在離車子幾公尺的泥巴裡睡覺，大象覺得整條路都是牠的，清晨的叢林健行中，嚮導還教我們怎麼用一根草找到蠍子。',
    },
    photos: [
      { file: 'd037-5', day: 37, alt: { en: 'A giraffe standing beneath a flat-topped acacia', zh: '站在金合歡樹下的長頸鹿' } },
      { file: 'd176-5', day: 176, alt: { en: 'An elephant standing across a dirt track', zh: '擋在土路中央的大象' } },
      { file: 'd107-3', day: 107, alt: { en: 'Two rhinos grazing in green bush', zh: '在綠色灌木叢中吃草的兩隻犀牛' } },
      { file: 'd176-8', day: 176, alt: { en: 'Rhinos resting in a mud wallow', zh: '在泥坑中休息的犀牛' } },
      { file: 'd177-7', day: 177, alt: { en: 'A giraffe feeding among dry trees', zh: '在乾枯樹林間覓食的長頸鹿' } },
      { file: 'd108-3', day: 108, alt: { en: 'Sunrise seen from a safari vehicle', zh: '從遊獵車上看到的日出' } },
      { file: 'd036-7', day: 36, alt: { en: 'A lodge by the water with cloud covering the mountain behind', zh: '水邊的小屋與雲霧籠罩的山' } },
    ],
  },
  {
    id: 'high',
    title: { en: 'High ground', zh: '高處' },
    days: '34 – 219',
    text: {
      en: 'Eswatini is small enough to cross in an afternoon and hilly enough that there is always something to climb. On Day 219, in my last month, a guide led us up the country\'s highest peak.',
      zh: '史瓦帝尼小到一個下午就能橫越，卻也多山到永遠有東西可以爬。在最後一個月的第 219 天，嚮導帶我們登上了這個國家的最高峰。',
    },
    photos: [
      { file: 'd219-3', day: 219, alt: { en: 'Golden hills folding into a deep valley', zh: '金黃色山丘層層疊進深谷' } },
      { file: 'd034-6', day: 34, alt: { en: 'Green hills rolling to the horizon', zh: '綿延到地平線的綠色山丘' } },
      { file: 'd079-0', day: 79, alt: { en: 'A wide valley seen from a rocky summit', zh: '從岩石山頂俯瞰寬闊的山谷' } },
      { file: 'd128-4', day: 128, alt: { en: 'Looking up through a tall pine forest', zh: '高聳的松樹林' } },
      { file: 'd219-6', day: 219, alt: { en: 'A rocky summit under a deep blue sky', zh: '深藍天空下佈滿岩石的山頂' } },
      { file: 'd218-5', day: 218, alt: { en: 'Sunset over a garden with mountains behind', zh: '花園與遠山上的夕陽' } },
    ],
  },
  {
    id: 'last',
    title: { en: 'Last light', zh: '最後的光' },
    days: '189 – 237',
    text: {
      en: 'The final weeks went quickly: a music festival, a night in a beehive hut with warthogs asleep by the fire, a cane field burning on the horizon. On Day 237 I landed in Taiwan with nearly five kilos of liquor in my luggage and a diary I had managed to keep from the first day to the last.',
      zh: '最後幾週過得很快：一場音樂節、在蜂巢屋住一晚而疣豬就睡在營火旁、地平線上燃燒的甘蔗田。第 237 天，我帶著快五公斤的奶酒回到台灣，還有一本從第一天寫到最後一天的日記。',
    },
    photos: [
      { file: 'd231-1', day: 231, alt: { en: 'A field fire glowing orange beneath a wall of smoke', zh: '濃煙下燒得通紅的田野大火' } },
      { file: 'd212-0', day: 212, alt: { en: 'Warthogs asleep beside a campfire', zh: '睡在營火旁的疣豬' } },
      { file: 'd211-2', day: 211, alt: { en: 'A traditional beehive hut among aloes', zh: '蘆薈叢間的傳統蜂巢屋' } },
      { file: 'd189-1', day: 189, alt: { en: 'The lit entrance gate of the MTN Bushfire festival at night', zh: '夜晚亮起燈光的 MTN Bushfire 音樂節入口' } },
      { file: 'd233-4', day: 233, alt: { en: 'Clouds reflected in a still lake', zh: '倒映著雲朵的平靜湖面' } },
      { file: 'd236-0', day: 236, alt: { en: 'An orange dusk over an empty road', zh: '空曠公路上的橘色暮光' } },
    ],
  },
];
