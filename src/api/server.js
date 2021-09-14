const express = require("express");
const cors = require("cors");
const { octokit } = require("@octokit/core");
const app = express();

const routes = require("./routes");

app.use(cors());

app.use(routes);

app.listen(3333, () => console.log("server is running"));
