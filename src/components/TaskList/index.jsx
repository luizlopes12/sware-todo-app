
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, handleToggleTask, handleDeleteTask }) => {
  return (
    <div className='flex flex-col gap-1'>
      {tasks.length ? tasks.map(task => (
        <TaskItem key={task.id} task={task} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} />
      )) : <p className="text-center">No tasks available</p>}
    </div>
  );
};

export default TaskList;