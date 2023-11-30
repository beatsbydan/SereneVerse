const AsyncHandler = require("express-async-handler");

const controller = AsyncHandler((req, res, next) => {
  try {
    return res.status(200).json({
      message: "Home Page",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = controller