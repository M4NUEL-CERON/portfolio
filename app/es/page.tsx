import type { Metadata } from "next";
import { content } from "../content";
import { Home } from "../home";

export const metadata: Metadata = {
  ...content.es.meta,
  alternates: { languages: { en: "/", es: "/es" } },
};

export default function Page() {
  return <Home lang="es" />;
}
