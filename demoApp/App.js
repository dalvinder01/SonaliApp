import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsAndroid } from 'react-native';
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import store from './Src/store';
import { Provider } from 'react-redux';
const Stack = createStackNavigator();
const App = () => {
 const requestCameraPermission = async () => {
  try {
   const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
     title: 'Cool Photo App Camera Permission',
     message:
      'Cool Photo App needs access to your camera ' +
      'so you can take awesome pictures.',
     buttonNeutral: 'Ask Me Later',
     buttonNegative: 'Cancel',
     buttonPositive: 'OK'
    }
   );
   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('You can use the camera');
   } else {
    console.log('Camera permission denied');
   }
  } catch (err) {
   console.warn(err);
  }
 };
 useEffect(() => {
  requestCameraPermission();
 }, []);
 return (
  <Provider store={store}>
   <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown: false
     }}>
     {/* <Stack.Screen name="Login" component={Login} /> */}
     <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
   </NavigationContainer>
  </Provider>
 );
};
export default App;
