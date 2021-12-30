const { Router } = require("express");
const router = Router();

const {
  addProyect,
  allProyects,
  deleteProyect,
  updateProyect,
  projectById
} = require("../controllers/proyectController.js");

router.post("/", addProyect);
router.get("/", allProyects);
router.delete("/", deleteProyect);
router.put("/", updateProyect);
router.get('/byId', projectById)

module.exports = router;
