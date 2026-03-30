const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
}

async function addNewMessage(user, text) {
    await pool.query(
    "INSERT INTO messages (username, text) VALUES ($1, $2) RETURNING *",
    [user, text]
  );
 
}

module.exports = {
  getAllMessages,
  addNewMessage
};