import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa"

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-label">CONTACT</p>
            <h2>Let&apos;s build something meaningful.</h2>
          </div>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <div className="contact-connect">
            <p className="contact-kicker">LET&apos;S CONNECT</p>

            <h3>
              Have an opportunity, project or idea in mind?
            </h3>

            <p className="contact-copy">
              I&apos;m open to developer opportunities, collaborations and
              conversations around building useful web experiences.
            </p>

            <div className="contact-socials">

              <a
                href="mailto:ranadipdas75@gmail.com"
                className="contact-social"
              >
                <span className="contact-social-icon">
                  <FaEnvelope />
                </span>

                <span>
                  <small>Email</small>
                  <strong>ranadipdas75@gmail.com</strong>
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <span className="contact-social-icon">
                  <FaLinkedinIn />
                </span>

                <span>
                  <small>LinkedIn</small>
                  <strong>Connect with me ↗</strong>
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <span className="contact-social-icon">
                  <FaGithub />
                </span>

                <span>
                  <small>GitHub</small>
                  <strong>View my work ↗</strong>
                </span>
              </a>

              <a
                href="/Ranadip_Das_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <span className="contact-social-icon">
                  <FaDownload />
                </span>

                <span>
                  <small>Resume</small>
                  <strong>View resume ↗</strong>
                </span>
              </a>

            </div>
          </div>


          {/* RIGHT SIDE */}

          <div className="contact-form-card">

            <div className="contact-form-heading">
              <p>SEND A MESSAGE</p>
              <h3>Start a conversation.</h3>
            </div>

            <form className="contact-form">

              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              <button
                type="button"
                className="contact-submit"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>

            </form>

            <p className="contact-form-note">
              Message delivery will be connected later.
            </p>

          </div>

        </div>


        <footer className="portfolio-footer">
          <span>
            © 2026 Ranadip Das
          </span>

          <span className="footer-mark">
            RD.
          </span>
        </footer>

      </div>
    </section>
  )
}

export default Contact