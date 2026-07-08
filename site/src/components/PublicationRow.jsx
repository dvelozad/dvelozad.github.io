import React from "react";

/**
 * PublicationRow — a single entry in the publications list.
 * Three columns: magenta year · title + venue · trailing arrow.
 * On hover the row indents and the arrow slides + tints to field-blue.
 * The `venue` string may contain a highlighted journal via <em> — pass
 * the journal separately as `journal` to get the emission-teal treatment.
 */
export function PublicationRow({
  year,
  title,
  authors,
  journal,
  venueTail,
  href,
  target = "_blank",
  rel = "noopener",
  className = "",
  style = {},
  ...rest
}) {
  const enter = (e) => {
    e.currentTarget.style.paddingLeft = "1rem";
    e.currentTarget.style.borderColor = "var(--border-pub-hover)";
    const a = e.currentTarget.querySelector(".ds-pub-arrow");
    if (a) { a.style.color = "var(--accent-primary)"; a.style.transform = "translateX(4px)"; }
  };
  const leave = (e) => {
    e.currentTarget.style.paddingLeft = "0";
    e.currentTarget.style.borderColor = "var(--border-hairline)";
    const a = e.currentTarget.querySelector(".ds-pub-arrow");
    if (a) { a.style.color = "var(--text-label)"; a.style.transform = "translateX(0)"; }
  };

  const Comp = href ? "a" : "div";

  return (
    <Comp
      href={href}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      className={`ds-pub-row ${className}`.trim()}
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: "1.6rem",
        alignItems: "baseline",
        padding: "1.8rem 0",
        borderBottom: "1px solid var(--border-hairline)",
        transition: `all var(--t-base) var(--ease-out)`,
        textDecoration: "none",
        color: "inherit",
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-numeral)", fontSize: "0.9rem" }}>
        {year}
      </span>
      <span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontWeight: "var(--fw-medium)",
            fontSize: "var(--fs-pub)",
            lineHeight: "var(--lh-heading)",
            marginBottom: "0.35rem",
            color: "var(--text-strong)",
          }}
        >
          {title}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-label)" }}>
          {authors}
          {journal && (
            <>
              {authors ? " · " : ""}
              <em style={{ fontStyle: "normal", color: "var(--text-value)" }}>{journal}</em>
            </>
          )}
          {venueTail ? ` · ${venueTail}` : ""}
        </span>
      </span>
      <span className="ds-pub-arrow" aria-hidden="true" style={{ color: "var(--text-label)", fontSize: "1.1rem", transition: `all var(--t-base) var(--ease-out)` }}>
        ↗
      </span>
    </Comp>
  );
}
