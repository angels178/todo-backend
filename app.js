const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const todosController = require("./controllers/todosController");

app.use(express.json());
app.use(morgan("dev"));

app.use("/todos", todosController);

app.get("/", (req, res) => {
  res.send("Welcome to Todo App");
});

app.get("*", (req, res) => {
  res.send(404).send("Page not found!");
});

module.exports = app;
