const express = require('express');
const router = express.Router();

const enrApiController = require('../../api/EnrollmentAPI');
router.get('/', enrApiController.getEnrollments);
// router.get('/:enrId', empApiController.getEnrollmentById);
router.post('/', enrApiController.createEnrollment);
router.put('/:enrId', enrApiController.updateEnrollment);
router.delete('/:enrId', enrApiController.deleteEnrollment);
module.exports = router;