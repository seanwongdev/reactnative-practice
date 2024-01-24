import { Text, View } from "react-native";

interface WelcomeProps {
  name: string;
  age: number;
  gender: boolean;
}

export default function Welcome({ name, age, gender }: WelcomeProps) {
  return (
    <View>
      <Text>
        Welcome to React-hell {name}. You are already {age}, time to start
        acting your age. {"\n"}Gender: {gender ? "Male" : "Female"}
      </Text>
    </View>
  );
}
