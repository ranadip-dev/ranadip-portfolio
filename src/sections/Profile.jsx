function Profile() {
  return (
    <section className="profile" id="profile">
      <div className="profile-container">

        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>
            <h2>Developer with a practical approach.</h2>
          </div>
        </div>

        <div className="profile-content">

          <div className="profile-intro">
            <p>
              I'm a developer focused on building clean, responsive
              interfaces and practical full-stack web applications.
            </p>

            <p>
              My work combines front-end development with hands-on backend
              experience using PHP and MySQL, giving me an understanding of
              complete application workflows rather than isolated interfaces.
            </p>
          </div>

          <div className="profile-details">

            <div className="profile-detail">
              <span>FOCUS</span>
              <strong>Front-End Development</strong>
            </div>

            <div className="profile-detail">
              <span>ALSO BUILDING</span>
              <strong>Full-Stack Applications</strong>
            </div>

            <div className="profile-detail">
              <span>CORE STACK</span>
              <strong>React · JavaScript · PHP · MySQL</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Profile