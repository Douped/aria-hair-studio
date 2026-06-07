import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Stylists from './components/sections/Stylists'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

// Single-page scrolling site wrapped in the shared layout (sticky navbar
// + footer). Each section is fleshed out in steps 5–11.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Stylists />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
