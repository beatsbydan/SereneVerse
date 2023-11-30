
const errHandler = (error, req, res, next) => {
  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = "A server error occured";
  if (error instanceof Error) {
    message = error.message;
  }
  res.status(statuscode).json({
    status: "fail",
    message,
    // stack: err?.stack,
  });
};

module.exports = errHandler