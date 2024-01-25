import { StyleSheet, Text, View } from "react-native";
import { GlobalStateType } from "../../App";

interface ChosenTaskProps {
  GlobalState: GlobalStateType;
}

const ChosenTask = ({ GlobalState }: ChosenTaskProps) => {
  const { todoList } = GlobalState;
  return (
    <View style={styles.screen}>
      <Text>This is ChosenTask </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default ChosenTask;
