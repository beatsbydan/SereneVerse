const { JsonWebTokenError } = require("jsonwebtoken");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const BadRequestError = require("../exceptions/badRequest.exception");
const ResourceNotFoundError = require("../exceptions/notFound.exception");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");

const errHandler = (error, req, res, next) => {
  let statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = "A server error occurred";
  let type = "Unknown server Error";
  if (error instanceof Error) {
    message = error.message;
  }
  if (error instanceof JsonWebTokenError) {
    message = error.message;
    type = "JWT Error or JWT Expired error";
  }
  if (
    error instanceof UnauthorizedRequestError ||
    error instanceof BadRequestError ||
    error instanceof ResourceNotFoundError ||
    error instanceof ForbiddenRequestError
  ) {
    statuscode = error.statusCode;
    message = error.message;
    type = error.name;
  }
  res.status(statuscode).json({
    status: "fail",
    type,
    message,
    // stack: err?.stack,
  });
};

module.exports = errHandler;
