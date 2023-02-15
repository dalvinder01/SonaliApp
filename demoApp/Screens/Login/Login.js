import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './Styles';
import AsyncStorage from '@react-native-community/async-storage';
import { loginApi } from '../../Src/loginApi';
import { useSelector, useDispatch } from 'react-redux';
import Activity from '../../Component/Activity';
import { showToast } from '../../Component/showMessage';
import Colors from '../../Constants/Colors';
export default function Login() {
 const navigation = useNavigation();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const dispatch = useDispatch();
 const { status } = useSelector((state) => state.loginApi);
 useEffect(() => {
  autoLogin();
 }, []);
 const autoLogin = async () => {
  let id = await AsyncStorage.getItem('id');
  if (id) {
   navigation.navigate('Home');
  } else {
   console.warn('test');
  }
 };
 const userLogin = async () => {
  if (!email) {
   showToast('Please Enter Email');
  } else if (!password) {
   showToast('Please Enter Password');
  } else {
   let data = {
    email: email,
    password: password
   };
   dispatch(loginApi(data)).then((response) => {
    if (response.payload.status == 1) {
     showToast(response.payload.message);
     saveData(response.payload.data.id.toString());
     navigation.navigate('Home');
    } else {
     showToast('check email and password');
    }
   });
  }
 };
 const saveData = async (id) => {
  await AsyncStorage.setItem('id', id);
 };
 return (
  <View style={Styles.container}>
   {status == 'loading' && <Activity />}
   <Text allowFontScaling={false} style={Styles.heading}>
    LOGIN
   </Text>
   <View style={Styles.mainView}>
    <View style={Styles.textView}>
     <Text allowFontScaling={false} style={Styles.emailText}>
      Email
     </Text>
    </View>
    <TextInput
     placeholder=""
     placeholderTextColor={Colors.black}
     style={Styles.inputStyle}
     onChangeText={(text) => setEmail(text)}
    />
    <View style={[Styles.textView, { marginTop: '5%' }]}>
     <Text allowFontScaling={false} style={Styles.emailText}>
      Password
     </Text>
    </View>
    <TextInput
     placeholder=""
     placeholderTextColor={Colors.black}
     style={Styles.inputStyle}
     onChangeText={(text) => setPassword(text)}
    />
    <TouchableOpacity onPress={() => userLogin()} style={Styles.loginBtn}>
     <Text allowFontScaling={false} style={Styles.btnText}>
      Login
     </Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
