import React from "react";
import { Button } from "../components/Button.jsx";
import { Tag } from "../components/Tag.jsx";
import { SectionHead } from "../components/SectionHead.jsx";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { PublicationRow } from "../components/PublicationRow.jsx";
import { FactTable } from "../components/FactTable.jsx";
import { Nav } from "./Nav.jsx";
import { FieldCanvas } from "./FieldCanvas.jsx";
import { FlagshipProjects } from "./FlagshipProjects.jsx";

/* Profile — the assembled scientific profile page. Composes the DS
   components with the local Nav, FieldCanvas, and FlagshipProjects. */

function SoftwareIndex() {
  const items = [
    { id: "F01", name: "AREPAS", role: "Principal dev", tone: "var(--field-a)", desc: "Monte Carlo simulation suite (C++/CUDA)" },
    { id: "F02", name: "H-AdResS GPU", role: "Sole dev", tone: "var(--field-c)", desc: "GPU adaptive-resolution LAMMPS fork" },
    { id: "F03", name: "VECI", role: "Method author", tone: "var(--field-b)", desc: "Chemical-equilibrium method on H-AdResS" },
  ];
  return (
    <a href="#projects" style={{
      display: "block", textDecoration: "none", color: "inherit",
      border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-sm)",
      background: "var(--card-wash)", padding: "1.6rem 1.6rem 0.6rem",
      backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)",
    }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-tag)", letterSpacing: "var(--ls-tag)", textTransform: "uppercase", color: "var(--text-label)", marginBottom: "1.1rem", display: "flex", justifyContent: "space-between" }}>
        <span>Flagship software</span><span>03</span>
      </div>
      {items.map((it) => (
        <div key={it.id} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.9rem", padding: "0.95rem 0", borderBottom: "1px solid var(--border-hairline)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: it.tone, paddingTop: "0.2rem" }}>{it.id}</span>
          <span>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.6rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)", fontSize: "1.05rem", color: "var(--text-strong)" }}>{it.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-value)", whiteSpace: "nowrap" }}>{it.role}</span>
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-body)", marginTop: "0.15rem", lineHeight: 1.4 }}>{it.desc}</span>
          </span>
        </div>
      ))}
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-meta)", color: "var(--text-accent)", padding: "0.9rem 0 0.6rem" }}>See all three ↓</div>
    </a>
  );
}

