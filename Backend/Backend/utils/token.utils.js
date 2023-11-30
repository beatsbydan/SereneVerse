const { secret } = require("../config/constants.config");
const { sign, verify } = require("jsonwebtoken");

const signToken = async (id) => {
  try {
    let payload = {
      id,
    };
    let token = await sign(payload, secret, {
      expiresIn: "30m",
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const verifyToken = async (token) => {
  try {
    let payload = await verify(token, secret);
    return payload.id;
  } catch (error) {
    throw new Error(error);
  }
};

const signRefreshToken = async (id) => {
  try {
    let payload = {
      id,
    };
    let token = await sign(payload, secret, {
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
