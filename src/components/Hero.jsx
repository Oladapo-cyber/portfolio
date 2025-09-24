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
    <section className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 flex items-center justify-center pt-5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Photo */}
        <div className="mb-8 mt-8 animate-fadeInUp">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-300 animate-float">
            <span className="text-white text-3xl font-bold">YO</span>
          </div>
        </div>

        {/* Animated Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp delay-200">
          <span className="text-gray-900">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            Yinusa Oladapo
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-8 animate-fadeInUp delay-300">
          MERN Stack Developer
        </h2>

        {/* Description */}
        <p className="text-2xl text-gray-700 font-semibold max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-400">
          I build modern, responsive web applications using React, Node.js,
          Express, and MongoDB. Passionate about creating user-friendly
          experiences and clean, maintainable code.
        </p>

        {/* Glass Morphism Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeInUp delay-500">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center">
              <FaEye className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View My Projects
            </div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-blue-600/50 rounded-2xl text-blue-600 font-medium shadow-xl hover:shadow-blue-500/25 hover:bg-blue-600/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center">
              <FaEnvelope className="mr-2 group-hover:bounce transition-transform duration-300" />
              Get In Touch
            </div>
          </button>
        </div>

        {/* Glass Resume Button */}
        <div className="flex justify-center mb-16 animate-fadeInUp delay-600">
          <a
            href="/Oladapo-Yinusa-Resume.pdf"
            download="Yinusa_Oladapo_Resume.pdf"
            className="group inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-white/30"
          >
            <FaDownload className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </a>
        </div>

        {/* Animated Social Icons */}
        <div className="flex justify-center space-x-6 animate-fadeInUp delay-700">
          <a
            href="https://github.com/oladapo-cyber/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/oladapo-yinusa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <FaLinkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="group w-12 h-12 bg-blue-400/90 backdrop-blur-sm hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/25"
          >
            <FaTwitter className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="mt-16 animate-fadeInUp delay-800">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2 animate-pulse">
              Scroll to explore
            </span>
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce hover:text-blue-600 transition-colors hover:scale-110 duration-300"
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
