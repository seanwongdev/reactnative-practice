import { StyleSheet, Text, View } from "react-native";
import { GlobalStateType, RootStackNavigatorParamsList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Constants from "expo-constants";
import ChosenTask from "./ChosenTask";
import Footer from "../Components/Footer";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamsList,
  "Home"
>;

interface HomeProps {
  GlobalState: GlobalStateType;
  navigation: HomeScreenNavigationProp;
}

const Home = ({ navigation, GlobalState }: HomeProps) => {
  const { todoList, setTodoList, task, setTask, setChosenTask } = GlobalState;

  const handleAddTask = () => {
    const index = todoList.length + 1;
    setTodoList((prev) => [...prev, { id: index, task: task }]);
    setTask("");
  };

  const handleSelectTask = (item: string) => {
    setChosenTask(item);
    navigation.navigate("ChosenTask");
  };

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <Text>
          This is Home. The Task is to{" "}
          <Text style={styles.bold}>{todoList[0].task}</Text>
        </Text>
        <Text>Loading..</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  body: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  bold: {
    fontWeight: "bold",
  },
});

export default Home;
