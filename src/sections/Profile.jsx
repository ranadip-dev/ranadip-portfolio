function Profile() {
  return (
    <section className="profile" id="profile">
      <div className="profile-container">

        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>
            <h2>Front-end focused. Full-stack capable.</h2>
          </div>
        </div>

        <div className="profile-content">

          <div className="profile-intro">
            <p>
              I approach development from the complete application workflow, not just the interface.
            </p>

            <p>
              My front-end work is supported by hands-on backend experience with PHP and MySQL, helping me understand how interfaces connect with authentication, application logic and relational data.
            </p>
          </div>

          <div className="profile-details">

            <div className="profile-detail">
              <span>FOCUS</span>
              <strong>Front-End Development</strong>
            </div>

            <div className="profile-detail">
              <span>FULL-STACK EXPERIENCE</span>
              <strong>PHP · MySQL · Application Workflows</strong>
            </div>

            <div className="profile-detail">
              <span>CORE FRONT-END</span>
              <strong>HTML · CSS · JavaScript · React</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Profile