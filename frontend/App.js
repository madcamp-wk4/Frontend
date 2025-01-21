// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useState, useEffect } from 'react';
// import Guide1 from './opening/page1'

// export default function App() {
//   const [splashVisible, setSplashVisible] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSplashVisible(false);
//     }, 2000)
//     return () => clearTimeout(timer)
    
//   }, []);

//   if (splashVisible) {
//     return (
//       <View style={styles.splashContainer}>
//         <Text style={styles.splashText}>Splash Screen</Text>
//       </View>
//     );
//   }

//   return <Guide1/>

//   // return (
//   //   <View style={styles.container}>
//   //     <Text>Open up App.js to start working on your app!</Text>
//   //     <StatusBar style="auto" />
//   //   </View>
//   // );
// }

// const styles = StyleSheet.create({
//   splashContainer: {
//     flex: 1,
//     backgroundColor: '#4CAF50', // 원하는 색상
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   splashText: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight : 'bold'},
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import SplashScreen from './opening/splash.js';
import Onboarding1 from './opening/page1.js';
import Onboarding2 from './opening/page2.js';
import Onboarding3 from './opening/paeg3.js';
import Login from './opening/Login.js';
import Signup from './opening/signup.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false, // 모든 화면에 header를 숨김
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: true }}/>
        <Stack.Screen name="SignUp" component={Signup}  options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Signup}  options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

