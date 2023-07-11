const { catchedAsync } = require("../utils");

module.exports = {
  getFilmById: catchedAsync(require("./getFilmById")),
  getFilms: catchedAsync(require("./getFilms")),
  createFilms: catchedAsync(require("./createFilms")),
};
