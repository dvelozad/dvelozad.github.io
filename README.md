<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diego — Computational Physicist</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,600&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#07090f;
    --bg-soft:#0d1119;
    --ink:#e8ecf4;
    --muted:#8a93a6;
    --line:rgba(255,255,255,.08);
    --field-a:#3ba7ff;   /* cool field */
    --field-b:#c94dff;   /* charged accent */
    --field-c:#00e6c3;   /* emission */
    --glow:0 0 40px rgba(59,167,255,.25);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    background:var(--bg);
    color:var(--ink);
    font-family:'Space Grotesk',sans-serif;
    line-height:1.6;
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
  }
  a{color:inherit;text-decoration:none}
  ::selection{background:var(--field-b);color:#fff}

  /* ---------- HERO ---------- */
  .hero{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:0 8vw;overflow:hidden}
  #field{position:absolute;inset:0;width:100%;height:100%;z-index:0}
  .hero-grid{position:absolute;inset:0;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(circle at 30% 40%,#000 0%,transparent 75%);z-index:0}
  .hero-inner{position:relative;z-index:2;max-width:900px}
  .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:.8rem;letter-spacing:.32em;text-transform:uppercase;color:var(--field-a);display:flex;align-items:center;gap:.8rem;margin-bottom:1.6rem;opacity:0;animation:rise .7s .1s forwards}
  .eyebrow::before{content:"";width:38px;height:1px;background:var(--field-a);box-shadow:var(--glow)}
  h1{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(2.8rem,8vw,6rem);line-height:.98;letter-spacing:-.02em;margin-bottom:1.4rem}
  h1 .l1{display:block;opacity:0;animation:rise .8s .2s forwards}
  h1 .l2{display:block;color:transparent;background:linear-gradient(100deg,var(--field-a),var(--field-b) 60%,var(--field-c));-webkit-background-clip:text;background-clip:text;opacity:0;animation:rise .8s .35s forwards}
  .lede{font-size:clamp(1.05rem,1.6vw,1.3rem);color:var(--muted);max-width:620px;margin-bottom:2.6rem;opacity:0;animation:rise .8s .5s forwards}
  .lede b{color:var(--ink);font-weight:500}
  .cta-row{display:flex;gap:1rem;flex-wrap:wrap;opacity:0;animation:rise .8s .65s forwards}
  .btn{font-family:'IBM Plex Mono',monospace;font-size:.85rem;letter-spacing:.05em;padding:.85rem 1.5rem;border:1px solid var(--line);border-radius:2px;transition:.25s;display:inline-flex;align-items:center;gap:.6rem}
  .btn.primary{background:var(--field-a);color:#04060c;border-color:var(--field-a);font-weight:600}
  .btn.primary:hover{box-shadow:var(--glow);transform:translateY(-2px)}
  .btn.ghost:hover{border-color:var(--field-a);color:var(--field-a);transform:translateY(-2px)}
  .scroll-hint{position:absolute;bottom:2.4rem;left:8vw;font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.28em;color:var(--muted);text-transform:uppercase;z-index:2;display:flex;align-items:center;gap:.7rem;opacity:0;animation:rise 1s 1s forwards}
  .scroll-hint span{display:block;width:1px;height:34px;background:linear-gradient(var(--field-a),transparent);animation:pulse 2s infinite}

  @keyframes rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}

  /* ---------- SECTIONS ---------- */
  section{padding:8rem 8vw;position:relative}
  .sec-head{display:flex;align-items:baseline;gap:1.2rem;margin-bottom:3.5rem}
  .sec-num{font-family:'IBM Plex Mono',monospace;font-size:.85rem;color:var(--field-b)}
  .sec-title{font-family:'Fraunces',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:600;letter-spacing:-.01em}
  .reveal{opacity:0;transform:translateY(30px);transition:.7s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}

  /* about */
  .about{border-top:1px solid var(--line)}
  .about-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:4rem}
  .about-grid p{color:var(--muted);font-size:1.1rem;margin-bottom:1.2rem}
  .about-grid p b{color:var(--ink);font-weight:500}
  .facts{font-family:'IBM Plex Mono',monospace;font-size:.85rem}
  .facts .row{display:flex;justify-content:space-between;padding:.9rem 0;border-bottom:1px solid var(--line)}
  .facts .row span:first-child{color:var(--muted)}
  .facts .row span:last-child{color:var(--field-c)}

  /* research + code cards */
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem}
  .card{border:1px solid var(--line);border-radius:3px;padding:2rem;background:linear-gradient(180deg,var(--bg-soft),transparent);transition:.3s;position:relative;overflow:hidden}
  .card::after{content:"";position:absolute;inset:0;background:radial-gradient(400px circle at var(--mx,50%) var(--my,0%),rgba(59,167,255,.12),transparent 60%);opacity:0;transition:.3s}
  .card:hover{border-color:rgba(59,167,255,.5);transform:translateY(-4px)}
  .card:hover::after{opacity:1}
  .card .tag{font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--field-a);margin-bottom:.9rem}
  .card h3{font-family:'Fraunces',serif;font-size:1.35rem;font-weight:600;margin-bottom:.6rem}
  .card p{color:var(--muted);font-size:.98rem;margin-bottom:1.2rem}
  .card .meta{font-family:'IBM Plex Mono',monospace;font-size:.75rem;color:var(--muted);display:flex;gap:1rem;flex-wrap:wrap}
  .card .meta b{color:var(--field-c);font-weight:500}

  .pub-list{border-top:1px solid var(--line)}
  .pub{display:grid;grid-template-columns:auto 1fr auto;gap:1.6rem;align-items:baseline;padding:1.8rem 0;border-bottom:1px solid var(--line);transition:.25s}
  .pub:hover{padding-left:1rem;border-color:rgba(201,77,255,.4)}
  .pub .yr{font-family:'IBM Plex Mono',monospace;color:var(--field-b);font-size:.9rem}
  .pub h4{font-weight:500;font-size:1.08rem;margin-bottom:.3rem}
  .pub .venue{color:var(--muted);font-size:.9rem;font-family:'IBM Plex Mono',monospace}
  .pub .arrow{color:var(--muted);transition:.25s}
  .pub:hover .arrow{color:var(--field-a);transform:translateX(4px)}

  /* contact */
  .contact{text-align:center;border-top:1px solid var(--line)}
  .contact h2{font-family:'Fraunces',serif;font-size:clamp(2rem,6vw,4rem);font-weight:600;margin-bottom:1.5rem;line-height:1.05}
  .contact h2 em{font-style:normal;color:transparent;background:linear-gradient(100deg,var(--field-a),var(--field-c));-webkit-background-clip:text;background-clip:text}
  .social{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;margin-top:2.5rem;font-family:'IBM Plex Mono',monospace;font-size:.9rem}
  .social a{color:var(--muted);padding-bottom:2px;border-bottom:1px solid transparent;transition:.25s}
  .social a:hover{color:var(--field-a);border-color:var(--field-a)}
  footer{padding:2.5rem 8vw;border-top:1px solid var(--line);font-family:'IBM Plex Mono',monospace;font-size:.75rem;color:var(--muted);display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}

  @media(max-width:760px){
    .about-grid,.grid2{grid-template-columns:1fr}
    .pub{grid-template-columns:auto 1fr;gap:1rem}
    .pub .arrow{display:none}
    section{padding:5.5rem 7vw}
  }
  @media(prefers-reduced-motion:reduce){
    *{animation:none!important;transition:none!important}
    .reveal{opacity:1;transform:none}
  }
