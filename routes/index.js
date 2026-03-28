const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
    { text: "Hello world",
         user: "Lola", 
         added: new Date() },
  { text: "Hi there!",
     user: "John", 
    added: new Date() },
];

 

router.get("/", (req, res) => 
    
    res.render("index", { messages: messages , title: "Mini Message board"}));


router.get("/new", 
(req, res) => res.render("form", { title: "New Message" })); 

router.post("/new", (req, res) => {
 const {  user, text } = req.body;
messages.push({
    user: user,
  text: text,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
}
);
 

module.exports = router;
