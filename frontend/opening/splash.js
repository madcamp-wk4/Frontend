import React from 'react';
import { View, Image, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Onboarding')} > 
      <Image source={require('../assets/splash-final.png') }></Image>
      {/* // <Button title="Start" }  */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width : 388,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
