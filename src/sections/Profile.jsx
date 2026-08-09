function Profile() {
  return (
    <section className="profile" id="about">
      <div className="container">
        <div className="profile-heading">
          <p className="section-label">01 / Developer Profile</p>

          <h2>
            Building toward the frontend,
            <span> with full-stack understanding.</span>
          </h2>
        </div>

        <div className="profile-grid">
          <div className="profile-story">
            <p>
              I'm an MCA student focused on becoming a professional frontend
              developer, with hands-on experience building complete web
              applications using HTML, CSS, JavaScript, PHP, and MySQL.
            </p>

            <p>
              My development experience goes beyond interface design. Building
              full-stack projects has given me practical exposure to
              authentication, session management, relational databases,
              backend logic, and administrative workflows.
            </p>

            <p>
              Before focusing seriously on software development, I worked in
              market research and international client communication. That
              experience strengthened how I approach requirements, research,
              problem solving, planning, and communication.
            </p>
          </div>

          <div className="profile-details">
            <div className="profile-detail">
              <span>Focus</span>
              <strong>Frontend Development</strong>
              <p>Responsive, structured and user-focused interfaces.</p>
            </div>

            <div className="profile-detail">
              <span>Full-Stack Experience</span>
              <strong>PHP + MySQL</strong>
              <p>Authentication, application logic and relational data.</p>
            </div>

            <div className="profile-detail">
              <span>Currently</span>
              <strong>React + MCA</strong>
              <p>Expanding modern frontend and software engineering skills.</p>
            </div>

            <div className="profile-detail">
              <span>Approach</span>
              <strong>Build → Test → Improve</strong>
              <p>Understand the problem, implement carefully and refine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile