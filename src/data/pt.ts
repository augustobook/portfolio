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
    menu: 'Abrir menu de seções',
    present: 'Atual',
    downloadCv: 'Baixar CV (PDF)',
    seeProjects: 'Ver projetos',
    visit: 'Acessar projeto',
    readPaper: 'Ler artigo',
    prevImage: 'Captura anterior',
    nextImage: 'Próxima captura',
    goToImage: 'Ir para a captura {n}',
  },
  hero: {
    kicker: 'Olá, eu sou',
    role: 'Cientista de Dados · Engenheiro de IA',
    location: 'Chapada, RS · remoto',
    status: 'Aberto a oportunidades',
    badge: { title: 'IA em produção', detail: 'LLMs · RAG · Agentes' },
    tagline:
      'Levo IA do notebook para a produção: soluções com LLMs, RAG e machine learning integradas à engenharia de dados e ao backend, com impacto mensurável no negócio.',
    terminal: {
      file: 'perfil.json',
      role: 'Cientista de Dados / Engenheiro de IA',
      focus: [
        'Ciência de Dados',
        'Inteligência Artificial',
        'Aprendizado de Máquina',
        'Grandes Modelos de Linguagem (LLMs)',
        'Geração Aumentada por Recuperação (RAG)',
        'Engenharia de Dados',
        'Pesquisa científica',
      ],
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
          'Atuei em projetos para órgãos públicos como a <strong>Secretaria da Saúde do Espírito Santo (SESA-ES)</strong>, a <strong>Companhia de Engenharia de Tráfego de São Paulo (CET-SP)</strong>, o <strong>Detran</strong> e a <strong>Polícia Civil</strong>',
          'Implementei soluções com LLMs (Gemini e modelos open-source) e RAG com LangChain e LangGraph, com busca semântica em pgvector, Qdrant, Chroma, FAISS e Elasticsearch, para leitura, interpretação e geração de documentos',
          'Apliquei RAG com busca por similaridade e recuperação de informações na construção de um chatbot',
          'Implementei OCR com Tesseract, Chandra e Docling para extrair o texto de documentos e estruturar os dados',
          'Utilizei AWS Bedrock e Azure Document Intelligence',
          'Estruturei a avaliação das soluções de LLM/RAG: base de referência para testes de regressão, métricas de recuperação (MRR, precisão e recall), métricas de geração de texto (ROUGE e BLEU), revisão humana por especialistas e monitoramento de custo e latência',
          'Usei MLflow para rastrear experimentos e versionar modelos',
          'Desenvolvi crawlers e web scraping de tribunais e sites jurídicos, e estruturei pipelines de dados e modelos de machine learning para extração e análise de informações',
          'Construí APIs REST com FastAPI para disponibilizar as soluções de IA',
          'Automatizei processos críticos, reduzindo em <strong>80%+</strong> o tempo de análise manual de documentos',
        ],
        stack: ['Python', 'Jupyter Notebook', 'LLMs', 'Gemini', 'LLMs open-source', 'RAG', 'LangChain', 'LangGraph', 'MLflow', 'AWS Bedrock', 'OCR', 'Tesseract', 'Chandra', 'Docling', 'Azure Document Intelligence', 'Web scraping', 'pgvector', 'Qdrant', 'Chroma', 'FAISS', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
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
          'Apliquei OCR para extrair o texto de documentos e estruturar os dados',
          'Implementei RAG com LangChain e LangGraph, com busca por similaridade no Qdrant para recuperar informações semelhantes',
          'Construí APIs com FastAPI',
          'Otimizei consultas e modelagem no PostgreSQL, melhorando a performance e a escalabilidade das aplicações',
          'Contribuí para a arquitetura de sistemas distribuídos com Redis, Kafka e Docker, com alta disponibilidade e resiliência',
        ],
        stack: ['Python', 'Jupyter Notebook', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Linux', 'C#', 'Meilisearch', 'Databricks', 'TensorFlow', 'Scikit-learn', 'BERT', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'Qdrant', 'OCR'],
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
          'Construí APIs com FastAPI',
          'Otimizei algoritmos e pipelines de dados, melhorando a performance no processamento em larga escala',
          'Modelei e gerenciei bancos SQL Server, assegurando consistência, performance e disponibilidade',
          'Atuei na gestão de servidores e infraestrutura (Linux/AWS EC2), garantindo alta disponibilidade das aplicações',
        ],
        stack: ['Python', 'Jupyter Notebook', 'FastAPI', 'SQL Server', 'Redis', 'Kafka', 'Docker', 'Linux', 'AWS EC2', 'MongoDB', 'Redes'],
      },
      {
        role: 'Cientista e Engenheiro de Dados',
        company: 'Cooperando · Tua Opinião',
        location: 'Passo Fundo, RS',
        start: '2021-06',
        end: '2023-12',
        bullets: [
          'Desenvolvi crawlers e pipelines completos de dados (extração, processamento com Pandas e NumPy e armazenamento em MongoDB, DynamoDB e MySQL)',
          'Construí um chatbot com a API da OpenAI para sistemas imobiliários',
          'Apliquei OCR para extrair o texto de documentos e estruturar os dados',
          'Implementei RAG com LangChain, com similaridade de textos usando embeddings BERT para recuperar informações semelhantes',
          'Desenvolvi modelos de machine learning para predição de valores de imóveis e classificação de clientes (Naive Bayes, Árvores de Decisão, K-Means, Regressão, SVM e Redes Neurais)',
          'Na Tua Opinião, construí um sistema de NPS com análise de sentimento em 10 classes usando <strong>BERT Large em português</strong>, treinado a partir de base proprietária',
          'Construí APIs com FastAPI',
          'Fiz deploy de aplicações na AWS (EC2, S3, DynamoDB, Lambda) com Flask e Nginx, com escalabilidade e custo sob demanda',
        ],
        stack: ['Python', 'Jupyter Notebook', 'FastAPI', 'OpenAI', 'RAG', 'LangChain', 'OCR', 'Pandas', 'NumPy', 'Scikit-learn', 'BERT', 'Crawlers', 'Flask', 'Nginx', 'AWS', 'MongoDB', 'MySQL', 'Power BI'],
      },
    ],
  },
  projects: {
    title: 'Projetos',
    featuredTitle: 'Projetos pessoais',
    industryTitle: 'Projetos profissionais',
    industryNote: 'Descritos de forma genérica, respeitando a confidencialidade de cada empresa.',
    kinds: { public: 'Publicado', personal: 'Em desenvolvimento', corporate: 'Corporativo', research: 'Pesquisa' },
    labels: { problem: 'Problema', solution: 'Solução', result: 'Resultado', built: 'O que desenvolvi' },
    items: [
      {
        title: 'Radar Eleitoral',
        context: 'Projeto público · oladata',
        kind: 'public',
        featured: true,
        url: 'https://radar-eleitoral.oladata.com.br/',
        urlNote: 'Se o site não responder, é porque o servidor está desligado para evitar custos. É só me chamar que eu ligo.',
        summary:
          'Painel das eleições brasileiras de 2010 a 2026 com um chatbot de IA que responde, em linguagem natural, qualquer pergunta do usuário sobre os dados e o site.',
        problem:
          'Os dados eleitorais do TSE são volumosos, ficam espalhados entre vários pleitos e são difíceis de explorar sem conhecimento técnico.',
        solution:
          'Pipeline que consolida os dados abertos do TSE, detalhados por estado, município e seção eleitoral, com DuckDB e PostgreSQL. Por cima, um painel em Dash/Plotly com mapas, comparações entre eleições e apuração ao vivo, e um chatbot com IA: o usuário pergunta o que quiser sobre as eleições ou sobre o site, do jeito que falaria com uma pessoa, e recebe a resposta na hora. Por trás, um agente LLM com ferramentas (LangChain) consulta as bases em SQL para montar a resposta.',
        result:
          'Aplicação no ar e aberta ao público: qualquer pessoa explora a série histórica das eleições ou simplesmente pergunta ao chatbot.',
        images: [
          { src: 'projetos/radar-eleitoral/inicio.webp', alt: 'Página inicial do Radar Eleitoral com os números gerais e os atalhos de análise' },
          { src: 'projetos/radar-eleitoral/comparecimento.webp', alt: 'Comparecimento, abstenção, brancos e nulos com a linha do tempo de cada indicador' },
          { src: 'projetos/radar-eleitoral/fragmentacao.webp', alt: 'Fragmentação e competição: margem de vitória e número efetivo de partidos nos municípios' },
        ],
        stack: ['Python', 'LangChain', 'Agentes LLM', 'OpenAI GPT', 'Text-to-SQL', 'DuckDB', 'PostgreSQL', 'Dash', 'Plotly', 'Pandas', 'PyArrow', 'Docker'],
      },
      {
        title: 'Víbora',
        context: 'Projeto pessoal · padel, tênis e beach tênis',
        kind: 'personal',
        featured: true,
        summary:
          'Plataforma para esportes de raquete com duas frentes: um app para o jogador achar jogo, reservar quadra, competir e acompanhar a própria evolução, e um painel para o clube gerir agenda, torneios, aulas, loja e relacionamento com os jogadores. Junto, uma linha de visão computacional que analisa o vídeo das partidas.',
        problem:
          'Clubes de padel gerenciam reservas, torneios e aulas em planilhas e grupos de WhatsApp, e o jogador amador não tem como achar parceiros do seu nível nem medir a própria evolução de forma justa.',
        solution:
          'Backend modular em FastAPI e PostgreSQL com 25 módulos de domínio: autenticação com JWT e refresh com rotação, reservas com checagem de conflito, torneios com chaves, grupos e mata-mata automáticos, americanos com rodadas round-robin, matchmaking por compatibilidade, ranking por rating e notificações. Frontend em Next.js e React com TypeScript. Na visão computacional: YOLO11-pose e ByteTrack rastreiam os jogadores, uma homografia converte pixels em metros da quadra para gerar mapas de calor, o Gemini rotula os golpes nos vídeos e uma rede GRU classifica o golpe a partir da sequência de pose.',
        result:
          'App navegável com o ciclo principal já ligado à API real (cadastro, reservas, torneios, americanos, aulas, matchmaking e CRM) e um primeiro classificador de golpes treinado com dados rotulados pelo próprio pipeline.',
        images: [
          { src: 'projetos/vibora/dashboard.webp', alt: 'Visão geral do clube: receita, reservas, ocupação por quadra e hora e alertas' },
          { src: 'projetos/vibora/financeiro.webp', alt: 'Financeiro: receita, despesa, lucro, contas a receber e a série diária do mês' },
          { src: 'projetos/vibora/torneios.webp', alt: 'Os três formatos de torneio e todos os torneios em andamento no clube' },
          { src: 'projetos/vibora/torneio-classico.webp', alt: 'Torneio clássico: duplas confirmadas, receita de inscrições e lista de espera por categoria' },
          { src: 'projetos/vibora/chave-ao-vivo.webp', alt: 'Chave ao vivo: grupos todos-contra-todos com classificação, horários e placares' },
          { src: 'projetos/vibora/aulas.webp', alt: 'Aulas: agenda com professores, alunos, quadras, valores e situação de cada aula' },
          { src: 'projetos/vibora/perfil-clube.webp', alt: 'Perfil público do clube como o jogador o vê, com quadras e reserva' },
        ],
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLModel', 'Alembic', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'YOLO11', 'ByteTrack', 'OpenCV', 'PyTorch', 'Gemini'],
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
          'Crawlers e web scraping de tribunais e sites jurídicos para coletar processos e documentos',
          'Pipelines com OCR (Tesseract, Chandra e Docling) para extração e estruturação de dados a partir de documentos jurídicos',
          'RAG com LangChain e busca semântica em pgvector, Qdrant, Chroma, FAISS e Elasticsearch',
          'Uso de LLMs (Gemini e modelos open-source) para ler, interpretar e gerar documentos',
          'Modelos de machine learning e NLP para extrair e analisar informações relevantes',
          'APIs REST que levam as soluções de IA aos sistemas e às equipes da empresa',
          'Avaliação contínua: base de referência para testes de regressão, métricas de recuperação (MRR, precisão e recall), métricas de geração de texto (ROUGE e BLEU), revisão humana por especialistas e monitoramento de custo e latência',
          'MLflow para rastrear experimentos e versionar modelos',
          'Deploy em contêineres com Docker e Kubernetes',
        ],
        stack: ['Python', 'Jupyter Notebook', 'LLMs', 'Gemini', 'RAG', 'LangChain', 'OCR', 'Tesseract', 'Chandra', 'Docling', 'MLflow', 'Web scraping', 'pgvector', 'Qdrant', 'Chroma', 'FAISS', 'Elasticsearch', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
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
        stack: ['Python', 'Jupyter Notebook', 'SSE', 'Kafka', 'Redis', 'PostgreSQL', 'Meilisearch', 'Machine Learning', 'Docker', 'Linux'],
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
        stack: ['Python', 'Jupyter Notebook', 'Kafka', 'Redis', 'SQL Server', 'MongoDB', 'Docker', 'AWS EC2', 'Linux'],
      },
      {
        title: 'Crawlers, chatbot e modelos preditivos para o setor imobiliário',
        context: 'Cooperando',
        kind: 'corporate',
        summary:
          'Do crawler ao modelo em produção: coleta de dados, chatbot com OpenAI para sistemas imobiliários e predição de valor de imóveis.',
        problem: 'Os dados de negócio estavam espalhados em fontes externas e sem estrutura para análise e decisão.',
        solution:
          'Crawlers e pipelines de dados, um chatbot com OpenAI e modelos de machine learning, publicados na AWS.',
        result:
          'Uma base estruturada para análises e decisões, um chatbot em produção para sistemas imobiliários, predição de valores de imóveis e classificação de clientes.',
        highlights: [
          'Crawlers e pipelines completos de dados: extração, processamento com Pandas e NumPy e armazenamento em MongoDB, DynamoDB e MySQL',
          'Chatbot com a API da OpenAI para sistemas imobiliários',
          'Modelos de machine learning para <strong>predição de valores de imóveis</strong> e <strong>classificação de clientes</strong>, com Naive Bayes, Árvores de Decisão, K-Means, Regressão, SVM e Redes Neurais',
          'Análises de dados com Power BI, Excel e Pandas para apoiar a tomada de decisão',
          'Deploy das aplicações com Flask e Nginx na AWS (EC2, S3, DynamoDB e Lambda), integradas para custo sob demanda',
        ],
        stack: ['Python', 'Jupyter Notebook', 'OpenAI', 'Chatbot', 'Crawlers', 'Scikit-learn', 'Pandas', 'NumPy', 'MongoDB', 'DynamoDB', 'MySQL', 'Flask', 'Nginx', 'AWS', 'Power BI'],
      },
      {
        title: 'Sistema de NPS com análise de sentimento em BERT',
        context: 'Tua Opinião',
        kind: 'corporate',
        summary: 'Classificação automática do sentimento das respostas de NPS em português.',
        problem:
          'As respostas abertas das pesquisas de NPS precisavam ser classificadas com mais nuance do que apenas "positivo" e "negativo".',
        solution: 'Fine-tuning do BERT Large em português com a base anotada da empresa, classificando o sentimento em 10 classes.',
        result:
          'Análise automática e detalhada do sentimento das respostas de NPS em <strong>10 classes</strong>, treinada com dados da própria empresa.',
        highlights: [
          'Sistema de NPS com classificação automática do sentimento das respostas',
          'Analisador de sentimento de <strong>10 classes</strong> com BERT Large em português',
          'Treinamento a partir de anotações da base própria da empresa',
        ],
        stack: ['Python', 'Jupyter Notebook', 'BERT', 'NLP', 'Deep Learning'],
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    groups: [
      {
        title: 'IA & Machine Learning',
        items: ['LLMs', 'RAG', 'Agentes LLM', 'LangChain', 'Avaliação de LLM/RAG', 'NLP', 'OCR', 'Azure Document Intelligence', 'MLflow', 'BERT', 'TensorFlow', 'Scikit-learn', 'Deep Learning'],
      },
      { title: 'Engenharia de Dados', items: ['Python', 'SQL', 'Jupyter Notebook', 'Pandas', 'NumPy', 'ETL/ELT', 'Databricks', 'DuckDB', 'Web scraping', 'Plotly Dash', 'Power BI'] },
      { title: 'Backend & Sistemas Distribuídos', items: ['APIs REST', 'FastAPI', 'Flask', 'Kafka', 'Redis', 'SSE', 'Meilisearch', 'C#'] },
      { title: 'Bancos de Dados', items: ['PostgreSQL', 'pgvector', 'Qdrant', 'Chroma', 'FAISS', 'Elasticsearch', 'SQL Server', 'MongoDB', 'DynamoDB', 'MySQL', 'Neo4j'] },
      { title: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'Lambda', 'AWS Bedrock', 'Docker', 'Kubernetes', 'Rancher', 'Harbor', 'Git', 'CI/CD', 'Linux', 'Nginx'] },
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
        thesis: {
          label: 'Dissertação',
          title:
            'Detecção de arritmias cardíacas com inteligência artificial utilizando o padrão AAMI e combinações de derivações do plano frontal',
        },
      },
      {
        degree: 'Bacharelado em Ciência da Computação',
        school: 'Universidade de Passo Fundo',
        location: 'Passo Fundo, RS',
        start: '2018-02',
        end: '2023-12',
        status: 'Concluído',
        thesis: {
          label: 'Trabalho de conclusão de curso',
          title: 'Detecção de arritmias cardíacas: abordagem da derivação I com redes neurais híbridas',
          summary:
            'Inteligência artificial que detecta e distingue 3 arritmias cardíacas do ritmo normal usando apenas uma derivação do eletrocardiograma, com processamento de sinais e deep learning. Usei duas bases de sinais de ECG da PhysioNet, que filtrei e processei para montar a base de treinamento. O modelo detectou e distinguiu as arritmias com alta precisão e eficiência, o que pode ajudar no diagnóstico de doenças cardíacas e no desenvolvimento de novas soluções de monitoramento cardíaco a partir da coleta de sinais do aparelho MP.',
          link: {
            label: 'Base de dados no Harvard Dataverse',
            url: 'https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZIBSUU',
          },
        },
      },
    ],
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
