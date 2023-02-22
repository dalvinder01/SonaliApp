import React, {useState, useEffect} from 'react';
import {
 Text,
 View,
 SafeAreaView,
 TextInput,
 TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../Component/Header/Header';
import {setAdjustResize, setAdjustNothing} from 'rn-android-keyboard-adjust';

export default function ResetPassword() {
 const navigation = useNavigation();
 const [isStatus, SetisStatus] = useState(false);
 const [modalVisible, setModalVisible] = useState(false);
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');
 useEffect(() => {
  setAdjustNothing();
 }, []);
 return (
  <SafeAreaView style={Styles.container}>
   <View style={Styles.container}>
    <Header
     arrowTrue={true}
     onArrowPress={() => navigation.goBack()}
     headerHeading={'Reset Password'}
     notificationTrue={true}
     // rightImage={MENU}
     rightStyle={Styles.menuIcon}
    />
    <View style={Styles.inputContainer}>
     <View style={[Styles.inputNameView, {width: moderateScale(110)}]}>
      <Text style={Styles.innerText}>Old Password</Text>
     </View>
     <TextInput
      allowFontScaling={false}
      placeholder=""
      placeholderTextColor={Colors.black}
      onChangeText={text => SetName(text)}
      style={Styles.inputStyle}
     />
    </View>
    <View style={Styles.inputContainer}>
     <View style={[Styles.inputNameView, {width: moderateScale(78)}]}>
      <Text style={Styles.innerText}>Password</Text>
     </View>
     <TextInput
      allowFontScaling={false}
      placeholder=""
      placeholderTextColor={Colors.black}
      onChangeText={text => SetName(text)}
      style={Styles.inputStyle}
     />
    </View>
    <View style={Styles.inputContainer}>
     <View style={[Styles.inputNameView, {width: moderateScale(120)}]}>
      <Text style={Styles.innerText}>Confirm Password</Text>
     </View>
     <TextInput
      allowFontScaling={false}
      placeholder=""
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
  </SafeAreaView>
 );
}
