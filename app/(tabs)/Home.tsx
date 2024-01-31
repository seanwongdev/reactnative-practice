import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTask } from "../../Context/taskContext";
import { TodoList } from "../../Context/taskContext";

export default function Home() {
  const { todoList } = useTask();

  const renderItem = ({ item }: { item: TodoList }) => {
    return (
      <TouchableOpacity>
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
});
