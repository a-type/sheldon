import Task from './Task';
import { EventEmitter } from 'events';
import * as corePlugins from './plugins';

export default class Listener extends EventEmitter {
  handleInput = async (userInput: string): Promise<Task> => {
    // todo: nlu
    const intent = {
      userInput,
      matchingCandidate: null,
      otherCandidates: [],
    };
    const response = await corePlugins.listDirectory.handleIntent(intent);

    const task = new Task(intent, response);

    this.emit('task', task);
    return task;
  };
}
