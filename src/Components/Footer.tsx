import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { HomeScreenNavigationProp } from "./homesample";

interface FooterProps {
  navigation: HomeScreenNavigationProp;
}

const Footer = ({ navigation }: FooterProps) => {
  return (
    <View style={styles.footer}>
      <AntDesign
        name="home"
        size={40}
        color="black"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
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
