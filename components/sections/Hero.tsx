import Link from "next/link";
import type { Copy, Lang } from "@/content/copy";
import { STACK } from "@/content/site";
import { Rain, Reflection, Skyline } from "../scenery/Skyline";
import { Clock } from "../ui/Clock";
import { ContactLinks } from "../ui/ContactLinks";
import { Stops } from "../ui/Stops";

export function Hero({ t, lang }: { t: Copy; lang: Lang }) {
  return (
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
        <ContactLinks t={t} lang={lang} />
      </div>

      <Rain />
      <div className="city">
        <Skyline dusk />
        <div className="line stack" aria-label={t.stackLabel}>
          <Stops items={STACK} />
        </div>
        <div className="street">
          <Reflection />
        </div>
      </div>
    </header>
  );
}
