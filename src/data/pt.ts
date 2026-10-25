import type { Content } from './types';

export const pt: Content = {
  meta: {
    title: 'Augusto Maggioni · Cientista de Dados & Engenheiro de IA',
    description:
      'Cientista de Dados e Engenheiro de IA. LLMs, RAG, machine learning e engenharia de dados em produção. Mestre em Computação Aplicada.',
  },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Habilidades',
    education: 'Formação',
    contact: 'Contato',
  },
  ui: {
    switchLang: 'Read in English',
    toggleTheme: 'Alternar tema claro/escuro',
    present: 'Atual',
    downloadCv: 'Baixar CV (PDF)',
    seeProjects: 'Ver projetos',
    visit: 'Acessar projeto',
    readPaper: 'Ler artigo',
  },
  hero: {
    kicker: 'Olá, eu sou',
    role: 'Cientista de Dados · Engenheiro de IA',
    location: 'Chapada, RS · remoto',
    status: 'Aberto a oportunidades',
    tagline:
      'Levo IA do notebook para a produção: soluções com LLMs, RAG e machine learning integradas à engenharia de dados e ao backend, com impacto mensurável no negócio.',
    terminal: {
      file: 'perfil.json',
      role: 'Cientista de Dados / Engenheiro de IA',
      focus: ['LLMs', 'RAG', 'Machine Learning', 'Engenharia de Dados'],
    },
  },
  about: {
    title: 'Sobre',
    paragraphs: [
      'Sou Cientista de Dados e Engenheiro de IA. Desde 2021 transformo dados em produtos. Hoje, na <strong>Vert Analytics</strong>, desenvolvo soluções com LLMs e RAG que automatizam a leitura, a interpretação e a geração de documentos jurídicos.',
      'Antes disso, trabalhei com backend e sistemas distribuídos, processando <strong>milhões de registros diários</strong> de rastreadores veiculares com Kafka, Redis e Docker. Por isso conheço o caminho inteiro: do dado bruto ao modelo em produção, incluindo a API que o entrega.',
      'Sou <strong>Mestre em Computação Aplicada</strong> (Ciência de Dados e IA) pela Universidade de Passo Fundo. Gosto de ambientes dinâmicos, com problemas complexos e resultados que aparecem no negócio.',
    ],
    stats: [
      { value: '{years}+', label: 'anos de experiência com dados e IA' },
      { value: '80%+', label: 'menos tempo de análise manual de documentos' },
      { value: '3', label: 'empresas com dados e IA em produção' },
      { value: 'MSc', label: 'Computação Aplicada: Ciência de Dados e IA' },
    ],
  },
  experience: {
    title: 'Experiência',
    items: [
      {
        role: 'Cientista de Dados',
        company: 'Vert Analytics',
        location: 'Brasília, DF',
        start: '2024-10',
        bullets: [
          'Desenvolvi soluções de dados e IA para automação de processos jurídicos, apoiando a tomada de decisão nas áreas jurídica e operacional',
          'Implementei soluções com LLMs (Gemini e modelos open-source) e RAG com LangChain, com busca semântica em pgvector, Qdrant, Chroma e Elasticsearch, para leitura, interpretação e geração de documentos',
          'Estruturei a avaliação das soluções de LLM/RAG: base de referência para testes de regressão, métricas de recuperação, revisão humana por especialistas e monitoramento de custo e latência',
          'Estruturei pipelines de dados e modelos de machine learning para extração e análise de informações',
          'Automatizei processos críticos, reduzindo em <strong>80%+</strong> o tempo de análise manual de documentos',
        ],
        stack: ['Python', 'LLMs', 'Gemini', 'LLMs open-source', 'RAG', 'LangChain', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      },
      {
        role: 'Desenvolvedor Full-Stack de Dados e IA',
        company: 'M9 Inteligência em Mobilidade',
        location: 'Passo Fundo, RS',
        start: '2023-12',
        end: '2024-11',
        bullets: [
          'Desenvolvi backend em Python orientado a eventos (SSE) para um sistema de gerenciamento de guinchos, processando dados de veículos e clientes em tempo real',
          'Estruturei pipelines de dados e integrei modelos de machine learning em produção, reduzindo o tempo de processamento e análise',
          'Otimizei consultas e modelagem no PostgreSQL, melhorando a performance e a escalabilidade das aplicações',
          'Contribuí para a arquitetura de sistemas distribuídos com Redis, Kafka e Docker, com alta disponibilidade e resiliência',
        ],
        stack: ['Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Linux', 'C#', 'Meilisearch', 'Databricks', 'TensorFlow', 'Scikit-learn', 'BERT', 'LLMs', 'RAG'],
      },
      {
        role: 'Desenvolvedor Back-end',
        company: 'M9 Inteligência em Mobilidade',
        location: 'Passo Fundo, RS',
        start: '2023-05',
        end: '2024-11',
        bullets: [
          'Desenvolvi e mantive serviços backend em Python para processamento distribuído de <strong>milhões de registros diários</strong> vindos de rastreadores veiculares',
          'Implementei integrações com dispositivos de rastreamento e sistemas de vídeo embarcado, garantindo ingestão e processamento contínuos',
          'Otimizei algoritmos e pipelines de dados, melhorando a performance no processamento em larga escala',
          'Modelei e gerenciei bancos SQL Server, assegurando consistência, performance e disponibilidade',
          'Atuei na gestão de servidores e infraestrutura (Linux/AWS EC2), garantindo alta disponibilidade das aplicações',
        ],
        stack: ['Python', 'SQL Server', 'Redis', 'Kafka', 'Docker', 'Linux', 'AWS EC2', 'MongoDB', 'Redes'],
      },
      {
        role: 'Cientista e Engenheiro de Dados',
        company: 'Cooperando',
        location: 'Passo Fundo, RS',
        start: '2021-06',
        end: '2023-12',
        bullets: [
          'Desenvolvi pipelines completos de dados (extração, processamento e armazenamento) com web scraping, DataFrames e bancos como MongoDB, DynamoDB e MySQL',
          'Processei grandes volumes de dados com Pandas, NumPy e Scikit-learn, viabilizando análises e insights para o negócio',
          'Desenvolvi e avaliei modelos de classificação e predição (Naive Bayes, Árvores de Decisão, K-Means, Regressão, SVM e Redes Neurais)',
          'Implementei um modelo de análise de sentimento com <strong>BERT Large em português</strong>, com 10 classes, treinado a partir de base proprietária',
          'Fiz deploy de aplicações na AWS (EC2, S3, DynamoDB, Lambda) com Flask e Nginx, com escalabilidade e custo sob demanda',
        ],
        stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'BERT', 'Flask', 'Nginx', 'AWS', 'MongoDB', 'MySQL', 'Power BI'],
      },
    ],
  },
  projects: {
    title: 'Projetos',
    featuredTitle: 'Projeto pessoal · no ar',
    industryTitle: 'Projetos profissionais',
    industryNote: 'Descritos de forma genérica, respeitando a confidencialidade de cada empresa.',
    kinds: { public: 'Publicado', corporate: 'Corporativo', research: 'Pesquisa' },
    labels: { problem: 'Problema', solution: 'Solução', result: 'Resultado', built: 'O que desenvolvi' },
    items: [
      {
        title: 'Radar Eleitoral',
        context: 'Projeto público · oladata',
        kind: 'public',
        featured: true,
        url: 'https://radar-eleitoral.oladata.com.br/',
        summary:
          'Painel das eleições brasileiras de 2010 a 2026 com um agente de IA que responde perguntas sobre os dados consultando as próprias bases em SQL.',
        problem:
          'Os dados eleitorais do TSE são volumosos, ficam espalhados entre vários pleitos e são difíceis de explorar sem conhecimento técnico.',
        solution:
          'Pipeline que consolida os dados abertos do TSE, detalhados por estado, município e seção eleitoral, com DuckDB e PostgreSQL. Por cima, um painel em Dash/Plotly com mapas, comparações entre eleições e apuração ao vivo, e um assistente com LLM: um agente com ferramentas (LangChain) que gera e executa consultas SQL para responder em linguagem natural.',
        result:
          'Aplicação no ar e aberta ao público: qualquer pessoa explora a série histórica das eleições ou simplesmente pergunta ao assistente.',
        stack: ['Python', 'LangChain', 'Agentes LLM', 'OpenAI GPT', 'Text-to-SQL', 'DuckDB', 'PostgreSQL', 'Dash', 'Plotly', 'Pandas', 'PyArrow', 'Docker'],
      },
      {
        title: 'Análise de documentos jurídicos com LLMs e RAG',
        context: 'Vert Analytics',
        kind: 'corporate',
        summary: 'Automação da leitura, interpretação e geração de documentos jurídicos.',
        problem: 'As equipes jurídicas gastavam horas lendo, interpretando e redigindo grandes volumes de documentos manualmente.',
        solution:
          'RAG com busca vetorial sobre a base documental e LLMs para interpretar e gerar documentos via APIs REST, com qualidade medida por base de referência e revisão humana.',
        result:
          'Redução de mais de <strong>80%</strong> no tempo de análise manual de documentos, além de apoio à tomada de decisão nas áreas jurídica e operacional.',
        highlights: [
          'Pipelines de extração e estruturação de dados a partir de documentos jurídicos',
          'RAG com LangChain e busca semântica em pgvector, Qdrant, Chroma e Elasticsearch',
          'Uso de LLMs (Gemini e modelos open-source) para ler, interpretar e gerar documentos',
          'Modelos de machine learning e NLP para extrair e analisar informações relevantes',
          'APIs REST que levam as soluções de IA aos sistemas e às equipes da empresa',
          'Avaliação contínua: base de referência para testes de regressão, métricas de recuperação, revisão humana por especialistas e monitoramento de custo e latência',
          'Deploy em contêineres com Docker e Kubernetes',
        ],
        stack: ['Python', 'LLMs', 'Gemini', 'RAG', 'LangChain', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      },
      {
        title: 'Gestão de guinchos em tempo real',
        context: 'M9 Inteligência em Mobilidade',
        kind: 'corporate',
        summary: 'Backend orientado a eventos para coordenar veículos, guinchos e clientes.',
        problem: 'Coordenar guinchos, veículos e clientes exige informação atualizada a cada segundo e um sistema que não pode parar.',
        solution: 'Backend em Python com Server-Sent Events, mensageria com Kafka, cache em Redis e PostgreSQL otimizado.',
        result:
          'Acompanhamento em tempo real dos atendimentos, com processamento e análise de dados mais rápidos, sobre uma arquitetura resiliente e de alta disponibilidade.',
        highlights: [
          'Backend em Python orientado a eventos, com Server-Sent Events para atualizar veículos, guinchos e clientes em tempo real',
          'Arquitetura distribuída com mensageria em Kafka e cache em Redis',
          'Busca rápida de clientes e veículos com Meilisearch',
          'Modelagem e otimização de consultas no PostgreSQL, melhorando performance e escalabilidade',
          'Pipelines de dados e integração de modelos de machine learning em produção',
          'Ambiente em contêineres Docker sobre Linux, com alta disponibilidade e resiliência',
        ],
        stack: ['Python', 'SSE', 'Kafka', 'Redis', 'PostgreSQL', 'Meilisearch', 'Machine Learning', 'Docker', 'Linux'],
      },
      {
        title: 'Ingestão de telemetria veicular em larga escala',
        context: 'M9 Inteligência em Mobilidade',
        kind: 'corporate',
        summary: 'Processamento distribuído de dados de rastreadores e vídeo embarcado.',
        problem: 'Milhões de registros por dia chegando de rastreadores e câmeras embarcadas, sem margem para perda de dados.',
        solution: 'Serviços distribuídos em Python para ingestão contínua, com SQL Server modelado para performance em Linux/AWS EC2.',
        result:
          'Milhões de registros processados por dia de forma contínua, com alta disponibilidade e confiabilidade das aplicações.',
        highlights: [
          'Serviços backend em Python para processamento distribuído de <strong>milhões de registros diários</strong>',
          'Integrações com dispositivos de rastreamento e sistemas de vídeo embarcado, com ingestão contínua',
          'Otimização de algoritmos e pipelines de dados para processamento em larga escala',
          'Modelagem e gestão de bancos SQL Server, com foco em consistência, performance e disponibilidade',
          'Arquitetura distribuída com Kafka, Redis e Docker',
          'Gestão de servidores e infraestrutura em Linux e AWS EC2',
        ],
        stack: ['Python', 'Kafka', 'Redis', 'SQL Server', 'MongoDB', 'Docker', 'AWS EC2', 'Linux'],
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    groups: [
      {
        title: 'IA & Machine Learning',
        items: ['LLMs', 'RAG', 'Agentes LLM', 'LangChain', 'Avaliação de LLM/RAG', 'NLP', 'BERT', 'TensorFlow', 'Scikit-learn', 'Deep Learning'],
      },
      { title: 'Engenharia de Dados', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'ETL/ELT', 'Databricks', 'DuckDB', 'Web scraping', 'Plotly Dash', 'Power BI'] },
      { title: 'Backend & Sistemas Distribuídos', items: ['APIs REST', 'FastAPI', 'Flask', 'Kafka', 'Redis', 'SSE', 'Meilisearch', 'C#'] },
      { title: 'Bancos de Dados', items: ['PostgreSQL', 'pgvector', 'Qdrant', 'Chroma', 'Elasticsearch', 'SQL Server', 'MongoDB', 'DynamoDB', 'MySQL', 'Neo4j'] },
      { title: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'Lambda', 'Docker', 'Kubernetes', 'Rancher', 'Harbor', 'Git', 'CI/CD', 'Linux', 'Nginx'] },
    ],
  },
  education: {
    title: 'Formação',
    items: [
      {
        degree: 'Mestrado em Computação Aplicada',
        field: 'Ciência de Dados e Inteligência Artificial',
        school: 'Universidade de Passo Fundo',
        location: 'Passo Fundo, RS',
        start: '2024-02',
        end: '2026-03',
        status: 'Concluído',
        thesis:
          'Detecção de arritmias cardíacas com inteligência artificial utilizando o padrão AAMI e combinações de derivações do plano frontal',
      },
      {
        degree: 'Bacharelado em Ciência da Computação',
        school: 'Universidade de Passo Fundo',
        location: 'Passo Fundo, RS',
        start: '2018-02',
        end: '2023-12',
        status: 'Concluído',
      },
    ],
    thesisLabel: 'Dissertação',
    publicationsTitle: 'Publicações',
    publications: [
      {
        title: 'Detecção de Arritmias Cardíacas: Abordagem da Derivação I com Redes Neurais Híbridas',
        venue: 'Revista Interfaces: Saúde, Humanas e Tecnologia',
        summary:
          'Modelo baseado em redes neurais híbridas para detectar arritmias cardíacas a partir de sinais de ECG (derivação I), com processamento de sinais biomédicos, extração de características e classificação de padrões cardíacos.',
        url: 'https://interfaces.unileao.edu.br/index.php/revista-interfaces/article/view/1875',
      },
    ],
  },
  contact: {
    title: 'Contato',
    text: 'Procuro desafios em IA, machine learning e dados. Se você tem um projeto ou uma vaga em que eu possa ajudar, vamos conversar.',
    email: 'Enviar e-mail',
    linkedin: 'LinkedIn',
  },
  footer: 'Feito com Astro.',
};
