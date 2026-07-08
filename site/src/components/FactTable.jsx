import React from "react";

/**
 * FactTable — the mono key/value list used in the About section.
 * Each row is a label (muted, left) and a value (emission-teal, right),
 * separated by a hairline. Ideal for at-a-glance profile facts.
 */
export function FactTable({ rows = [], className = "", style = {}, ...rest }) {
  return (
    <div
      className={`ds-fact-table ${className}`.trim()}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        alignSelf: "start",
        ...style,
      }}
      {...rest}
    >
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "0.9rem 0",
            borderBottom: "1px solid var(--border-hairline)",
          }}
        >
          <span style={{ color: "var(--text-label)", whiteSpace: "nowrap" }}>{r.label}</span>
          <span style={{ color: "var(--text-value)", textAlign: "right" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}
