import React, {useState} from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 TextInput,
 ScrollView,
} from 'react-native';
import Styles from './Styles';
import {BACKICON, FORGOT, OTP, RESET} from '../../Constants/Images';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default function ForgotPassword() {
 const navigation = useNavigation();
 const [isOtp, SetisOtp] = useState(false);
 const [validOtp, SetvalidOtp] = useState(false);
 const [modalVisible, setModalVisible] = useState(false);
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');
 const forgotPasswordView = () => {
  return (
   <View>
    <Text allowFontScaling={false} style={Styles.heading}>
     Forgot Password
    </Text>
    <Image style={Styles.iconStyle} source={FORGOT} />
    <View style={Styles.forgotInput}>
     <Text allowFontScaling={false} style={Styles.innerText}>
      Enter your E-mail or Mobile Number
     </Text>
     <TextInput
      allowFontScaling={false}
      placeholder="Email or Number"
      placeholderTextColor={Colors.black}
      onChangeText={text => SetName(text)}
      style={Styles.inputStyle}
     />
    </View>
    <TouchableOpacity onPress={() => SetisOtp(true)} style={Styles.loginBtn}>
     <Text allowFontScaling={false} style={Styles.loginText}>
      Send Otp
     </Text>
    </TouchableOpacity>
   </View>
  );
 };
 const sendOtpView = () => {
  return (
   <View>
    {validOtp ? (
     resetPasswordView()
    ) : (
     <View>
      <Text allowFontScaling={false} style={Styles.heading}>
       Verification
      </Text>
      <Image style={Styles.iconStyle} source={OTP} />
      <View style={Styles.otpInput}>
       <Text allowFontScaling={false} style={Styles.innerText}>
        Enter Valid OTP
       </Text>
       <TextInput
        allowFontScaling={false}
        placeholder="OTP"
        placeholderTextColor={Colors.black}
        onChangeText={text => SetName(text)}
        style={Styles.inputStyle}
       />
      </View>
      <TouchableOpacity
       onPress={() => SetvalidOtp(true)}
       style={Styles.loginBtn}>
       <Text allowFontScaling={false} style={Styles.loginText}>
        Next
       </Text>
      </TouchableOpacity>
     </View>
    )}
   </View>
  );
 };
 const resetPasswordView = () => {
  return (
   <View>
    <Text allowFontScaling={false} style={Styles.heading}>
     Reset Password
    </Text>
    <Image style={Styles.iconStyle} source={RESET} />
    <View style={Styles.forgotInput}>
     <Text allowFontScaling={false} style={Styles.innerText}>
      Reset Your Password
     </Text>
     <TextInput
      allowFontScaling={false}
      placeholder="Password"
      placeholderTextColor={Colors.black}
      onChangeText={text => SetName(text)}
      style={Styles.inputStyle}
     />
    </View>
    <View style={Styles.resetInput}>
     <TextInput
      allowFontScaling={false}
      placeholder="Confirm Password"
      placeholderTextColor={Colors.black}
      onChangeText={text => SetName(text)}
      style={Styles.inputStyle}
     />
    </View>
    <TouchableOpacity
     onPress={() => navigation.goBack()}
     style={Styles.loginBtn}>
     <Text allowFontScaling={false} style={Styles.loginText}>
      Save
     </Text>
    </TouchableOpacity>
   </View>
  );
 };
 return (
  <SafeAreaView style={Styles.container}>
   <View style={Styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
     <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={Styles.backBtn}>
      <Image style={Styles.backIcon} source={BACKICON} />
     </TouchableOpacity>
     <View style={{height: '20%'}} />
     {isOtp == true ? sendOtpView() : forgotPasswordView()}

     <View style={{height: moderateScale(200)}} />
    </ScrollView>
   </View>
  </SafeAreaView>
 );
}
