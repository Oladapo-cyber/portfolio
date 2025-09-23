import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const SkillCard = ({ skill, level, icon: Icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-2 text-blue-600" />
          <span className="font-medium text-gray-900">{skill}</span>
        </div>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${level}%` }}
        ></div>
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">
            Get to know more about my background and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  My Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a passionate Software Developer, with a love for expertise
                  in creating efficient, scalable web applications. My journey
                  in web development started 3 years ago, and since then, I've
                  been constantly learning and adapting to new technologies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I specialize in building full-stack applications using
                  MongoDB, Express.js, React, and Node.js also depending on
                  client's requests or optimization, I use some lowcode/nocode
                  solutions. I enjoy the entire development process, from
                  planning and designing to deploying and maintaining
                  applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((item, index) => (
                <SkillCard
                  key={index}
                  skill={item.skill}
                  level={item.level}
                  icon={item.icon}
                />
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What I Bring to the Table
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clean, maintainable code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Responsive design principles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  API development and integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Database design and optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Problem-solving mindset
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
