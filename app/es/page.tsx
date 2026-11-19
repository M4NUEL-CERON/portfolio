import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { content } from "@/content/copy";

export const metadata: Metadata = {
  ...content.es.meta,
  alternates: { languages: { en: "/", es: "/es" } },
};

export default function Page() {
  return <HomePage lang="es" />;
}
