import * as React from 'react';
import context from './context';

export const useTasks = () => {
  const sheldon = React.useContext(context);
  const [tasks, setTasks] = React.useState([]);
  const updateState = () => {
    setTasks(sheldon.tasks);
  };
  sheldon.on('change', updateState);
};
