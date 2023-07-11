const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("")

const router = Router();

router.get("/", controllers.getPlanets)
module.exports = router;
