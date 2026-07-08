import React from "react";

/* Nav — fixed top bar: DV wordmark, section links, theme toggle.
   Gains a blurred background once the page scrolls. Toggling the theme
   flips data-theme on <html>, persists it, and dispatches a
   "ds-themechange" event so the FieldCanvas re-reads its palette. */
export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );

  React.useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setTheme(next);
    dispatchEvent(new CustomEvent("ds-themechange", { detail: next }));
  };

  const linkStyle = { color: "var(--text-label)", transition: "color .2s", position: "relative", textDecoration: "none" };
  const links = [
    ["#about", "About"], ["#projects", "Projects"], ["#research", "Research"],
    ["#publications", "Publications"], ["#contact", "Contact"],
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: scrolled ? ".75rem 8vw" : "1.1rem 8vw",
      transition: ".35s",
      background: scrolled ? "var(--surface-nav)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border-hairline)" : "transparent"}`,
    }}>
      <a href="#top" style={{
        fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: "var(--ls-brand)",
        textTransform: "uppercase", color: "var(--text-strong)",
        display: "flex", alignItems: "center", gap: ".55rem", textDecoration: "none",
      }}>
        <b style={{ color: "var(--field-a)", fontWeight: 600 }}>DV</b>&nbsp;Diego&nbsp;Veloza&nbsp;Diaz
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
        <div className="ds-navlinks" style={{ display: "flex", gap: "1.8rem", fontFamily: "var(--font-mono)", fontSize: "var(--fs-nav)", letterSpacing: "var(--ls-nav)" }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} style={linkStyle}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-strong)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-label)")}>
              {label}
            </a>
          ))}
        </div>
        <button onClick={toggle} aria-label="Toggle color theme" title="Toggle light / dark theme" style={{
          background: "none", border: "1px solid var(--border-hairline)", color: "var(--text-label)",
          width: 36, height: 36, borderRadius: "var(--radius-xs)", cursor: "pointer",
          display: "inline-flex", alignItems: "center", justifyContent: "center", transition: ".25s", flex: "none",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--field-a)"; e.currentTarget.style.borderColor = "var(--field-a)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-label)"; e.currentTarget.style.borderColor = "var(--border-hairline)"; }}>
          {theme === "light" ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" /></svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" /></svg>
          )}
        </button>
      </div>
    </nav>
  );
}