</style>
</head>
<body>

<header class="hero">
  <canvas id="field"></canvas>
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div class="eyebrow">Computational Physicist</div>
    <h1><span class="l1">Diego [Last Name]</span><span class="l2">simulating matter.</span></h1>
    <p class="lede">I build and run <b>computational models</b> to understand the behavior of complex physical systems — from <b>molecular dynamics</b> to <b>electronic structure</b>, translating physical law into code that predicts the real world.</p>
    <div class="cta-row">
      <a href="#work" class="btn primary">View research →</a>
      <a href="https://github.com/[username]" class="btn ghost">GitHub</a>
    </div>
  </div>
  <div class="scroll-hint">Scroll<span></span></div>
</header>

<section class="about reveal" id="about">
  <div class="sec-head"><div class="sec-num">01</div><div class="sec-title">About</div></div>
  <div class="about-grid">
    <div>
      <p>I'm a computational physicist based at <b>Universidad Nacional de Colombia</b>, working at the intersection of <b>physics, chemistry, and high-performance computing</b>.</p>
      <p>My work centers on <b>molecular simulation</b> and <b>electronic-structure methods</b> — using classical molecular dynamics, DFT, and thermodynamic modeling to predict the properties of materials that are hard to measure in the lab.</p>
      <p>I care about methods that are both <b>physically grounded</b> and <b>computationally honest</b>: getting the accuracy–cost trade-off right, and writing simulation code others can actually reuse.</p>
    </div>
    <div class="facts">
      <div class="row"><span>Focus</span><span>Molecular simulation</span></div>
      <div class="row"><span>Methods</span><span>MD · DFT · COSMO-RS</span></div>
      <div class="row"><span>Tools</span><span>Python · C++ · Fortran</span></div>
      <div class="row"><span>Affiliation</span><span>UNAL</span></div>
      <div class="row"><span>Location</span><span>Colombia</span></div>
    </div>
  </div>
</section>

