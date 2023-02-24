import React, { Component } from 'react';
import { Animated, Image, View,Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
import { LOADER } from '../../Constants/Images';

export default class Blink extends Component {
 constructor(props) {
  super(props);
  this.fadeAnimation = new Animated.Value(0);
 }

 componentDidMount() {
  Animated.loop(
   Animated.sequence([
    Animated.timing(this.fadeAnimation, {
     toValue: 0,
     duration: this.props.duration,
     useNativeDriver: true
    }),
    Animated.timing(this.fadeAnimation, {
     toValue: 1,
     duration: this.props.duration,
     useNativeDriver: true
    })
   ]),
   {
    iterations: this.props.repeat_count
   }
  ).start();
 }

 render() {
  return (
   <View style={{ ...this.props.style }}>
    <Animated.View style={{ opacity: this.fadeAnimation }}>
     {/* {this.props.children} */}
     <Image
      style={{
       width: moderateScale(35),
       height: moderateScale(35),
       tintColor: Colors.pink
      }}
      source={LOADER}
     />
     <Text
      style={{
       color: Colors.pink,
       fontSize: 16,
       fontFamily: Fonts.montserratRegular
      }}>
      Loading Please wait...
     </Text>
    </Animated.View>
    
   </View>
  );
 }
}
