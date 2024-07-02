import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF9E7',
      }}
    >
      <Text>Home</Text>
      <Link href="/programs">programs</Link>
    </View>
  );
}
