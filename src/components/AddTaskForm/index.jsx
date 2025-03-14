import { useState } from 'react';
import './style.scss'

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd({ id: Date.now(), title: task, completed: false });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full"
        placeholder="Add new task..."
      />
      <button className="bg-blue-500 text-white px-4 py-2">Add</button>
    </form>
  );
};

export default AddTaskForm;
