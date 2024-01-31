import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const TaskNum = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Task {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default TaskNum;
