module.exports = (fn) => (res, req, next) =>
  fn(res, req).catch((err) => next(err));
