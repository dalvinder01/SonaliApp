import React, { useState } from 'react';
import {
 Text,
 View,
 SafeAreaView,
 TouchableOpacity,
 Image,
 TextInput,
 ActivityIndicator
} from 'react-native';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import { useShowToast } from '../../Component/ShowMessage/ShowMessage';
import { BACKICON, OPENEYE, HIDDEN } from '../../Constants/Images';
import Colors from '../../Constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { verifyOtp } from '../../Modules/verifyOtp';
import AsyncStorage from '@react-native-community/async-storage';
export default function OtpScreen() {
 const navigation = useNavigation();
 const [isButton, SetisButton] = useState(0);
 const [otp, SetOtp] = useState('');
 const [otpError, SetOtpError] = useState('');
 const [secureText, setSecureText] = useState(false);
 const showToast = useShowToast('Enter the Valid Otp');
 const { status } = useSelector((state) => state.verifyOtp);
 const showError = useShowToast(
  otpError !== '' ? otpError : 'Your OTP is not correct'
 );
 const dispatch = useDispatch();
 // hitting the api to verify the otp
 const checkOtp = () => {
  //   navigation.navigate('JoinAs');
  let data = {
   otp: otp
  };
  dispatch(verifyOtp(data)).then((response) => {
   if (response.payload.success == false) {
    SetOtpError(response.payload.message);
    showError(response.payload.message);
   } else if (response.payload.user.role == null) {
    saveData(response.payload.user.role);
    navigation.navigate('JoinAs');
   } else {
    saveData(response.payload.user.role);
    navigation.navigate('Home');
   }
  });
 };

 //saving type of user in localStorage(e.g=> artist,dj etc)
 const saveData = async (type) => {
  try {
   await AsyncStorage.setItem('userType', type);
   console.warn('Data successfully saved');
   navigation.navigate('Home');
  } catch (e) {
   console.warn('Failed to save the data to the storage');
  }
 };
 return (
  <SafeAreaView style={Styles.container}>
   <View style={Styles.topView}>
    <TouchableOpacity
     onPress={() => navigation.goBack()}
     style={{ padding: 5 }}>
     <Image style={Styles.backIcon} source={BACKICON} />
    </TouchableOpacity>
    <Text style={Styles.headingText}>Validation Process</Text>
    <View style={Styles.inputView}>
     <Text style={Styles.phoneText}>
      Enter One Time Password that you receive on your entered Phone Or email.
     </Text>

     <View style={Styles.passwordView}>
      <View style={Styles.viewInput}>
       <TextInput
        editable={status == 'loading' ? false : true}
        maxLength={6}
        allowFontScaling={false}
        placeholder=""
        placeholderTextColor={Colors.black}
        secureTextEntry={secureText == false ? true : false}
        keyboardType="number-pad"
        onChangeText={(text) => SetOtp(text)}
        style={[Styles.inputStyle]}
       />
      </View>

      <TouchableOpacity
       style={Styles.hideBtn}
       onPress={() => setSecureText(!secureText)}>
       {secureText == true ? (
        <Image style={Styles.eyeIcon} source={OPENEYE} />
       ) : (
        <Image style={Styles.eyeIcon} source={HIDDEN} />
       )}
      </TouchableOpacity>
     </View>
     <TouchableOpacity
      disabled={otp.length == 0 || status == 'loading' ? true : false}
      onPress={() => checkOtp()}
      style={[
       Styles.loginBtn,
       {
        backgroundColor: otp.length == 0 ? Colors.listColor : Colors.pink
       }
      ]}>
      {status == 'loading' ? (
       <ActivityIndicator size={30} color={Colors.white} />
      ) : (
       <Text
        allowFontScaling={false}
        style={[
         Styles.loginText,
         { color: otp.length == 0 ? Colors.black : Colors.white }
        ]}>
        Continue
       </Text>
      )}
     </TouchableOpacity>
    </View>
    <View style={{ height: moderateScale(90) }} />
   </View>
  </SafeAreaView>
 );
}
