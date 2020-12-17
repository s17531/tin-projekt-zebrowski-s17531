const express = require('express');
const router = express.Router();
const studentControler = require('../controllers/studentController');
router.get('/', studentControler.showStudentList);
router.get('/add', studentControler.showAddStudentForm);
router.get('/details/:stdId', studentControler.showStudentDetails);
module.exports = router;
