import { Text, View } from "react-native";
import { GlobalStateType } from "../../App";

interface ChosenTaskProps {
  GlobalState: GlobalStateType;
}

const ChosenTask = ({ GlobalState }: ChosenTaskProps) => {
  const { todoList } = GlobalState;
  return (
    <View>
      <Text>This is ChosenTask </Text>
    </View>
  );
};

export default ChosenTask;
