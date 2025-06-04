const express = require('express');
const {
  getStudents,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

const router = express.Router();

router.route('/')
  .get(getStudents)
  .post(addStudent);

router.route('/:id')
  .get(getStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;