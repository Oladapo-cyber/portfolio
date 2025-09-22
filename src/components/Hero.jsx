import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEye,
  FaEnvelope,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-tr from-white to-blue-100 flex items-center justify-center pt-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 mt-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">YO</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-gray-900">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Yinusa Oladapo
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-8">
          MERN Stack Developer
        </h2>

        {/* Description */}
        <p className="text-2xl text-gray-700 font-semibold max-w-3xl mx-auto mb-12 leading-relaxed">
          I build modern, responsive web applications using React, Node.js,
          Express, and MongoDB. Passionate about creating user-friendly
          experiences and clean, maintainable code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors transform hover:scale-105 inline-flex items-center justify-center"
          >
            <FaEye className="mr-2" />
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center mb-16">
          <a
            href="/Oladapo-Yinusa-Resume.pdf"
            download="Yinusa_Oladapo_Resume.pdf"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/oladapo-cyber/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/oladapo-yinusa/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce hover:text-blue-600 transition-colors"
            >
              <FaChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
