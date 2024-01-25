import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/Components/Welcome";
import { useState } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import ChosenTask from "./src/screens/ChosenTask";

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

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export default function App() {
  const [todoList, setTodoList] = useState<ToDoList[]>([
    { id: 1, task: "brush teeth" },
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" options={{ headerShown: false }}>
          {(props) => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
