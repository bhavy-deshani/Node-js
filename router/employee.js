const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');

router.get('/', EmployeeController.index);
router.post('/show', EmployeeController.show);
// router.get('/store', EmployeeController.store);
router.post('/store', EmployeeController.store);
router.post('/update', EmployeeController.update);
router.post('/delete', EmployeeController.destroy);

module.exports = router;
