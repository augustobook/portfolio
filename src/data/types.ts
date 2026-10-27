export type Lang = 'pt' | 'en';

/** Datas no formato "AAAA-MM". `end` ausente = emprego atual. */
export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end?: string;
  /** Aceita HTML simples, ex.: <strong>80%+</strong> */
  bullets: string[];
  stack: string[];
}

/** `personal` = projeto pessoal ainda não publicado. */
export type ProjectKind = 'public' | 'personal' | 'corporate' | 'research';

export interface Project {
  title: string;
  context: string;
  kind: ProjectKind;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  /** O que foi desenvolvido no projeto. Aceita HTML simples. */
  highlights?: string[];
  /** Capturas de tela em /public, exibidas como galeria no card. */
  images?: { src: string; alt: string }[];
  url?: string;
  /** Observação curta exibida abaixo do botão do link. */
  urlNote?: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  field?: string;
  school: string;
  location: string;
  start: string;
  end: string;
  status: string;
  /** TCC/dissertação, quando houver. */
  thesis?: {
    label: string;
    title: string;
    summary?: string;
    link?: { label: string; url: string };
  };
}

export interface Publication {
  title: string;
  venue: string;
  summary: string;
  url: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; experience: string; projects: string; skills: string; education: string; contact: string };
  ui: {
    switchLang: string;
    toggleTheme: string;
    menu: string;
    present: string;
    downloadCv: string;
    seeProjects: string;
    visit: string;
    readPaper: string;
    /** Rótulos do slider de capturas. `{n}` é o número da captura. */
    prevImage: string;
    nextImage: string;
    goToImage: string;
  };
  hero: {
    kicker: string;
    role: string;
    /** Linha de localização e disponibilidade abaixo do cargo. */
    location: string;
    status: string;
    /** Selo sobre a foto, abaixo do selo de disponibilidade. */
    badge: { title: string; detail: string };
    tagline: string;
    terminal: { file: string; role: string; focus: string[] };
  };
  about: {
    title: string;
    paragraphs: string[];
    /** `{years}` é substituído pelos anos de experiência calculados no build. */
    stats: { value: string; label: string }[];
  };
  experience: { title: string; items: Experience[] };
  projects: {
    title: string;
    /** Subtítulos dos blocos: projeto em destaque e projetos corporativos. */
    featuredTitle: string;
    industryTitle: string;
    industryNote: string;
    kinds: Record<ProjectKind, string>;
    labels: { problem: string; solution: string; result: string; built: string };
    items: Project[];
  };
  skills: { title: string; groups: { title: string; items: string[] }[] };
  education: {
    title: string;
    items: Education[];
    publicationsTitle: string;
    publications: Publication[];
  };
  contact: { title: string; text: string; email: string; linkedin: string };
  footer: string;
}
