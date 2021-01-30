const express = require('express');
const router = express.Router();
const groupControler = require('../controllers/groupController');
router.get('/', groupControler.showGroupList);
router.get('/add', groupControler.showAddGroupForm);
router.get('/details/:grpId', groupControler.showGroupDetails);
router.get('/edit/:grpId', groupControler.showEditGroupForm);
router.get('/details/:grpId', groupControler.showGroupDetails);

router.post('/add', groupControler.addGroup);
router.post('/edit', groupControler.updateGroup);
router.get('/delete/:grpId', groupControler.deleteGroup);

module.exports = router;
