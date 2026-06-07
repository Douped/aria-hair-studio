import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Stylists from './components/sections/Stylists'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

// Single-page scrolling site. The shared layout (navbar + footer) is
// added in step 4; each section is fleshed out in steps 5–11.
function App() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Stylists />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}

export default App
