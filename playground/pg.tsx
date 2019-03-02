import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoListClass, TodoListFunc } from './test-components';

ReactDOM.render(
  <div>
    <TodoListClass todoList={[]} />
    <TodoListFunc todoList={[]} />
  </div>,
  document.getElementById('root'),
);
