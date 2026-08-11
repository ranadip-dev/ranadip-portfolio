function UraanCaseStudy() {
  return (
    <section className="case-study" id="project-uraan">
      <div className="container">
        <div className="case-study-heading">
          <p className="section-label">Project Case Study / 01</p>

          <h2>
            Uraan Travel Agency
            <span> — Full-Stack Travel Booking System</span>
          </h2>

          <p>
            A full-stack web application designed to manage travel package
            discovery, customer bookings, authenticated user accounts, and
            administrative operations through a PHP and MySQL backend.
          </p>
        </div>

        <div className="case-study-grid">
            
          <article className="case-study-block">
            <span>01</span>
            <h3>Project Purpose</h3>

            <p>
              The project was built to create a structured travel booking
              workflow where users can explore available packages, submit
              bookings, manage their account, and review booking information
              through a dedicated dashboard.
            </p>
          </article>

          <article className="case-study-block">
            <span>02</span>
            <h3>My Role</h3>

            <p>
              I developed the application across the frontend, backend, and
              database layers, including interface development, PHP logic,
              authentication, booking workflows, admin functionality, and
              relational MySQL data handling.
            </p>
          </article>

          <article className="case-study-block">
            <span>03</span>
            <h3>Frontend</h3>

            <p>
              HTML, CSS, and JavaScript were used to build the responsive user
              interface, package browsing experience, forms, dashboards, and
              interaction across the application.
            </p>
          </article>

          <article className="case-study-block">
            <span>04</span>
            <h3>Backend</h3>

            <p>
              PHP handles application logic such as authentication, session
              management, booking operations, profile management, admin
              controls, and database communication.
            </p>
          </article>

          <article className="case-study-block">
            <span>05</span>
            <h3>Database</h3>

            <p>
              MySQL stores structured application data including users,
              packages, bookings, and enquiries using relational database
              relationships and controlled data access.
            </p>
          </article>

          <article className="case-study-block">
            <span>06</span>
            <h3>Access Control</h3>

            <p>
              The application separates user and administrator functionality
              through authenticated sessions and role-based access checks.
            </p>
          </article>
        </div>

        <div className="case-study-flow">
  <div className="flow-column">
    <p className="section-label">User Flow</p>

    <div className="flow-steps">
      <div>
        <span>01</span>
        <strong>Browse Packages</strong>
        <p>Users explore available travel packages and package details.</p>
      </div>

      <div>
        <span>02</span>
        <strong>Select Package</strong>
        <p>A package is selected before entering the booking process.</p>
      </div>

      <div>
        <span>03</span>
        <strong>Booking</strong>
        <p>Travel date, number of persons, and booking information are submitted.</p>
      </div>

      <div>
        <span>04</span>
        <strong>Authentication</strong>
        <p>Registered users access protected account functionality through login and sessions.</p>
      </div>

      <div>
        <span>05</span>
        <strong>User Dashboard</strong>
        <p>Users can review bookings, manage profile information, and update their password.</p>
      </div>
    </div>
  </div>

  <div className="flow-column">
    <p className="section-label">Admin Flow</p>

    <div className="flow-steps">
      <div>
        <span>01</span>
        <strong>Admin Authentication</strong>
        <p>Role checks protect administrative pages from normal user access.</p>
      </div>

      <div>
        <span>02</span>
        <strong>Dashboard Overview</strong>
        <p>Admin users can review application-level counts and operational information.</p>
      </div>

      <div>
        <span>03</span>
        <strong>Package Management</strong>
        <p>Travel packages can be managed through the administrative interface.</p>
      </div>

      <div>
        <span>04</span>
        <strong>Booking Management</strong>
        <p>Bookings can be reviewed and their status updated.</p>
      </div>

      <div>
        <span>05</span>
        <strong>Enquiry Management</strong>
        <p>Customer enquiries submitted through the contact flow can be reviewed by the admin.</p>
      </div>
    </div>
  </div>
</div>

<div className="case-study-challenges">
  <div className="challenges-heading">
    <p className="section-label">Technical Challenges</p>

    <h3>Problems I had to diagnose and solve.</h3>

    <p>
      Building the application involved debugging database relationships,
      authentication flows, backend errors, and data mismatches across
      multiple pages.
    </p>
  </div>

  <div className="challenge-list">
    <article className="challenge-item">
      <span>01</span>

      <div>
        <h4>Database Connection & Environment Issues</h4>

        <p className="challenge-problem">
          Local MySQL and MariaDB configuration caused connection and
          authentication errors during development.
        </p>

        <p className="challenge-solution">
          I standardized the database configuration, verified the connection
          independently, and aligned the application with the correct database
          credentials and environment.
        </p>
      </div>
    </article>

    <article className="challenge-item">
      <span>02</span>

      <div>
        <h4>Booking Database Relationships</h4>

        <p className="challenge-problem">
          Foreign-key and column mismatches caused booking-related database
          errors while connecting users, packages, and bookings.
        </p>

        <p className="challenge-solution">
          I corrected the relational structure and aligned the queries with
          the actual package and booking schema.
        </p>
      </div>
    </article>

    <article className="challenge-item">
      <span>03</span>

      <div>
        <h4>Authentication & Role Protection</h4>

        <p className="challenge-problem">
          User and administrator areas needed to remain separated and protected
          from unauthorized access.
        </p>

        <p className="challenge-solution">
          I implemented session-based authentication and role checks so user
          and admin pages redirect appropriately when access is not permitted.
        </p>
      </div>
    </article>

    <article className="challenge-item">
      <span>04</span>

      <div>
        <h4>Secure Database Operations</h4>

        <p className="challenge-problem">
          Direct SQL handling created avoidable security and maintainability
          risks.
        </p>

        <p className="challenge-solution">
          I moved database operations toward prepared statements and structured
          backend logic to handle user-controlled data more safely.
        </p>
      </div>
    </article>
  </div>
</div>
      </div>
    </section>
  )
}

export default UraanCaseStudy