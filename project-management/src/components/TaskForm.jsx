import { useState } from "react";

const TaskForm = ({ projectId, addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTask(projectId, text);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex mb-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="p-3 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors duration-200"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
