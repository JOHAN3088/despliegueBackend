const express= require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controllers')

router.get('/',empleadoCtrl.getEmploy);
router.post('/',empleadoCtrl.createEmploy);
router.get('/:id',empleadoCtrl.getUniqueEmploy);
router.put('/:id',empleadoCtrl.editEmploy);
router.delete('/:id',empleadoCtrl.deletEmploy);

module.exports = router;