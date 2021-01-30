const express = require('express');
const router = express.Router();
const teacherControler = require('../controllers/teacherController');
router.get('/', teacherControler.showTeacherList);
router.get('/add', teacherControler.showAddTeacherForm);
router.get('/details/:tchId', teacherControler.showTeacherDetails);
router.get('/edit/:tchId', teacherControler.showEditTeacherForm);
router.get('/details/:tchId', teacherControler.showTeacherDetails);

router.post('/add', teacherControler.addTeacher);
router.post('/edit', teacherControler.updateTeacher);
router.get('/delete/:tchId', teacherControler.deleteTeacher);


module.exports = router;
