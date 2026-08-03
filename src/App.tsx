import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar/navbar";
import Background from "./components/background/Background";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Skills from "./components/Skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AIChat from "./components/AIChat/AIChat";
import Spotlight from "./components/Spotlight/Spotlight";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import Loader from "./components/Loader/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <MouseGlow />

      <Background />

      <Spotlight />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Certificates />

      <Education />

      <Contact />

      <Footer />
      <AIChat />
      <BackToTop />
      

    </motion.div>

  );

}

export default App;