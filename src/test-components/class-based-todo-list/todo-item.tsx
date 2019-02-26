import * as React from 'react';
import { TodoItemProps } from '../todo.interface';

export class TodoItemClass extends React.PureComponent<TodoItemProps> {

  public render (): React.ReactNode {
    return (
      <li>
          {this.props.todo.name}
          <button onClick={this.deleteTodo}>
            delete
          </button>
      </li>
    );
  }

  private deleteTodo = (): void => {
    this.props.deleteTodo(this.props.todo.id);
  }

}