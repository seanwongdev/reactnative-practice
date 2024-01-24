import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/Components/Welcome";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

interface ToDoList {
  id: number;
  task: string;
}

const Stack = createNativeStackNavigator();

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
