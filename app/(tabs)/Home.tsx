import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTask, TodoList } from "../../Context/taskContext";

import { router } from "expo-router";

export default function Home() {
  const { todoList } = useTask();

  const renderItem = ({ item }: { item: TodoList }) => {
    return (
      <TouchableOpacity
        style={styles.taskLink}
        onPress={() =>
          router.push({
            pathname: "/tasks/[id]",
            params: { id: item.id },
          })
        }
      >
        <Text>
          {item.id}. {item.task}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  taskLink: {
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
