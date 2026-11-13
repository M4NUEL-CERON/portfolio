import Image from "next/image";
import Link from "next/link";
import portrait from "../public/img/manuel.png";
import { Clock } from "./clock";
import { content, type Lang } from "./content";
import { RideOnScroll } from "./ride-on-scroll";
import { Reflection, Skyline } from "./skyline";

const LINKEDIN = "https://www.linkedin.com/in/manuel-cer%C3%B3n-564b52304/";
const GITHUB = "https://github.com/M4NUEL-CERON";
const EMAIL = "juanmanuelceronfernandez123@gmail.com";
const CV_EN = "/files/CV_Manuel_EN.pdf";
const CV_ES = "/files/CV_Manuel_ES.pdf";

const stack = ["Java", "Spring Boot", "Redis", "PostgreSQL", "React", "TypeScript", "Next.js", "AWS"];

type T = (typeof content)["en"];

function Arrow() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Lit({ parts }: { parts: [string, string, string] }) {
  return (
    <>
      {parts[0]}
      <em>{parts[1]}</em>
      {parts[2]}
    </>
  );
}

function Stops({ items }: { items: { name: string; note: string }[] | string[] }) {
  return (
    <div className="track" style={{ "--n": items.length } as React.CSSProperties}>
      <span className="train" aria-hidden="true" />
      <ol className="stops">
        {items.map((s, i) => {
          const stop = typeof s === "string" ? { name: s, note: "" } : s;
          return (
            <li key={stop.name} className="stop" style={{ "--i": i } as React.CSSProperties}>
              <strong>{stop.name}</strong>
              {stop.note && <p>{stop.note}</p>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Contact({ t }: { t: T }) {
  return (
    <div className="actions">
      <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
        {t.linkedin} <Arrow />
      </a>
      <a className="link" href={`mailto:${EMAIL}`}>{t.email}</a>
      <span className="link cv">
        CV{" "}
        <a href={CV_EN} target="_blank" hrefLang="en" aria-label={t.cvEn}>EN</a>
        {" / "}
        <a href={CV_ES} target="_blank" hrefLang="es" aria-label={t.cvEs}>ES</a>
      </span>
      <a className="link" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <main lang={lang}>
      <RideOnScroll />
      <header className="hero">
        <div className="bar">
          <span>Manuel Cerón</span>
          <nav aria-label={t.nav.label}>
            <a href="#lines">{t.nav.projects}</a>
            <a href="#timetable">{t.nav.experience}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="bar-end">
            <Clock />
            <nav className="lang" aria-label={t.nav.lang}>
              <Link href="/" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>EN</Link>
              <Link href="/es" hrefLang="es" aria-current={lang === "es" ? "page" : undefined}>ES</Link>
            </nav>
          </div>
        </div>

        <div className="hero-copy">
          <h1 className="name">
            <span className="first">Manuel</span>
            <span className="last">Cerón</span>
          </h1>
          <p className="role">{t.role}</p>
          <p className="lede">{t.lede}</p>
          <Contact t={t} />
        </div>

        <div className="city">
          <Skyline />
          <div className="line stack" aria-label={t.stackLabel}>
            <Stops items={stack} />
          </div>
          <div className="street">
            <Reflection />
          </div>
        </div>
      </header>

      <section id="lines" className="lines">
        <h2>
          <Lit parts={t.linesTitle} />
        </h2>
        {t.lines.map((l, i) => (
          <article key={l.name} className="line">
            <div className="line-head">
              <div>
                <h3>
                  <span className="bullet" aria-label={`${t.lineLabel} ${i + 1}`}>{i + 1}</span>
                  {l.name}
                </h3>
                <p>{l.summary}</p>
              </div>
              <div className="line-links">
                {l.links.map(([label, href]) => (
                  <a key={href} className="link" href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <Stops items={l.stops} />
            <p className="tags">{l.tags}</p>
          </article>
        ))}
      </section>

      <section id="timetable" className="timetable">
        <h2>
          <Lit parts={t.timetableTitle} />
        </h2>
        <div className="row">
          <time className="tnum">{t.job.when}</time>
          <div>
            <h3>
              {t.job.title} <span>· Quantum Developers</span>
            </h3>
            <p className="where">{t.job.area}</p>
            <ul>
              {t.job.items.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <time className="tnum">{t.school.when}</time>
          <div>
            <h3>
              {t.school.title} <span>· {t.school.org}</span>
            </h3>
            <p className="where">Popayán, Colombia</p>
          </div>
        </div>
      </section>

      <section id="contact" className="close">
        <div className="close-top">
          <div>
            <h2>
              <Lit parts={t.closeTitle} />
            </h2>
            <p>{t.closeText}</p>
            <p>
              <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <Contact t={t} />
          </div>
          <Image className="portrait" src={portrait} alt="Manuel Cerón" sizes="(max-width: 800px) 70vw, 24rem" />
        </div>
        <div className="city">
          <Skyline />
          <div className="street">
            <Reflection />
          </div>
        </div>
        <footer>
          <span>© 2026 Manuel Cerón</span>
          <a href="https://github.com/M4NUEL-CERON/portfolio" target="_blank" rel="noreferrer">
            {t.source}
          </a>
        </footer>
      </section>
    </main>
  );
}
