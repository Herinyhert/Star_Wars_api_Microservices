// const planets = require("./planets.json");
const axios = require("axios");

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Planet");
        //console.log(result);
        const charactersDb = result.data
        return charactersDb;
    },
    getById: async (id) => {
        return await axios.get(`http://database:8004/Planet/${id}`);
    },
    create: async (object) => {
        return await axios.post("http://database:8004/Planet", object);
    },
};