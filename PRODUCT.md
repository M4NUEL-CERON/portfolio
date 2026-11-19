# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: technical recruiters screening candidates for international remote roles. They spend 30–60 seconds deciding whether to pass the candidate on, and need to find stack, seniority, English-language readiness and remote availability without digging.
Secondary: engineering leads who validate after the recruiter's screen, looking at real projects and technical decisions.

## Product Purpose
Personal portfolio for Manuel Cerón, a mid-level (2–4 years) Full Stack developer, built to land an international remote job. Success means a recruiter moves him to the next stage, or reaches out.

## Positioning
Balanced Full Stack: builds complete products end to end, from Java + Spring Boot APIs through to React UIs. This is not a backend-only or frontend-only profile, and not a generic "developer portfolio" template.

## Operating Context
Recruiters visit from a LinkedIn profile, a job application or a CV link, often on a laptop between other candidates, sometimes on mobile. All content is in English.

## Capabilities and Constraints
- Bilingual: English at / (primary, for international recruiters) and Spanish at /es. All copy lives in content/copy.ts (links and contact details in content/site.ts); code names stay untranslated.
- Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, repo at github.com/M4NUEL-CERON/portfolio.
- Keep the code lean, with no unnecessary abstractions.
- Location: Cuenca, Ecuador (UTC-5), working remote.
- Contact: GitHub github.com/M4NUEL-CERON, LinkedIn linkedin.com/in/manuel-cer%C3%B3n-564b52304/, email juanmanuelceronfernandez123@gmail.com. Do not publish the phone number from the CV.
- CV downloads: public/files/CV_Manuel_EN.pdf (English, the primary one) and public/files/CV_Manuel_Cerón.pdf (Spanish).
- Accent color: delegated to the designer (yellow, coral or cream).

## Brand Commitments
Binding visual constraint, set by the user: dark and bold. A dark background (navy, slate or dark green), one strong accent (yellow, coral or cream, still to be chosen), and condensed display type paired with a sans-serif. Nothing generic.

## Evidence on Hand
- **CuteURL** (featured project): a URL shortener with no sign-up.
  - Backend: github.com/M4NUEL-CERON/CuteURL_Backend. Java 17, Spring Boot (Web, Data Redis). Two endpoints: POST /shorten and GET /{code}, which redirects with a 302. Codes are 6 characters, written with an atomic Redis SETNX and a retry on collision. Links expire after a configurable TTL (30 days by default). Validates that URLs are http/https. Configured with environment variables and deployed on Railway with Redis Cloud.
  - Frontend: github.com/M4NUEL-CERON/CuteURL-Frontend. React 18, TypeScript and Vite. ES/EN i18n. Deployed to GitHub Pages through GitHub Actions. Live at https://m4nuel-ceron.github.io/CuteURL-Frontend/. Screenshots are in that repo's docs/ folder.
- **Professional experience** (from the CV): Full Stack Developer at Quantum Developers, Aug 2024 to present. Work there includes:
  - Rewards and points-redemption APIs on AWS Lambda, integrating Uber, Bancolombia and Rappi.
  - A real-time chatbot using WebSockets (STOMP) with Redis Pub/Sub across instances.
  - A Spring Boot performance-monitoring app with Actuator, Micrometer and Prometheus.
  - Mass QR generation on blockchain for product traceability.
  - An AI app built on AWS Bedrock, plus business-process automation.
- Education: Software Development Technologist, Funprotec Institute (Popayán, Colombia), Feb 2024 to Sep 2025.
- **API Performance Monitor** (second featured project, confirmed): github.com/M4NUEL-CERON/api-performance-monitor. Built with Spring Boot 4 on Java 26 (Gradle).
  - A sample REST API for products and transactions, using Spring Data JPA with H2.
  - GET /api/metrics/summary returns a single snapshot that aggregates Micrometer data: current RPS and the 60-second average (a scheduled tracker that diffs request counters every second), per-endpoint latency percentiles (p50, p99, p99.5) with a status-code breakdown, and CPU, JVM heap and non-heap usage plus uptime.
  - Prometheus is exposed through Actuator, with SLO buckets at 50ms, 100ms, 200ms, 500ms and 1s.
  - No live demo and no README.
- **Parce API** (third line, added at the user's request): github.com/M4NUEL-CERON/parce-api, live at https://parce-api.vercel.app. A free public API of Colombian sayings and traditional dishes (recipes plus Wikimedia Commons photos with author and license). Node.js on Vercel Functions: a rewrite folds /api/:ruta* into one handler; each data/*.json file is a resource with list, /hoy, /random, by-id and per-field filters (e.g. ?region=tolima); accent-insensitive search; open CORS; node:test suite.
- **Cuentas Claras** (fourth line, added at the user's request): github.com/M4NUEL-CERON/cuentas-claras, live at https://cuentas-claras-manuel.vercel.app (API on Render, database on Neon). Splits shared expenses with no sign-up; the link is the key. Java 25 + Spring Boot 4 + PostgreSQL with Flyway; money as integer minor units with currency-aware validation; greedy settlement in at most n − 1 transfers; RFC 9457 problem details. React + TypeScript frontend, ES/EN, dark mode, capybara mascot Chocolo.
- **Branch lines** ("More projects"): Game-Dino, Game-Snake and NeetCode submissions, from the public repos and their own descriptions, plus a link to all repositories.
- No testimonials, metrics or user counts. Do not invent any.

## Product Principles
1. A recruiter must find stack, level and contactability in the first viewport.
2. Real projects are the proof. Show what was built and how, not claims.
3. Make it unmistakably Manuel's, not a template.
4. Less is more: two strong projects beat a padded list.
