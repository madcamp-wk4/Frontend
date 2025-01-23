import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
import StandardSorting from './major/standardsorting.js';
import StandardGrading from './major/standardgrading.js';
import Grading from './major/grading.js';
import Chatting from './major/chatting.js';
import Chatroom from './major/chatroom.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // GestureHandlerRootView로 최상위 뷰 감싸기
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false, // 모든 화면에서 헤더를 숨김
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="mainHome" component={MainHome} />
          <Stack.Screen name="createdAccount" component={CreatedAccount} />
          <Stack.Screen name="myProfile" component={MyProfile} />
          <Stack.Screen name="dateRecord" component={DateRecord} />
          <Stack.Screen name="getDateScore" component={GetDateScore} />
          <Stack.Screen name="loverProfile" component={LoverProfile} />
          <Stack.Screen name="standardSorting" component={StandardSorting} />
          <Stack.Screen name="standardGrading" component={StandardGrading} />
          <Stack.Screen name="grading" component={Grading} />
          <Stack.Screen name="chatting" component={Chatting} />
          <Stack.Screen name="chatroom" component={Chatroom} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}