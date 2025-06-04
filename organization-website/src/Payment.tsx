import { useState } from 'react';
import QRCode from 'qrcode.react'; // Fix import

export default function Payment() {
  const [paymentStatus, setPaymentStatus] = useState<'paid' | 'not_paid' | null>(null);
  const [studentId, setStudentId] = useState('');

  const handlePayment = (status: 'paid' | 'not_paid') => {
    setPaymentStatus(status);
    // Here you would typically send this to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      
    </div>
  );
}