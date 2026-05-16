import { useState, useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Sections/Hero";
import MarqueeStrip from "./components/Sections/MarqueeStrip";
import Categories from "./components/Sections/Categories";
import BridalCollection from "./components/Sections/BridalCollection";
import WholesaleForm from "./components/Sections/WholesaleForm";
import About from "./components/Sections/About";
import Testimonials from "./components/Sections/Testimonials";
import Contact from "./components/Sections/Contact";
import WhatsAppFloat from "./components/Common/WhatsAppFloat";

/**
 * Root App Component
 * Composes all page sections and handles scroll tracking for navbar
 */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Navbar scrolled={scrolled} />
      <Hero />
      <MarqueeStrip />
      <Categories />
      <BridalCollection />
      <WholesaleForm />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
