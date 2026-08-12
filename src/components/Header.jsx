
import { useState } from "react"
function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }
    return (
        <header className="site-header">
            <div className="container">
                <nav className="navbar" aria-label="Main navigation">
                    <a href="#home" className="navbar-logo" aria-label="Ranadip Das - Home" onClick={closeMenu}>RD<span>.</span></a>

                    <div className="navbar-links">
                        <a href="#projects">Work</a>
                        <a href="#skills">Skills</a>
                        <a href="#about">Profile</a>
                        <a href="#journey">Journey</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="navbar-actions">
                        <a href="https://github.com/ranadip-dev" target="_blank" rel="noreferrer">
                        Github
                        </a>

                        <a href="/Ranadip_Das_Resume.pdf" className="button">
                            Resume
                        </a>
                    </div>

                    <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
                    type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>

                <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
                    <a href="#projects" onClick={closeMenu}>Work</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#about" onClick={closeMenu}>Profile</a>
                    <a href="#journey" onClick={closeMenu}>Journey</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>

                    <div className="mobile-menu-actions">
                        <a
                            href="https://github.com/ranadip-dev"
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMenu}>GitHub
                        </a>
                        <a href="/Ranadip_Das_Resume.pdf" className="button" onClick={closeMenu}>Resume</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header