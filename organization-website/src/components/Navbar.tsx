import { NavLink } from 'react-router-dom';
import { LogOut, User, LayoutDashboard, Sun, Moon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  // Navigation links configuration
  const publicLinks = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/events", label: "Events" },
    { path: "/skills", label: "Skills" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
  ];

  const privateLinks = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={16} className="mr-1" /> },
    { path: "/students", label: "Students" },
    { path: "/payment", label: "Payment" },
  ];

  // Filter links based on authentication
  const unauthenticatedLinks = publicLinks.filter(link => 
    link.label === "Home" || link.label === "Contact"
  );
  
  const alwaysVisibleLinks = publicLinks.filter(link => 
    link.label === "Events" || link.label === "Skills"
  );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="flex items-center">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            SkillHub
          </NavLink>
        </div>

        <div className="flex items-center gap-6">
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-6 nav-links">
            {/* Show Home and Contact when not logged in */}
            {!isAuthenticated && unauthenticatedLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Always show Events and Skills */}
            {alwaysVisibleLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Show private links when authenticated */}
            {isAuthenticated && privateLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active flex items-center"
                    : "nav-link flex items-center"
                }
              >
                {link.icon && link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Auth section */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {user && (
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span className="text-sm">{user.name}</span>
                </div>
              )}
              <button 
                onClick={logout}
                className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <LogOut size={16} className="mr-1" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <NavLink 
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-primary/90 text-white rounded-md font-medium"
                  : "px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
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