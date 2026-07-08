import React from "react";
import { Tag } from "./Tag.jsx";

/**
 * ProjectCard — the signature research/code card.
 * Hairline-bordered, top-lit wash, lifts on hover and reveals a radial
 * cursor-tracking glow. Renders an <a> when `href` is set.
 *
 * `meta` is an array of { label, value } pairs shown as mono footnotes
 * with the value in emission-teal.
 */
export function ProjectCard({
  tag,
  tone = "accent",
  title,
  children,
  meta = [],
  href,
  target,
  rel,
  className = "",
  style = {},
  ...rest
}) {
  const track = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const enter = (e) => {
    e.currentTarget.style.borderColor = "var(--border-active)";
    e.currentTarget.style.transform = "translateY(var(--lift-card))";
    const g = e.currentTarget.querySelector(".ds-card-glow");
    if (g) g.style.opacity = "1";
  };
  const leave = (e) => {
    e.currentTarget.style.borderColor = "var(--border-hairline)";
    e.currentTarget.style.transform = "translateY(0)";
    const g = e.currentTarget.querySelector(".ds-card-glow");
    if (g) g.style.opacity = "0";
  };

  const Comp = href ? "a" : "div";

  return (
    <Comp
      href={href}
      target={target}
      rel={rel}
      className={`ds-project-card ${className}`.trim()}
      onMouseMove={track}
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "block",
        padding: "2rem",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-sm)",
        background: "var(--card-wash)",
        transition: `all var(--t-mid) var(--ease-out)`,
        textDecoration: "none",
        color: "inherit",
        ...style,
      }}
      {...rest}
    >
      <span
        className="ds-card-glow"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--card-glow)",
          opacity: 0,
          transition: `opacity var(--t-mid) var(--ease-out)`,
          pointerEvents: "none",
        }}
      />
      <span style={{ position: "relative", display: "block" }}>
        {tag && (
          <div style={{ marginBottom: "0.9rem" }}>
            <Tag tone={tone}>{tag}</Tag>
          </div>
        )}
        {title && (
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-card)",
              fontWeight: "var(--fw-semibold)",
              color: "var(--text-strong)",
              margin: "0 0 0.6rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
        )}
        {children && (
          <p
            style={{
              color: "var(--text-body)",
              fontSize: "var(--fs-body-sm)",
              margin: "0 0 1.2rem",
              lineHeight: "var(--lh-body)",
            }}
          >
            {children}
          </p>
        )}
        {meta.length > 0 && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--fs-meta)",
              color: "var(--text-label)",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {meta.map((m, i) => (
              <span key={i}>
                {m.label}{" "}
                <b style={{ color: "var(--text-value)", fontWeight: "var(--fw-medium)" }}>{m.value}</b>
              </span>
            ))}
          </div>
        )}
      </span>
    </Comp>
  );
}
