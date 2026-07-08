import React from "react";

/**
 * Button — the brand's mono-labelled action control.
 * `primary` is a filled field-blue button that lifts + glows on hover;
 * `ghost` is a hairline-outlined button that tints to field-blue on hover.
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  target,
  rel,
  disabled = false,
  className = "",
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--fs-label)",
    letterSpacing: "0.05em",
    padding: "0.85rem 1.5rem",
    border: "1px solid var(--border-hairline)",
    borderRadius: "var(--radius-xs)",
    transition: `all var(--t-base) var(--ease-out)`,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    lineHeight: 1,
    background: "transparent",
    color: "var(--text-strong)",
    WebkitAppearance: "none",
  };

  const variants = {
    primary: {
      background: "var(--accent-primary)",
      color: "var(--on-accent)",
      borderColor: "var(--accent-primary)",
      fontWeight: "var(--fw-semibold)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
    },
  };

  const merged = { ...base, ...(variants[variant] || variants.primary), ...style };

  const enter = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(var(--lift-btn))";
    if (variant === "primary") {
      e.currentTarget.style.boxShadow = "var(--glow)";
    } else {
      e.currentTarget.style.borderColor = "var(--accent-primary)";
      e.currentTarget.style.color = "var(--accent-primary)";
    }
  };
  const leave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
    if (variant === "ghost") {
      e.currentTarget.style.borderColor = "var(--border-hairline)";
      e.currentTarget.style.color = "var(--text-strong)";
    }
  };

  const shared = {
    style: merged,
    className: `ds-button ds-button--${variant} ${className}`.trim(),
    onMouseEnter: enter,
    onMouseLeave: leave,
    ...rest,
  };

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} {...shared}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...shared}>
      {children}
    </button>
  );
}
