import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Logos from './components/Logos';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Logos />
        <About />
        <Services />
        <Testimonials />
        <LeadMagnet />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
