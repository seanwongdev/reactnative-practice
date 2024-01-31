import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface ToDoList {
  id: number;
  task: string;
}

export interface GlobalStateType {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  chosenTask: string;
  setChosenTask: React.Dispatch<React.SetStateAction<string>>;
}

export type RootStackNavigatorParamsList = {
  Home: { GlobalState: GlobalStateType };
  ChosenTask: { GlobalState: GlobalStateType };
};

export default function Home() {
  const [todoList, setTodoList] = useState<ToDoList[]>([
    { id: 1, task: "brush teeth" },
    { id: 2, task: "clean bedsheets" },
  ]);
  const [task, setTask] = useState("");
  const [chosenTask, setChosenTask] = useState("");

  const GlobalState = {
    todoList,
    setTodoList,
    task,
    setTask,
    chosenTask,
    setChosenTask,
  };

  return (
    <View style={styles.container}>
      <Text>Todo tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
