import { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim() !== "") {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };
  return (
    <div className="flex items-center justify-between p-2 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-3 h-5 w-5"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:text-blue-800 mr-4 transition-colors duration-200"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
