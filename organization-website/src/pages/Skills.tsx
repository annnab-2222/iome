import { Briefcase, Brain, Camera, PenTool, Film, Computer, BookOpen, ArrowLeft, Clock, Users, Award, CheckCircle, Star, Calendar, CreditCard, Smartphone, Building, X } from 'lucide-react';
import React, { useState } from 'react';

interface Skill {
  id: number;
  name: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ReactNode;
  duration: string;
  price: string;
  curriculum: string[];
  prerequisites: string[];
  career_outcomes: string[];
  instructor: string;
  max_students: number;
  next_intake: string;
  students_enrolled: number;
}

const skillsData: Skill[] = [
  {
    id: 1,
    name: "Machining and Fabrication",
    description: "3D Printing, CNC Machining, Automated Assembly Lines",
    level: "Advanced",
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    duration: "2 Months",
    price: "KES 75,000",
    curriculum: [
      "Introduction to CAD/CAM Software (SolidWorks, AutoCAD)",
      "3D Printing Technologies & Materials Selection",
      "CNC Machine Programming & Operation",
      "Automated Assembly Line Design",
      "Quality Control & Precision Measurement",
      "Industrial Safety & Best Practices",
      "Project Management in Manufacturing",
      "Final Capstone Project"
    ],
    prerequisites: ["Basic Mathematics & Geometry", "Technical Drawing Knowledge", "Computer Literacy"],
    career_outcomes: ["CNC Machine Operator", "3D Printing Specialist", "Manufacturing Technician", "Quality Control Inspector", "Production Supervisor"],
    instructor: "Eng. Samuel Mwangi (15 years experience)",
    max_students: 15,
    next_intake: "July 15, 2025",
    students_enrolled: 127
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "Photoshop, Illustrator, Figma, UI/UX",
    level: "Advanced",
    icon: <PenTool className="w-8 h-8 text-pink-500" />,
    duration: "3 Months",
    price: "KES 45,000",
    curriculum: [
      "Design Principles & Color Theory",
      "Adobe Photoshop Advanced Techniques",
      "Adobe Illustrator Vector Design",
      "Figma for UI/UX Design",
      "Brand Identity & Logo Design",
      "Web Design & Responsive Layouts",
      "Print Design & Typography",
      "Portfolio Development & Presentation"
    ],
    prerequisites: ["Basic Computer Skills", "Creative Mindset", "Art Appreciation"],
    career_outcomes: ["Graphic Designer", "UI/UX Designer", "Brand Designer", "Web Designer", "Freelance Designer", "Art Director"],
    instructor: "Grace Wanjiku (Creative Director)",
    max_students: 16,
    next_intake: "July 29, 2025",
    students_enrolled: 189
  },
  {
    id: 5,
    name: "Photography",
    description: "Digital Photography, Lighting, Editing",
    level: "Intermediate",
    icon: <Camera className="w-8 h-8 text-amber-500" />,
    duration: "3 Months",
    price: "KES 35,000",
    curriculum: [
      "Camera Fundamentals & Equipment",
      "Composition & Visual Storytelling",
      "Lighting Techniques & Studio Setup",
      "Portrait & Fashion Photography",
      "Landscape & Nature Photography",
      "Adobe Lightroom & Photo Editing",
      "Business of Photography",
      "Portfolio Building & Client Management"
    ],
    prerequisites: ["Basic Camera Knowledge", "Artistic Eye"],
    career_outcomes: ["Professional Photographer", "Wedding Photographer", "Commercial Photographer", "Photo Editor", "Freelance Photographer"],
    instructor: "Peter Ochieng (Award-winning Photographer)",
    max_students: 12,
    next_intake: "August 5, 2025",
    students_enrolled: 98
  },
  {
    id: 6,
    name: "Video Production",
    description: "Premiere Pro, After Effects, Final Cut",
    level: "Intermediate",
    icon: <Film className="w-8 h-8 text-red-500" />,
    duration: "3 Months",
    price: "KES 50,000",
    curriculum: [
      "Video Production Fundamentals",
      "Adobe Premiere Pro Editing",
      "After Effects & Motion Graphics",
      "Final Cut Pro Workflow",
      "Color Correction & Grading",
      "Audio Production & Sound Design",
      "Cinematography Techniques",
      "Project Management & Client Delivery"
    ],
    prerequisites: ["Basic Computer Skills", "Creative Vision", "Storytelling Interest"],
    career_outcomes: ["Video Editor", "Motion Graphics Designer", "Content Creator", "Film Producer", "YouTube Creator"],
    instructor: "Michael Otieno (Film Producer)",
    max_students: 14,
    next_intake: "August 12, 2025",
    students_enrolled: 134
  },
  {
    id: 7,
    name: "Computer Literacy",
    description: "MS Office, Internet, Email, Basic Hardware",
    level: "Beginner",
    icon: <Computer className="w-8 h-8 text-gray-500" />,
    duration: "3 Months",
    price: "KES 25,000",
    curriculum: [
      "Computer Fundamentals & Operating Systems",
      "Microsoft Word Document Creation",
      "Microsoft Excel Spreadsheets & Formulas",
      "Microsoft PowerPoint Presentations",
      "Internet Navigation & Research",
      "Email Management & Communication",
      "File Management & Organization",
      "Basic Computer Maintenance"
    ],
    prerequisites: ["None - Complete Beginner Friendly"],
    career_outcomes: ["Office Assistant", "Data Entry Clerk", "Administrative Assistant", "Customer Service Representative", "Reception Clerk"],
    instructor: "Susan Akinyi (IT Trainer)",
    max_students: 25,
    next_intake: "July 8, 2025",
    students_enrolled: 312
  },
  {
    id: 8,
    name: "Digital Marketing",
    description: "SEO, SEM, Social Media, Analytics",
    level: "Intermediate",
    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    duration: "2 Months",
    price: "KES 40,000",
    curriculum: [
      "Digital Marketing Strategy & Planning",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM) & Google Ads",
      "Social Media Marketing & Management",
      "Content Marketing & Copywriting",
      "Email Marketing Campaigns",
      "Google Analytics & Data Analysis",
      "Digital Marketing Campaign Management"
    ],
    prerequisites: ["Basic Computer Skills", "Internet Knowledge", "Communication Skills"],
    career_outcomes: ["Digital Marketing Specialist", "SEO Specialist", "Social Media Manager", "Content Marketer", "Marketing Coordinator"],
    instructor: "David Kimani (Digital Marketing Expert)",
    max_students: 22,
    next_intake: "July 17, 2025",
    students_enrolled: 245
  },
];

