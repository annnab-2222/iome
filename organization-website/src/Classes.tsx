const Classes = () => {
  const courses = [
    {
      category: "Computer Package",
      items: [
        "Microsoft Office Suite",
        "Basic Computer Maintenance",
        "Internet & Email",
        "Typing Mastery",
        "Computer Networking Basics"
      ]
    },
    {
      category: "Graphic Design",
      items: [
        "Laser Machine Operation",
        "Professional Photography",
        "Adobe Photoshop",
        "CorelDRAW",
        "CNC Machine Programming",
        "3D Printing Technology",
        "Plastic Molding Machines"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Classes</h1>
      
      {courses.map((course, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
            {course.category}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.items.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{item}</h3>
                  <p className="text-gray-600 text-sm">4-week intensive course</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4">Interested in our classes?</h3>
        <p className="mb-4">Contact us today to enroll or get more information</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Classes;