import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <img src="/logo.png" alt="Organization Logo" />
            <span>SkillHub</span>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/events" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Events
          </NavLink>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </NavLink>
          <NavLink 
            to="/students" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Students
          </NavLink>
          <NavLink 
            to="/payment" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Payment
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
