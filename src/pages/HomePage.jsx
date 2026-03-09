import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Management from "../components/Management";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingTranslateButton from "../components/FloatingTranslateButton";
import FloatingCareerButton from "../components/FloatingCareerButton";
import Certifications from "../components/Certifications";
import Activite from "../components/Activite";

const HomePage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Management />
        <Experience />
        {/*     */}
        <Contact />
      </main>
      <Footer />
      <FloatingTranslateButton />
      <FloatingCareerButton />
    </div>
  );
};

export default HomePage;
