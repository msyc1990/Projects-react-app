import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const ProjectList = ({ projects, addTask, toggleTaskComplete }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <TaskForm projectId={project.id} addTask={addTask} />
          <TaskList
            tasks={project.tasks}
            toggleTaskComplete={(taskId) =>
              toggleTaskComplete(project.id, taskId)
            }
          />
        </div>
      ))}
    </div>
  );
};
export default ProjectList;
