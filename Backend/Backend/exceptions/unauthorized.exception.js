const status = require("http-status");

module.exports = class UnauthorizedRequestError extends Error {
  statusCode = status.UNAUTHORIZED;
  name = "UNAUTHORIZED_REQUEST_ERROR";

  constructor(message) {
    super(message || "This request is UNAUTHORIZED");
  }
};
