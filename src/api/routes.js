const routes = require("express").Router();

const ApiController = require("./controller/ApiController");

routes.get("/getUser", ApiController.getUser);
routes.get("/getRepos", ApiController.getRepos);
routes.get("/getStarred", ApiController.getStarred);

module.exports = routes;