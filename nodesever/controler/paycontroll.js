const Payment = require('../models/Payment');
const Student = require('../models/Student');

// @desc    Get all payments
// @route   GET /api/payments
// @access  Public
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ paymentDate: -1 });
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Create a payment
// @route   POST /api/payments
// @access  Public
exports.createPayment = async (req, res) => {
  try {
    const { studentId, amount, paymentMethod } = req.body;

    // Check if student exists
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Generate transaction ID
    const transactionId = `TXN${Date.now()}`;

    const payment = new Payment({
      studentId,
      amount,
      paymentMethod,
      transactionId,
      status: 'pending',
    });

    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Update payment status
// @route   PUT /api/payments/:id/status
// @access  Public
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get payments by student ID
// @route   GET /api/payments/student/:studentId
// @access  Public
exports.getPaymentsByStudent = async (req, res) => {
  try {
    const payments = await Payment.find({ studentId: req.params.studentId }).sort({
      paymentDate: -1,
    });
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};