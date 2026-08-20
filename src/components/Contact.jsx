import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa"

function Contact() {
  const formRef = useRef(null)

  const [status, setStatus] = useState("idle")

  const sendEmail = async (event) => {
    event.preventDefault()

    if (!formRef.current || status === "sending") return

    setStatus("sending")

    try {
      await emailjs.sendForm(
        "service_0wlss6t",
        "template_sl1jk4e",
        formRef.current,
        {
          publicKey: "prmY0342ggnVHl8Tn",
        }
      )

      setStatus("success")
      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-label">CONTACT</p>
            <h2>Get in Touch.</h2>
          </div>
        </div>

        <div className="contact-grid">


          <div className="contact-connect">
            <p className="contact-kicker">LET'S CONNECT</p>

            <h3>
              Have a role, project or collaboration in mind?
            </h3>

            <p className="contact-copy">
              I'm open to front-end opportunities and collaborations where I can contribute to practical, well-built web products.
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
                href="https://www.linkedin.com/in/ranadip-das-dev/"
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
                href="https://github.com/ranadip-dev"
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
                  <strong>Download resume</strong>
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

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={sendEmail}
            >

              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Your name" required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  placeholder="you@example.com" required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about the opportunity or project..." required
                />
              </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              <span>
                {status === "sending" ? "Sending..." : "Send Message"}
              </span>

              <FaPaperPlane />
            </button>

            </form>

          <p
            className={`contact-form-note ${
              status === "success"
                ? "success"
                : status === "error"
                  ? "error"
                  : ""
            }`}

            role="status"
            aria-live="polite"
          >
            {status === "success"
              ? "Your Message sent successfully.. I'll get back to you soon."
              : status === "error"
                ? "Something went wrong. Please try again or email me directly."
                : "I'll get back to you soon."}
          </p>

          </div>

        </div>


        <footer className="portfolio-footer">
          <span>
            © 2026 - All Rights Reserved.
          </span>

          <span>Thank You!</span>

          <span className="footer-mark">
            Ranadip Das
          </span>
        </footer>

      </div>
    </section>
  )
}

export default Contact