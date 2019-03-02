import * as React from 'react';
import { TodoItemProps } from '../todo.interface';

export const TodoItemFunc: React.FC<TodoItemProps> = React.memo(({ deleteTodo, todo }: TodoItemProps): React.ReactElement<TodoItemProps> => {

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => deleteTodo(todo.id);

  return (
    <li>
        {todo.name}
        <button onClick={onButtonClick}>
          delete
        </button>
    </li>
  );
});