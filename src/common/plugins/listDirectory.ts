import { Plugin, Intent, IntentResponse } from '../types';
import { exec } from 'child_process';

const handleIntent = async (intent: Intent): Promise<IntentResponse> => {
  const proc = exec('ls');

  return {
    outputStream: proc.stdout,
  };
};

const plugin: Plugin = {
  id: 'listDirectory',
  triggers: ['ls', 'list', "what's in this folder?"],
  handleIntent,
};

export default plugin;
