import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import Colors from '../Constants/Colors';
import Styles from './Styles';
const Activity = (props) => (
 <View style={Styles.container}>
  <View style={Styles.loaderStyle}></View>
  <BallIndicator color={Colors.red} size={50} />
 </View>
);
export default Activity;
