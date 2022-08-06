class AppError extends Error {
  constructor(code = 500, msg = 'internal server error') {
    super();
    this.code = code;
    this.message = msg;
  }
}

module.exports = AppError;
