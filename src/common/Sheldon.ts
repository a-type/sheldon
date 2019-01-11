import Listener from 'common/Listener';
import { EventEmitter } from 'events';
import Task from 'common/Task';
import { SheldonEventType } from 'common/types';

export default class Sheldon extends EventEmitter {
  tasks: Task[] = [];

  private listener: Listener;

  constructor() {
    super();
    this.listener = new Listener();
  }

  get runningTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  createTask = async (userInput: string) => {
    const task = await this.listener.handleInput(userInput);
    this.handleNewTask(task);
  };

  private handleNewTask = (task: Task) => {
    this.tasks.push(task);
    this.emit(SheldonEventType.TasksChanged);
  };
}
