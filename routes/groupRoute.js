const express = require('express');
const router = express.Router();
const groupControler = require('../controllers/groupController');
router.get('/', groupControler.showGroupList);
router.get('/add', groupControler.showAddGroupForm);
router.get('/details/:stdId', groupControler.showGroupDetails);
module.exports = router;
