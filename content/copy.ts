// All page copy, per language. Code names (endpoints, frameworks) stay as they are in both.
import type { StaticImageData } from "next/image";
import cuteShot from "../public/img/projects/cuteurl.jpg";
import monitorShot from "../public/img/projects/monitor.jpg";
import parceShot from "../public/img/projects/parce.jpg";
import cuentasShot from "../public/img/projects/cuentas.jpg";
export type Lang = "en" | "es";

type Stop = { name: string; note: string };
type Line = { name: string; summary: string; shot: StaticImageData; stops: Stop[]; links: [string, string][]; tags: string };
// smaller side projects: name, one line, [label, url] links, language
type Branch = { name: string; note: string; links: [string, string][]; tags: string };
// [before, highlighted, after]: the highlighted part is lit in sodium
export type Heading = [string, string, string];

const PROJECT = {
  cuteDemo: "https://m4nuel-ceron.github.io/CuteURL-Frontend/",
  cuteBack: "https://github.com/M4NUEL-CERON/CuteURL_Backend",
  cuteFront: "https://github.com/M4NUEL-CERON/CuteURL-Frontend",
  monitor: "https://github.com/M4NUEL-CERON/api-performance-monitor",
  monitorDemo: "https://api-performance-monitor-one.vercel.app",
  parce: "https://parce-api.vercel.app",
  parceRepo: "https://github.com/M4NUEL-CERON/parce-api",
  cuentas: "https://cuentas-claras-manuel.vercel.app",
  cuentasRepo: "https://github.com/M4NUEL-CERON/cuentas-claras",
};

