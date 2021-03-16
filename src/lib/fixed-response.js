const express = require("express");
const router = express.Router();

const fixedResponse = (config) => (req, res) => {
  const delay = config.delay || 0;
  const statusCode = config.statusCode;
  const contentType = config.contentType;
  const body = config.body || null;

  setTimeout(() => {
    if (statusCode) {
      res.status(statusCode);
    }

    if (contentType) {
      res.type(contentType);
    }

    res.send(body);
  }, delay);
};

module.exports = fixedResponse;
