import type { Copy, Lang } from "@/content/copy";
import { CV, EMAIL, GITHUB, LINKEDIN } from "@/content/site";
import { Arrow } from "./Arrow";

/** LinkedIn first (the fastest way to reach me), then email, the CV in the page's language, and GitHub. */
export function ContactLinks({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <div className="actions">
      <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
        {t.linkedin} <Arrow />
      </a>
      <a className="link" href={`mailto:${EMAIL}`}>{t.email}</a>
      <a className="link" href={CV[lang]} target="_blank" hrefLang={lang} aria-label={lang === "es" ? t.cvEs : t.cvEn}>CV</a>
      <a className="link" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  );
}
