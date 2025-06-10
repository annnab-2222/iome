import { useState, ChangeEvent, FormEvent } from 'react';
import { Search, Filter, Download, UserPlus, Edit, Trash2, ChevronDown } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'graduated';
  fees: {
    total: number;
    paid: number;
    balance: number;
  };
}

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [courseFilter, setCourseFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Dummy student data
  const initialStudents: Student[] = [
    {
      id: 'ST001',
      name: 'John Doe',
      phone: '+254712345678',
      email: 'john@example.com',
      course: 'Graphic Design',
      joinDate: '2023-01-15',
      status: 'active',
      fees: { total: 45000, paid: 30000, balance: 15000 }
    },
    {
      id: 'ST002',
      name: 'Jane Smith',
      phone: '+254723456789',
      email: 'jane@example.com',
      course: 'Web Development',
      joinDate: '2023-02-10',
      status: 'active',
      fees: { total: 60000, paid: 60000, balance: 0 }
    },
    {
      id: 'ST003',
      name: 'David Mwangi',
      phone: '+254734567890',
      email: 'david@example.com',
      course: 'Computer Packages',
      joinDate: '2023-03-05',
      status: 'graduated',
      fees: { total: 25000, paid: 25000, balance: 0 }
    },
    {
      id: 'ST004',
      name: 'Sarah Kamau',
      phone: '+254745678901',
      email: 'sarah@example.com',
      course: 'Digital Marketing',
      joinDate: '2023-04-20',
      status: 'inactive',
      fees: { total: 35000, paid: 15000, balance: 20000 }
    },
    {
      id: 'ST005',
      name: 'Michael Ochieng',
      phone: '+254756789012',
      email: 'michael@example.com',
      course: 'Graphic Design',
      joinDate: '2023-05-12',
      status: 'active',
      fees: { total: 45000, paid: 20000, balance: 25000 }
    },
    {
      id: 'ST006',
      name: 'Lucy Wambui',
      phone: '+254767890123',
      email: 'lucy@example.com',
      course: 'Web Development',
      joinDate: '2023-06-08',
      status: 'active',
      fees: { total: 60000, paid: 40000, balance: 20000 }
    },
  ];

  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [newStudent, setNewStudent] = useState<Omit<Student, 'id' | 'joinDate' | 'status' | 'fees'>>({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  // Get unique courses for the filter dropdown
  const courses = ['all', ...new Set(students.map(student => student.course))];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = `ST00${students.length + 1}`;
    const today = new Date().toISOString().split('T')[0];
    
    const studentToAdd: Student = {
      id: newId,
      ...newStudent,
      joinDate: today,
      status: 'active',
      fees: { total: 45000, paid: 0, balance: 45000 }
    };
    
    setStudents([...students, studentToAdd]);
    setNewStudent({ name: '', phone: '', email: '', course: '' });
    setShowAddForm(false);
  };

  // Filter students based on search term and filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    const matchesCourse = courseFilter === 'all' || student.course === courseFilter;
    
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'graduated': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Records</h1>
        <button 
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <UserPlus size={16} className="mr-2" />
          Add New Student
        </button>
      </div>
      
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={newStudent.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={newStudent.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Course</label>
              <select
                name="course"
                value={newStudent.course}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a course</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Computer Packages">Computer Packages</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
            <div className="md:col-span-2 flex justify-end gap-4">
              <button 
                type="button" 
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Student
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="text-gray-500 mr-2" />
              <select 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="graduated">Graduated</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <select 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
              >
                {courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course === 'all' ? 'All Courses' : course}
                  </option>
                ))}
              </select>
            </div>
            
            <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
              <Download size={18} className="mr-2 text-gray-600" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fee Balance
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 font-medium">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(student.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(student.status)}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-col">
                      <span className={student.fees.balance > 0 ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
                        KES {student.fees.balance.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {student.fees.paid.toLocaleString()} / {student.fees.total.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">No student records found.</p>
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredStudents.length}</span> out of <span className="font-medium">{students.length}</span> students
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-300 rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Student Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Students</span>
              <span className="font-medium">{students.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Students</span>
              <span className="font-medium">{students.filter(s => s.status === 'active').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Graduated</span>
              <span className="font-medium">{students.filter(s => s.status === 'graduated').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Inactive</span>
              <span className="font-medium">{students.filter(s => s.status === 'inactive').length}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Course Distribution</h2>
          <div className="h-40 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Fee Collection</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Fees</span>
              <span className="font-medium">KES {students.reduce((sum, s) => sum + s.fees.total, 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Collected</span>
              <span className="font-medium">KES {students.reduce((sum, s) => sum + s.fees.paid, 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Outstanding</span>
              <span className="font-medium text-red-600">KES {students.reduce((sum, s) => sum + s.fees.balance, 0).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
