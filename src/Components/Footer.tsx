import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    zIndex: 5,
    elevation: 24,
  },
});

export default Footer;
