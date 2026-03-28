const express = require("express");
const router = express.Router();

 

router.get("/", (req, res) => res.send("Welcome to the index page")); 
router.get("/new", (req, res) =>res.send("Welcome to the new page")); 
    

 

module.exports = router;
