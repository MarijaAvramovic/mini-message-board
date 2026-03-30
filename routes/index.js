const express = require("express");
const router = express.Router();

const messageControlers = require("../controllers/messagesController");



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

 

router.get("/", messageControlers.getAllMessages);


router.get("/message/:id", messageControlers.getMessageById);

router.get("/new", messageControlers.getFormInput);



 router.post("/new", messageControlers.addNewMessagePost);

 

module.exports = router;
