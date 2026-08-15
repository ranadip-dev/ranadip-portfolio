import LatticeBackground from "./components/LatticeBackground"
import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Profile from './sections/Profile'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import UraanCaseStudy from './sections/UraanCaseStudy'
import Journey from './components/Journey'
import Contact from './components/Contact'

function App() {
  const path = window.location.pathname

  const isUraanCaseStudy = path === "/projects/uraan"

  return (
    <div className="portfolio-app">

      <LatticeBackground />

      <div className="portfolio-content">

        {isUraanCaseStudy ? (
          <UraanCaseStudy />
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