<section id="work" class="reveal">
  <div class="sec-head"><div class="sec-num">02</div><div class="sec-title">Research &amp; Code</div></div>
  <div class="grid2">
    <a class="card" href="#"><div class="tag">Research · Molecular Dynamics</div><h3>[Project title]</h3><p>One line on the physical question and the simulation approach you used to attack it.</p><div class="meta"><span>Method: <b>Classical MD</b></span><span>Scale: <b>ns / 10⁵ atoms</b></span></div></a>
    <a class="card" href="#"><div class="tag">Research · Electronic Structure</div><h3>[Project title]</h3><p>One line on the property you predicted and the level of theory you benchmarked against.</p><div class="meta"><span>Method: <b>DFT</b></span><span>Basis: <b>cc-pVTZ</b></span></div></a>
    <a class="card" href="https://github.com/[username]/[repo]"><div class="tag">Code · Open Source</div><h3>[repo-name]</h3><p>What the tool does and who it's for — a simulation engine, analysis library, or workflow.</p><div class="meta"><span>Lang: <b>Python</b></span><span>★ <b>[stars]</b></span></div></a>
    <a class="card" href="https://github.com/[username]/[repo]"><div class="tag">Code · Toolkit</div><h3>[repo-name]</h3><p>A short description of the package and the problem it removes from your workflow.</p><div class="meta"><span>Lang: <b>C++</b></span><span>★ <b>[stars]</b></span></div></a>
  </div>
</section>

<section class="reveal" id="publications">
  <div class="sec-head"><div class="sec-num">03</div><div class="sec-title">Selected Publications</div></div>
  <div class="pub-list">
    <a class="pub" href="#"><div class="yr">2025</div><div><h4>[Paper title goes here — full title of the work]</h4><div class="venue">Authors · Journal Name, Vol (Year)</div></div><div class="arrow">↗</div></a>
    <a class="pub" href="#"><div class="yr">2024</div><div><h4>[Paper title goes here — full title of the work]</h4><div class="venue">Authors · Journal Name, Vol (Year)</div></div><div class="arrow">↗</div></a>
    <a class="pub" href="#"><div class="yr">2023</div><div><h4>[Paper title goes here — full title of the work]</h4><div class="venue">Authors · Journal Name, Vol (Year)</div></div><div class="arrow">↗</div></a>
  </div>
</section>

<section class="contact reveal" id="contact">
  <div class="sec-head" style="justify-content:center"><div class="sec-num">04</div><div class="sec-title">Contact</div></div>
  <h2>Let's talk about <em>simulating the unmeasurable.</em></h2>
  <p style="color:var(--muted);max-width:520px;margin:0 auto">Open to collaborations, questions about methods, and research discussions.</p>
  <div class="social">
    <a href="mailto:[you]@unal.edu.co">email</a>
    <a href="https://github.com/[username]">github</a>
    <a href="https://scholar.google.com/[id]">scholar</a>
    <a href="https://orcid.org/[id]">orcid</a>
    <a href="https://linkedin.com/in/[you]">linkedin</a>
  </div>
</section>

<footer>
  <span>© 2026 Diego [Last Name]</span>
  <span>Built with physics &amp; a little code</span>
</footer>

<script>
/* ---------- Particle field: charged particles with soft interaction lines ---------- */
(function(){
  const c=document.getElementById('field'),x=c.getContext('2d');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w,h,parts,mouse={x:-999,y:-999};
  const COL=['#3ba7ff','#c94dff','#00e6c3'];
  function size(){w=c.width=innerWidth*devicePixelRatio;h=c.height=innerHeight*devicePixelRatio;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';}
  function init(){
    const n=Math.min(90,Math.floor(innerWidth/16));
    parts=Array.from({length:n},()=>({
      x:Math.random()*w,y:Math.random()*h,
      vx:(Math.random()-.5)*.35*devicePixelRatio,
      vy:(Math.random()-.5)*.35*devicePixelRatio,
      r:(Math.random()*1.6+.6)*devicePixelRatio,
      c:COL[Math.floor(Math.random()*COL.length)]
    }));
  }
  function step(){
    x.clearRect(0,0,w,h);
    const link=140*devicePixelRatio;
    for(let i=0;i<parts.length;i++){
      const p=parts[i];
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1;
      if(p.y<0||p.y>h)p.vy*=-1;
      // gentle mouse repulsion (field lines)
      const dx=p.x-mouse.x,dy=p.y-mouse.y,md=Math.hypot(dx,dy);
      if(md<160*devicePixelRatio){const f=(160*devicePixelRatio-md)/(160*devicePixelRatio)*.8;p.vx+=dx/md*f*.4;p.vy+=dy/md*f*.4;}
      p.vx*=.997;p.vy*=.997;
      for(let j=i+1;j<parts.length;j++){
        const q=parts[j],ddx=p.x-q.x,ddy=p.y-q.y,d=Math.hypot(ddx,ddy);
        if(d<link){x.globalAlpha=(1-d/link)*.35;x.strokeStyle=p.c;x.lineWidth=devicePixelRatio*.6;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke();}
      }
      x.globalAlpha=.9;x.fillStyle=p.c;x.shadowColor=p.c;x.shadowBlur=8*devicePixelRatio;
      x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();x.shadowBlur=0;
    }
    x.globalAlpha=1;
    requestAnimationFrame(step);
  }
  size();init();
  if(!reduce)step();else{step();}
  addEventListener('resize',()=>{size();init();});
  addEventListener('mousemove',e=>{mouse.x=e.clientX*devicePixelRatio;mouse.y=e.clientY*devicePixelRatio;});
  addEventListener('mouseleave',()=>{mouse.x=mouse.y=-999;});
})();

/* ---------- Scroll reveal ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- Card cursor glow ---------- */
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  });
});
</script>
</body>
</html>
