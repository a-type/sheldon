import * as React from 'react';

interface InputAreaProps {
  onSubmit(userInput: string): void;
}

export default ({ onSubmit }: InputAreaProps) => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <input value={value} onChange={ev => setValue(ev.target.value)} />
      <button onClick={() => onSubmit(value)}>Send</button>
    </div>
  );
};
