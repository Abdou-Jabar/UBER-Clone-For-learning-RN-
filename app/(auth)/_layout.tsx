import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="signup-in" />
      <Stack.Screen name="signup-up" />
    </Stack>
  );
}
