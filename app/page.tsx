const focusAreas = [
  {
    number: "01",
    title: "Local leadership",
    detail: "Backing people closest to the challenges, with the resources to shape their own solutions.",
  },
  {
    number: "02",
    title: "Lasting opportunity",
    detail: "Supporting work that expands access to learning, livelihoods, and essential services.",
  },
  {
    number: "03",
    title: "Shared progress",
    detail: "Building partnerships that help promising ideas take root and grow over time.",
  },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="GN Fund home">
          <span className="mark" aria-hidden="true">G</span>
          <span>GN<span className="wordmark-light">Fund</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#approach">Our approach</a>
          <a href="#focus">Focus areas</a>
          <a className="nav-cta" href="mailto:hello@gnffund.org">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Patient capital. Shared possibility.</p>
          <h1 id="hero-title">Good things grow when we <em>back each other.</em></h1>
          <p className="hero-description">GN Fund partners with people creating a more equitable future — bringing patient support to ideas with the power to make a lasting difference.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#approach">Discover our approach <span aria-hidden="true">→</span></a>
            <a className="text-link" href="mailto:hello@gnffund.org">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Abstract illustration of a growing tree with layered green hills">
          <div className="sun" />
          <div className="hill hill-back" />
          <div className="hill hill-front" />
          <div className="tree-trunk" />
          <div className="tree-canopy canopy-one" />
          <div className="tree-canopy canopy-two" />
          <div className="tree-canopy canopy-three" />
          <span className="art-caption">Rooted in community <span>·</span> Growing together</span>
        </div>
        <div className="hero-index"><span>01</span> / A different kind of growth</div>
      </section>

      <section className="intro" id="approach" aria-labelledby="intro-title">
        <div className="section-label"><span>Our belief</span><span>01 — 03</span></div>
        <div className="intro-content">
          <h2 id="intro-title">Progress isn&apos;t a quick return. It&apos;s a <span>shared commitment.</span></h2>
          <p>We believe the best outcomes come from trust, time, and working side by side. GN Fund exists to help communities turn bold ideas into meaningful, enduring change.</p>
        </div>
      </section>

      <section className="focus" id="focus" aria-labelledby="focus-title">
        <div className="focus-heading">
          <div><p className="eyebrow">Where we begin</p><h2 id="focus-title">What we stand behind.</h2></div>
          <p>We stay curious about what works, and committed to the people making it happen.</p>
        </div>
        <div className="focus-list">
          {focusAreas.map((area) => (
            <article className="focus-item" key={area.number}>
              <span className="focus-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.detail}</p>
              <span className="focus-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home"><span className="mark" aria-hidden="true">G</span><span>GN<span className="wordmark-light">Fund</span></span></a>
        <p>Rooted in people. Focused on possibility.</p>
        <a href="mailto:hello@gnffund.org">hello@gnffund.org <span aria-hidden="true">↗</span></a>
        <span className="copyright">© {new Date().getFullYear()} GN Fund</span>
      </footer>
    </main>
  )
}
