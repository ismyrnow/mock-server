const requestLogger = (req, res, next) => {
  const { body, headers, method, query, url } = req;
  const timestamp = new Date().toISOString();

  res.on("finish", () => {
    const { statusCode } = res;

    console.log(`[${timestamp}] ${method} ${url} - ${statusCode}`);
    console.log({ headers, query, body });
  });

  next();
};

module.exports = () => requestLogger;
