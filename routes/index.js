const express = require("express");
const router = express.Router();

const messages = [
  
];

 

router.get("/", (req, res) => 
    
    res.render("index", { messages: messages , title: "Mini Message board"}));


router.get("/new", (req, res) =>res.send("Welcome to the new page")); 


 

module.exports = router;
