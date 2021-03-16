const express = require("express");
const requestLogger = require("./lib/request-logger");
const fixedResponse = require("./lib/fixed-response");
const config = require("../config.json");

const port = config.port;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.cors) {
  app.use(require("cors")(config.cors));
}

app.use(requestLogger());
app.use("*", fixedResponse(config));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
