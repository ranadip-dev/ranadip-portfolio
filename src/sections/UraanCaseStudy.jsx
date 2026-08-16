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
      "Booking, customer accounts and administrative operations in one connected workflow.",
  },
  {
    label: "ENGINEERING",
    value:
      "Role-based access, sessions, PDO, prepared statements and server-side validation.",
  },
  {
    label: "DATA",
    value:
      "Users, packages, bookings and enquiries connected through a relational MySQL backend.",
  },
]

const productViews = [
  {
    id: 1,
    label: "Customer Experience",
    flow: "Discover → Package → Book",
    image: "/uraan-home2.png",
  },
    {
    id: 2,
    label: "Package List",
    flow: "Package → Book",
    image: "/package-list.png",
  },

  {
    id: 3,
    label: "User Workspace",
    flow: "Bookings → Status → Cancel",
    image: "/uraan-user-dashboard.png",
  },
  {
    id: 4,
    label: "Admin Operations",
    flow: "Review → Update → Control",
    image: "/admin-dashboard.png",
  },
]

function UraanCaseStudy() {
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

    <section className="uraan-case-study">
      <div className="uraan-container">


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
              href="https://uraan-travel-agency.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </a>

            <a
              href="https://github.com/ranadip-dev/Uraan_travel_agency"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

          </div>
        </nav>


        {/* HERO */}

        <section className="uraan-compact-hero">

          <div className="uraan-compact-copy">

            <span className="uraan-compact-label">
              FULL-STACK · 2026
            </span>

            <h1>Uraan Travel Agency</h1>

            <p>
              Full-stack travel booking platform with connected
              customer and administrative workflows.
            </p>

            <span className="uraan-compact-label">
              TECH STACK
            </span>

            <div className="uraan-compact-stack">
              
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>PDO</span>
            </div>

          </div>


          <div className="uraan-compact-preview">
            <img
              src="/uraan-home.png"
              alt="Uraan Travel Agency application preview"
            />
          </div>

        </section>


  

        <section className="uraan-core">

          <div className="uraan-mini-heading">
            <span>PROJECT CORE</span>
          </div>

          <div className="uraan-core-grid">

            {projectCore.map((item) => (
              <article
                className="uraan-core-card"
                key={item.label}
              >
                <span>{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}

          </div>

        </section>

        <section className="uraan-showcase">

          <div className="uraan-mini-heading">
            <span>PRODUCT IN ACTION</span>
          </div>

          <div className="uraan-showcase-frame">

            <div className="uraan-showcase-image">
              <img
                key={currentView.image}
                src={currentView.image}
                alt={`${currentView.label} screenshot`}
              />
            </div>


            <div className="uraan-showcase-caption">

              <div className="uraan-showcase-info">

                <span>
                  0{currentView.id} / 0{productViews.length}
                </span>

                <div>
                  <h3>{currentView.label}</h3>
                  <p>{currentView.flow}</p>
                </div>

              </div>


              <div className="uraan-showcase-controls">

                <button
                  type="button"
                  className="showcase-arrow"
                  onClick={showPrevious}
                  disabled={activeView === 0}
                  aria-label="Previous project view"
                >
                  ←
                </button>


                <div className="uraan-showcase-dots">

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

        <section className="uraan-engineering">

          <div className="uraan-mini-heading">
            <span>ENGINEERING PROOF</span>
          </div>

          <div className="uraan-engineering-grid">

            <article className="uraan-proof-card">

              <span className="uraan-proof-label">
                SERVER-SIDE OWNERSHIP
              </span>

              <h3>
                Booking access is enforced using the
                authenticated user ID.
              </h3>

              <code>
                WHERE id = :id
                <br />
                AND user_id = :user_id
                <br />
                AND booking_status = 'Pending'
              </code>

            </article>


            <article className="uraan-proof-card">

              <span className="uraan-proof-label">
                APPLICATION FLOW
              </span>

              <div className="uraan-flow-stack">

                <div>
                  <span>CLIENT</span>
                  <strong>
                    HTML · CSS · JavaScript
                  </strong>
                </div>

                <i>↓</i>

                <div>
                  <span>APPLICATION</span>
                  <strong>
                    PHP · Sessions · Roles
                  </strong>
                </div>

                <i>↓</i>

                <div>
                  <span>DATA ACCESS</span>
                  <strong>
                    PDO · Prepared Statements
                  </strong>
                </div>

                <i>↓</i>

                <div>
                  <span>DATABASE</span>
                  <strong>MySQL</strong>
                </div>

              </div>

            </article>

          </div>

        </section>

      </div>
    </section>
  )
}

export default UraanCaseStudy