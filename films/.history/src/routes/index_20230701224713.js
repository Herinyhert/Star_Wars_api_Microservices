const { Router } = require("express");
const controllers = require("../controllers");
const middleware = req

const router = Router();

router.get("/", controllers.getFilms);


module.exports = router;
