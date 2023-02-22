import React from 'react';
import {Image, Dimensions,SafeAreaView} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

import Colors from '../Constants/Colors';
import {SPLASH} from '../Constants/Images';

const SplashScreen = props => (
 <SafeAreaView
  style={{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:Colors.pink,
  }}>
  {/* <StatusBar backgroundColor={Colors.primaryColor} barStyle="dark-content" /> */}
  <Image
   resizeMode="contain"
   style={{width: '100%', height: '100%'}}
   source={SPLASH}
  />
 </SafeAreaView>
);

export default SplashScreen;
