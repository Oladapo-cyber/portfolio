import { useState } from 'react';
import { FaPlus, FaFolder, FaEllipsisV, FaSearch, FaClock, FaUsers } from 'react-icons/fa';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of the company website with modern design',
      status: 'In Progress',
      progress: 65,
      team: 4,
      dueDate: 'Jan 15, 2024',
    },
    {
      id: 2,
      name: 'Mobile App v2',
      description: 'Second version of the mobile application with new features',
      status: 'Planning',
      progress: 20,
      team: 3,
      dueDate: 'Feb 28, 2024',
    },
    {
      id: 3,
      name: 'API Integration',
      description: 'Integration with third-party services and APIs',
      status: 'Completed',
      progress: 100,
      team: 2,
      dueDate: 'Dec 20, 2023',
    },
    {
      id: 4,
      name: 'E-commerce Platform',
      description: 'Building a new e-commerce platform for the client',
      status: 'In Progress',
      progress: 45,
      team: 5,
      dueDate: 'Mar 10, 2024',
    },
  ];

  const statusColors = {
    'In Progress': 'bg-blue-100 text-blue-700',
    'Planning': 'bg-yellow-100 text-yellow-700',
    'Completed': 'bg-green-100 text-green-700',
    'On Hold': 'bg-gray-100 text-gray-700',
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">
            Manage and track all your projects in one place.
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
          <FaPlus className="mr-2" />
          New Project
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <FaFolder className="w-6 h-6 text-blue-600" />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                <FaEllipsisV className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  statusColors[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    project.progress === 100
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <FaUsers className="mr-1" />
                <span>{project.team} members</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FaClock className="mr-1" />
                <span>{project.dueDate}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Add project card */}
        <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[280px] hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 group">
          <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
            <FaPlus className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <p className="font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
            Create New Project
          </p>
        </button>
      </div>
    </div>
  );
};

export default Projects;
