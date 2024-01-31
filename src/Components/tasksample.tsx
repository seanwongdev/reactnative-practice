import { StyleSheet, Text, View } from "react-native";
import { GlobalStateType, RootStackNavigatorParamsList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Footer from "./Footer";
import Header from "./Header";

type ChosenTaskScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamsList,
  "ChosenTask"
>;

interface ChosenTaskProps {
  GlobalState: GlobalStateType;
  navigation: ChosenTaskScreenNavigationProp;
}

const ChosenTask = ({ navigation, GlobalState }: ChosenTaskProps) => {
  const { chosenTask } = GlobalState;
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <Text>This is the ChosenTask: {chosenTask}</Text>
      </View>
      <Footer navigation={navigation} />
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
  body: {
    flex: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChosenTask;
