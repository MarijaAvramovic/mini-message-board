const express = require("express");
const router = express.Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
        id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
    { id: 3,
     text: "Hello world",
         user: "Lola", 
         added: new Date() },
  { id: 4,
     text: "Hi there!",
     user: "John", 
    added: new Date() },
];

 

router.get("/", (req, res) => 
    
    res.render("index", { messages: messages , title: "Mini Message board"}));
router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("messageDetails", { message: message, title: "Message Details" });
  } else {
    res.status(404).send("Message not found");
  }
});

router.get("/new", 
(req, res) => res.render("form", { title: "New Message" })); 

router.post("/new", (req, res) => {
 const {  user, text } = req.body;
 let nextId = messages.length + 1;

messages.push({
    id: nextId++,
    user: user,
  text: text,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
}
);
 

module.exports = router;
