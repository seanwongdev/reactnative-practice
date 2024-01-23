import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Components/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome name="Jason" age={30} gender={true} />
    </View>
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
