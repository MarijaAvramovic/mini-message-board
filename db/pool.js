const { Pool } = require("pg");
 
module.exports = new Pool({
  connectionString: "postgresql://marijaavramovic@localhost:5432/mini_messageboard",
});
