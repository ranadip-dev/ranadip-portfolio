function UraanCaseStudy() {
  const highlights = [
    {
      number: "01",
      title: "Role-Based Access",
      description:
        "Protected user and administrator workflows using session-based authentication and authorization.",
    },
    {
      number: "02",
      title: "Booking Lifecycle",
      description:
        "Connected booking creation, customer tracking and cancellation with administrator-controlled status management.",
    },
    {
      number: "03",
      title: "Relational Data Layer",
      description:
        "Structured MySQL relationships across users, packages, bookings and enquiries with PHP/PDO.",
    },
    {
      number: "04",
      title: "Security by Design",
      description:
        "Prepared statements, password hashing, server-side validation, route protection and escaped dynamic output.",
    },
  ]

  return (
    <section className="uraan-case-study" id="uraan-case-study">
      <div className="uraan-container">

        {/* CASE STUDY HERO */}

        <div className="uraan-hero">
          <div className="uraan-hero-copy">
            <p className="uraan-label">
              FULL-STACK WEB APPLICATION
            </p>

            <h2>Uraan Travel Agency</h2>

            <p className="uraan-summary">
              A full-stack booking platform connecting customer travel
              experiences with secure, role-based administrative operations.
            </p>

            <div className="uraan-meta">
              <div>
                <span>ROLE</span>
                <strong>Full-Stack Developer</strong>
              </div>

              <div>
                <span>STACK</span>
                <strong>PHP · MySQL · JS · PDO</strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>2026</strong>
              </div>
            </div>

            <div className="uraan-actions">
              <a
                href="YOUR_LIVE_DEMO_URL"
                target="_blank"
                rel="noreferrer"
              >
                View Live ↗
              </a>

              <a
                href="YOUR_GITHUB_REPO_URL"
                target="_blank"
                rel="noreferrer"
              >
                Source Code ↗
              </a>
            </div>
          </div>

          <div className="uraan-hero-image">
            <img
              src="/uraan-home.png"
              alt="Uraan Travel Agency application"
            />
          </div>
        </div>


        {/* CHALLENGE */}

        <div className="uraan-block uraan-challenge">
          <span className="uraan-block-number">01</span>

          <div>
            <p className="uraan-block-label">CHALLENGE</p>

            <p className="uraan-challenge-copy">
              Building the interface was only part of the problem. The key
              challenge was connecting authentication, package discovery,
              bookings, customer accounts, enquiries and administrative
              actions into one consistent application workflow.
            </p>
          </div>
        </div>


        {/* CONNECTED WORKFLOWS */}

        <div className="uraan-block">
          <div className="uraan-block-heading">
            <div>
              <span className="uraan-block-number">02</span>
              <p className="uraan-block-label">CONNECTED WORKFLOWS</p>
            </div>

            <h3>One platform. Two coordinated experiences.</h3>
          </div>

          <div className="workflow-grid">

            <div className="workflow">
              <span>CUSTOMER</span>

              <div className="workflow-steps">
                <strong>Discover</strong>
                <i>→</i>
                <strong>Package Details</strong>
                <i>→</i>
                <strong>Authenticate</strong>
                <i>→</i>
                <strong>Book</strong>
                <i>→</i>
                <strong>Track / Cancel</strong>
              </div>
            </div>

            <div className="workflow">
              <span>ADMIN</span>

              <div className="workflow-steps">
                <strong>Authenticate</strong>
                <i>→</i>
                <strong>Dashboard</strong>
                <i>→</i>
                <strong>Review Booking</strong>
                <i>→</i>
                <strong>Update Status</strong>
                <i>→</i>
                <strong>Customer Update</strong>
              </div>
            </div>

          </div>

          <p className="workflow-note">
            Both workflows operate on the same relational data layer, keeping
            customer actions and administrative operations synchronized.
          </p>
        </div>


        {/* ENGINEERING HIGHLIGHTS */}

        <div className="uraan-block">
          <div className="uraan-block-heading">
            <div>
              <span className="uraan-block-number">03</span>
              <p className="uraan-block-label">ENGINEERING HIGHLIGHTS</p>
            </div>

            <h3>What makes the application work.</h3>
          </div>

          <div className="uraan-highlights">
            {highlights.map((highlight) => (
              <article
                className="uraan-highlight"
                key={highlight.number}
              >
                <span>{highlight.number}</span>

                <h4>{highlight.title}</h4>

                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>


        {/* PRODUCT IN ACTION */}

        <div className="uraan-block">
          <div className="uraan-block-heading">
            <div>
              <span className="uraan-block-number">04</span>
              <p className="uraan-block-label">PRODUCT IN ACTION</p>
            </div>

            <h3>Three views of the connected product.</h3>
          </div>

          <div className="uraan-product-grid">

            <article className="uraan-product">
              <div className="uraan-product-image">
                <img
                  src="/manage-user.png"
                  alt="Uraan customer booking experience"
                />
              </div>

              <h4>Customer Experience</h4>

              <p>
                Package discovery and booking flow designed around a clear
                path from exploration to reservation.
              </p>
            </article>

            <article className="uraan-product">
              <div className="uraan-product-image">
                <img
                  src="/uraan-user-dashboard.png"
                  alt="Uraan user dashboard"
                />
              </div>

              <h4>User Workspace</h4>

              <p>
                Centralized account experience for booking status,
                cancellations and profile management.
              </p>
            </article>

            <article className="uraan-product">
              <div className="uraan-product-image">
                <img
                  src="/admin-dashboard.png"
                  alt="Uraan administration dashboard"
                />
              </div>

              <h4>Operations Dashboard</h4>

              <p>
                Administrative workflow for reviewing customer and package
                data and controlling the booking lifecycle.
              </p>
            </article>

          </div>
        </div>


        {/* UNDER THE HOOD */}

        <div className="uraan-block">
          <div className="uraan-block-heading">
            <div>
              <span className="uraan-block-number">05</span>
              <p className="uraan-block-label">UNDER THE HOOD</p>
            </div>

            <h3>Simple, connected application architecture.</h3>
          </div>

          <div className="uraan-architecture">

            <div>
              <span>CLIENT</span>
              <strong>HTML · CSS · JavaScript</strong>
            </div>

            <i>→</i>

            <div>
              <span>APPLICATION</span>
              <strong>PHP · Sessions · Role Authorization</strong>
            </div>

            <i>→</i>

            <div>
              <span>DATA ACCESS</span>
              <strong>PDO · Prepared Statements</strong>
            </div>

            <i>→</i>

            <div>
              <span>DATABASE</span>
              <strong>MySQL</strong>
            </div>

          </div>

          <p className="uraan-architecture-note">
            Server-rendered PHP architecture with session-based authentication
            and PDO-backed relational data operations.
          </p>
        </div>


        {/* ENGINEERING DECISION */}

        <div className="uraan-block uraan-decision">
          <div>
            <span className="uraan-block-number">06</span>
            <p className="uraan-block-label">ENGINEERING DECISION</p>
          </div>

          <div className="uraan-decision-content">
            <h3>Booking ownership is enforced server-side.</h3>

            <p>
              User booking operations are scoped to the authenticated user ID,
              while administrative status controls are restricted to
              authenticated admin routes.
            </p>

            <code>
              WHERE id = :id AND user_id = :user_id AND booking_status = 'Pending'
            </code>
          </div>
        </div>


        {/* OUTCOME + CTA */}

        <div className="uraan-outcome">

          <div>
            <span className="uraan-block-number">07</span>
            <p className="uraan-block-label">OUTCOME</p>

            <p>
              Delivered a complete customer-to-admin booking workflow where
              authentication, bookings, account operations, enquiries and
              administrative controls operate through a shared relational
              backend.
            </p>
          </div>

          <div className="uraan-final-cta">
            <span>EXPLORE THE PROJECT</span>

            <h3>Want to see how it works under the hood?</h3>

            <div>
              <a
                href="YOUR_LIVE_DEMO_URL"
                target="_blank"
                rel="noreferrer"
              >
                Live Application ↗
              </a>

              <a
                href="YOUR_GITHUB_REPO_URL"
                target="_blank"
                rel="noreferrer"
              >
                View Source on GitHub ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default UraanCaseStudy