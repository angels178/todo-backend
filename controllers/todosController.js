const express = require("express");
const router = express.Router();

const { getAllTodoList, getSingleTodo } = require("../queries/todo");

router.get("/", async (req, res) => {
  const todos = await getAllTodoList();

  try {
    if (!Array.isArray(todos)) {
      res.status(500).json({ error: "Server error!" });
    } else {
      res.json(todos);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  //   console.log(id)
  const todo = await getSingleTodo(id);

  try {
    if (todo.length === 0) {
      res.status(404).json({ error: "not found" });
    } else {
      res.json(todo[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
