import deleteIcon from '../../assets/img/delete-icon.svg'


const TaskItem = ({ task, handleToggleTask, handleDeleteTask }) => {
  return (
    <div className="bg-gray-50 flex justify-between py-2 px-4 rounded-md">
      <span
        className={
          `cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`
        }
        onClick={() => handleToggleTask(task.id)}
      >
        {task.title}
      </span>
      <div className='flex gap-2'>
      <button onClick={() => handleDeleteTask(task.id)} className="cursor-pointer">
        <img src={deleteIcon} alt="Delete icon"/>
      </button>
      </div>
    </div>
  );
};

export default TaskItem;