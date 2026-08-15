import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa"

const projects = [
  {
    id: "uraan",
    badge: "FULL-STACK",
    title: "Uraan Travel Agency",
    type: "Booking Platform",
    description:
      "End-to-end travel booking platform connecting customer workflows with role-based administrative operations.",
    stack: ["HTML", "CSS","PHP", "MySQL", "JavaScript", "PDO"],
    image: "/uraan-home.png",
    liveUrl: "https://uraan-travel-agency.vercel.app/",
    githubUrl: "https://github.com/ranadip-dev/Uraan_travel_agency.git",
    caseStudyUrl: "/projects/uraan",
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
            <article
              className="project-card-modern"
              key={project.id}
            >

              <div className="project-card-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />

                <div className="project-image-overlay">
                  <span>{project.badge}</span>
                </div>
              </div>


              <div className="project-card-body">

                <div className="project-card-heading">
                  <div>
                    <span className="project-card-type">
                      {project.type}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <span className="project-index">
                    01
                  </span>
                </div>


                <p className="project-card-description">
                  {project.description}
                </p>


                <div className="project-card-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>


                <div className="project-card-actions">

                  <div className="project-external-links">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>

                  </div>


                  <a
                    href={project.caseStudyUrl}
                    className="project-case-study"
                  >
                    <span>View Case Study</span>
                    <FaArrowRight />
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