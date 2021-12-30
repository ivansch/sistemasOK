const { Router } = require("express");
const router = Router();

const {
sendMail } = require("../controllers/mailController.js");

router.post("/", sendMail);

module.exports = router;
