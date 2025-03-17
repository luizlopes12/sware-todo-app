import { useState } from 'react';

import plusIcon from '../../assets/img/plus-icon.svg'

const AddTaskForm = ({ handleCreateTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    handleCreateTask({ id: Date.now(), title: task, completed: false });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-[#030F27] rounded-md p-2 flex-1"
        placeholder="Drink Water..."
      />
      <button className="bg-[#030F27] hover:bg-[#1a2232] transition-all ease-in-out text-white px-4 py-2 rounded-md flex gap-2 cursor-pointer">
        Create <img className='w-4' src={plusIcon} alt="Plus icon" />
      </button>
    </form>
  );
};

export default AddTaskForm;
