import { Stack } from "expo-router";
import { TaskProvider } from "../Context/taskContext";

const RootLayout = () => {
  return (
    <TaskProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TaskProvider>
  );
};

export default RootLayout;
