import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStateType, RootStackNavigatorParamsList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "./Header";

import Footer from "./Footer";

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

const home = ({ navigation, GlobalState }: HomeProps) => {
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setTask}
            value={task}
            placeholder="Add in your new task here..."
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleAddTask}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#ECECEC",
    width: "100%",
    paddingTop: 15,
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
  inputContainer: {
    margin: 10,
  },
  input: {
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    display: "flex",
    height: 25,
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 15,
    width: 60,
  },
  submitText: {
    textAlign: "center",
    color: "white",
  },
});

export default home;
