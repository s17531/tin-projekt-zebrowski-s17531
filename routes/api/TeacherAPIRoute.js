const express = require('express');
const router = express.Router();

const tchApiController = require('../../api/TeacherAPI');
router.get('/', tchApiController.getTeachers);
router.get('/:tchId', tchApiController.getTeacherById);

router.post('/', tchApiController.createTeacher);
router.put('/:tchId', tchApiController.updateTeacher);
router.delete('/:tchId', tchApiController.deleteTeacher);

module.exports = router;