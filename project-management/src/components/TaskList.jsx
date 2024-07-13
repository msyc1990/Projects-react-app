const TaskList = ({ tasks, toggleTaskComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-2 bg-white shadow-md rounded-lg mb-2"
        >
          <span className={task.completed ? "line-through" : ""}>
            {task.text}
          </span>
          <button
            onClick={() => toggleTaskComplete(task.id)}
            className={`ml-4 p-2 ${
              task.completed ? "bg-red-500" : "bg-blue-500"
            } text-white rounded-lg hover:${
              task.completed ? "bg-red-600" : "bg-blue-600"
            } transition-colors duration-200`}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
