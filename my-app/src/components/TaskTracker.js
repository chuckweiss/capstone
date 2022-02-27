import Tasks from "./Tasks";
import AddTask from "./AddTask";

const TaskTracker = ({
  showAddTask,
  addTask,
  deleteTask,
  tasks,
  toggleReminder,
}) => {
  document.title = `${tasks.length} Tasks`;

  return (
    <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </>
  );
};

export default TaskTracker;
