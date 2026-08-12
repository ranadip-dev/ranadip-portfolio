import { FaAward } from "react-icons/fa"
import { useState } from "react"

const journeyTabs = [
  {
    id: "experience",
    label: "Work Experience",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "certificates",
    label: "Certificates",
  },
]

const certificates = [
  {
    id: 1,
    title: "Industrial Training: Web Development Using PHP",
    issuer: "Ardent Computech Pvt. Ltd.",
    period: "Aug 2022 - Sep 2022",
    image: "/certificate-php.jpg",
    tags: ["PHP", "Web Development", "Industrial Training"],
  },
  {
    id: 2,
    title: "Certificate Title",
    issuer: "Issuing Organization",
    period: "Year",
    image: "/certificate-02.jpg",
    tags: ["Skill", "Technology"],
  },
  {
    id: 3,
    title: "Certificate Title",
    issuer: "Issuing Organization",
    period: "Year",
    image: "/certificate-03.jpg",
    tags: ["Skill", "Technology"],
  },
]

function Journey() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <section className="journey" id="journey">
      <div className="journey-container">

        <div className="section-heading">
          <span className="section-number">04</span>

          <div>
            <p className="section-label">JOURNEY</p>
            <h2>Experience, education & growth.</h2>
          </div>
        </div>

        <div className="journey-tabs">
          {journeyTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`journey-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>


        <div className="journey-panel">

        {activeTab === "experience" && (
            <div className="journey-content">

                <div className="journey-content-header">
                <div>
                    <span className="journey-content-label">
                    WORK EXPERIENCE
                    </span>

                    <h3>Market Research Executive</h3>

                    <p className="journey-organization">
                    Technowire Media & Technologies Pvt. Ltd.
                    </p>

                    <p className="journey-work-meta">
                    Kolkata, West Bengal
                    </p>
                </div>

                <span className="journey-date">
                    Jun 2023 — Jul 2025
                </span>
                </div>

                <p className="journey-description">
                Conducted cross-industry market research and managed B2B outreach
                from prospect identification through C-suite engagement, tailored
                proposals, commercial negotiation and deal closure.
                </p>

                <div className="journey-responsibilities">
                <span>RESPONSIBILITIES</span>

                <ul>
                    <li>
                    Analyzed company performance, market activity and industry
                    developments across Healthcare, MedTech, FinTech and Logistics.
                    </li>

                    <li>
                    Identified and qualified prospective companies based on business
                    relevance, innovation, growth and organizational achievements.
                    </li>

                    <li>
                    Engaged directly with C-level executives and decision-makers,
                    translating research insights into targeted business conversations.
                    </li>

                    <li>
                    Managed client requirements, service positioning, pricing
                    discussions and negotiations through the deal-confirmation stage.
                    </li>
                </ul>
                </div>

                <div className="journey-achievement">
                    <div className="achievement-icon">
                        <FaAward />
                    </div>

                    <div className="achievement-count">
                        04×
                    </div>

                    <div className="achievement-content">
                        <span>MAJOR ACHIEVEMENT</span>

                        <strong>Employee of the Month</strong>

                        <p>
                        Recognized four times for consistent deal confirmations,
                        performance and contribution to revenue generation.
                        </p>
                    </div>
                    </div>

                <div className="journey-skill-tags">
                <span>Market Research</span>
                <span>B2B Lead Generation</span>
                <span>C-Suite Communication</span>
                <span>Client Engagement</span>
                <span>Negotiation</span>
                <span>Deal Closure</span>
                </div>

            </div>
            )}


        {activeTab === "education" && (
            <div className="journey-content">

                <div className="education-item">
                <div>
                    <span className="journey-content-label">
                    CURRENT
                    </span>

                    <h3>Master of Computer Applications (MCA)</h3>

                    <p className="journey-organization">
                    Dr. B. C. Roy Engineering College, Durgapur
                    </p>
                </div>

                <div className="education-meta">
                    <span className="journey-date">
                    2025 — 2027
                    </span>

                    <strong>Pursuing</strong>
                </div>
                </div>


                <div className="education-item">
                <div>
                    <h3>Bachelor of Computer Applications (BCA)</h3>

                    <p className="journey-organization">
                    Eminent College of Management and Technology
                    </p>

                    <p className="education-board">
                    MAKAUT
                    </p>
                </div>

                <div className="education-meta">
                    <span className="journey-date">
                    2020 - 2023
                    </span>

                    <strong>CGPA 8.01</strong>
                </div>
                </div>


                <div className="education-item">
                <div>
                    <h3>Higher Secondary (12th)</h3>

                    <p className="journey-organization">
                    Mahata High School
                    </p>

                    <p className="education-board">
                    WBCHSE
                    </p>
                </div>

                <div className="education-meta">
                    <span className="journey-date">
                    2018 - 2020
                    </span>

                    <strong>82.2%</strong>
                </div>
                </div>

            </div>
            )}


          {activeTab === "certificates" && (
            <div className="journey-content">

                <div className="certificates-header">
                <span className="journey-content-label">
                    CERTIFICATIONS
                </span>

                <h3>Training & Credentials</h3>
                </div>

                <div className="certificates-grid">

                {certificates.map((certificate) => (
                    <article
                    className="certificate-card"
                    key={certificate.id}
                    >

                    <div className="certificate-image">
                        <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        />
                    </div>

                    <div className="certificate-content">

                        <span className="certificate-period">
                        {certificate.period}
                        </span>

                        <h4>{certificate.title}</h4>

                        <p>{certificate.issuer}</p>

                        <div className="certificate-tags">
                        {certificate.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                        </div>

                        <a
                        href={certificate.image}
                        target="_blank"
                        rel="noreferrer"
                        >
                        View Certificate ↗
                        </a>

                    </div>

                    </article>
                ))}

                </div>

            </div>
            )}

        </div>

      </div>
    </section>
  )
}

export default Journey