import { useFonts } from "expo-font";
import { Stack } from "expo-router";


export default function RootLayout() {
  useFonts({
    'proxima-nova':require('./../assets/fonts/proximanova_regular.ttf'),
  })
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
    </Stack>
  );
}
 