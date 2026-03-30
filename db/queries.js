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


async function getMessageById(id) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}


async function deleteMessageById(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}


module.exports = {
  getAllMessages,
  addNewMessage,
  getMessageById,
  deleteMessageById
};