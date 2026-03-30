 

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (username, text) 
VALUES
  ('Bryan', 'Hello, world!'),
  ('Odin', 'Greetings, everyone!'),
  ('Damon', 'Hi there!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[2] 
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
