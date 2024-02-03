const { genSalt, hash, compare } = require("bcrypt");

const hashPassword = async (p) => {
  try {
    let salt = await genSalt();
    let myHash = await hash(p, salt);
    return myHash;
  } catch (error) {
    throw new Error(error);
  }
};

const comparePassword = async (hash, password) => {
  try {
    return await compare(password, hash);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
    hashPassword,
    comparePassword
}