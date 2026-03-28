require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

 

app.use("/", indexRouter);



const PORT = process.env.PORT || 1414;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

