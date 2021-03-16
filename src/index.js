const express = require("express");
const cors = require("cors");
const requestLogger = require("./lib/request-logger");
const fixedResponse = require("./lib/fixed-response");
const fixedResponseConfig = require("../response.json");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(requestLogger());
app.use("*", fixedResponse(fixedResponseConfig));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
