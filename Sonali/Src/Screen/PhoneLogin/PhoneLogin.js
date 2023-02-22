import React, { useEffect, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../Modules/loginUser';
import CountryCode from '../../Config/CountryCode';
import { getCountry } from '../../Modules/getCountry';
export default function PhoneLogin() {
 const navigation = useNavigation();
 const [isButton, SetisButton] = useState(0);
 const [number, setNumber] = useState('');
 const [countryData, setCountryData] = useState(CountryCode);
 const [code, setCode] = useState('');
 const { status } = useSelector((state) => state.loginUser);
 const showToast = useShowToast('Error');
 const dispatch = useDispatch();

 const userLogin = () => {
  let data = {
   number: code + number
  };
  dispatch(loginUser(data)).then((response) => {
   console.warn('res', response.payload.success);
   if (response.payload.success == true) {
    navigation.navigate('OtpScreen');
   } else {
    showToast();
   }
  });
 };
 
 const codeData = () => {
  dispatch(getCountry()).then((response) => {
   console.warn('countryres', response.payload.country_code);
   let userCode = '';
   for (let index = 0; index < countryData.length; index++) {
    const element = countryData[index];
    userCode = element.value;
    if (element.code === response.payload.country_code) {
     setCode(userCode);
    }
   }
  });
 };

 useEffect(() => {
  codeData();
 }, []);
 return (
  <SafeAreaView style={Styles.container}>
   <View style={Styles.topView}>
    <TouchableOpacity
     onPress={() => navigation.goBack()}
     style={{ padding: 5 }}>
     <Image style={Styles.backIcon} source={BACKICON} />
    </TouchableOpacity>
    <Text style={Styles.headingText}>Log In With Phone Number</Text>
    <View style={Styles.inputView}>
     <Text style={Styles.phoneText}>Phone No.</Text>
     <View style={[Styles.inputStyle]}>
      {code ? (
       <Text style={Styles.codeText}>{code}</Text>
      ) : (
       <ActivityIndicator size={15} color={Colors.pink} />
      )}
      <TextInput
       editable={status == 'loading' ? false : true}
       placeholder=""
       placeholderTextColor={Colors.black}
       style={Styles.innerInput}
       keyboardType="number-pad"
       onChangeText={(text) => setNumber(text)}
      />
     </View>
     <TouchableOpacity
      disabled={number.length == 0 || status == 'loading' ? true : false}
      onPress={() => userLogin()}
      style={[
       Styles.loginBtn,
       {
        backgroundColor: number.length == 0 ? Colors.listColor : Colors.pink
       }
      ]}>
      {status == 'loading' ? (
       <ActivityIndicator size={30} color={Colors.white} />
      ) : (
       <Text
        allowFontScaling={false}
        style={[
         Styles.loginText,
         { color: number.length == 0 ? Colors.black : Colors.white }
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
