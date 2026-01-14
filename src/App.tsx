import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import WhyLoveUs from './components/WhyLoveUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MenuHighlights />
      <Testimonials />
      <WhyLoveUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
