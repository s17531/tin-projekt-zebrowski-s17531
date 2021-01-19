const express = require('express');
const router = express.Router();

const stdApiController = require('../../api/StudentAPI');
router.get('/', stdApiController.getStudents);
// router.get('/:empId', empApiController.getEmployeeById);
router.post('/', stdApiController.createStudent);
router.put('/:stdId', stdApiController.updateStudent);
router.delete('/:stdId', stdApiController.deleteStudent);
module.exports = router;