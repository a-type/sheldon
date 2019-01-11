import { Intent, IntentResponse, TaskEventType } from 'common/types';
import uuid from 'uuid';
import { EventEmitter } from 'events';

export default class Task extends EventEmitter {
  id: string;
  textOutput: string = '';
  completed: boolean = false;
  error: Error = null;
  private intent: Intent;

  constructor(intent: Intent, intentResponse: IntentResponse) {
    super();
    this.id = uuid();
    this.intent = intent;

    if (intentResponse.textOutput) {
      this.textOutput = intentResponse.textOutput;
    }

    if (intentResponse.outputStream) {
      intentResponse.outputStream.on('data', this.handleIntentOutput);
      intentResponse.outputStream.on('close', this.handleIntentComplete);
      intentResponse.outputStream.on('error', this.handleIntentFailed);
    } else {
      this.handleIntentComplete();
    }
  }

  handleIntentOutput = (data: string) => {
    this.textOutput = this.textOutput + data;
    this.emit(TaskEventType.Change, this);
  };

  handleIntentComplete = () => {
    this.completed = true;
    this.emit(TaskEventType.Complete, this);
  };

  handleIntentFailed = (err: Error) => {
    this.completed = true;
    this.error = err;
    this.emit(TaskEventType.Error, this);
  };

  get title() {
    return this.intent.userInput;
  }
}
