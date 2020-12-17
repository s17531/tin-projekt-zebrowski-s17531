const express = require('express');
const router = express.Router();
const enrolmentControler = require('../controllers/enrolmentController');
router.get('/', enrolmentControler.showEnrolmentList);
router.get('/add', enrolmentControler.showAddEnrolmentForm);
router.get('/details/:stdId', enrolmentControler.showEnrolmentDetails);
module.exports = router;
