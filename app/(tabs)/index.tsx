import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../components/Onboarding/welcome1';
import WelcomeScreen2 from '../../components/Onboarding/welcome2';
import WelcomeScreen3 from '../../components/Onboarding/welcome3';
import LoginScreen from '../../components/Login/LoginScreen'; 
import LoginScreenOTP from '../../components/Login/Login(OTP)';
import HomeTemplate from '../../components/Home Page/HomeTemplate';
import Chatbot from '../../components/Home Page/chatbot';
import ProfileScreen1 from '../../components/Profile/profile1';
import ProfileScreen2 from '../../components/Profile/profile2';
// import Calendar from '../../components/Home Page/Calendar/calendar';
import CalendarExpand from '../../components/Home Page/Calendar/calendarexpand';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome1">
      <Stack.Screen name="Welcome1" component={WelcomeScreen} />
      <Stack.Screen name="Welcome2" component={WelcomeScreen2} />
      <Stack.Screen name="Welcome3" component={WelcomeScreen3} />
      <Stack.Screen name="Login/Signup" component={LoginScreen} />
      <Stack.Screen name="Login(OTP)" component={LoginScreenOTP} />
      <Stack.Screen name="HomeTemplate" component={HomeTemplate} />
      <Stack.Screen name="Chatbot" component={Chatbot} />
      <Stack.Screen name="Profile1" component={ProfileScreen1} />
      <Stack.Screen name="Profile2" component={ProfileScreen2} />
      {/* <Stack.Screen name="Calendar" component={Calendar} /> */}
      <Stack.Screen name="CalendarExpand" component={CalendarExpand} />
    </Stack.Navigator>
  );
}