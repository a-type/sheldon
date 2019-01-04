import { IntentResponse } from 'core/types';

export default (response: IntentResponse) => {
  if (response.textOutput) {
    console.log(response.textOutput);
  }
  if (response.outputStream) {
    response.outputStream.pipe(process.stdout);
  }
};
