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
import MyProfile from './home/myProfile.js';
import DateRecord from './home/dateRecord.js';
import GetDateScore from './home/getDateScore.js';
import LoverProfile from './home/loverProfile.js';


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
        <Stack.Screen name="myProfile" component={MyProfile}  />
        <Stack.Screen name="dateRecord" component={DateRecord}  />
        <Stack.Screen name="getDateScore" component={GetDateScore}  />
        <Stack.Screen name="loverProfile" component={LoverProfile}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

