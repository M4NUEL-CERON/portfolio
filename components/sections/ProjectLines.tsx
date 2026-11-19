import Image from "next/image";
import type { Copy } from "@/content/copy";
import { Lit } from "../ui/Lit";
import { Stops } from "../ui/Stops";
import { MoreProjects } from "./MoreProjects";

/** Each project is a numbered transit line: summary, live screenshot, the request's route as stops, and its stack. */
export function ProjectLines({ t }: { t: Copy }) {
  return (
    <section id="lines" className="lines">
      <h2>
        <Lit parts={t.linesTitle} />
      </h2>
      {t.lines.map((line, i) => (
        <article key={line.name} className="line">
          <div className="line-head">
            <div>
              <h3>
                <span className="bullet" aria-label={`${t.lineLabel} ${i + 1}`}>{i + 1}</span>
                {line.name}
              </h3>
              <p>{line.summary}</p>
            </div>
            <div className="line-links">
              {line.links.map(([label, href]) => (
                <a key={href} className="link" href={href} target="_blank" rel="noreferrer">{label}</a>
              ))}
            </div>
          </div>
          <Image className="shot" src={line.shot} alt={`${t.shotAlt} ${line.name}`} sizes="(max-width: 800px) 100vw, 70rem" placeholder="blur" />
          <Stops items={line.stops} />
          <p className="tags">{line.tags}</p>
        </article>
      ))}
      <MoreProjects t={t} />
    </section>
  );
}
