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
          'Built crawlers and web scrapers for courts and legal websites, plus data pipelines and machine learning models to extract and analyze information',
          'Automated critical processes, cutting manual document review time by <strong>80%+</strong>',
        ],
        stack: ['Python', 'LLMs', 'Gemini', 'Open-source LLMs', 'RAG', 'LangChain', 'Web scraping', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
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
        role: 'Data Scientist & Data Engineer (part-time)',
        company: 'Cooperando · Tua Opinião',
        location: 'Passo Fundo, Brazil',
        start: '2021-06',
        end: '2023-12',
        bullets: [
          'Built crawlers and end-to-end data pipelines (extraction, processing with Pandas and NumPy, storage in MongoDB, DynamoDB and MySQL)',
          'Built a chatbot with the OpenAI API for real estate systems',
          'Developed machine learning models for property price prediction and customer classification (Naive Bayes, Decision Trees, K-Means, Regression, SVM, Neural Networks)',
          'At Tua Opinião, built an NPS system with 10-class sentiment analysis using <strong>Portuguese BERT Large</strong>, trained on proprietary data',
          'Deployed applications on AWS (EC2, S3, DynamoDB, Lambda) with Flask and Nginx, with on-demand scaling and cost',
        ],
        stack: ['Python', 'OpenAI', 'Pandas', 'NumPy', 'Scikit-learn', 'BERT', 'Crawlers', 'Flask', 'Nginx', 'AWS', 'MongoDB', 'MySQL', 'Power BI'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    featuredTitle: 'Personal project · live',
    industryTitle: 'Professional projects',
    industryNote: "Described in general terms to respect each employer's confidentiality.",
    kinds: { public: 'Live', corporate: 'Industry', research: 'Research' },
    labels: { problem: 'Problem', solution: 'Solution', result: 'Outcome', built: 'What I built' },
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
        problem: 'Legal teams spent hours reading, interpreting and drafting large volumes of documents by hand.',
        solution:
          'RAG with vector search over the document base and LLMs to interpret and generate documents through REST APIs, with quality measured against a reference set and human review.',
        result:
          'Manual document review time cut by more than <strong>80%</strong>, with better support for legal and operational decisions.',
        highlights: [
          'Crawlers and web scrapers for courts and legal websites to collect cases and documents',
          'Data extraction and structuring pipelines for legal documents',
          'RAG with LangChain and semantic search on pgvector, Qdrant, Chroma and Elasticsearch',
          'LLMs (Gemini and open-source models) to read, interpret and generate documents',
          'Machine learning and NLP models to extract and analyze key information',
          "REST APIs that bring the AI solutions to the company's systems and teams",
          'Continuous evaluation: a reference set for regression testing, retrieval metrics, expert human review and cost and latency monitoring',
          'Containerized deployment with Docker and Kubernetes',
        ],
        stack: ['Python', 'LLMs', 'Gemini', 'RAG', 'LangChain', 'Web scraping', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      },
      {
        title: 'Real-time tow-truck management',
        context: 'M9 Inteligência em Mobilidade',
        kind: 'corporate',
        summary: 'An event-driven backend coordinating vehicles, tow trucks and customers.',
        problem: 'Coordinating tow trucks, vehicles and customers needs information that is current to the second.',
        solution: 'A Python backend with Server-Sent Events, Kafka messaging, Redis caching and a tuned PostgreSQL database.',
        result:
          'Every service call tracked in real time, with faster data processing and analysis, on a resilient, highly available architecture.',
        highlights: [
          'Event-driven Python backend using Server-Sent Events to update vehicles, tow trucks and customers in real time',
          'Distributed architecture with Kafka messaging and Redis caching',
          'Fast customer and vehicle search with Meilisearch',
          'PostgreSQL data modeling and query tuning for performance and scalability',
          'Data pipelines and machine learning models integrated into production',
          'Containerized Docker environment on Linux, built for high availability and resilience',
        ],
        stack: ['Python', 'SSE', 'Kafka', 'Redis', 'PostgreSQL', 'Meilisearch', 'Machine Learning', 'Docker', 'Linux'],
      },
      {
        title: 'Large-scale vehicle telemetry ingestion',
        context: 'M9 Inteligência em Mobilidade',
        kind: 'corporate',
        summary: 'Distributed processing of tracker and on-board video data.',
        problem: 'Millions of records a day arriving from trackers and on-board cameras, with no room for data loss.',
        solution: 'Distributed Python services for continuous ingestion, with a SQL Server schema built for performance on Linux/AWS EC2.',
        result: 'Millions of records processed every day without interruption, with highly available, reliable applications.',
        highlights: [
          'Python backend services for distributed processing of <strong>millions of daily records</strong>',
          'Integrations with tracking devices and on-board video systems for continuous ingestion',
          'Algorithm and data pipeline optimization for large-scale processing',
          'SQL Server data modeling and management for consistency, performance and availability',
          'Distributed architecture with Kafka, Redis and Docker',
          'Server and infrastructure management on Linux and AWS EC2',
        ],
        stack: ['Python', 'Kafka', 'Redis', 'SQL Server', 'MongoDB', 'Docker', 'AWS EC2', 'Linux'],
      },
      {
        title: 'Crawlers, chatbot and predictive models for real estate',
        context: 'Cooperando',
        kind: 'corporate',
        summary:
          'From crawler to model in production: data collection, an OpenAI chatbot for real estate systems and property price prediction.',
        problem: 'Business data was scattered across external sources with no structure for analysis and decision-making.',
        solution: 'Crawlers and data pipelines, an OpenAI chatbot and machine learning models, deployed on AWS.',
        result:
          'A structured base for analysis and decisions, a production chatbot for real estate systems, property price prediction and customer classification.',
        highlights: [
          'Crawlers and end-to-end data pipelines: extraction, processing with Pandas and NumPy, storage in MongoDB, DynamoDB and MySQL',
          'A chatbot built on the OpenAI API for real estate systems',
          'Machine learning models for <strong>property price prediction</strong> and <strong>customer classification</strong>, using Naive Bayes, Decision Trees, K-Means, Regression, SVM and Neural Networks',
          'Data analysis with Power BI, Excel and Pandas to support decision-making',
          'Deployment with Flask and Nginx on AWS (EC2, S3, DynamoDB and Lambda), integrated for on-demand cost',
        ],
        stack: ['Python', 'OpenAI', 'Chatbot', 'Crawlers', 'Scikit-learn', 'Pandas', 'NumPy', 'MongoDB', 'DynamoDB', 'MySQL', 'Flask', 'Nginx', 'AWS', 'Power BI'],
      },
      {
        title: 'NPS system with BERT sentiment analysis',
        context: 'Tua Opinião',
        kind: 'corporate',
        summary: 'Automatic sentiment classification of Portuguese NPS responses.',
        problem: 'Open-ended NPS survey responses needed classifying with more nuance than just "positive" and "negative".',
        solution: "Fine-tuned Portuguese BERT Large on the company's annotated data to classify sentiment into 10 classes.",
        result: 'Automatic, fine-grained <strong>10-class</strong> sentiment analysis of NPS responses, trained on company data.',
        highlights: [
          'An NPS system with automatic sentiment classification of responses',
          'A <strong>10-class</strong> sentiment analyzer with Portuguese BERT Large',
          "Training on annotations from the company's own data",
        ],
        stack: ['Python', 'BERT', 'NLP', 'Deep Learning'],
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
      { title: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'Lambda', 'Docker', 'Kubernetes', 'Rancher', 'Harbor', 'Git', 'CI/CD', 'Linux', 'Nginx'] },
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
