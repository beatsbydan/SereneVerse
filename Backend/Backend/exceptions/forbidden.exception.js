const status = require("http-status");

module.exports = class ForbiddenRequestError extends Error {
  statusCode = status.FORBIDDEN;
  name = "FORBIDDEN_REQUEST_ERROR";

  constructor(message) {
    super(message || "This request is FORBIDDEN");
  }
};
