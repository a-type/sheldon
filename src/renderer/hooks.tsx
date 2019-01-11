import * as React from 'react';
import context from './context';
import { SheldonEventType, TaskEventType } from 'common/types';
import Task from 'common/Task';

export type CreateTaskFunction = (userInput: string) => void;

export const useTasks = (): [Task[], CreateTaskFunction] => {
  const sheldon = React.useContext(context);
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const updateState = () => {
      setTasks(sheldon.tasks);
    };
    sheldon.on(SheldonEventType.TasksChanged, updateState);
    return () => sheldon.off(SheldonEventType.TasksChanged, updateState);
  });

  const createTask = (userInput: string) => {
    sheldon.createTask(userInput);
  };
  return [tasks, createTask];
};

export const useTask = (taskToWatch: Task): [Task] => {
  const [task, setTask] = React.useState(taskToWatch);
  React.useEffect(() => {
    task.on(TaskEventType.Change, setTask);
    task.on(TaskEventType.Complete, setTask);
    task.on(TaskEventType.Error, setTask);

    return () => {
      task.off(TaskEventType.Change, setTask);
      task.off(TaskEventType.Complete, setTask);
      task.off(TaskEventType.Error, setTask);
    };
  });

  return [task];
};
