import * as React from 'react';
import Task from './Task';
import TaskClass from 'common/Task';

const Tasks: React.SFC<{ tasks: TaskClass[] }> = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
