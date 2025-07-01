import { View, Image, Text } from 'react-native';
import dragon from "./assets/dragon.jpeg";

export default function App() {
  return (
    <View>
      <Image
        source={{ uri: dragon }}
        style={{ width: '100%', height: 200, resizeMode: 'contain' }}
        accessibilityLabel="Dragon"
      />
      <Text style={{ fontSize: 20 }}>Hello from React Native Web!</Text>
    </View>
  );
}
