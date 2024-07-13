import { useState } from "react";

const ProjectForm = ({ addProject }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addProject(title);
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter project title"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Add Project
        </button>
      </div>
    </form>
  );
};
export default ProjectForm;
