const express = require("express");
const app = express();
const PORT = 3000;

app.use(logger)

// HTML *****************************************************************************************************
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {text: " & it's awesome!!!"})
})

// GET & POST request ***************************************************************************************
app.get("/get", (req, res) => {
  res.send("Checking GET request for user!");
});

app.post("/post", (req, res) => {
  res.send("Checking POST request for user!");
});
// In Postman -----> Checking POST request for user!

// Middleware *************************************************************************************************

function logger(req, res, next) {
  console.log("Log")
  next()
}
//Terminal ------->
// Server is running on port: 3000
// /
// /user
// /get
// Log

// Exploring Response Actions ************************************************************************************










app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`)
})














// app.get("/users", (req, res) => {
// res.send("User List")
// });

// app.get("/users/new", (req, res) => {
// res.send("User New Form")
// });