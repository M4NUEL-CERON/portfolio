import { content, type Lang } from "@/content/copy";
import { RideOnScroll } from "./scenery/RideOnScroll";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { ProjectLines } from "./sections/ProjectLines";
import { Timetable } from "./sections/Timetable";

/** The whole page, one language at a time: / renders English, /es renders Spanish. */
export function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <main lang={lang}>
      <RideOnScroll />
      <Hero t={t} lang={lang} />
      <ProjectLines t={t} />
      <Timetable t={t} />
      <Contact t={t} lang={lang} />
    </main>
  );
}
