import { Readable } from 'stream';

export type IntentCandidate = {
  pluginId: string;
  confidence: number;
};

export type Intent = {
  userInput: string;
  matchingCandidate: IntentCandidate;
  otherCandidates: IntentCandidate[];
};

export type IntentResponse = {
  /**
   * For simple text output
   */
  textOutput?: string;
  outputStream?: Readable;
  // multi-step operations?
};

export type Plugin = {
  id: string;
  triggers: string[];
  handleIntent(intent: Intent): Promise<IntentResponse>;
};

export enum SheldonEventType {
  TasksChanged = 'tasksChanged',
}

export enum TaskEventType {
  Change = 'change',
  Complete = 'complete',
  Error = 'error',
}
