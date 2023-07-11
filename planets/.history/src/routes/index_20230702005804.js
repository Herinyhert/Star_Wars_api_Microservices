const { Router } = require("express");
const controllers = require("../controllers");
const midd

const router = Router();

router.get("/", controllers.getPlanets)
module.exports = router;
