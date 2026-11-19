import type { CSSProperties } from "react";

type Stop = { name: string; note: string };

/** A transit line: stops in order with a train riding along. Accepts bare names or name + note. */
export function Stops({ items }: { items: Stop[] | string[] }) {
  return (
    <div className="track" style={{ "--n": items.length } as CSSProperties}>
      <span className="train" aria-hidden="true" />
      <ol className="stops">
        {items.map((s, i) => {
          const stop = typeof s === "string" ? { name: s, note: "" } : s;
          return (
            <li key={stop.name} className="stop" style={{ "--i": i } as CSSProperties}>
              <strong>{stop.name}</strong>
              {stop.note && <p>{stop.note}</p>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
