import * as React from 'react';
import { TodoListProps, TodoItem } from '../todo.interface';
import { TodoItemFunc } from './todo-item';
import { TodoInputFunc } from './input-form';

type AddTodoAction = {
  type: 'ADD_TODO',
  payload: string;
};

type DeleteTodoAction = {
  type: 'DELETE_TODO',
  payload: number;
};

type TodoListActions = AddTodoAction | DeleteTodoAction;

const todoListReducer = (state: TodoItem[], action: TodoListActions): TodoItem[] => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        new TodoItem(action.payload),
      ];
    case 'DELETE_TODO':
      return state.filter((todo: TodoItem): boolean => todo.id !== action.payload);
    default:
      return state;
  }
}

export const TodoListFunc: React.FC<TodoListProps> = (props: TodoListProps): React.ReactElement<TodoListProps> => {

  const [state, dispatch] = React.useReducer(todoListReducer, props.todoList);

  const deleteTodo = React.useCallback((id: number): void => dispatch({ type: 'DELETE_TODO', payload: id }), []);
  const addTodo = React.useCallback((todo: string): void => dispatch({ type: 'ADD_TODO', payload: todo }), []);

  const renderTodoList = (): React.ReactNode => state.map(
    (todo) => <TodoItemFunc todo={todo} deleteTodo={deleteTodo} key={todo.id.toString()} />
  );

  return (
    <div>
      <h1>Func form</h1>
      <TodoInputFunc addTodo={addTodo} />
      <ul>
        {renderTodoList()}
      </ul>
    </div>
  );
};