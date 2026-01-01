import { FaChartLine, FaEye, FaUsers, FaClock } from 'react-icons/fa';

const Analytics = () => {
  const metrics = [
    { name: 'Page Views', value: '45,678', icon: FaEye, trend: '+12.5%' },
    { name: 'Unique Visitors', value: '12,456', icon: FaUsers, trend: '+8.2%' },
    { name: 'Avg. Session Duration', value: '4m 32s', icon: FaClock, trend: '+3.1%' },
    { name: 'Bounce Rate', value: '34.2%', icon: FaChartLine, trend: '-2.4%' },
  ];

  const topPages = [
    { page: '/dashboard', views: 12456, percentage: 45 },
    { page: '/projects', views: 8234, percentage: 30 },
    { page: '/analytics', views: 4567, percentage: 17 },
    { page: '/settings', views: 2345, percentage: 8 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">
          Track your performance and understand your users.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <metric.icon className="w-6 h-6" />
              </div>
              <span
                className={`text-sm font-medium ${
                  metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <p className="text-sm text-gray-500">{metric.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart placeholder */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Traffic Overview</h2>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <p>Chart visualization</p>
              <p className="text-sm">Connect to see your data</p>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h2>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{page.page}</span>
                  <span className="text-sm text-gray-500">
                    {page.views.toLocaleString()} views
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${page.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic data placeholder */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Geographic Distribution</h2>
        <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="text-lg mb-2">🌍</p>
            <p>World map visualization</p>
            <p className="text-sm">See where your users are located</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
