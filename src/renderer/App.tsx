import * as React from 'react';
import InputArea from './InputArea';

export default () => (
  <div>
    <InputArea onSubmit={console.log} />
  </div>
);
