import * as React from 'react';
import  { InputProps, InputState } from '../todo.interface';

export class TodoInputClass extends React.PureComponent<InputProps, InputState> {

  constructor (props: InputProps) {
    super(props);
    this.state = {
      todo: ''
    };
  }

  public render (): React.ReactNode {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.todo} />
        <button type="submit">add</button>
      </form>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ todo: e.target.value });
  }

  private onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

}