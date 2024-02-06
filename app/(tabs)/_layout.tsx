import { Tabs } from "expo-router/tabs";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ScreenLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "To-do List",
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addTask"
        options={{
          headerTitle: "Add Task",
          title: "Add Task",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tasks/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default ScreenLayout;
