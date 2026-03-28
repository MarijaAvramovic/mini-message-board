require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const indexRouter = require("./routes/index");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


 

app.use("/", indexRouter);



const PORT = process.env.PORT || 1414;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

