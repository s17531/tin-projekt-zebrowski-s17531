const express = require('express');
const router = express.Router();
const enrollmentControler = require('../controllers/enrollmentController');
router.get('/', enrollmentControler.showEnrollmentList);
router.get('/add', enrollmentControler.showAddEnrollmentForm);
router.get('/edit/:enrId', enrollmentControler.showEditEnrollmentForm);
router.get('/details/:enrId', enrollmentControler.showEnrollmentDetails);
router.post('/add', enrollmentControler.addEnrollment);
router.post('/edit', enrollmentControler.updateEnrollment);
router.get('/delete/:enrId', enrollmentControler.deleteEnrollment);

module.exports = router;
