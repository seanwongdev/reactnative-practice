import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStateType, RootStackNavigatorParamsList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../Components/Header";

import ChosenTask from "./ChosenTask";
import Footer from "../Components/Footer";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamsList,
  "Home"
>;

interface HomeProps {
  GlobalState: GlobalStateType;
  navigation: HomeScreenNavigationProp;
}

interface ItemProps {
  id: number;
  task: string;
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

  const renderItem = ({ item }: { item: ItemProps }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelectTask(item.task)}
      >
        <Text>
          {item.id}. {item.task}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <Text>The list of tasks are:</Text>
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Footer navigation={navigation} />
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
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Home;
