
const { Router } = require("express");
 
const indexRouter = Router();

 

indexRouter.get("/", (req, res) => res.send("Welcome to the index page")); 

 

module.exports = indexRouter;
