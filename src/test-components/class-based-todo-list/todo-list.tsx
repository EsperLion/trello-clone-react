import * as React from 'react';
import { TodoListProps, TodoListState, TodoItem } from '../todo.interface';
import { TodoItemClass } from './todo-item';
import { TodoInputClass } from './input-form';

export class TodoListClass extends React.PureComponent<TodoListProps, TodoListState> {

  constructor (props: TodoListProps) {
    super(props);
    this.state = {
      todoList: props.todoList
    };
  }

  public render (): React.ReactNode {
    return (
      <div>
        <h1>class form</h1>
        <TodoInputClass addTodo={this.addTodo} />
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    );
  }

  public addTodo = (todo: string): void => {
    this.setState({
      todoList: [...this.state.todoList, new TodoItem(todo)],
    });
  }

  public deleteTodo = (id: number): void => {
    this.setState({
      todoList: this.state.todoList.filter((value) => value.id !== id),
    });
  }

  private renderTodoList (): React.ReactNode {
    return this.state.todoList.map(
      (todo) => <TodoItemClass todo={todo} deleteTodo={this.deleteTodo} key={todo.id.toString()} />
    );
  }

}