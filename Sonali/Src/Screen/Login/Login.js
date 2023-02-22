import React, { useEffect, useState } from 'react';
import {
 Text,
 View,
 SafeAreaView,
 TouchableOpacity,
 ActivityIndicator
} from 'react-native';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-community/async-storage';
export default function Login() {
 const navigation = useNavigation();
 const [isButton, SetisButton] = useState(0);
 const [userType, SetuserType] = useState('');
 const goToPhone = () => {
  navigation.navigate('PhoneLogin');
  SetisButton(0);
 };
 const goToEmail = () => {
  navigation.navigate('LoginEmail');
  SetisButton(1);
 };
 const getTypeData = async () => {
  let type = await AsyncStorage.getItem('userType');
  console.warn('check', type);
  SetuserType(type);
  if (type !== '' && type !== null) {
   navigation.navigate('Home');
  } else {
   console.warn('hlo');
  }
 };
 useEffect(() => {
  getTypeData();
 }, []);
 if (userType === '' && userType === null) {
  return (
   <SafeAreaView style={Styles.container}>
    <View style={Styles.loginContainer}>
     <Text allowFontScaling={false} style={Styles.loginDescription}>
      By Clicking log In, You are agree with our{' '}
      <Text allowFontScaling={false} style={Styles.useText}>
       terms of use
      </Text>{' '}
      and{' '}
      <Text allowFontScaling={false} style={Styles.useText}>
       {' '}
       Privacy policy.
      </Text>
     </Text>
     <TouchableOpacity
      onPress={() => goToPhone()}
      style={[
       Styles.loginBtn,
       {
        backgroundColor: isButton == 0 ? Colors.pink : Colors.white,
        borderWidth: isButton == 0 ? 0 : 1
       }
      ]}>
      <Text
       allowFontScaling={false}
       style={[
        Styles.loginText,
        { color: isButton == 0 ? Colors.white : Colors.black }
       ]}>
       Log In With Phone No.
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => goToEmail()}
      style={[
       Styles.loginBtn,
       {
        backgroundColor: isButton == 1 ? Colors.pink : Colors.white,
        borderWidth: isButton == 1 ? 0 : 1
       }
      ]}>
      <Text
       allowFontScaling={false}
       style={[
        Styles.loginText,
        { color: isButton == 1 ? Colors.white : Colors.black }
       ]}>
       Log In With Email.
      </Text>
     </TouchableOpacity>
     <View style={{ height: moderateScale(90) }} />
    </View>
   </SafeAreaView>
  );
 }

 // render the home screen if the user is already logged in
 return (
  <View style={Styles.container}>
   <ActivityIndicator size={50} color={Colors.pink} />
  </View>
 );
}
