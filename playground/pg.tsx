import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoListClass, TodoListFunc } from '../src/test-components';

ReactDOM.render(
  <div>
    <TodoListClass todoList={[]} />
    <TodoListFunc todoList={[]} />
  </div>,
  document.getElementById('root'),
);
