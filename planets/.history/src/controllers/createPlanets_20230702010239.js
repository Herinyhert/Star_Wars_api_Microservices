const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newPlanets = await Planets.create();
    
}