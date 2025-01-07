const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello Sam!");
});

app.get("/register", (req, res) => {
  res.status(200).send("Welcome to Registration Page");
});

app.get("/login", (req, res) => {
  res.status(200).send("Welcome to Login Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
