import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import './index.css'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'
import Education from './components/Education'
import Blogs from './components/Blogs'
import Github from './components/Github'
import Skills from './components/Skills'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#4a4a4a_100%)]"></div>
      </div>  
      <div className='container mx-auto px-4 md:px-10'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <About/>
              <Skills/>
              <Education/>
              <Technologies/>
              <Projects/>
              <Github/>
              {/* <Blogs/> */}
              <Contact/>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
        </Routes>
        <Footer/>
        <Analytics/>
      </div>
    </div>
  )
}

export default App