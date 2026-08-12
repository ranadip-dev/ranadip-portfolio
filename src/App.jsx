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
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Profile />
        <Skills />
        <Projects />
        <UraanCaseStudy />
        <Journey />
        <Contact />
      </main>
    </>
  )
}

export default App