function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-copy">
          <p className="hero-eyebrow">FRONT-END · FULL-STACK DEVELOPMENT</p>

          <h1>
            Hi, I'm <span>Ranadip Das</span>
          </h1>

          <h2>
            I build clean, practical web experiences.
          </h2>

          <p className="hero-description">
            Developer focused on responsive interfaces and complete web
            applications using React, JavaScript, PHP and MySQL.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button hero-primary">
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/ranadip-das-a39998234/"
              target="_blank"
              rel="noreferrer"
              className="button hero-secondary"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/ranadip-dev"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              GitHub ↗
            </a>

            <a
              href="/Ranadip_Das_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img
              src="/ranadip-profile.png"
              alt="Ranadip Das"
              className="hero-photo"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero