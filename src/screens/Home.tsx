import { StyleSheet, Text, View } from "react-native";
import { GlobalStateType } from "../../App";

interface HomeProps {
  GlobalState: GlobalStateType;
}

const Home = ({ GlobalState }: HomeProps) => {
  const { todoList } = GlobalState;
  return (
    <View style={styles.screen}>
      <Text>
        This is Home. The Task is to{" "}
        <Text style={styles.bold}>{todoList[0].task}</Text>
      </Text>
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
  bold: {
    fontWeight: "bold",
  },
});

export default Home;
