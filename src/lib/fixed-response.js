const express = require("express");
const router = express.Router();

const fixedResponse = ({ statusCode, body }) => (req, res) => {
  setTimeout(() => {
    res.status(statusCode).send(body);
  }, 1000);
};

module.exports = fixedResponse;
