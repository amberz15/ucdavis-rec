import { Link } from 'expo-router';
import { Text, View } from "react-native";
import Login from '../components/Login'

export default function HomeScreen() {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF9E7',
      }}
    >
      <Login />
    </View>
  );
}
