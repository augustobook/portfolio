import fs from 'node:fs';
import path from 'node:path';
import type { Lang } from '../data/types';

const locales: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US' };

function parseYm(ym: string): [number, number] {
  const [y, m] = ym.split('-').map(Number);
  return [y, m];
}

/** Meses entre duas datas "AAAA-MM", contando o mês inicial e o final (mesma regra do PDF). */
export function monthsBetween(start: string, end?: string): number {
  const [sy, sm] = parseYm(start);
  const now = new Date();
  const [ey, em] = end ? parseYm(end) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

export function formatDuration(lang: Lang, months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (lang === 'pt') {
    const parts = [];
    if (y) parts.push(`${y} ${y === 1 ? 'ano' : 'anos'}`);
    if (m) parts.push(`${m} ${m === 1 ? 'mês' : 'meses'}`);
    return parts.join(' e ');
  }
  const parts = [];
  if (y) parts.push(`${y} ${y === 1 ? 'yr' : 'yrs'}`);
  if (m) parts.push(`${m} ${m === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
}

export function formatMonth(lang: Lang, ym: string): string {
  const [y, m] = parseYm(ym);
  const label = new Intl.DateTimeFormat(locales[lang], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(y, m - 1, 1)),
  );
  return label.replace('.', '').replace(' de ', ' ');
}

/** Prefixa caminhos internos com o `base` do Astro (necessário no GitHub Pages em /<repo>/). */
export function withBase(p: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${p.replace(/^\//, '')}`;
}

/** Verifica no build se um arquivo opcional existe em /public (foto, PDF). */
export function publicFileExists(file: string): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', file));
}
