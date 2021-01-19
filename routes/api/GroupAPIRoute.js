const express = require('express');
const router = express.Router();

const grpApiController = require('../../api/GroupAPI');
router.get('/', grpApiController.getGroups);
// router.get('/:empId', empApiController.getEmployeeById);
router.post('/', grpApiController.createGroup);
router.put('/:grpId', grpApiController.updateGroup);
// router.delete('/:empId', empApiController.deleteEmployee);
module.exports = router;