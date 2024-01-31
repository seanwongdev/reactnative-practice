import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface TodoList {
  id: number;
  task: string;
}

interface TaskContextType {
  todoList: TodoList[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoList[]>>;
  // task: string;
  // setTask: React.Dispatch<React.SetStateAction<string>>;
  // chosenTask: string;
  // setChosenTask: React.Dispatch<React.SetStateAction<string>>;
}

const TaskContext = createContext({} as TaskContextType);

export const TaskProvider = ({ children }: ContextProps) => {
  const [todoList, setTodoList] = useState<TodoList[]>([
    {
      id: 1,
      task: "clean the curtain",
    },
  ]);

  return (
    <TaskContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
