const express = require('express');
const {
  getPayments,
  createPayment,
  updatePaymentStatus,
  getPaymentsByStudent,
} = require('../controllers/paymentController');

const router = express.Router();

router.route('/')
  .get(getPayments)
  .post(createPayment);

router.route('/:id/status')
  .put(updatePaymentStatus);

router.route('/student/:studentId')
  .get(getPaymentsByStudent);

module.exports = router;