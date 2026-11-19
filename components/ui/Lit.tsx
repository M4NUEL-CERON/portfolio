import type { Heading } from "@/content/copy";

/** A heading whose middle part is lit in sodium yellow: [before, lit, after]. */
export function Lit({ parts }: { parts: Heading }) {
  return (
    <>
      {parts[0]}
      <em>{parts[1]}</em>
      {parts[2]}
    </>
  );
}
