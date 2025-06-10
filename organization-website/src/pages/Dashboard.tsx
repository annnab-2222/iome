import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, CreditCard, Users, CalendarDays, BarChart2, Book, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface StatCard {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<StatCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dashboard data
    setTimeout(() => {
      setStats([
        {
          title: 'Total Students',
          value: 156,
          icon: <Users size={24} />,
          color: 'bg-blue-500',
        },
        {
          title: 'Active Courses',
          value: 8,
          icon: <Book size={24} />,
          color: 'bg-green-500',
        },
        {
          title: 'Total Revenue',
          value: 'KES 425,600',
          icon: <CreditCard size={24} />,
          color: 'bg-purple-500',
        },
        {
          title: 'Upcoming Events',
          value: 3,
          icon: <CalendarDays size={24} />,
          color: 'bg-orange-500',
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const recentActivities = [
    { id: 1, description: 'New student registration', time: '2 hours ago' },
    { id: 2, description: 'Payment received', time: '5 hours ago' },
    { id: 3, description: 'New course material uploaded', time: '1 day ago' },
    { id: 4, description: 'Event booking confirmation', time: '2 days ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {user?.name || 'Admin'}
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50">
            <Settings size={16} className="inline mr-2" />
            Settings
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-md shadow-sm text-sm text-white hover:bg-blue-700">
            <BarChart2 size={16} className="inline mr-2" />
            View Reports
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-700">{stat.title}</h3>
                <div className={`${stat.color} p-2 rounded-full text-white`}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <Link to={`/${stat.title.toLowerCase().replace(' ', '-')}`} className="text-blue-600 text-sm mt-2 inline-block hover:underline">
                View details
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/students" className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <Users size={24} className="text-blue-600 mb-2" />
                <span className="text-sm font-medium">Students</span>
              </Link>
              <Link to="/payment" className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
                <CreditCard size={24} className="text-green-600 mb-2" />
                <span className="text-sm font-medium">Payments</span>
              </Link>
              <Link to="/events" className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
                <CalendarDays size={24} className="text-purple-600 mb-2" />
                <span className="text-sm font-medium">Events</span>
              </Link>
              <Link to="/skills" className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition">
                <Book size={24} className="text-orange-600 mb-2" />
                <span className="text-sm font-medium">Courses</span>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Enrollment Overview</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start border-b border-gray-100 pb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <User size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm">{activity.description}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-blue-600 text-sm hover:underline">
            View all activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
