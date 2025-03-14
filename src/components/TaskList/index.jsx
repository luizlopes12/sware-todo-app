
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.length ? tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      )) : <p className="text-center">No tasks available</p>}
    </div>
  );
};

export default TaskList;