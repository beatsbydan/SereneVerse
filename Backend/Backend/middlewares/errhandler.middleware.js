const { JsonWebTokenError } = require("jsonwebtoken");

const errHandler = (error, req, res, next) => {
  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = "A server error occured";
  let type = "Unknown server Error";
  if (error instanceof Error) {
    message = error.message;
  }
  if (error instanceof JsonWebTokenError) {
    message = error.message;
    type = "JWT Error or JWT Expired error";
  }
  res.status(statuscode).json({
    status: "fail",
    type,
    message,
    // stack: err?.stack,
  });
};

module.exports = errHandler;
