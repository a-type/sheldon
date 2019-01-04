import Listener from './Listener';
import { EventEmitter } from 'events';
import Task from './Task';

export default class Sheldon extends EventEmitter {
  tasks: Task[];

  private listener: Listener;

  constructor() {
    super();
    this.listener = new Listener();
  }

  get runningTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  handleInput = async (userInput: string) => {
    const task = await this.listener.handleInput(userInput);
    this.handleNewTask(task);
  };

  private handleNewTask = (task: Task) => {
    this.tasks.push(task);
    task.on('change', this.handleTaskChanged);
    task.on('complete', this.handleTaskEnded);
    task.on('error', this.handleTaskEnded);
    this.emit('change');
  };

  private handleTaskChanged = (task: Task) => {
    this.emit('change');
  };

  private handleTaskEnded = (task: Task) => {
    task.off('change', this.handleTaskChanged);
  };
}
