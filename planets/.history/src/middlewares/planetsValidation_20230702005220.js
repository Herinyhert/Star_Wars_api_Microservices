const { ClientError } = require("../utils/error");

module.exports = (req, res, next) => {
    const {name} = req.body;
    if(name) return next();
    else throw new ClientError("Error en el nombre", 401);
}