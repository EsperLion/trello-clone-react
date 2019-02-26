
export class TodoItem {
  public name: string = '';
  public id: number = -1;
  constructor (name: string) {
    this.name = name;
    this.id = Date.now();
  }
}

export type TodoItemProps = {
  todo: TodoItem;
  deleteTodo(id: number): void;
};

export type TodoListProps = {
  todoList: TodoItem[];
};

export type TodoListState = {
  todoList: TodoItem[];
}

export type InputProps = {
  addTodo(todo: string): void;
}

export type InputState = {
  todo: string;
}