const express = require('express');
const {
  getEvents,
  createEvent,
  bookEvent,
  getEventBookings,
} = require('../controllers/eventController');

const router = express.Router();

router.route('/')
  .get(getEvents)
  .post(createEvent);

router.route('/:id/book')
  .post(bookEvent);

router.route('/:id/bookings')
  .get(getEventBookings);

module.exports = router;