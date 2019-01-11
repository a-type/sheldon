import * as React from 'react';
import { useTask } from './hooks';
import TaskClass from 'common/Task';
import { Bubble } from './components';

const Task: React.SFC<{ task: TaskClass }> = ({ task }) => {
  const [t] = useTask(task);

  return (
    <Bubble>
      <div>
        <b>{t.title}</b>
      </div>
      <pre>{t.textOutput}</pre>
    </Bubble>
  );
};

export default Task;
