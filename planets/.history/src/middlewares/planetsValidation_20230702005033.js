const { ClientError } = require("../utils/error");

module.exports = (req, res, next) => {
    const {name} = req.body;
    if(name)
}