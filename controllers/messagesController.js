 
 
const db = require("../db/queries");

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

module.exports = {
  getAllMessages,
  getFormInput
};