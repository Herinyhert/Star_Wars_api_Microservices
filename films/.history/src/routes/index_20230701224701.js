const { Router } = require("express");
const controllers = require("../controllers");
const mi

const router = Router();

router.get("/", controllers.getFilms);


module.exports = router;
