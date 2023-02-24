import React from 'react';
import { View } from 'react-native';
import {
 BallIndicator,
 BarIndicator,
 DotIndicator,
 MaterialIndicator,
 PacmanIndicator,
 PulseIndicator,
 SkypeIndicator,
 UIActivityIndicator,
 WaveIndicator
} from 'react-native-indicators';
import Colors from '../../Constants/Colors';

const Loader = (props) => (
 <View
  style={{
   flex: 1,
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'transparent',
   zIndex: 500
  }}>
  <View
   style={[{
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    opacity: 0.7
   },props.loaderColor]}></View>

  <BarIndicator color={Colors.pink} size={50} />
 </View>
);

export default Loader;
