const express = require('express');
const router = express.Router();

const tchApiController = require('../../api/TeacherAPI');
router.get('/', tchApiController.getTeachers);
// router.get('/:empId', empApiController.getEmployeeById);
router.post('/', tchApiController.createTeacher);
router.put('/:tchId', tchApiController.updateTeacher);
// router.delete('/:empId', empApiController.deleteEmployee);
module.exports = router;