import { StyleSheet, Text, View } from "react-native";
import { GlobalStateType, RootStackNavigatorParamsList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ChosenTaskScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamsList,
  "ChosenTask"
>;

interface ChosenTaskProps {
  GlobalState: GlobalStateType;
  navigation: ChosenTaskScreenNavigationProp;
}

const ChosenTask = ({ navigation, GlobalState }: ChosenTaskProps) => {
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