const paymentMethods = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    description: 'Pay with your mobile money',
    icon: <Smartphone className="w-8 h-8 text-green-500" />,
    details: 'Paybill: 247247 | Account: IOME2025'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Visa, Mastercard accepted',
    icon: <CreditCard className="w-8 h-8 text-blue-500" />,
    details: 'Secure online payment processing'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    description: 'Direct bank transfer',
    icon: <Building className="w-8 h-8 text-purple-500" />,
    details: 'KCB Bank | AC: 1234567890 | I.O.ME Innovation'
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handleLearnMore = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const handleBackToList = () => {
    setSelectedSkill(null);
    setShowPaymentModal(false);
    setSelectedPaymentMethod(null);
  };

  const handleEnroll = (skillName: string) => {
    setShowPaymentModal(true);
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    const method = paymentMethods.find(m => m.id === methodId);
    if (method && selectedSkill) {
      alert(`Payment Method: ${method.name}\n\nCourse: ${selectedSkill.name}\nAmount: ${selectedSkill.price}\n\n${method.details}\n\nAfter payment, send confirmation to:\n📧 info@iome.co.ke\n📱 +254 700 000 000`);
      setShowPaymentModal(false);
      setSelectedPaymentMethod(null);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Payment Modal Component
  const PaymentModal = () => {
    if (!showPaymentModal || !selectedSkill) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Choose Payment Method</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800">{selectedSkill.name}</h4>
              <p className="text-gray-600">{selectedSkill.duration} course</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">{selectedSkill.price}</p>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => handlePaymentMethodSelect(method.id)}
                  className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="flex items-center mb-2">
                    {method.icon}
                    <div className="ml-3">
                      <h4 className="font-bold text-gray-800">{method.name}</h4>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 ml-11">{method.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h5 className="font-bold text-yellow-800 mb-2">Payment Plans Available:</h5>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 50% down payment, 50% after 1 month</li>
                <li>• 3 monthly installments available</li>
                <li>• Corporate/group discounts available</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Need help? Contact us: <span className="font-semibold">+254 700 000 000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (selectedSkill) {
    return (
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={handleBackToList}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to All Skills
        </button>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white p-8">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                {selectedSkill.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{selectedSkill.name}</h1>
                <p className="text-xl opacity-90">{selectedSkill.description}</p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center bg-white/10 p-4 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">{selectedSkill.duration}</p>
                <p className="text-sm opacity-80">Course Duration</p>
              </div>
              <div className="text-center bg-white/10 p-4 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">{selectedSkill.students_enrolled}</p>
                <p className="text-sm opacity-80">Students Trained</p>
              </div>
              <div className="text-center bg-white/10 p-4 rounded-lg">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">{selectedSkill.level}</p>
                <p className="text-sm opacity-80">Skill Level</p>
              </div>
              <div className="text-center bg-white/10 p-4 rounded-lg">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">{selectedSkill.next_intake}</p>
                <p className="text-sm opacity-80">Next Intake</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Rating & Price */}
            <div className="flex justify-between items-center mb-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                </div>
                <span className="text-gray-600">({selectedSkill.students_enrolled} students)</span>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">{selectedSkill.price}</p>
                <p className="text-sm text-gray-600">Payment plans available</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                    <BookOpen className="w-6 h-6 mr-3 text-blue-500" />
                    Course Curriculum
                  </h3>
                  <div className="space-y-3">
                    {selectedSkill.curriculum.map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          <span className="text-blue-600 font-bold">Week {index + 1}:</span> {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Meet Your Instructor</h4>
                  <p className="text-gray-700 font-medium">{selectedSkill.instructor}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Expert instructor with industry experience and proven track record in training professionals.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Prerequisites</h3>
                  <div className="space-y-2">
                    {selectedSkill.prerequisites.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Career Opportunities</h3>
                  <div className="space-y-2">
                    {selectedSkill.career_outcomes.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                        <Award className="w-5 h-5 text-purple-500 mr-3" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-green-800">Class Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Max Students:</span> {selectedSkill.max_students} (Small class sizes)</p>
                    <p><span className="font-semibold">Next Intake:</span> {selectedSkill.next_intake}</p>
                    <p><span className="font-semibold">Mode:</span> Hybrid (Online + Practical Sessions)</p>
                    <p><span className="font-semibold">Certificate:</span> Industry-recognized completion certificate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Section */}
            <div className="mt-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 opacity-90">Join {selectedSkill.students_enrolled}+ students who have already transformed their careers</p>
              <button 
                onClick={() => handleEnroll(selectedSkill.name)}
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enroll Now - {selectedSkill.price}
              </button>
              <div className="mt-4 text-sm opacity-80">
                <p>💳 Flexible payment plans available</p>
                <p>🎓 Job placement assistance included</p>
                <p>📞 Free consultation: +254 700 000 000</p>
              </div>
            </div>
          </div>
        </div>

        <PaymentModal />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Skills Development Programs</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          I.O.ME Innovation offers comprehensive training programs in various technical fields.
          Our courses are designed to prepare you for the modern workforce with practical, hands-on learning.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill) => (
          <div key={skill.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 p-2 rounded-lg mr-3">
                  {skill.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{skill.name}</h2>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{skill.description}</p>
              
              <div className="flex items-center mb-4">
                <span className="ml-2 text-sm text-gray-600">({skill.students_enrolled})</span>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  skill.level === 'Beginner' ? 'bg-blue-100 text-blue-800' :
                  skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {skill.level}
                </span>
                <span className="text-blue-600 font-bold">{skill.price}</span>
              </div>
              
              <button 
                onClick={() => handleLearnMore(skill)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Learn More & Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;