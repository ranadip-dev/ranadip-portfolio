import { useState } from "react"

import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa"

const projectCore = [
  {
    label: "PRODUCT",
    value:
      "Visual database design, relationship modeling and SQL generation inside one interactive workspace.",
  },
  {
    label: "FRONTEND",
    value:
      "Custom React Flow nodes, draggable schema tables, dynamic state updates and column-level connections.",
  },
  {
    label: "LOGIC",
    value:
      "Primary-key validation, compatible foreign-key relationships, persistence and structured SQL generation.",
  },
]

const productViews = [
  {
    id: 1,
    label: "Visual Schema Workspace",
    flow: "Create → Configure → Connect",
    image: "/SchemaCraft_img/schemacraft-workspace.png",
  },
  {
    id: 2,
    label: "Column Relationships",
    flow: "Primary Key → Foreign Key → Validate",
    image: "/SchemaCraft_img/schemacraft-relationships.png",
  },
  {
    id: 3,
    label: "Generated SQL",
    flow: "Visual Schema → Validation → SQL",
    image: "/SchemaCraft_img/schemacraft-sql.png",
  },
]

function SchemaCraftCaseStudy() {
  const [activeView, setActiveView] = useState(0)

  const currentView = productViews[activeView]

  const showPrevious = () => {
    setActiveView((current) => Math.max(current - 1, 0))
  }

  const showNext = () => {
    setActiveView((current) =>
      Math.min(current + 1, productViews.length - 1)
    )
  }

  return (
    <section className="case-study">
      <div className="case-study-container">

        {/* NAVIGATION */}

        <nav
          className="case-study-nav"
          aria-label="Case study navigation"
        >
          <a
            href="/#projects"
            className="case-study-back"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </a>

          <div className="case-study-nav-links">

            <a
              href="https://schema-craft-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/ranadip-dev/SchemaCraft"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

          </div>
        </nav>


        {/* HERO */}

        <section className="case-study-hero">

          <div className="case-study-hero-copy">

            <span className="case-study-label">
              FRONTEND · 2026
            </span>

            <h1>SchemaCraft</h1>

            <p>
              Visual database schema designer for creating tables,
              modeling relationships and generating executable SQL
              through an interactive React workspace.
            </p>

            <span className="uraan-compact-label">
              TECH STACK
            </span>

            <div className="case-study-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>React Flow</span>
              <span>CSS</span>
              <span>Web APIs</span>
            </div>

          </div>


          <div className="case-study-preview">
            <img
              src="/SchemaCraft_img/schemacraft-workspace.png"
              alt="SchemaCraft visual database designer"
            />
          </div>

        </section>


        {/* PROJECT CORE */}

        <section className="case-study-core">

          <div className="case-study-mini-heading">
            <span>PROJECT CORE</span>
          </div>

          <div className="uraan-core-grid">

            {projectCore.map((item) => (
              <article
                className="case-study-core-card"
                key={item.label}
              >
                <span>{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}

          </div>

        </section>


        {/* PRODUCT IN ACTION */}

        <section className="case-study-showcase">

          <div className="case-study-mini-heading">
            <span>PRODUCT IN ACTION</span>
          </div>

          <div className="case-study-showcase-frame">

            <div className="case-study-showcase-image">
              <img
                key={currentView.image}
                src={currentView.image}
                alt={`${currentView.label} screenshot`}
              />
            </div>


            <div className="case-study-showcase-caption">

              <div className="case-study-showcase-info">

                <span>
                  0{currentView.id} / 0{productViews.length}
                </span>

                <div>
                  <h3>{currentView.label}</h3>
                  <p>{currentView.flow}</p>
                </div>

              </div>


              <div className="case-study-showcase-controls">

                <button
                  type="button"
                  className="showcase-arrow"
                  onClick={showPrevious}
                  disabled={activeView === 0}
                  aria-label="Previous project view"
                >
                  ←
                </button>


                <div className="case-study-showcase-dots">

                  {productViews.map((view, index) => (
                    <button
                      key={view.id}
                      type="button"
                      className={
                        index === activeView ? "active" : ""
                      }
                      onClick={() => setActiveView(index)}
                      aria-label={`Show ${view.label}`}
                    />
                  ))}

                </div>


                <button
                  type="button"
                  className="showcase-arrow"
                  onClick={showNext}
                  disabled={
                    activeView === productViews.length - 1
                  }
                  aria-label="Next project view"
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* ENGINEERING PROOF */}

        <section className="case-study-engineering">

          <div className="case-study-mini-heading">
            <span>ENGINEERING PROOF</span>
          </div>

          <div className="case-study-engineering-grid">

            <article className="case-study-proof-card">

              <span className="case-study-proof-label">
                RELATIONSHIP MODEL
              </span>

              <h3>
                Visual connections are stored as structured
                database relationships instead of UI-only lines.
              </h3>

              <code>
                sourceTableId
                <br />
                sourceColumnId
                <br />
                targetTableId
                <br />
                targetColumnId
              </code>

            </article>


            <article className="case-study-proof-card">

              <span className="case-study-proof-label">
                APPLICATION FLOW
              </span>

              <div className="case-study-flow-stack">

                <div>
                  <span>INTERFACE</span>
                  <strong>
                    React · React Flow
                  </strong>
                </div>

                <i>↓</i>

                <div>
                  <span>SCHEMA STATE</span>
                  <strong>
                    Tables · Columns · Keys
                  </strong>
                </div>

                <i>↓</i>

                <div>
                  <span>VALIDATION</span>
                  <strong>
                    Types · PK · Relationships
                  </strong>
                </div>

                <i>↓</i>

                <div>
                  <span>OUTPUT</span>
                  <strong>
                    Generated SQL
                  </strong>
                </div>

              </div>

            </article>

          </div>

        </section>

      </div>
    </section>
  )
}

export default SchemaCraftCaseStudy