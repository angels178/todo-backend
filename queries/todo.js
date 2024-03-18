const db = require("../db/dbConfig");

const getAllTodoList = async () => {
  try {
    const allTodoList = await db.any('SELECT * FROM todos');

    return allTodoList;
  } catch (error) {
    return error;
  }
};

const getSingleTodo = async (id) => {
  try {
    const singleTodo = await db.any('SELECT * FROM todos WHERE id = $1', id)

    return singleTodo
  } catch (error) {
    return error;
  }
};


module.exports = { getAllTodoList, getSingleTodo };
