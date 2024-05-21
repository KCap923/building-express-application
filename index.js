const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.post("/post", (req, res) => {
  res.send("Checking POST request for user!");
});


app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`)
})