const { secret } = require("../config/constants.config");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  try {
    let payload = {
      id,
    };
    let token = jwt.sign(payload, secret, {
      expiresIn: "30m",
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const verifyToken =  (token) => {
  try {
    let payload = jwt.verify(token, secret);
    return payload.id;
  } catch (error) {
    throw new Error(error);
  }
};

const signRefreshToken =  (id) => {
  try {
    let payload = {
      id,
    };
    let token = jwt.sign(payload, secret, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  signRefreshToken,
  signToken,
  verifyToken,
};
