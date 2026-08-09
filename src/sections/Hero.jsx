function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow"> Hello, I'm</p>
                    <h1>Ranadip Das</h1>
                    <h2>Front-End Developer
                        <span> with full-stack development intent</span>
                    </h2>

                    <p className="hero-description">
                        I build responsive web interfaces and practical applications,
                        combining frontend development with hands-on experience in PHP,
                        MySQL, authentication, and database-driven systems.
                    </p>

                    <div className="hero-action">
                        <a href="#projects" className="button hero-primary">
                            View Selected Work
                        </a>
                        <a href="https://github.com/ranadip-dev" className="hero-link" target="_blank" rel="noreferrer">Github</a>
                        <a href="/Ranadip_Das_Resume.pdf" className="hero-link">Resume</a>
                    </div>
                </div>

                <div
                    className="hero-system"
                    role="img"
                    aria-label="Development system showing interface, application logic, authentication, and database layers"
                    >
                    <p className="system-label">Development System</p>

                    <div className="system-flow">
                        <div className="system-item">
                            <span>01</span>
                            <strong>Interface</strong>
                            <small>Responsive UI</small>
                        </div>

                        <div className="system-line"></div>

                        <div className="system-item">
                            <span>02</span>
                            <strong>Application</strong>
                            <small>Logic & Interaction</small>
                        </div>

                        <div className="system-line"></div>

                        <div className="system-item">
                            <span>03</span>
                            <strong>Authentication</strong>
                            <small>Users & Sessions</small>
                        </div>

                        <div className="system-line"></div>
                        <div className="system-item">
                            <span>04</span>
                            <strong>Database</strong>
                            <small>Structured Data</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero