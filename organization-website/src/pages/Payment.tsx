import { useState } from 'react';
import { CreditCard, Calendar, Search, Download, Filter, Plus } from 'lucide-react';

interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  paymentMethod: 'mpesa' | 'bank' | 'cash';
  status: 'paid' | 'pending' | 'failed';
  date: string;
}

const Payment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  // Dummy payment data
  const paymentData: Payment[] = [
    { id: 'P001', studentId: 'ST001', studentName: 'John Doe', amount: 15000, paymentMethod: 'mpesa', status: 'paid', date: '2023-11-05' },
    { id: 'P002', studentId: 'ST003', studentName: 'Jane Smith', amount: 12500, paymentMethod: 'bank', status: 'paid', date: '2023-11-10' },
    { id: 'P003', studentId: 'ST005', studentName: 'David Mwangi', amount: 15000, paymentMethod: 'mpesa', status: 'pending', date: '2023-11-15' },
    { id: 'P004', studentId: 'ST008', studentName: 'Sarah Kamau', amount: 8000, paymentMethod: 'cash', status: 'paid', date: '2023-11-20' },
    { id: 'P005', studentId: 'ST012', studentName: 'Michael Ochieng', amount: 15000, paymentMethod: 'mpesa', status: 'failed', date: '2023-11-22' },
    { id: 'P006', studentId: 'ST015', studentName: 'Lucy Wambui', amount: 12500, paymentMethod: 'bank', status: 'paid', date: '2023-11-25' },
  ];

  // Filter payments based on search and status filter
  const filteredPayments = paymentData.filter(payment => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         payment.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || payment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch(method) {
      case 'mpesa':
        return <div className="bg-green-100 p-1 rounded-full"><CreditCard size={16} className="text-green-600" /></div>;
      case 'bank':
        return <div className="bg-blue-100 p-1 rounded-full"><CreditCard size={16} className="text-blue-600" /></div>;
      case 'cash':
        return <div className="bg-orange-100 p-1 rounded-full"><CreditCard size={16} className="text-orange-600" /></div>;
      default:
        return <div className="bg-gray-100 p-1 rounded-full"><CreditCard size={16} className="text-gray-600" /></div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <Plus size={16} className="mr-2" />
          New Payment
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search payments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-500" />
              <select 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
            
            <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
              <Calendar size={18} className="mr-2 text-gray-600" />
              <span>Date Range</span>
            </button>
            
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
                  Payment ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>
                      <div className="text-gray-900">{payment.studentName}</div>
                      <div className="text-gray-500 text-xs">{payment.studentId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    KES {payment.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {getPaymentMethodIcon(payment.paymentMethod)}
                      <span className="ml-2 capitalize">{payment.paymentMethod}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Print
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPayments.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">No payment records found.</p>
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredPayments.length}</span> out of <span className="font-medium">{paymentData.length}</span> payments
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Payment Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Payments</span>
              <span className="font-medium">KES {paymentData.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pending Payments</span>
              <span className="font-medium">KES {paymentData.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Failed Payments</span>
              <span className="font-medium">KES {paymentData.filter(p => p.status === 'failed').reduce((sum, p) => sum + p.amount, 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Payment Methods</h2>
          <div className="h-40 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-green-100 p-1.5 rounded-full mr-3">
                <CreditCard size={14} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm">Payment received from Michael Ochieng</p>
                <span className="text-xs text-gray-500">Today, 10:30 AM</span>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 p-1.5 rounded-full mr-3">
                <CreditCard size={14} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-sm">Payment pending from Sarah Kamau</p>
                <span className="text-xs text-gray-500">Yesterday, 3:15 PM</span>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 p-1.5 rounded-full mr-3">
                <CreditCard size={14} className="text-red-600" />
              </div>
              <div>
                <p className="text-sm">Payment failed for David Mwangi</p>
                <span className="text-xs text-gray-500">Nov 22, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;