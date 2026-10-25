import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Augusto Maggioni · Data Scientist & AI Engineer',
    description:
      'Data Scientist and AI Engineer. LLMs, RAG, machine learning and data engineering in production. MSc in Applied Computing.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  ui: {
    switchLang: 'Ler em português',
    toggleTheme: 'Toggle light/dark theme',
    present: 'Present',
    downloadCv: 'Download CV (PDF)',
    seeProjects: 'See projects',
    visit: 'Open project',
    readPaper: 'Read paper',
  },
  hero: {
    kicker: "Hi, I'm",
    role: 'Data Scientist · AI Engineer',
    location: 'Chapada, RS, Brazil · remote',
    status: 'Open to opportunities',
    tagline:
      'I take AI from the notebook to production: LLM, RAG and machine learning solutions built into data engineering and backend systems, with measurable business impact.',
    terminal: {
      file: 'profile.json',
      role: 'Data Scientist / AI Engineer',
      focus: ['LLMs', 'RAG', 'Machine Learning', 'Data Engineering'],
    },
  },
  about: {
    title: 'About',
    paragraphs: [
      "I'm a Data Scientist and AI Engineer who has been turning data into products since 2021. At <strong>Vert Analytics</strong> I build LLM and RAG solutions that automate reading, interpreting and drafting legal documents.",
      'Before that I worked on backend and distributed systems, processing <strong>millions of daily records</strong> from vehicle trackers with Kafka, Redis and Docker. So I know the whole path, from raw data to a model in production and the API that serves it.',
      'I hold an <strong>MSc in Applied Computing</strong> (Data Science and AI) from the University of Passo Fundo. I enjoy fast-moving teams, hard problems and results the business can measure.',
    ],
    stats: [
      { value: '{years}+', label: 'years working with data and AI' },
      { value: '80%+', label: 'less time spent on manual document review' },
      { value: '3', label: 'companies with data and AI in production' },
      { value: 'MSc', label: 'Applied Computing: Data Science and AI' },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Data Scientist',
        company: 'Vert Analytics',
        location: 'Brasília, Brazil',
        start: '2024-10',
        bullets: [
          'Built data and AI solutions to automate legal processes, supporting legal and operational decision-making',
          'Implemented LLM (Gemini and open-source models) and RAG solutions with LangChain, with semantic search on pgvector, Qdrant, Chroma and Elasticsearch, to read, interpret and generate documents',
          'Set up evaluation for the LLM/RAG systems: a reference set for regression testing, retrieval metrics, expert human review and cost and latency monitoring',
          'Designed data pipelines and machine learning models to extract and analyze information',
          'Automated critical processes, cutting manual document review time by <strong>80%+</strong>',
        ],
        stack: ['Python', 'LLMs', 'Gemini', 'Open-source LLMs', 'RAG', 'LangChain', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      },
      {
        role: 'Full-Stack Data & AI Developer',
        company: 'M9 Inteligência em Mobilidade',
        location: 'Passo Fundo, Brazil',
        start: '2023-12',
        end: '2024-11',
        bullets: [
          'Built an event-driven (SSE) Python backend for a tow-truck management system, processing vehicle and customer data in real time',
          'Designed data pipelines and deployed machine learning models to production, reducing processing and analysis time',
          'Optimized PostgreSQL queries and data models, improving application performance and scalability',
          'Contributed to a distributed architecture with Redis, Kafka and Docker, with high availability and resilience',
        ],
        stack: ['Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Linux', 'C#', 'Meilisearch', 'Databricks', 'TensorFlow', 'Scikit-learn', 'BERT', 'LLMs', 'RAG'],
      },
      {
        role: 'Back-end Developer',
        company: 'M9 Inteligência em Mobilidade',
        location: 'Passo Fundo, Brazil',
        start: '2023-05',
        end: '2024-11',
        bullets: [
          'Built and maintained Python backend services for distributed processing of <strong>millions of daily records</strong> from vehicle trackers',
          'Implemented integrations with tracking devices and on-board video systems for continuous data ingestion and processing',
          'Optimized algorithms and data pipelines for large-scale processing',
          'Designed and managed SQL Server databases for consistency, performance and availability',
          'Managed servers and infrastructure (Linux/AWS EC2) for high availability and reliability',
        ],
        stack: ['Python', 'SQL Server', 'Redis', 'Kafka', 'Docker', 'Linux', 'AWS EC2', 'MongoDB', 'Networking'],
      },
      {
        role: 'Data Scientist & Data Engineer',
        company: 'Cooperando',
        location: 'Passo Fundo, Brazil',
        start: '2021-06',
        end: '2023-12',
        bullets: [
          'Built end-to-end data pipelines (extraction, processing, storage) with web scraping, DataFrames and databases such as MongoDB, DynamoDB and MySQL',
          'Processed large datasets with Pandas, NumPy and Scikit-learn to deliver analyses and business insights',
          'Developed and evaluated classification and prediction models (Naive Bayes, Decision Trees, K-Means, Regression, SVM, Neural Networks)',
          'Built a 10-class sentiment analysis model with <strong>Portuguese BERT Large</strong>, trained on proprietary data',
          'Deployed applications on AWS (EC2, S3, DynamoDB, Lambda) with Flask and Nginx, with on-demand scaling and cost',
        ],
        stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'BERT', 'Flask', 'Nginx', 'AWS', 'MongoDB', 'MySQL', 'Power BI'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    featuredTitle: 'Personal project · live',
    industryTitle: 'In industry',
    industryNote: "Described in general terms to respect each employer's confidentiality.",
    kinds: { public: 'Live', corporate: 'Industry', research: 'Research' },
    labels: { problem: 'Problem', solution: 'Solution', result: 'Outcome' },
    items: [
      {
        title: 'Radar Eleitoral',
        context: 'Public project · oladata',
        kind: 'public',
        featured: true,
        url: 'https://radar-eleitoral.oladata.com.br/',
        summary:
          'A dashboard of Brazilian elections from 2010 to 2026 with an AI agent that answers questions about the data by querying its own SQL databases.',
        problem:
          'Official election data (TSE) is large, scattered across many elections and hard to explore without technical skills.',
        solution:
          "A pipeline that consolidates TSE open data down to state, municipality and polling-station level, using DuckDB and PostgreSQL. On top of it, a Dash/Plotly dashboard with maps, election-to-election comparisons and live vote counting, plus an LLM assistant: a tool-using agent (LangChain) that writes and runs SQL queries to answer in plain language.",
        result: 'A live public app: anyone can explore the historical election record or simply ask the assistant.',
        stack: ['Python', 'LangChain', 'LLM agents', 'OpenAI GPT', 'Text-to-SQL', 'DuckDB', 'PostgreSQL', 'Dash', 'Plotly', 'Pandas', 'PyArrow', 'Docker'],
      },
      {
        title: 'Legal document analysis with LLMs and RAG',
        context: 'Vert Analytics',
        kind: 'corporate',
        summary: 'Automated reading, interpretation and drafting of legal documents.',
        problem: 'Legal teams spent hours reading large volumes of documents by hand.',
        solution:
          'RAG with vector search over the document base and LLMs to interpret and generate documents through REST APIs, with quality measured against a reference set and human review.',
        result: 'Manual review time cut by more than 80%.',
        stack: ['Python', 'LLMs', 'RAG', 'LangChain', 'pgvector', 'Qdrant', 'NLP', 'PostgreSQL', 'Docker', 'Kubernetes'],
      },
      {
        title: 'Real-time tow-truck management',
        context: 'M9 Inteligência em Mobilidade',
        kind: 'corporate',
        summary: 'An event-driven backend coordinating vehicles, tow trucks and customers.',
        problem: 'Coordinating tow trucks, vehicles and customers needs information that is current to the second.',
        solution: 'A Python backend with Server-Sent Events, Kafka messaging, Redis caching and a tuned PostgreSQL database.',
        result: 'Every service call tracked in real time, with high availability.',
        stack: ['Python', 'SSE', 'Kafka', 'Redis', 'PostgreSQL', 'Meilisearch', 'Docker'],
      },
      {
        title: 'Large-scale vehicle telemetry ingestion',
        context: 'M9 Inteligência em Mobilidade',
        kind: 'corporate',
        summary: 'Distributed processing of tracker and on-board video data.',
        problem: 'Millions of records a day arriving from trackers and on-board cameras, with no room for data loss.',
        solution: 'Distributed Python services for continuous ingestion, with a SQL Server schema built for performance on Linux/AWS EC2.',
        result: 'Continuous ingestion of millions of records a day.',
        stack: ['Python', 'Kafka', 'Redis', 'SQL Server', 'Docker', 'AWS EC2', 'Linux'],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'AI & Machine Learning',
        items: ['LLMs', 'RAG', 'LLM agents', 'LangChain', 'LLM/RAG evaluation', 'NLP', 'BERT', 'TensorFlow', 'Scikit-learn', 'Deep Learning'],
      },
      { title: 'Data Engineering', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'ETL/ELT', 'Databricks', 'DuckDB', 'Web scraping', 'Plotly Dash', 'Power BI'] },
      { title: 'Backend & Distributed Systems', items: ['REST APIs', 'FastAPI', 'Flask', 'Kafka', 'Redis', 'SSE', 'Meilisearch', 'C#'] },
      { title: 'Databases', items: ['PostgreSQL', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'SQL Server', 'MongoDB', 'DynamoDB', 'MySQL', 'Neo4j'] },
      { title: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'Lambda', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Linux', 'Nginx'] },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        degree: 'MSc in Applied Computing',
        field: 'Data Science and Artificial Intelligence',
        school: 'University of Passo Fundo',
        location: 'Passo Fundo, Brazil',
        start: '2024-02',
        end: '2026-03',
        status: 'Completed',
        thesis:
          'Cardiac arrhythmia detection with artificial intelligence using the AAMI standard and combinations of frontal-plane ECG leads (in Portuguese)',
      },
      {
        degree: 'BSc in Computer Science',
        school: 'University of Passo Fundo',
        location: 'Passo Fundo, Brazil',
        start: '2018-02',
        end: '2023-12',
        status: 'Completed',
      },
    ],
    thesisLabel: 'Dissertation',
    publicationsTitle: 'Publications',
    publications: [
      {
        title: 'Detecção de Arritmias Cardíacas: Abordagem da Derivação I com Redes Neurais Híbridas',
        venue: 'Revista Interfaces: Saúde, Humanas e Tecnologia (in Portuguese)',
        summary:
          'A hybrid neural network model that detects cardiac arrhythmias from ECG signals (lead I), covering biomedical signal processing, feature extraction and classification of cardiac patterns.',
        url: 'https://interfaces.unileao.edu.br/index.php/revista-interfaces/article/view/1875',
      },
    ],
  },
  contact: {
    title: 'Contact',
    text: "I'm looking for challenges in AI, machine learning and data. If you have a project or a role where I can help, let's talk.",
    email: 'Send an email',
    linkedin: 'LinkedIn',
  },
  footer: 'Built with Astro.',
};
