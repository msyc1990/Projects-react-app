import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (title) => {
    const newProject = {
      id: Date.now(),
      title,
      tasks: [],
    };
    setProjects([...projects, newProject]);
  };

  const addTask = (projectId, text) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                { id: Date.now(), text, completed: false },
              ],
            }
          : project
      )
    );
  };

  const toggleTaskComplete = (projectId, taskId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              ),
            }
          : project
      )
    );
  };
  return (
    <div className="min-h-screen bg-gray-200 p-4 flex flex-col items-center">
      <h1>Project Management</h1>
      <ProjectForm addProject={addProject} />
      <ProjectList
        projects={projects}
        addTask={addTask}
        toggleTaskComplete={toggleTaskComplete}
      />
    </div>
  );
}

export default App;
