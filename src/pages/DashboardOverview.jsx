import {
  FaFolder,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const DashboardOverview = () => {
  const { user } = useAuth();

  const stats = [
    {
      name: 'Total Projects',
      value: '12',
      change: '+2',
      changeType: 'increase',
      icon: FaFolder,
      color: 'blue',
    },
    {
      name: 'Active Users',
      value: '2,456',
      change: '+12%',
      changeType: 'increase',
      icon: FaUsers,
      color: 'green',
    },
    {
      name: 'Conversion Rate',
      value: '3.24%',
      change: '-0.5%',
      changeType: 'decrease',
      icon: FaChartLine,
      color: 'purple',
    },
    {
      name: 'Tasks Completed',
      value: '89',
      change: '+23',
      changeType: 'increase',
      icon: FaCheckCircle,
      color: 'orange',
    },
  ];

  const recentActivity = [
    { id: 1, action: 'Project created', project: 'Website Redesign', time: '2 hours ago' },
    { id: 2, action: 'Task completed', project: 'Mobile App', time: '4 hours ago' },
    { id: 3, action: 'Team member added', project: 'E-commerce Store', time: '6 hours ago' },
    { id: 4, action: 'Milestone reached', project: 'API Integration', time: '1 day ago' },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div>
      {/* Welcome section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[stat.color]}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div
                className={`flex items-center text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.changeType === 'increase' ? (
                  <FaArrowUp className="w-3 h-3 mr-1" />
                ) : (
                  <FaArrowDown className="w-3 h-3 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.project}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm">
            View all activity →
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
              Create New Project
            </button>
            <button className="w-full p-4 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Invite Team Member
            </button>
            <button className="w-full p-4 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Generate Report
            </button>
            <button className="w-full p-4 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              View Analytics
            </button>
          </div>

          {/* Plan info */}
          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Current Plan</p>
            <p className="font-semibold text-gray-900 capitalize">{user?.plan} Plan</p>
            {user?.plan === 'free' && (
              <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                Upgrade for more features →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
