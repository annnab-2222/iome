import { NavLink } from 'react-router-dom';
import { LogOut, User, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  // Only show Home and Contact when not logged in
  const publicLinks = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/events", label: "Events" },
    { path: "/skills", label: "Skills" },
  ];

  const privateLinks = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={16} className="mr-1" /> },
    { path: "/students", label: "Students" },
    { path: "/payment", label: "Payment" },
  ];

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-xl font-bold text-blue-600">
            SkillHub
          </NavLink>
        </div>
        <div className="flex items-center space-x-6">
          {/* Only show Home and Contact when not logged in */}
          {!isAuthenticated && publicLinks
            .filter(link => link.label === "Home" || link.label === "Contact")
            .map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 font-medium" 
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                {link.label}
              </NavLink>
            ))
          }
          {/* Always show Events and Skills */}
          {publicLinks
            .filter(link => link.label === "Events" || link.label === "Skills")
            .map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 font-medium" 
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                {link.label}
              </NavLink>
            ))
          }
          
          {isAuthenticated && (
            <>
              {privateLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-blue-600 font-medium flex items-center" 
                      : "text-gray-600 hover:text-blue-500 flex items-center"
                  }
                >
                  {link.icon && link.icon}
                  {link.label}
                </NavLink>
              ))}
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-700">
                  <User size={16} className="mr-1" />
                  <span className="text-sm">{user?.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="flex items-center text-red-500 hover:text-red-700"
                >
                  <LogOut size={16} className="mr-1" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </>
          )}
          
          {!isAuthenticated && (
            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                isActive 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
