const Event = require('../models/Event');
const Booking = require('../models/Booking');

// @desc    Get all events
// @route   GET /api/events
// @access  Public
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Create an event
// @route   POST /api/events
// @access  Public
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, time, location, maxAttendees } = req.body;

    const event = new Event({
      title,
      description,
      date,
      time,
      location,
      maxAttendees,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Book an event
// @route   POST /api/events/:id/book
// @access  Public
exports.bookEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Check if event is already booked by this student
    const existingBooking = await Booking.findOne({
      eventId: req.params.id,
      studentId: req.body.studentId,
    });
    if (existingBooking) {
      return res.status(400).json({ error: 'Already booked this event' });
    }

    const booking = new Booking({
      eventId: req.params.id,
      ...req.body,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get event bookings
// @route   GET /api/events/:id/bookings
// @access  Public
exports.getEventBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ eventId: req.params.id }).populate(
      'eventId',
      'title date time location'
    );
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};