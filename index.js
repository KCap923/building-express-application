const express = require("express");
const app = express();
const PORT = 3000;
// const cookieParser = require("cookie-parser");

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

// app.use(logger('dev'))
// app.use(express.json)
// app.use(express.urlencoded({ extended: false}))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', index)

// app.use((req, res, next) => {
// const err = new Error('Not Found')
// err.status = 404
// next(err)
// })

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



