//const films = require("./films.json");
const axios = require("axios");

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Film");
        const filmsDb = result.data
        return filmsDb;
    },
    getById: async (id) => {
        return await axios.get(`http://database:8004/Film/${id}`);
    },
    create: async (Object) => {
        return await axios.post("http://database:8004/Film", Object);
    }
};