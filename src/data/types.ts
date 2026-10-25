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

export type ProjectKind = 'public' | 'corporate' | 'research';

export interface Project {
  title: string;
  context: string;
  kind: ProjectKind;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  url?: string;
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
    present: string;
    downloadCv: string;
    seeProjects: string;
    visit: string;
    readPaper: string;
    all: string;
  };
  hero: {
    kicker: string;
    role: string;
    tagline: string;
    terminal: { file: string; role: string; focus: string[]; location: string; status: string };
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
    intro: string;
    kinds: Record<ProjectKind, string>;
    labels: { problem: string; solution: string; result: string };
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
