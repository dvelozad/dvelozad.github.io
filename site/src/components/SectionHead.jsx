import React from "react";

/**
 * SectionHead — the numbered section header used across the site.
 * A magenta two-digit index sits beside a Fraunces serif title.
 * `center` centers the pair (used on the contact section).
 */
export function SectionHead({
  num,
  title,
  center = false,
  className = "",
  style = {},
  ...rest
}) {
  return (
    <div
      className={`ds-section-head ${className}`.trim()}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "1.2rem",
        marginBottom: "3.5rem",
        justifyContent: center ? "center" : "flex-start",
        ...style,
      }}
      {...rest}
    >
      {num != null && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-label)",
            color: "var(--text-numeral)",
          }}
        >
          {num}
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-title)",
          fontWeight: "var(--fw-semibold)",
          letterSpacing: "var(--ls-title)",
          color: "var(--text-strong)",
        }}
      >
        {title}
      </span>
    </div>
  );
}
