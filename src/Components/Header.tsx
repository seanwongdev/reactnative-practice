import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>My To Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    zIndex: 5,
    elevation: 10,
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: "#14141420",
  },
});

export default Header;
