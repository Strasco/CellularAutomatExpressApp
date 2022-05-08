const express = require("express");
const app = express();

const path = require("path");

//Body Parser
app.use(express.json());

//static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
