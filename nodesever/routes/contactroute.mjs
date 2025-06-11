const express = require('express');
const {
  submitContactForm,
  getContactSubmissions,
  updateContactStatus,
} = require('../controllers/contactController');

const router = express.Router();

router.route('/')
  .get(getContactSubmissions)
  .post(submitContactForm);

router.route('/:id/status')
  .put(updateContactStatus);

export default router;