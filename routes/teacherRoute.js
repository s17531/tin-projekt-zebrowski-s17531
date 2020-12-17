const express = require('express');
const router = express.Router();
const teacherControler = require('../controllers/teacherController');
router.get('/', teacherControler.showTeacherList);
router.get('/add', teacherControler.showAddTeacherForm);
router.get('/details/:stdId', teacherControler.showTeacherDetails);
module.exports = router;
