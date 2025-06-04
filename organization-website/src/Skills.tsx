const Skills = () => {
  const technicalSkills = [
    "Computer Literacy",
    "Graphic Design",
    "3D Modeling & Printing",
    "CNC Machine Operation",
    "Laser Cutting",
    "Photography",
    "Video Editing",
    "Web Development",
    "Digital Marketing"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Technical Skills Development</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {skill}
            </h3>
            <p className="text-gray-600">
              Comprehensive training program covering all aspects of {skill.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
