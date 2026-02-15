import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Leadership from './components/Leadership/Leadership'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
