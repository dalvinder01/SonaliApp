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
import { BACKICON } from '../../Constants/Images';
import Colors from '../../Constants/Colors';
import { emailLogin } from '../../Modules/emailLogin';
import { useSelector, useDispatch } from 'react-redux';

export default function LoginEmail() {
 const navigation = useNavigation();
 const [isButton, SetisButton] = useState(0);
 const [email, setEmail] = useState('');
 const showToast = useShowToast('Enter the Valid Email');
 const showError = useShowToast('Error');
 const { status } = useSelector((state) => state.emailLogin);
 const dispatch = useDispatch();

 const validate = () => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
   showToast();
   return false;
  } else {
   userLogin();
  }
 };
 const userLogin = () => {
  let data = {
   email: email
  };
  dispatch(emailLogin(data)).then((response) => {
   console.warn('res', response.payload);
   if (response.payload.success == true) {
    navigation.navigate('OtpScreen');
   } else {
    showError();
   }
  });
 };
 return (
  <SafeAreaView style={Styles.container}>
   <View style={Styles.topView}>
    <TouchableOpacity
     onPress={() => navigation.goBack()}
     style={{ padding: 5 }}>
     <Image style={Styles.backIcon} source={BACKICON} />
    </TouchableOpacity>
    <Text style={Styles.headingText}>Log In With Email Address</Text>
    <View style={Styles.inputView}>
     <Text style={Styles.phoneText}>Email .</Text>
     <View style={Styles.viewInput}>
      <TextInput
       editable={status == 'loading' ? false : true}
       placeholder=""
       placeholderTextColor={Colors.black}
       style={Styles.inputStyle}
       onChangeText={(text) => setEmail(text)}
      />
     </View>
     <TouchableOpacity
      disabled={email.length == 0 || status == 'loading' ? true : false}
      onPress={() => validate()}
      style={[
       Styles.loginBtn,
       {
        backgroundColor: email.length == 0 ? Colors.listColor : Colors.pink
       }
      ]}>
      {status == 'loading' ? (
       <ActivityIndicator size={30} color={Colors.white} />
      ) : (
       <Text
        allowFontScaling={false}
        style={[
         Styles.loginText,
         { color: email.length == 0 ? Colors.black : Colors.white }
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
