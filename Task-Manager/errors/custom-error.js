// create custom error class
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

function createCustomError(msg, statusCode) {
  return new CustomError(msg, statusCode);
}

module.exports = {createCustomError, CustomError};