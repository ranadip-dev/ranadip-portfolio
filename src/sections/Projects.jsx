function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-heading">
          <p className="section-label">03 / Selected Work</p>

          <h2>
            Projects built to solve real problems,
            <span> not just fill a portfolio.</span>
          </h2>
        </div>

        <article className="featured-project">
          <div className="project-content">
            <div className="project-meta">
              <span>01</span>
              <p>Full-Stack Web Application</p>
            </div>

            <h3>Uraan Travel Agency</h3>

            <p className="project-description">
              A complete travel booking application designed around package
              discovery, customer bookings, secure authentication, user
              account management, and administrative workflows.
            </p>

            <div className="project-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>

            <div className="project-capabilities">
              <div>
                <span>01</span>
                <p>User Authentication</p>
              </div>

              <div>
                <span>02</span>
                <p>Booking Workflow</p>
              </div>

              <div>
                <span>03</span>
                <p>Role-Based Dashboards</p>
              </div>

              <div>
                <span>04</span>
                <p>Relational Database</p>
              </div>
            </div>

            <div className="project-actions">
              <a className="button hero-primary" href="#project-uraan">
                Explore Case Study
              </a>

              <a className="hero-link" href="#project-github">
                GitHub
              </a>
            </div>
          </div>

          <div className="project-visual">
            <div className="project-placeholder">
              <span>Project Preview</span>
              <strong>Uraan Travel Agency</strong>
              <p>Application screenshot will be added here.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects