import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import {store} from './Src/store/store';
import {Provider} from 'react-redux';
import StackNavigation from './Src/Navigation/StackNavigation';
import firebase from '@react-native-firebase/app';
import SplashScreen from './Src/Component/SplashScreen';
import { ToastProvider } from 'react-native-toast-notifications'
export default function App() {
 const [showSplash, setShowSplah] = useState(true);
 useEffect(() => {
  var firebaseConfig = {
   apiKey: 'AIzaSyCXvct8OhRq-bUwB1qZglrULd7WJytoB3g',
   authDomain: 'sonaliapp-cc317.firebaseapp.com',
   databaseURL: 'https://sonaliapp-cc317-default-rtdb.firebaseio.com/',
   projectId: 'sonaliapp-cc317',
   storageBucket: 'sonaliapp-cc317.appspot.com',
   messagingSenderId: '873940568613',
   appId: '1:873940568613:android:26307630e3900b2210cdcc',
  };
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
  }
  setTimeout(() => {
   setShowSplah(false);
  }, 500);
 }, []);

 if (showSplash == true) {
  return <SplashScreen />;
 } else {
  return (
    
   <Provider store={store}>
    <ToastProvider>
    <NavigationContainer>
     <StackNavigation />
    </NavigationContainer>
    </ToastProvider>
   </Provider>
  );
 }
}

