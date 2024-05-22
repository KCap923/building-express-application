const express = require("express");
const app = express();
const PORT = 3000;


// app.get("/", (req, res) => {
//   res.send("Hello There!");
// });

// app.post("/post", (req, res) => {
//   res.send("Checking POST request for user!");
// });

// HTML 
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {text: " & it's awesome!!!"})
})


app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`)
})