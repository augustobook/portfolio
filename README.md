# Currículo / Portfólio — Augusto Felipe Maggioni

Site pessoal estático em **Astro**, bilíngue (PT em `/`, EN em `/en/`), com tema claro/escuro e layout responsivo.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera o site em dist/
npm run preview    # serve o dist/ localmente
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Textos em português | `src/data/pt.ts` |
| Textos em inglês | `src/data/en.ts` |
| Nome, e-mail, LinkedIn, GitHub, foto, PDF | `src/data/profile.ts` |
| Cores e fontes | `src/styles/global.css` (tokens em `:root`) |

- **Novo projeto:** adicione um item em `projects.items` nos dois arquivos de idioma. `featured: true` coloca o projeto em destaque.
- **Nova experiência:** adicione em `experience.items`. As datas usam o formato `AAAA-MM`; sem `end`, o emprego aparece como atual e a duração é calculada no build.
- **Foto:** coloque `public/foto.jpg` (quadrada, de ~400×400px). Enquanto não existir, aparecem as iniciais.
- **CV em PDF:** coloque `public/curriculo-augusto-maggioni.pdf` (PT) e/ou `public/resume-augusto-maggioni.pdf` (EN). O botão "Baixar CV" aparece sozinho quando o arquivo existe.

## Deploy 1 — GitHub Pages

1. Crie um repositório no GitHub e envie o projeto:
   ```bash
   git init -b main
   git add .
   git commit -m "Primeira versão do currículo"
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy-pages.yml` publica a cada push na `main`, e também uma vez por mês, para atualizar a duração do emprego atual.
   O endereço fica `https://<usuario>.github.io/<repo>/`. Se o repositório se chamar `<usuario>.github.io`, o endereço fica na raiz.

## Deploy 2 — Docker na AWS EC2

A imagem tem dois estágios: Node gera o site e **Nginx** o serve na porta 80 (`Dockerfile`, `nginx.conf`, `docker-compose.yml`).

### Preparar a instância (uma vez)

1. Crie uma EC2 (ex.: `t3.micro`, Amazon Linux 2023 ou Ubuntu). No Security Group, libere as portas **22** (somente o seu IP), **80** e **443**.
2. Instale o Docker e o plugin compose:
   ```bash
   # Amazon Linux 2023
   sudo dnf install -y docker git
   sudo systemctl enable --now docker
   sudo usermod -aG docker $USER   # saia e entre de novo no SSH
   sudo mkdir -p /usr/local/lib/docker/cli-plugins
   sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 \
     -o /usr/local/lib/docker/cli-plugins/docker-compose
   sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
   ```
3. Clone e suba o container:
   ```bash
   git clone https://github.com/<usuario>/<repo>.git ~/curriculo
   cd ~/curriculo
   SITE_URL=http://<ip-ou-dominio> docker compose up -d --build
   ```
   O site fica em `http://<ip-publico>`.

### Deploy automático (opcional)

O workflow `.github/workflows/deploy-ec2.yml` entra na EC2 via SSH, faz `git pull` e recria o container a cada push.
Para ativar, no repositório:
- **Settings → Secrets → Actions:** `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY` (conteúdo do `.pem`) e `SITE_URL`.
- **Settings → Variables → Actions:** `EC2_ENABLED = true`.

### Domínio e HTTPS

Aponte o domínio (registro A) para um **Elastic IP** da instância. Para HTTPS, a forma mais simples é colocar o **Cloudflare** na frente (proxy + SSL "Flexible" ou "Full"). Outra opção é um proxy reverso com Let's Encrypt (Caddy ou Traefik) antes do container.
