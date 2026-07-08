import React from "react";

/**
 * Tag — a mono, uppercase, wide-tracked label.
 * Default renders a compact card tag (field-blue). Set `rule` for the
 * hero-style eyebrow: a glowing leading rule + wider tracking.
 * `tone` recolors it: accent (blue), charge (magenta), emission (teal).
 */
export function Tag({
  children,
  rule = false,
  tone = "accent",
  className = "",
  style = {},
  ...rest
}) {
  const toneColor = {
    accent: "var(--text-accent)",
    charge: "var(--accent-charge)",
    emission: "var(--accent-emission)",
    muted: "var(--text-label)",
  }[tone] || "var(--text-accent)";

  const base = {
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    color: toneColor,
    display: "inline-flex",
    alignItems: "center",
  };

  const asEyebrow = {
    fontSize: "var(--fs-eyebrow)",
    letterSpacing: "var(--ls-eyebrow)",
    gap: "0.8rem",
  };
  const asTag = {
    fontSize: "var(--fs-tag)",
    letterSpacing: "var(--ls-tag)",
  };

  const merged = { ...base, ...(rule ? asEyebrow : asTag), ...style };

  return (
    <span className={`ds-tag ${rule ? "ds-tag--eyebrow" : ""} ${className}`.trim()} style={merged} {...rest}>
      {rule && (
        <span
          aria-hidden="true"
          style={{
            width: "38px",
            height: "1px",
            background: "currentColor",
            boxShadow: "var(--glow-line)",
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
