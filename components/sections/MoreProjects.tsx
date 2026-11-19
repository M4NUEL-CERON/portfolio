import type { Copy } from "@/content/copy";
import { GITHUB } from "@/content/site";
import { Arrow } from "../ui/Arrow";

/** Smaller side projects, listed as branch lines under the main ones. */
export function MoreProjects({ t }: { t: Copy }) {
  return (
    <div className="more">
      <h3>{t.moreTitle}</h3>
      <ul>
        {t.more.map((project) => (
          <li key={project.name}>
            <strong>{project.name}</strong>
            <p>{project.note}</p>
            <span className="tags">{project.tags}</span>
            <span className="line-links">
              {project.links.map(([label, href]) => (
                <a key={href} className="link" href={href} target="_blank" rel="noreferrer">{label}</a>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <a className="btn" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">
        {t.moreAll} <Arrow />
      </a>
    </div>
  );
}
