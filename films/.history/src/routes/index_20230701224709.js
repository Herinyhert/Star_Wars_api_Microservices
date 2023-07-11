const { Router } = require("express");
const controllers = require("../controllers");
const middleware =

const router = Router();

router.get("/", controllers.getFilms);


module.exports = router;
