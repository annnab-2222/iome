import '../styles/Skills.css';
import { Briefcase, Code, Database, Camera, PenTool, Film, Computer, Globe, BookOpen } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ReactNode;
}

const skillsList: Skill[] = [
  {
    id: 1,
    name: "Web Development",
    description: "HTML, CSS, JavaScript, React, Vue.js",
    level: "Advanced",
    icon: <Code className="w-8 h-8 text-blue-500" />
  },
  {
    id: 2,
    name: "Mobile Development",
    description: "React Native, Flutter, iOS, Android",
    level: "Intermediate",
    icon: <Globe className="w-8 h-8 text-green-500" />
  },
  {
    id: 3,
    name: "Backend Development",
    description: "Node.js, Express, MongoDB, PostgreSQL",
    level: "Advanced",
    icon: <Database className="w-8 h-8 text-purple-500" />
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "Photoshop, Illustrator, Figma, UI/UX",
    level: "Advanced",
    icon: <PenTool className="w-8 h-8 text-pink-500" />
  },
  {
    id: 5,
    name: "Photography",
    description: "Digital Photography, Lighting, Editing",
    level: "Intermediate",
    icon: <Camera className="w-8 h-8 text-amber-500" />
  },
  {
    id: 6,
    name: "Video Production",
    description: "Premiere Pro, After Effects, Final Cut",
    level: "Intermediate",
    icon: <Film className="w-8 h-8 text-red-500" />
  },
  {
    id: 7,
    name: "Computer Literacy",
    description: "MS Office, Internet, Email, Basic Hardware",
    level: "Beginner",
    icon: <Computer className="w-8 h-8 text-gray-500" />
  },
  {
    id: 8,
    name: "Digital Marketing",
    description: "SEO, SEM, Social Media, Analytics",
    level: "Intermediate",
    icon: <Briefcase className="w-8 h-8 text-orange-500" />
  },
  {
    id: 9,
    name: "Language Learning",
    description: "English, Swahili, French, Basic Coding",
    level: "Beginner",
    icon: <BookOpen className="w-8 h-8 text-teal-500" />
  }
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Skills Development Programs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SkillHub Academy offers comprehensive training programs in various technical fields. 
          Our courses are designed to prepare you for the modern workforce with practical, hands-on learning.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsList.map((skill) => (
          <div key={skill.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h2 className="text-xl font-semibold ml-3">{skill.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  skill.level === 'Beginner' ? 'bg-blue-100 text-blue-800' : 
                  skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {skill.level}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to develop your skills?</h2>
        <p className="text-gray-700 mb-6">Join our programs and start your journey towards professional excellence.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Skills;
