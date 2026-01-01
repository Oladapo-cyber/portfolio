import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaServer, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const SkillCard = ({ skill, level, icon: Icon, index }) => {
  return (
    <div
      className="group relative bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors mr-3">
            <Icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
            {skill}
          </span>
        </div>
        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
          {level}%
        </span>
      </div>

      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out transform origin-left"
            style={{
              width: `${level}%`,
              animation: `skillProgress 1.5s ease-out ${index * 0.1}s both`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    { skill: "JavaScript", level: 90, icon: SiJavascript },
    { skill: "React", level: 85, icon: SiReact },
    { skill: "Node.js", level: 80, icon: SiNodedotjs },
    { skill: "MongoDB", level: 75, icon: SiMongodb },
    { skill: "Express.js", level: 80, icon: SiExpress },
    { skill: "Tailwind CSS", level: 85, icon: SiTailwindcss },
    { skill: "Git", level: 75, icon: SiGit },
    { skill: "RESTful APIs", level: 80, icon: FaServer },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
            <FaCode className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, expertise, and what drives my
            passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-blue-600">
                    Software Developer
                  </span>{" "}
                  with expertise in creating efficient, scalable web
                  applications. My journey in web development started 3 years
                  ago, and since then, I've been constantly learning and
                  adapting to new technologies.
                </p>
                <p>
                  I specialize in building full-stack applications using
                  <span className="font-semibold text-purple-600">
                    {" "}
                    MongoDB, Express.js, React, and Node.js
                  </span>{" "}
                  also depending on client's requests or optimization, I use
                  some lowcode/nocode solutions. I enjoy the entire development
                  process, from planning and designing to deploying and
                  maintaining applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group text-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-blue-100 font-medium text-sm">
                  Projects Completed
                </div>
              </div>
              <div className="group text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-purple-100 font-medium text-sm">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-3">
                  <FaLightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Technical Skills
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="space-y-4">
              {skills.map((item, index) => (
                <SkillCard
                  key={index}
                  skill={item.skill}
                  level={item.level}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>

            {/* What I Bring */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <FaRocket className="w-6 h-6 mr-3 text-blue-400" />
                What I Bring to the Table
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Clean, maintainable code",
                  "Responsive design principles",
                  "API development and integration",
                  "Database design and optimization",
                  "Problem-solving mindset",
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
