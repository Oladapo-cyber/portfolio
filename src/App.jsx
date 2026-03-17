import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const whatsappHref =
    "https://wa.me/2348133437231?text=Hi%20Yinusa%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

      {/* Floating WhatsApp CTA */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Yinusa on WhatsApp"
        className="group fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba57] hover:scale-110 transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/70 whatsapp-float-pulse"
      >
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
      </a>
    </div>
  );
};

export default App;