const en = {
  meta: {
    title: "Manuel Cerón — Full Stack Developer",
    description: "Full Stack Developer building Java & Spring Boot APIs and React front ends. Remote from Cuenca, Ecuador (UTC−5).",
  },
  nav: { label: "Sections", projects: "Projects", experience: "Experience", contact: "Contact", lang: "Language" },
  role: "Full Stack Developer",
  lede: "I build web products end to end: Java and Spring Boot APIs underneath, React and TypeScript on top. Two-plus years of professional work, remote from Cuenca, Ecuador. Open to remote roles.",
  linkedin: "Connect on LinkedIn",
  email: "Email",
  cvEn: "CV in English (PDF)",
  cvEs: "CV in Spanish (PDF)",
  stackLabel: "Stack",
  linesTitle: ["Lines in ", "service", ""] as Heading,
  lineLabel: "Line",
  lines: [
    {
      name: "CuteURL",
      shot: cuteShot,
      summary: "A URL shortener with no sign-up. Paste a long link, get a six-character one that redirects for 30 days. Backend and frontend are separate deploys.",
      stops: [
        { name: "Browser", note: "React + TypeScript UI on GitHub Pages; says so when the free-tier API is waking up" },
        { name: "POST /shorten", note: "Accepts http/https URLs up to 2048 characters; anything else gets a 400" },
        { name: "Spring Boot", note: "Docker image on Render, configured entirely through environment variables" },
        { name: "Redis SETNX", note: "Atomic write with a 30-day TTL; on a code collision it retries with a new code" },
        { name: "GET /{code}", note: "302 redirect, so browsers don't cache it past expiry" },
      ],
      links: [["Live demo", PROJECT.cuteDemo], ["Backend repo", PROJECT.cuteBack], ["Frontend repo", PROJECT.cuteFront]],
      tags: "Java 25 · Spring Boot 4 · Redis · React 18 · TypeScript · Vite · Docker · GitHub Actions",
    },
    {
      name: "API Performance Monitor",
      shot: monitorShot,
      summary: "A Spring Boot API that measures itself, with a live dashboard. Press Generate traffic and 400 real requests leave your browser; requests/sec and p50, p99 and p99.5 latency per endpoint move in front of you.",
      stops: [
        { name: "Browser", note: "React + TypeScript dashboard fires 400 GETs, 8 at a time, with a few deliberate 404s" },
        { name: "Spring MVC", note: "Two endpoints add labeled, simulated latency to a share of requests so the tail shows" },
        { name: "Micrometer", note: "Every request timed with histogram percentiles and SLO buckets from 50 ms to 1 s" },
        { name: "/metrics/summary", note: "Groups timers per endpoint, merges status codes, adds RPS and JVM health" },
        { name: "Prometheus", note: "Same numbers scraped from Actuator; Grafana ready in Docker Compose" },
      ],
      links: [["Live demo", PROJECT.monitorDemo], ["Repository", PROJECT.monitor]],
      tags: "Java 25 · Spring Boot 4 · Micrometer · Prometheus · React · TypeScript · Docker · GitHub Actions",
    },
    {
      name: "Parce API",
      shot: parceShot,
      summary: "A free public API of Colombian sayings and traditional dishes, with recipes and credited photos, plus a playful page that runs on its own API. A new resource is just a JSON file dropped into data/.",
      stops: [
        { name: "Browser", note: "Static page with the saying of the day and recipe dialogs, all fetched from the same public API" },
        { name: "Vercel rewrite", note: "/api/:ruta* folds every path into a single serverless function" },
        { name: "api/index.js", note: "One handler for every resource: list, /hoy, /random, by id, and field filters like ?region=tolima" },
        { name: "data/*.json", note: "Each file becomes an endpoint; search ignores accents" },
        { name: "JSON + CORS", note: "Open to any origin with no key; node:test covers routes, filters and the Colombia-time day rollover" },
      ],
      links: [["Live site", PROJECT.parce], ["Repository", PROJECT.parceRepo]],
      tags: "Node.js · Vercel Functions · REST · JSON · HTML · CSS · node:test",
    },
    {
      name: "Cuentas Claras",
      shot: cuentasShot,
      summary: "Split shared expenses with no sign-up. Create a group, share the link, log who paid what, and it tells everyone who pays whom, in at most n − 1 transfers. Bilingual, with a dark mode and a capybara mascot.",
      stops: [
        { name: "Browser", note: "React + TypeScript app on Vercel; the link is the key, and recent groups stay in the browser" },
        { name: "POST /expenses", note: "Validates the amount for the currency: COP and CLP have no decimals, so 1500.5 pesos gets a 400" },
        { name: "Spring Boot", note: "Docker image on Render; errors come back as RFC 9457 problem details" },
        { name: "Ledger", note: "Integer minor units, so uneven splits always add up; greedy settling pays the biggest debt first" },
        { name: "PostgreSQL", note: "Neon, with the schema in Flyway migrations; tests run the same migration on H2" },
      ],
      links: [["Live demo", PROJECT.cuentas], ["Repository", PROJECT.cuentasRepo]],
      tags: "Java 25 · Spring Boot 4 · PostgreSQL · Flyway · JPA · React 18 · TypeScript · Vite · Docker",
    },
  ] as Line[],
  shotAlt: "Screenshot of the live",
  moreTitle: "More projects",
  moreAll: "See everything on GitHub",
  more: [
    { name: "Game-Dino", note: "Chrome's offline dino game rebuilt in vanilla HTML, CSS and JavaScript, with progressive difficulty and touch support.",
      links: [["Play", "https://m4nuel-ceron.github.io/Game-Dino/"], ["Code", "https://github.com/M4NUEL-CERON/Game-Dino"]], tags: "JavaScript · HTML · CSS" },
    { name: "Game-Snake", note: "Classic Snake in vanilla HTML, CSS and JavaScript, with touch controls and a saved high score.",
      links: [["Play", "https://m4nuel-ceron.github.io/Game-Snake/"], ["Code", "https://github.com/M4NUEL-CERON/Game-Snake"]], tags: "JavaScript · HTML · CSS" },
    { name: "NeetCode submissions", note: "My solutions to NeetCode.io algorithm and data-structure problems.",
      links: [["Code", "https://github.com/M4NUEL-CERON/neetcode-submissions"]], tags: "Java" },
  ] as Branch[],
  timetableTitle: ["Time", "table", ""] as Heading,
  job: {
    when: "Aug 2024 — Now",
    title: "Full Stack Developer",
    area: "Business automation and digitalization",
    items: [
      "Rewards and points-redemption APIs on AWS Lambda, integrating Uber, Bancolombia and Rappi",
      "Real-time chatbot over WebSockets (STOMP), with Redis Pub/Sub carrying messages across instances",
      "Performance monitoring app with Spring Boot, Actuator, Micrometer and Prometheus",
      "Mass QR-code generation on blockchain for physical product traceability",
      "AI application built on AWS Bedrock",
      "Web apps and interfaces with React, Next.js, TypeScript and Tailwind CSS",
      "Business-process automation with ClickUp, Google Workspace and AI",
    ],
  },
  school: { when: "Feb 2024 — Sep 2025", title: "Software Development Technologist", org: "Funprotec Institute" },
  closeTitle: ["Hiring for a ", "remote", " full stack role?"] as Heading,
  closeText: "I work in UTC−5, so my day overlaps with the US and with Europe's afternoon. LinkedIn is the fastest way to reach me, or write directly:",
  source: "Source on GitHub",
};

