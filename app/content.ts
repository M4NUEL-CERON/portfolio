// All page copy, per language. Code names (endpoints, frameworks) stay as they are in both.
export type Lang = "en" | "es";

type Stop = { name: string; note: string };
type Line = { name: string; summary: string; stops: Stop[]; links: [string, string][]; tags: string };
// [before, highlighted, after]: the highlighted part is lit in sodium
type Heading = [string, string, string];

const PROJECT = {
  cuteDemo: "https://m4nuel-ceron.github.io/CuteURL-Frontend/",
  cuteBack: "https://github.com/M4NUEL-CERON/CuteURL_Backend",
  cuteFront: "https://github.com/M4NUEL-CERON/CuteURL-Frontend",
  monitor: "https://github.com/M4NUEL-CERON/api-performance-monitor",
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
      summary: "A URL shortener with no sign-up. Paste a long link, get a six-character one that redirects for 30 days. Backend and frontend are separate deploys.",
      stops: [
        { name: "Browser", note: "React + TypeScript UI, deployed to GitHub Pages by GitHub Actions" },
        { name: "POST /shorten", note: "Accepts http/https URLs only; anything else gets a 400" },
        { name: "Spring Boot", note: "Runs on Railway, configured entirely through environment variables" },
        { name: "Redis SETNX", note: "Atomic write with a TTL; on a code collision it retries with a new code" },
        { name: "GET /{code}", note: "302 redirect, so browsers don't cache it past expiry" },
      ],
      links: [["Live demo", PROJECT.cuteDemo], ["Backend repo", PROJECT.cuteBack], ["Frontend repo", PROJECT.cuteFront]],
      tags: "Java 17 · Spring Boot · Redis · React 18 · TypeScript · Vite · GitHub Actions",
    },
    {
      name: "API Performance Monitor",
      summary: "A Spring Boot REST API that measures itself: one endpoint returns live throughput, latency percentiles per endpoint and JVM health.",
      stops: [
        { name: "Request", note: "Products and transactions REST API on Spring Data JPA + H2" },
        { name: "Micrometer", note: "Every request timed, with p50, p99 and p99.5 percentiles" },
        { name: "RPS tracker", note: "Scheduled every second; diffs request counters into a 60 s rolling average" },
        { name: "/metrics/summary", note: "One JSON snapshot: per-endpoint latency, status codes, CPU, heap, uptime" },
        { name: "Prometheus", note: "Exposed through Actuator, with SLO buckets from 50 ms to 1 s" },
      ],
      links: [["Repository", PROJECT.monitor]],
      tags: "Java · Spring Boot 4 · Actuator · Micrometer · Prometheus · JPA · Gradle",
    },
  ] as Line[],
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
        { name: "Navegador", note: "Interfaz en React + TypeScript, desplegada en GitHub Pages con GitHub Actions" },
        { name: "POST /shorten", note: "Solo acepta URLs http/https; todo lo demás recibe un 400" },
        { name: "Spring Boot", note: "Corre en Railway, configurado completamente con variables de entorno" },
        { name: "Redis SETNX", note: "Escritura atómica con TTL; si el código ya existe, reintenta con uno nuevo" },
        { name: "GET /{code}", note: "Redirección 302, para que el navegador no la guarde en caché tras expirar" },
      ],
      links: [["Demo en vivo", PROJECT.cuteDemo], ["Repo backend", PROJECT.cuteBack], ["Repo frontend", PROJECT.cuteFront]],
    },
    {
      ...en.lines[1],
      summary: "Una API REST en Spring Boot que se mide a sí misma: un endpoint devuelve en vivo el throughput, los percentiles de latencia por endpoint y la salud de la JVM.",
      stops: [
        { name: "Petición", note: "API REST de productos y transacciones con Spring Data JPA + H2" },
        { name: "Micrometer", note: "Cada petición cronometrada, con percentiles p50, p99 y p99.5" },
        { name: "Contador RPS", note: "Se ejecuta cada segundo; compara contadores y calcula un promedio móvil de 60 s" },
        { name: "/metrics/summary", note: "Un solo JSON: latencia por endpoint, códigos de estado, CPU, heap y uptime" },
        { name: "Prometheus", note: "Expuesto con Actuator, con buckets SLO de 50 ms a 1 s" },
      ],
      links: [["Repositorio", PROJECT.monitor]],
    },
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
