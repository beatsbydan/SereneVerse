const AsyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const isAdmin = AsyncHandler(async (req, res, next) => {
  try {
    const id = req.userId;
    const user = await User.findById(id);
    if (user) {
      if (user.isAdmin) {
        next();
      } else {
        res.status(401);
        throw new Error(
          "Authenticated user not authorized to access this route"
        );
      }
    } else {
      res.status(403);
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = isAdmin;
