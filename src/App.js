
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ProjectPage from './components/ProjectPage/ProjectPage'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
 
// A project page lives at an address like #/project/social-media-website
const getProjectSlug = () => {
  const match = window.location.hash.match(/^#\/project\/(.+)$/)
  return match ? decodeURIComponent(match[1]) : null
}
 
const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [projectSlug, setProjectSlug] = useState(getProjectSlug)
 
  // switch pages whenever the address changes (card clicks, back button)
  useEffect(() => {
    const handleHashChange = () => setProjectSlug(getProjectSlug())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
 
  // project page: start at the top
  // home page: jump to the section in the address, e.g. #projects
  useEffect(() => {
    if (projectSlug) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
 
    const sectionId = window.location.hash.slice(1)
    const section = sectionId && document.getElementById(sectionId)
    if (section) section.scrollIntoView()
  }, [projectSlug])
 
  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
 
      <main>
        {projectSlug ? (
          <ProjectPage slug={projectSlug} />
        ) : (
          <>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </>
        )}
      </main>
 
      <ScrollToTop />
      <Footer />
    </div>
  )
}
 
export default App
