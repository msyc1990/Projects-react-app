import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, seNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      seNewTodo("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "uncompleted") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => seNewTodo(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Add
        </button>
      </div>
      <div className="flex justify-between gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-lg ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded-lg ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("uncompleted")}
          className={`px-3 py-1 rounded-lg ${
            filter === "uncompleted" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Uncompleted
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