function Hero() {
  return (
    <header id="top" style={{
      position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "0 8vw", overflow: "hidden",
    }}>
      <FieldCanvas />
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
        backgroundSize: "var(--grid-cell) var(--grid-cell)",
        WebkitMaskImage: "radial-gradient(circle at 30% 42%,#000 0%,transparent 74%)",
        maskImage: "radial-gradient(circle at 30% 42%,#000 0%,transparent 74%)",
      }} />
      <div className="ds-hero-grid" style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "minmax(0,1fr) 360px", gap: "4rem", alignItems: "center", width: "100%", maxWidth: "calc(var(--maxw) + 4vw)", marginTop: "3rem" }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ marginBottom: "1.8rem" }}>
            <Tag rule>Computational Physicist · PhD Researcher</Tag>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)",
            fontSize: "clamp(2.6rem,6vw,4.4rem)", lineHeight: "var(--lh-tight)",
            letterSpacing: "var(--ls-display)", color: "var(--text-strong)", margin: "0 0 1.2rem",
          }}>
            Diego Veloza Diaz
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.86rem", letterSpacing: "0.03em", color: "var(--text-body)", margin: "0 0 2rem", lineHeight: 1.7 }}>
            Institut für Physik · Johannes Gutenberg University Mainz
            <br />
            Molecular simulation · Statistical mechanics · Scientific computing
          </p>
          <p style={{ fontSize: "var(--fs-lede)", color: "var(--text-body)", maxWidth: "var(--maxw-text)", margin: "0 0 2.4rem", lineHeight: "var(--lh-body)" }}>
            My research develops <b style={{ color: "var(--text-strong)", fontWeight: 500 }}>multiscale molecular simulation methods</b> — adaptive
            resolution and Monte Carlo — to compute the <b style={{ color: "var(--text-strong)", fontWeight: 500 }}>thermodynamics of liquids,
            mixtures, and electrochemical systems</b> from the underlying physics.
          </p>
          <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: "var(--fs-nav)", letterSpacing: "var(--ls-nav)" }}>
            {[["#research", "Research"], ["#publications", "Publications"], ["https://github.com/dvelozad", "GitHub ↗"], ["https://orcid.org/0009-0000-9167-8826", "ORCID ↗"]].map(([href, label]) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" style={{ color: "var(--text-label)", textDecoration: "none", paddingBottom: 3, borderBottom: "1px solid var(--border-hairline)", transition: ".2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; e.currentTarget.style.borderColor = "var(--accent-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-label)"; e.currentTarget.style.borderColor = "var(--border-hairline)"; }}>{label}</a>
            ))}
          </div>
        </div>
        <div className="ds-hero-panel"><SoftwareIndex /></div>
      </div>
      <div style={{
        position: "absolute", bottom: "2.4rem", left: "8vw", zIndex: 2,
        fontFamily: "var(--font-mono)", fontSize: "var(--fs-micro)", letterSpacing: "var(--ls-micro)",
        color: "var(--text-label)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: ".7rem",
      }}>
        Scroll<span style={{ display: "block", width: 1, height: 34, background: "linear-gradient(var(--field-a),transparent)", animation: "ds-pulse 2s infinite" }} />
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "8rem 8vw", maxWidth: "calc(var(--maxw) + 16vw)", margin: "0 auto", borderTop: "1px solid var(--border-hairline)" }}>
      <SectionHead num="01" title="About" />
      <div className="ds-about-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--gap-about)" }}>
        <div style={{ fontFamily: "var(--font-sans)" }}>
          {[
            <>I'm a PhD researcher at the <b>Institut für Physik, Johannes Gutenberg University Mainz</b>, working where <b>statistical mechanics, molecular simulation, and high-performance computing</b> meet.</>,
            <>My research centers on <b>adaptive resolution simulation</b> and <b>Monte Carlo methods</b> — computing chemical potentials of hydrogen-bonded aqueous mixtures through <b>Kirkwood–Buff theory</b>, and modelling charge transport in <b>electrochemical systems</b>.</>,
            <>Above all I build the tools: <b>physically grounded, computationally honest</b> simulation code others can build on. I earned my MSc in Physics at the <b>Universidad Nacional de Colombia</b>, Bogotá.</>,
          ].map((p, i) => (
            <p key={i} style={{ color: "var(--text-body)", fontSize: "var(--fs-body-lg)", margin: "0 0 1.2rem", lineHeight: "var(--lh-body)" }}>
              {p}
            </p>
          ))}
        </div>
        <FactTable rows={[
          { label: "Focus", value: "Molecular simulation" },
          { label: "Methods", value: "AdResS · GCMC · MD" },
          { label: "Theory", value: "Kirkwood–Buff" },
          { label: "Computing", value: "C++ · Python · CUDA" },
          { label: "Position", value: "PhD candidate" },
          { label: "Based in", value: "Mainz, Germany" },
        ]} />
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" style={{ padding: "8rem 8vw", maxWidth: "calc(var(--maxw) + 16vw)", margin: "0 auto" }}>
      <SectionHead num="03" title="Research & Code" />
      <div className="ds-card-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-cards)" }}>
        <ProjectCard tag="Adaptive Resolution · Thermodynamics" tone="accent"
          title="Chemical potentials of aqueous mixtures"
          href="https://doi.org/10.1063/5.0326808" target="_blank" rel="noopener"
          meta={[{ label: "Method:", value: "AdResS + KB" }, { label: "J. Chem. Phys. ·", value: "2026" }]}>
          Computing chemical potentials of hydrogen-bonded liquid mixtures by coupling adaptive resolution simulation with Kirkwood–Buff theory.
        </ProjectCard>
        <ProjectCard tag="Electrochemistry · Kinetics" tone="charge"
          title="Charge flow in electrochemical cells"
          href="https://doi.org/10.1063/5.0295632" target="_blank" rel="noopener"
          meta={[{ label: "Method:", value: "Kinetic model" }, { label: "J. Chem. Phys. ·", value: "2025" }]}>
          A kinetic model that simulates charge transport through an electrochemical half-cell, linking microscopic rates to observable current.
        </ProjectCard>
        <ProjectCard tag="Monte Carlo · Method Development" tone="emission"
          title="Grand-canonical sampling"
          href="https://github.com/dvelozad/GCMC_test" target="_blank" rel="noopener"
          meta={[{ label: "Lang:", value: "C++" }, { label: "Sampling:", value: "μVT / Widom" }]}>
          LAMMPS-style Monte Carlo infrastructure — GCMC and particle insertion — for chemical potentials in electrolyte and molecular systems.
        </ProjectCard>
        <ProjectCard tag="Open Quantum Systems" tone="accent"
          title="Quantum trajectory unravelings"
          href="https://github.com/dvelozad/qt-unraveling-python" target="_blank" rel="noopener"
          meta={[{ label: "Lang:", value: "Python" }, { label: "GitHub ★", value: "3" }]}>
          A Python library to simulate open-quantum-system dynamics through different stochastic unravelings of the master equation.
        </ProjectCard>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" style={{ padding: "8rem 8vw", maxWidth: "calc(var(--maxw) + 16vw)", margin: "0 auto" }}>
      <SectionHead num="04" title="Publications" />
      <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
        <PublicationRow year="2026"
          title="Chemical potentials of hydrogen-bonded aqueous mixtures from adaptive resolution simulations and Kirkwood–Buff theory"
          authors="Veloza Diaz, D. et al." journal="The Journal of Chemical Physics" venueTail="2026"
          href="https://doi.org/10.1063/5.0326808" />
        <PublicationRow year="2025"
          title="A kinetic model to simulate charge flow through an electro-chemical half-cell"
          authors="Veloza Diaz, D. et al." journal="The Journal of Chemical Physics" venueTail="2025"
          href="https://doi.org/10.1063/5.0295632" />
      </div>
      <div style={{ marginTop: "2.4rem" }}>
        <Button variant="ghost" href="https://orcid.org/0009-0000-9167-8826" target="_blank" rel="noopener">View all on ORCID →</Button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "8rem 8vw", maxWidth: "calc(var(--maxw) + 16vw)", margin: "0 auto", textAlign: "center", borderTop: "1px solid var(--border-hairline)" }}>
      <SectionHead num="05" title="Contact" center />
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)", fontWeight: "var(--fw-semibold)", margin: "0 0 1.5rem", lineHeight: "var(--lh-snug)", color: "var(--text-strong)" }}>
        Get <em style={{ fontStyle: "normal", color: "var(--accent-primary)" }}>in touch.</em>
      </h2>
      <p style={{ color: "var(--text-body)", maxWidth: 540, margin: "0 auto", fontFamily: "var(--font-sans)", lineHeight: "var(--lh-body)" }}>
        Open to collaborations, method questions, and research discussions in molecular simulation, statistical mechanics, and scientific computing.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.5rem", fontFamily: "var(--font-mono)", fontSize: ".9rem" }}>
        {[["mailto:dvelozad@unal.edu.co", "email"], ["https://github.com/dvelozad", "github"], ["https://orcid.org/0009-0000-9167-8826", "orcid"], ["https://www.researchgate.net/profile/Diego-Veloza-Diaz", "researchgate"]].map(([href, label]) => (
          <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener" style={{ color: "var(--text-label)", textDecoration: "none", paddingBottom: 2, borderBottom: "1px solid transparent", transition: ".25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--field-a)"; e.currentTarget.style.borderColor = "var(--field-a)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-label)"; e.currentTarget.style.borderColor = "transparent"; }}>{label}</a>
        ))}
      </div>
    </section>
  );
}

export function Profile() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <FlagshipProjects />
      <Research />
      <Publications />
      <Contact />
      <footer style={{ padding: "2.5rem 8vw", borderTop: "1px solid var(--border-hairline)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-meta)", color: "var(--text-label)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <span>© 2026 Diego Veloza Diaz</span>
        <span>Mainz, Germany</span>
      </footer>
    </>
  );
}
