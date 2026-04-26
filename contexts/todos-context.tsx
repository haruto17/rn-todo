import { Todo } from "@/types/todo";
import { TodosContextValue } from "@/types/todos-context-value";
import { createContext, useContext, useState } from "react";
import 'react-native-get-random-values';
import {v7 as uuidv7} from 'uuid';

const TodosContext = createContext<TodosContextValue | undefined>(undefined);

export function TodosProvider({children}: {children: React.ReactNode}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos(prev => [
      ...prev,
      {
        id: uuidv7(),
        title,
        isCompleted: false,
      }
    ]);
  }

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
    );
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodos must be used within TodosProvider');
  }

  return context;
}
