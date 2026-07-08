import React from "react";
import { Tag } from "../components/Tag.jsx";
import { SectionHead } from "../components/SectionHead.jsx";

/* FlagshipProjects — the centerpiece. Three large feature rows for the
   projects Diego leads: AREPAS, H-AdResS GPU, and VECI. Each row is a
   numbered index, tag, serif title, lede, capability chips, and mono meta.
   Grounded in the AREPAS / HAdResS_GPU repository READMEs. */

function CapChip({ children }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".02em",
      color: "var(--text-body)", padding: ".4rem .7rem",
      border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-xs)",
      background: "var(--card-wash)", whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function Flagship({ index, tag, tone, title, tagline, children, caps, meta, links }) {
  const [hover, setHover] = React.useState(false);
  const accent = { accent: "var(--field-a)", charge: "var(--field-b)", emission: "var(--field-c)" }[tone] || "var(--field-a)";
  return (
    <div
      className="ds-flagship-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "grid", gridTemplateColumns: "minmax(0,1fr) 320px", gap: "3rem",
        padding: "2.6rem 0", borderTop: "1px solid var(--border-hairline)",
        transition: "padding .3s var(--ease-out)",
        paddingLeft: hover ? "1rem" : 0,
      }}
    >
      {/* left rail accent */}
      <span aria-hidden="true" style={{
        position: "absolute", left: hover ? 0 : "-4px", top: "2.6rem", width: "3px", height: "2.4rem",
        background: accent, boxShadow: hover ? `0 0 14px ${accent}` : "none",
        opacity: hover ? 1 : 0, transition: "all .3s var(--ease-out)",
      }} />
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.1rem", marginBottom: ".9rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: ".85rem", color: accent }}>{index}</span>
          <Tag tone={tone}>{tag}</Tag>
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)",
          fontSize: "clamp(1.8rem,3.4vw,2.7rem)", letterSpacing: "var(--ls-title)",
          lineHeight: 1.02, color: "var(--text-strong)", margin: "0 0 .7rem",
        }}>{title}</h3>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: ".04em", color: accent, margin: "0 0 1.2rem" }}>{tagline}</p>
        <p style={{ color: "var(--text-body)", fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-body)", maxWidth: "62ch", margin: "0 0 1.6rem" }}>{children}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
          {caps.map((c) => <CapChip key={c}>{c}</CapChip>)}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", alignSelf: "start", paddingTop: ".4rem" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)" }}>
          {meta.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: ".7rem 0", borderBottom: "1px solid var(--border-hairline)" }}>
              <span style={{ color: "var(--text-label)", whiteSpace: "nowrap" }}>{m.label}</span>
              <span style={{ color: "var(--text-value)", textAlign: "right" }}>{m.value}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".55rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener" style={{
              fontFamily: "var(--font-mono)", fontSize: ".78rem", color: "var(--text-label)",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".5rem", transition: "color .2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-label)")}>
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FlagshipProjects() {
  return (
    <section id="projects" style={{ padding: "8rem 8vw", maxWidth: "calc(var(--maxw) + 16vw)", margin: "0 auto" }}>
      <SectionHead num="02" title="Flagship Software" />
      <p style={{ color: "var(--text-body)", fontSize: "var(--fs-body-lg)", maxWidth: "64ch", margin: "-1.8rem 0 2.4rem", lineHeight: "var(--lh-body)" }}>
        Three research codes I lead as principal developer — a Monte Carlo engine, a
        GPU adaptive-resolution LAMMPS fork, and a chemical-equilibrium method built on top of it.
      </p>

      <Flagship
        index="F01" tag="Monte Carlo Engine · C++/CUDA" tone="accent"
        title="AREPAS"
        tagline="Adaptive REsolution via Particle Addition & Subtraction"
        caps={["GCMC / μVT", "Widom · TI · MBAR/BAR", "Ewald + PPPM (LAMMPS-verified)", "H-AdResS + GCS", "kinetic MC electron transfer", "Kokkos / CUDA GPU"]}
        meta={[{ label: "Role", value: "Principal developer" }, { label: "Language", value: "C++ · Kokkos" }, { label: "Architecture", value: "LAMMPS-style, MC-native" }]}
        links={[{ label: "github.com/dvelozad/AREPAS", href: "https://github.com/dvelozad/AREPAS" }]}
      >
        A modular Monte Carlo suite for computing chemical potentials and thermodynamics of
        electrolyte and molecular systems. It borrows the LAMMPS architecture — input syntax,
        style registration, neighbor lists — but is Monte Carlo–native, built around <b style={{ color: "var(--text-strong)", fontWeight: 500 }}>Arbiters</b> (accept/reject rules),
        <b style={{ color: "var(--text-strong)", fontWeight: 500 }}> Motions</b> (MC moves), and <b style={{ color: "var(--text-strong)", fontWeight: 500 }}>Proposals</b>, with device-resident batched ΔE kernels on GPU.
      </Flagship>

      <Flagship
        index="F02" tag="Adaptive Resolution · GPU" tone="emission"
        title="H-AdResS GPU"
        tagline="Hamiltonian Adaptive Resolution in LAMMPS, Kokkos/CUDA accelerated"
        caps={["λ(r) resolution field", "λ-dependent PPPM", "pressure/density compensation", "grand-canonical reservoir (GCS)", "TIP4P · PIMD · ML/MACE couplings", "CPU + Kokkos GPU parity"]}
        meta={[{ label: "Role", value: "Sole developer" }, { label: "Base", value: "LAMMPS stable_2025" }, { label: "Packages", value: "HADRESS · DEMIX · MANYB" }]}
        links={[{ label: "github.com/dvelozad/HAdResS_GPU", href: "https://github.com/dvelozad/HAdResS_GPU" }]}
      >
        A complete H-AdResS implementation as a LAMMPS fork: one simulation box treats different
        spatial regions at different resolution — an atomistic core, a hybrid transition layer, and a
        coarse-grained or ideal-gas reservoir — coupled through a smooth <b style={{ color: "var(--text-strong)", fontWeight: 500 }}>λ(r)</b> field so molecules cross
        without artifacts. Every custom style ships a CPU reference and a validated Kokkos GPU variant.
      </Flagship>

      <Flagship
        index="F03" tag="Chemical Equilibrium · Method" tone="charge"
        title="VECI"
        tagline="Virtual Equilibrium via Concentration Insertion (H-AdResS based)"
        caps={["reactive equilibria", "adaptive-resolution free energies", "open-boundary reservoirs", "chemical-potential matching"]}
        meta={[{ label: "Role", value: "Method author" }, { label: "Built on", value: "H-AdResS" }, { label: "Status", value: "In development" }]}
        links={[{ label: "github.com/dvelozad", href: "https://github.com/dvelozad" }]}
      >
        A chemical-equilibrium method built on the H-AdResS framework — using adaptive-resolution
        reservoirs and chemical-potential matching to predict equilibrium compositions of reactive
        mixtures directly from the underlying molecular physics.
      </Flagship>
    </section>
  );
}
