const { Router } = require("express");
const router = Router();

const proyectRouts = require("./proyectRouts.js");
const proyectTypeRouts = require("./proyectTypeRouts.js");
const adminRouts = require('./adminRouts.js')
const mailRouts = require('./mailRouts.js')

router.use("/proyect", proyectRouts);
router.use("/proyectType", proyectTypeRouts);
router.use('/admin', adminRouts)
router.use('/sendmail', mailRouts)

module.exports = router;
