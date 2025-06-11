import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BookOpen, Award, ChevronRight } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      title: "Comprehensive Skill Development",
      description: "From computer basics to advanced design and development, our courses cover a wide range of technical skills.",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of practical experience in their respective fields.",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Recognized Certification",
      description: "Earn certificates that are valued by employers across the industry and boost your career prospects.",
      icon: <Award className="h-6 w-6 text-blue-600" />
    }
  ];

  const testimonials = [
    {
      content: "The graphic design course was exactly what I needed to kickstart my career. The hands-on approach and personal attention from instructors made all the difference.",
      author: "Jane Muthoni",
      position: "Freelance Designer"
    },
    {
      content: "I had zero computer knowledge before joining SkillHub. Now I'm proficient in all the essential software and even landed a job as an administrative assistant.",
      author: "John Kamau",
      position: "Administrative Assistant"
    },
    {
      content: "The web development program was challenging but incredibly rewarding. The support from both instructors and fellow students created a great learning environment.",
      author: "Sarah Ochieng",
      position: "Junior Web Developer"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Lives Through Technical Skills</h1>
              <p className="text-xl mb-8 text-blue-100">
                IOME INNOVATION provides practical, hands-on training in digital and technical skills to help you thrive in today's job market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/skills"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/login"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Student Login
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">1,500+</p>
              <p className="text-gray-600">Graduates</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-gray-600">Technical Courses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">90%</p>
              <p className="text-gray-600">Employment Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose IOME INNOVATION?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing quality education that prepares you for real-world success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Popular Courses</h2>
            <Link to="/skills" className="text-blue-600 flex items-center hover:text-blue-800">
              View all courses <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Graphic Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
                <p className="text-gray-600 mb-4">Master the tools and techniques of modern graphic design with our comprehensive course.</p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2 Months</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Web Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Computer Package</h3>
                <p className="text-gray-600 mb-4">Learn to build modern, Office Suite, Antivirus Package, Operating System (OS) Package.</p>
                <div className="flex justify-end items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">3 Months</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Computer Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">Develop skills in SEO, social media marketing, and digital advertising campaigns.</p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">8 Weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates about their experiences and successes after completing our courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4 text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with Iome Inovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/skills"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses, admission process, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2 flex justify-between items-center">
                <span>How do I enroll in a course?</span>
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </h3>
              <p className="text-gray-600">
                You can enroll by visiting our center, calling our admissions office, or completing the online application form on our website.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2 flex justify-between items-center">
                <span>What payment options are available?</span>
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </h3>
              <p className="text-gray-600">
                We accept various payment methods including M-Pesa, bank transfers, and installment plans for most courses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2 flex justify-between items-center">
                <span>Do you offer job placement assistance?</span>
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </h3>
              <p className="text-gray-600">
                Yes, we have a dedicated career services team that helps students with resume building, interview preparation, and job placements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2 flex justify-between items-center">
                <span>Are there any prerequisites for courses?</span>
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </h3>
              <p className="text-gray-600">
                Prerequisites vary by course. Basic computer literacy is required for most courses, but many beginner-level courses have no specific prerequisites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
