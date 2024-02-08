const status = require("http-status");

module.exports = class BadRequestError extends Error {
  statusCode = status.BAD_REQUEST;
  name = "BAD_REQUEST_ERROR";

  constructor(message) {
    super(message || "Bad Request");
  }
};
