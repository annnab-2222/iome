import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SkillHub Academy</h3>
            <p>Empowering the next generation with practical technical skills.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/skills" className="hover:text-blue-300">Skills</Link></li>
              <li><Link to="/events" className="hover:text-blue-300">Events</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
            <p className="mt-4">© {new Date().getFullYear()} SkillHub Academy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
