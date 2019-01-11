import * as React from 'react';
import InputArea from './InputArea';
import { useTasks } from './hooks';
import Tasks from './Tasks';
import { GlobalStyle } from './components';
import context from './context';

const Provider = context.Provider as any;

export default ({}) => {
  const [tasks, createTask] = useTasks();

  return (
    <Provider>
      <div>
        <Tasks tasks={tasks} />
        <InputArea onSubmit={createTask} />

        <GlobalStyle />
      </div>
    </Provider>
  );
};