const es: typeof en = {
  meta: {
    title: "Manuel Cerón — Desarrollador Full Stack",
    description: "Desarrollador Full Stack: APIs con Java y Spring Boot, interfaces con React. Remoto desde Cuenca, Ecuador (UTC−5).",
  },
  nav: { label: "Secciones", projects: "Proyectos", experience: "Experiencia", contact: "Contacto", lang: "Idioma" },
  role: "Desarrollador Full Stack",
  lede: "Construyo productos web de punta a punta: APIs con Java y Spring Boot por debajo, React y TypeScript por encima. Más de dos años de experiencia profesional, en remoto desde Cuenca, Ecuador. Disponible para roles remotos.",
  linkedin: "Conectemos en LinkedIn",
  email: "Correo",
  cvEn: "CV en inglés (PDF)",
  cvEs: "CV en español (PDF)",
  stackLabel: "Tecnologías",
  linesTitle: ["Líneas en ", "servicio", ""],
  lineLabel: "Línea",
  lines: [
    {
      ...en.lines[0],
      summary: "Un acortador de URLs sin registro. Pegas un link largo y obtienes uno de seis caracteres que redirige durante 30 días. Backend y frontend se despliegan por separado.",
      stops: [
        { name: "Navegador", note: "UI en React + TypeScript en GitHub Pages; avisa cuando la API del plan gratuito está despertando" },
        { name: "POST /shorten", note: "Solo acepta URLs http/https de hasta 2048 caracteres; lo demás recibe un 400" },
        { name: "Spring Boot", note: "Imagen Docker en Render, configurada solo con variables de entorno" },
        { name: "Redis SETNX", note: "Escritura atómica con TTL de 30 días; si el código choca, reintenta con otro" },
        { name: "GET /{code}", note: "Redirección 302, para que el navegador no la guarde en caché tras expirar" },
      ],
      links: [["Demo en vivo", PROJECT.cuteDemo], ["Repo backend", PROJECT.cuteBack], ["Repo frontend", PROJECT.cuteFront]],
    },
    {
      ...en.lines[1],
      summary: "Una API en Spring Boot que se mide a sí misma, con un dashboard en vivo. Presionas Generate traffic, salen 400 peticiones reales desde tu navegador y ves moverse las peticiones por segundo y la latencia p50, p99 y p99.5 de cada endpoint.",
      stops: [
        { name: "Navegador", note: "El dashboard en React + TypeScript lanza 400 GET, 8 a la vez, con algunos 404 a propósito" },
        { name: "Spring MVC", note: "Dos endpoints agregan latencia simulada (y etiquetada) a una parte de las peticiones para que se vea la cola" },
        { name: "Micrometer", note: "Cada petición cronometrada con percentiles de histograma y buckets SLO de 50 ms a 1 s" },
        { name: "/metrics/summary", note: "Agrupa los timers por endpoint, une los códigos de estado y suma RPS y salud de la JVM" },
        { name: "Prometheus", note: "Las mismas métricas expuestas por Actuator; Grafana listo en Docker Compose" },
      ],
      links: [["Demo en vivo", PROJECT.monitorDemo], ["Repositorio", PROJECT.monitor]],
    },
    {
      ...en.lines[2],
      summary: "Una API pública y gratis de dichos y platos típicos colombianos, con recetas y fotos con crédito, y una página divertida que funciona con su propia API. Un recurso nuevo es solo un archivo JSON en data/.",
      stops: [
        { name: "Navegador", note: "Página estática con el dicho del día y las recetas, todo traído de la misma API pública" },
        { name: "Vercel rewrite", note: "/api/:ruta* lleva todas las rutas a una sola función serverless" },
        { name: "api/index.js", note: "Un solo handler para cada recurso: lista, /hoy, /random, por id y filtros por campo como ?region=tolima" },
        { name: "data/*.json", note: "Cada archivo se vuelve un endpoint; la búsqueda ignora las tildes" },
        { name: "JSON + CORS", note: "Abierta a cualquier origen y sin llave; node:test cubre rutas, filtros y el cambio de día en hora de Colombia" },
      ],
      links: [["Sitio en vivo", PROJECT.parce], ["Repositorio", PROJECT.parceRepo]],
    },
    {
      ...en.lines[3],
      summary: "Divide gastos compartidos sin registro. Creas un grupo, compartes el link, anotas quién pagó qué y te dice quién le paga a quién, con máximo n − 1 transferencias. Bilingüe, con modo oscuro y un chigüiro de mascota.",
      stops: [
        { name: "Navegador", note: "App en React + TypeScript en Vercel; el link es la llave y los grupos recientes quedan en el navegador" },
        { name: "POST /expenses", note: "Valida el valor según la moneda: COP y CLP no tienen decimales, así que 1500,5 pesos recibe un 400" },
        { name: "Spring Boot", note: "Imagen Docker en Render; los errores vuelven como problem details RFC 9457" },
        { name: "Ledger", note: "Unidades mínimas enteras, así las divisiones desiguales siempre cuadran; el saldo voraz paga primero la deuda más grande" },
        { name: "PostgreSQL", note: "Neon, con el esquema en migraciones Flyway; los tests corren la misma migración en H2" },
      ],
      links: [["Demo en vivo", PROJECT.cuentas], ["Repositorio", PROJECT.cuentasRepo]],
    },
  ],
  shotAlt: "Captura de la versión en vivo de",
  moreTitle: "Más proyectos",
  moreAll: "Ver todo en GitHub",
  more: [
    { ...en.more[0], note: "El juego del dinosaurio de Chrome hecho de nuevo en HTML, CSS y JavaScript puros, con dificultad progresiva y soporte táctil.",
      links: [["Jugar", en.more[0].links[0][1]], ["Código", en.more[0].links[1][1]]] },
    { ...en.more[1], note: "El clásico Snake en HTML, CSS y JavaScript puros, con controles táctiles y récord guardado.",
      links: [["Jugar", en.more[1].links[0][1]], ["Código", en.more[1].links[1][1]]] },
    { ...en.more[2], name: "Soluciones NeetCode", note: "Mis soluciones a problemas de algoritmos y estructuras de datos de NeetCode.io.",
      links: [["Código", en.more[2].links[0][1]]] },
  ],
  timetableTitle: ["Mi ", "recorrido", ""],
  job: {
    when: "Ago 2024 — Hoy",
    title: "Desarrollador Full Stack",
    area: "Automatización y digitalización de negocios",
    items: [
      "APIs y funciones serverless en AWS Lambda para un sistema de recompensas y redención de puntos, integrando Uber, Bancolombia y Rappi",
      "Chatbot en tiempo real con WebSockets (STOMP) y Redis Pub/Sub como message broker entre múltiples instancias",
      "Aplicación de monitoreo de rendimiento con Spring Boot, Actuator, Micrometer y Prometheus",
      "Generación masiva de códigos QR sobre blockchain para la trazabilidad de productos físicos",
      "Aplicación de IA potenciada con AWS Bedrock",
      "Páginas, aplicaciones web e interfaces con React, Next.js, TypeScript y Tailwind CSS",
      "Automatización de procesos empresariales con ClickUp, Google Workspace e IA",
    ],
  },
  school: { when: "Feb 2024 — Sep 2025", title: "Tecnólogo en Desarrollo de Software", org: "Instituto Funprotec" },
  closeTitle: ["¿Buscas un desarrollador full stack ", "remoto", "?"],
  closeText: "Trabajo en UTC−5, así que mi horario coincide con Estados Unidos, Latinoamérica y la tarde de Europa. LinkedIn es la forma más rápida de contactarme, o escríbeme directamente:",
  source: "Código en GitHub",
};

export const content = { en, es };
export type Copy = typeof en;
