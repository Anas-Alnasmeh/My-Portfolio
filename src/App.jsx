import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
// import Certificates from "./sections/Certificates";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Give the loading sequence a minimum, intentional duration rather than
    // tying it to real asset load — this is a small static site, so a fixed
    // beat feels more designed than a flash of a spinner.
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Loader visible={loading} />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        {/* <Certificates /> */}
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
