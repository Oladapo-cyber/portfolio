import projectsData from "../data/projects.json";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Project Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-gray-500 bg-gray-50">
          <div className="text-center">
            <FaCode className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <span className="font-medium">Project Preview</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2.5 px-4 rounded-lg transition-colors font-medium inline-flex items-center justify-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 px-4 rounded-lg transition-colors font-medium inline-flex items-center justify-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
            <FaCode className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, from responsive frontends to robust backend
            APIs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Oladapo-cyber/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:border-blue-300/50 text-gray-900 hover:text-blue-600 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button Content */}
            <div className="relative flex items-center">
              <FaGithub className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
              <span>View More on GitHub</span>
              <FaArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
