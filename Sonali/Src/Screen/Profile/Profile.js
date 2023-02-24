import React, { useEffect, useState } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 ScrollView,
 DeviceEventEmitter
} from 'react-native';
import Styles from './Styles';
import {
 FACEBOOK,
 INSTAGRAM,
 MAIL,
 PHONE,
 PROFILE,
 TWITTER
} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { useShowToast } from '../../Component/ShowMessage/ShowMessage';
import { getProfile } from '../../Modules/getProfile';
import Loader from '../../Component/Loader/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { VIEWER } from '../../Constants/Type';
export default function Profile() {
 const navigation = useNavigation();
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');
 const [avatarSource, setAvatarSource] = useState('');
 const [userArr, SetuserArr] = useState([]);
 const { status } = useSelector((state) => state.getProfile);
 const [userType, setuserType] = useState('');

 const showToast = useShowToast('Error');
 const dispatch = useDispatch();
 useEffect(() => {
  loadMore();
  getProfileData();
  getTypeData();
 }, []);
 const getProfileData = () => {
  dispatch(getProfile()).then((response) => {
   console.warn('res screen profile', response.payload.user);
   SetName(response.payload.user.name);
   SetMail(response.payload.user.email);
   SetPhone(response.payload.user.mobile_no);
   setAvatarSource(response.payload.user.photo);
  });
 };
 const getTypeData = async () => {
  let type = await AsyncStorage.getItem('userType');
  console.warn('check', type);
  setuserType(type);
 };
 const loadMore = () => {
  DeviceEventEmitter.addListener('profileUpdated', (event) => {
   if (event) {
    console.warn('emitter', event);
    getProfileData();
   } else {
    return null;
   }
  });
 };
 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
   {status == 'loading' ? (
    <Loader loaderColor={{ backgroundColor: Colors.black }} />
   ) : null}
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
      {avatarSource == '' ? (
       <Image style={Styles.profileIcon} source={PROFILE} />
      ) : (
       <Image style={Styles.userImage} source={{ uri: avatarSource }} />
      )}
     </View>
     <TouchableOpacity
      onPress={() =>
       navigation.navigate('EditProfile', {
        name: name,
        photo: avatarSource,
        email: mail,
        phone: phone
       })
      }
      style={Styles.editBtn}>
      <Text style={Styles.editText}>Edit</Text>
     </TouchableOpacity>
     <View style={Styles.inputView}>
      <Image
       style={[Styles.inputIcon, { borderRadius: 15 }]}
       source={PROFILE}
      />
      <View style={{ width: '90%' }}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        {name ? name : 'Name'}
       </Text>
      </View>
     </View>
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Image style={[Styles.inputIcon, { borderRadius: 15 }]} source={PHONE} />
      <View style={{ width: '90%' }}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        {phone ? phone : 'Phone'}
       </Text>
      </View>
     </View>
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Image style={[Styles.inputIcon, { borderRadius: 15 }]} source={MAIL} />
      <View style={{ width: '90%' }}>
       <Text allowFontScaling={false} style={Styles.inputStyle}>
        {mail ? mail : 'E-mail'}
       </Text>
      </View>
     </View>
     {userType !== VIEWER ? (
      <View>
       <View style={[Styles.inputView, { marginTop: '3%' }]}>
        <Text allowFontScaling={false} style={Styles.policyText}>
         About
        </Text>
       </View>
       <View style={[Styles.inputView, { marginTop: '3%' }]}>
        <Image style={[Styles.inputIcon]} source={FACEBOOK} />
        <View style={{ width: '90%' }}>
         <Text allowFontScaling={false} style={Styles.inputStyle}>
          Profile Link
         </Text>
        </View>
       </View>
       <View style={[Styles.inputView, { marginTop: '3%' }]}>
        <Image style={[Styles.inputIcon]} source={TWITTER} />
        <View style={{ width: '90%' }}>
         <Text allowFontScaling={false} style={Styles.inputStyle}>
          Profile Link
         </Text>
        </View>
       </View>
       <View style={[Styles.inputView, { marginTop: '3%' }]}>
        <Image style={[Styles.inputIcon]} source={INSTAGRAM} />
        <View style={{ width: '90%' }}>
         <Text allowFontScaling={false} style={Styles.inputStyle}>
          Profile Link
         </Text>
        </View>
       </View>
      </View>
     ) : null}
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Text allowFontScaling={false} style={Styles.policyText}>
       App Policies
      </Text>
     </View>
     <View style={{ height: moderateScale(130) }} />
     <TouchableOpacity
      style={[
       Styles.logOutBtn,
       { backgroundColor: Colors.colorBlue, borderWidth: 0, bottom: '3%' }
      ]}>
      <Text
       allowFontScaling={false}
       style={[Styles.btnText, { color: Colors.white }]}>
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
    <View style={{ height: moderateScale(30) }} />
   </ScrollView>
  </SafeAreaView>
 );
}
