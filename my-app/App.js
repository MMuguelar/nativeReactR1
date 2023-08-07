import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const image = require('./assets/fondo.png');
const image2 = require('./assets/splash.png');
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Fondo</Text>
    </ImageBackground>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

export default App;