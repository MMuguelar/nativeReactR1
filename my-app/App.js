import { StatusBar } from 'expo-status-bar';
import { ImageBackground ,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! mate</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:`url(./assets/fondo.jpg)`,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
