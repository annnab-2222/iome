const Student = mongoose.model("Student", studentSchema);
const studentSchema = new mongoose.Schema({

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['mpesa', 'credit_card', 'bank_transfer'],
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending',
  },
  transactionId: {
    type: String,
    unique: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Payment', PaymentSchema);

