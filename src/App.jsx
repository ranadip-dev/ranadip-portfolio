import LatticeBackground from "./components/LatticeBackground"
import "./App.css"

import Header from "./components/Header"
import Hero from "./sections/Hero"
import Profile from "./sections/Profile"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"

import UraanCaseStudy from "./projects/uraan/UraanCaseStudy"
import SchemaCraftCaseStudy from "./projects/schemacraft/SchemaCraftCaseStudy"

import Journey from "./components/Journey"
import Contact from "./components/Contact"

function App() {
  const path = window.location.pathname

  const isUraanCaseStudy =
    path === "/projects/uraan"

  const isSchemaCraftCaseStudy =
    path === "/projects/schemacraft"

  return (
    <div className="portfolio-app">

      <LatticeBackground />

      <div className="portfolio-content">

        {isUraanCaseStudy ? (
          <UraanCaseStudy />
        ) : isSchemaCraftCaseStudy ? (
          <SchemaCraftCaseStudy />
        ) : (
          <>
            <Header />
            <Hero />
            <Profile />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
          </>
        )}

      </div>

    </div>
  )
}

export default App