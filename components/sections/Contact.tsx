import Image from "next/image";
import type { Copy, Lang } from "@/content/copy";
import { EMAIL, SOURCE } from "@/content/site";
import portrait from "@/public/img/manuel.png";
import { Reflection, Skyline } from "../scenery/Skyline";
import { ContactLinks } from "../ui/ContactLinks";
import { Lit } from "../ui/Lit";

/** The last stop: how to reach me, my portrait as a station sign, and the night city again. */
export function Contact({ t, lang }: { t: Copy; lang: Lang }) {
  return (
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
          <ContactLinks t={t} lang={lang} />
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
        <a href={SOURCE} target="_blank" rel="noreferrer">{t.source}</a>
      </footer>
    </section>
  );
}
