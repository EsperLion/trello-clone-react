import * as React from 'react';
import  { InputProps } from '../todo.interface';

export const TodoInputFunc: React.FC<InputProps> = React.memo(({
  addTodo,
}: InputProps): React.ReactElement<InputProps> => {

  const [value, setValue] = React.useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value} />
      <button type="submit">add</button>
    </form>
  );
});