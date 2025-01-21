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
import Onboarding from './opening/OnBoarding.js';
import Login from './opening/Login.js';
import Signup from './opening/signup.js';
import MainHome from './home/mainHome.js';
import CreatedAccount from './opening/createdAccount.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer s>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false, // 모든 화면에 header를 숨김
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={Signup}  />
        <Stack.Screen name="mainHome" component={MainHome}   />
        <Stack.Screen name="createdAccount" component={CreatedAccount}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

