const express = require('express');
const router = express.Router();

const stdApiController = require('../../api/EnrollmentAPI');
router.get('/', stdApiController.getEnrollments);
router.get('/:empId', empApiController.getEmployeeById);
router.post('/', stdApiController.createEnrollment);
router.put('/:enrId', stdApiController.updateEnrollment);
router.delete('/:enrId', stdApiController.deleteEnrollment);
module.exports = router;