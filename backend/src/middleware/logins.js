const loggingMiddleware = (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
};

export const loggin = loggingMiddleware;
