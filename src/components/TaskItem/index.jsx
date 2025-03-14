const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span
        className={
          `cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`
        }
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;