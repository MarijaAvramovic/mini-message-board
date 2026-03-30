 
const db = require("../db/queries");
const { body, validationResult, matchedData } = require('express-validator'); 

 


 async function getAllMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    console.log(messages);
    res.render("index", { messages: messages, title: "Mini Message board" });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Internal Server Error");
  }
}

function getFormInput(req, res) {
  res.render("form", { title: "New Message" });
};

async function addNewMessagePost(req, res) {
    const { user, text } = req.body;    
    console.log(messages);
    try {
        await db.addNewMessage(user, text);
        res.redirect("/");
    } catch (error) {
        console.error("Error adding new message:", error);
        res.status(500).send("Internal Server Error");
    }
}

 

module.exports = {
  getAllMessages,
  getFormInput,
 addNewMessagePost
};