const { Router } = require("express");
const controllers = require("../controllers");
cons

const router = Router();

router.get("/", controllers.getFilms);


module.exports = router;
