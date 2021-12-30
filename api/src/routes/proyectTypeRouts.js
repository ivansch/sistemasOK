const { Router } = require('express');
const router = Router();

const {

    proyectType

} = require('../controllers/proyectTypeController.js');

router.get('/', proyectType);

module.exports = router;
