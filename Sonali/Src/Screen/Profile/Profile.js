import React, {useState} from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 ScrollView,
} from 'react-native';
import Styles from './Styles';
import {
 FACEBOOK,
 INSTAGRAM,
 MAIL,
 PHONE,
 PROFILE,
 TWITTER,
} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import {moderateScale} from 'react-native-size-matters';

export default function Profile() {
 const navigation = useNavigation();
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');
 const [avatarSource, setAvatarSource] = useState('');
 const [uriResponse, seturiResponse] = useState('');

 return (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    headerHeading={'Profile'}
    notificationTrue={true}
    rightStyle={Styles.menuIcon}
   />
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.container}>
     <View style={Styles.profileView}>
      <Image style={Styles.profileIcon} source={PROFILE} />
     </View>
     <TouchableOpacity
      onPress={() => navigation.navigate('EditProfile')}
      style={Styles.editBtn}>
      <Text style={Styles.editText}>Edit</Text>
     </TouchableOpacity>
     <View style={Styles.inputView}>
      <Image style={[Styles.inputIcon, {borderRadius: 15}]} source={PROFILE} />
      <View style={{width: '90%'}}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        Name
       </Text>
      </View>
     </View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Image style={[Styles.inputIcon, {borderRadius: 15}]} source={PHONE} />
      <View style={{width: '90%'}}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        Phone
       </Text>
      </View>
     </View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Image style={[Styles.inputIcon, {borderRadius: 15}]} source={MAIL} />
      <View style={{width: '90%'}}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        E-mail
       </Text>
      </View>
     </View>
     <View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Text allowFontScaling={false} style={Styles.policyText}>
       About
      </Text>
     </View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Image style={[Styles.inputIcon]} source={FACEBOOK} />
      <View style={{width: '90%'}}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        Profile Link
       </Text>
      </View>
     </View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Image style={[Styles.inputIcon]} source={TWITTER} />
      <View style={{width: '90%'}}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        Profile Link
       </Text>
      </View>
     </View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Image style={[Styles.inputIcon]} source={INSTAGRAM} />
      <View style={{width: '90%'}}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        Profile Link
       </Text>
      </View>
     </View>
     </View>
     <View style={[Styles.inputView, {marginTop: '3%'}]}>
      <Text allowFontScaling={false} style={Styles.policyText}>
       App Policies
      </Text>
     </View>
     <View style={{height: moderateScale(130)}} />
     <TouchableOpacity
      style={[
       Styles.logOutBtn,
       {backgroundColor: Colors.colorBlue, borderWidth: 0, bottom: '3%'},
      ]}>
      <Text
       allowFontScaling={false}
       style={[Styles.btnText, {color: Colors.white}]}>
       Subscribe
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => navigation.navigate('Login')}
      style={Styles.logOutBtn}>
      <Text allowFontScaling={false} style={Styles.btnText}>
       Logout
      </Text>
     </TouchableOpacity>
    </View>
    <View style={{height: moderateScale(30)}} />
   </ScrollView>
  </SafeAreaView>
 );
}
