import React from 'react';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SkillHub Academy</h1>
          <p className="text-xl mb-8">Empowering communities through practical technical skills and innovation</p>
          <div className="flex justify-center space-x-4">
            <Link to="/skills" className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
              Explore Programs
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose SkillHub Academy?</h2>
          <p className="text-gray-600">We are committed to excellence in technical education</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Curriculum</h3>
            <p className="text-gray-600">Our courses focus on hands-on learning and real-world applications</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry professionals with years of practical experience</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recognized Certification</h3>
            <p className="text-gray-600">Earn certificates that are valued by employers across the industry</p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="font-semibold">Open House Day</h3>
                  <p className="text-sm text-gray-600">December 15, 2023 • 10:00 AM</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="font-semibold">Tech Workshop Weekend</h3>
                  <p className="text-sm text-gray-600">January 20-21, 2024 • 9:00 AM</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="font-semibold">Career Fair</h3>
                  <p className="text-sm text-gray-600">February 5, 2024 • 2:00 PM</p>
                </div>
              </div>
              <Link to="/events" className="flex items-center text-blue-600 mt-4 hover:text-blue-800">
                View all events <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/2 p-8 bg-blue-50">
              <h2 className="text-2xl font-bold mb-4">Popular Courses</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-200 rounded-full w-2 h-2 mr-2"></span>
                  Web Development Fundamentals
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 rounded-full w-2 h-2 mr-2"></span>
                  Graphic Design Masterclass
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 rounded-full w-2 h-2 mr-2"></span>
                  Digital Marketing Essentials
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 rounded-full w-2 h-2 mr-2"></span>
                  Photography and Video Production
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 rounded-full w-2 h-2 mr-2"></span>
                  Computer Packages for Beginners
                </li>
              </ul>
              <Link to="/skills" className="flex items-center text-blue-600 mt-4 hover:text-blue-800">
                Explore all courses <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join SkillHub Academy today and take the first step towards your professional growth and technical expertise.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-block">
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;