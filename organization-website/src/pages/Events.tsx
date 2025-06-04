import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

type BookingType = {
  eventId: string | number;
  name: string;
  email: string;
  phone: string;
};

export default function Events() {
  const [events] = useState<EventType[]>([
    {
      id: 1,
      title: "Open House Day",
      date: "2023-11-15",
      time: "10:00 AM",
      location: "Main Campus",
      description: "Come see our facilities and meet our instructors."
    },
    // More sample events...
  ]);

  const [booking, setBooking] = useState<BookingType>({
    eventId: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleBookingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  const handleBookEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Booking submitted for event ${booking.eventId}`);
    setBooking({ eventId: '', name: '', email: '', phone: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Date:</span> {event.date} at {event.time}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {event.location}
              </p>
              <p className="mb-4">{event.description}</p>
              <button
                onClick={() => setBooking(prev => ({ ...prev, eventId: event.id }))}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Book This Event
              </button>
            </div>
          </div>
        ))}
      </div>

      {booking.eventId && (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Event Booking</h2>
          <form onSubmit={handleBookEvent}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Event ID</label>
              <input
                type="text"
                name="eventId"
                value={booking.eventId}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={booking.name}
                onChange={handleBookingChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={booking.email}
                onChange={handleBookingChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={booking.phone}
                onChange={handleBookingChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
}