const errorHandler = (err, req, res, next) => {
  const message = err.message || "somthing went wrong!";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
