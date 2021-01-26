const express = require('express');
const router = express.Router();
const studentControler = require('../controllers/studentController');
router.get('/', studentControler.showStudentList);
router.get('/add', studentControler.showAddStudentForm);
router.get('/details/:stdId', studentControler.showStudentDetails);
router.get('/edit/:stdId', studentControler.showEditStudentForm);
router.get('/details/:stdId', studentControler.showStudentDetails);

router.post('/add', studentControler.addStudent);
router.post('/edit', studentControler.updateStudent);
router.get('/delete/:stdId', studentControler.deleteStudent);

module.exports = router;
