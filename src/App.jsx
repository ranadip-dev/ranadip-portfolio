import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Profile from './sections/Profile'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Profile />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App