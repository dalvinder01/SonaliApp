import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import SignUp from '../Screen/SignUp/SignUp';
import Login from '../Screen/Login/Login';
import ForgotPassword from '../Screen/ForgotPassword/ForgotPassword';
import BottomTabNavigator from './BottomTab';
import LiveEvent from '../Screen/LiveEvent/LiveEvent';
import JoinAs from '../Screen/JoinAs/JoinAs';
import StartStream from '../Screen/StartStream/StartStream';
import PhoneLogin from '../Screen/PhoneLogin/PhoneLogin';
import LoginEmail from '../Screen/LoginEmail/LoginEmail';
import OtpScreen from '../Screen/OtpScreen/OtpScreen';
const Stack = createStackNavigator();
export default function StackNavigation() {
 return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}>
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="SignUp" component={SignUp} />
   <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
   <Stack.Screen name="LoginEmail" component={LoginEmail} />
   <Stack.Screen name="OtpScreen" component={OtpScreen} />
   <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
   <Stack.Screen name="JoinAs" component={JoinAs} />
   <Stack.Screen name="Home" component={BottomTabNavigator} />
   <Stack.Screen name="LiveEvent" component={LiveEvent} />
   <Stack.Screen name="StartStream" component={StartStream} />
  </Stack.Navigator>
 );
}
