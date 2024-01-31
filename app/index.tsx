import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.screen}>
      <Text>index page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
