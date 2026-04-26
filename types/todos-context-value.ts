import { Todo } from "./todo"

export type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
}
