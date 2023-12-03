const AsyncHandler = require("express-async-handler");

const notFound = AsyncHandler(async (req, res, next) => {
  try {
    res.status(404);
    throw new Error(`Route not found : ${req.originalUrl}`);
  } catch (error) {
    next(error);
  }
});

module.exports = notFound;
