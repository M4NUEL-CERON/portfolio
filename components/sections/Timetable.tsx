import type { Copy } from "@/content/copy";
import { Lit } from "../ui/Lit";

export function Timetable({ t }: { t: Copy }) {
  return (
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
            {t.job.items.map((item) => (
              <li key={item}>{item}</li>
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
  );
}
