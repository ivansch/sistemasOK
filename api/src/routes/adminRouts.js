const { Router } = require("express");
const router = Router();

const {
    login
} = require("../controllers/adminController.js");

router.get("/", login);

module.exports = router;
