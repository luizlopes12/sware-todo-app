import AddTaskForm from "../AddTaskForm";
import TaskList from "../TaskList";
import { useTasks } from "../../contexts/TaskContext";

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center gap-2 bg-white">
      <header className="w-full h-[100px] bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-center items-center">
        <h1 className="font-bold text-2xl text-white">Sware Task Manager</h1>
      </header>

      <div className="max-w-xl w-full mx-auto p-4 flex flex-col gap-2">
        <AddTaskForm handleCreateTask={addTask} />
        <TaskList tasks={tasks} handleToggleTask={toggleTask} handleDeleteTask={deleteTask} />
      </div>
    </section>
  );
}

export default App;
