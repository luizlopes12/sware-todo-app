import { useEffect, useState } from 'react';
import axios from 'axios';
import AddTaskForm from '../AddTaskForm';
import TaskList from '../TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => {
          const tasksFromApi = res.data;
          setTasks(tasksFromApi);
          localStorage.setItem('tasks', JSON.stringify(tasksFromApi));
        });
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { 
      ...task, 
      id: tasks.length + 1 + Date.now() 
    };
    setTasks([...tasks, newTask]); 
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
