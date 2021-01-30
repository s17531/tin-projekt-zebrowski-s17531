const express = require('express');
const router = express.Router();
const enrolmentControler = require('../controllers/enrollmentController');
router.get('/', enrolmentControler.showEnrolmentList);
router.get('/add', enrolmentControler.showAddEnrolmentForm);
router.get('/edit/:stdId', enrollmentControler.showEditEnrollmentForm);
router.get('/details/:stdId', enrolmentControler.showEnrolmentDetails);
router.post('/add', enrollmentControler.addEnrollment);
router.post('/edit', enrollmentControler.updateEnrollment);
router.get('/delete/:stdId', enrollmentControler.deleteEnrollment);

module.exports = router;
