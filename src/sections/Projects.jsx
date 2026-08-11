const projects = [
  {
    id: "uraan",
    badge: "FULL-STACK",
    title: "Uraan Travel Agency",
    type: "Full-Stack Booking Platform",
    description:
      "End-to-end travel booking platform connecting customer booking workflows with role-based administrative operations.",
    stack: ["PHP", "MySQL", "JavaScript", "PDO"],
    image: "/uraan-home.jpg",
    liveUrl: "YOUR_LIVE_DEMO_URL",
    githubUrl: "YOUR_GITHUB_REPO_URL",
    caseStudyUrl: "#uraan-case-study",
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-label">PROJECTS</p>
            <h2>Selected work.</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
              </div>

              <div className="project-content">

                <div className="project-top">
                  <span className="project-badge">
                    {project.badge}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a href={project.caseStudyUrl}>
                    Case Study →
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects