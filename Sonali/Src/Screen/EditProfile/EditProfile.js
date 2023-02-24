import React, { useState, useEffect, useRef } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 TextInput,
 ScrollView,
 Alert,
 DeviceEventEmitter,
 ActivityIndicator
} from 'react-native';
import Styles from './Styles';
import {
 CAMERA,
 MAIL,
 PENCIL,
 PHONE,
 PROFILE,
 FACEBOOK,
 INSTAGRAM,
 TWITTER
} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import { setAdjustNothing } from 'rn-android-keyboard-adjust';
import { moderateScale } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile } from '../../Modules/editProfile';
import Loader from '../../Component/Loader/Loader';
import CountryCode from '../../Config/CountryCode';
import { getCountry } from '../../Modules/getCountry';
export default function EditProfile(props) {
 console.warn('check params 123', props.route.params.photo);
 const navigation = useNavigation();
 const [name, SetName] = useState(props.route.params.name);
 const [phone, SetPhone] = useState(props.route.params.phone);
 const [mail, SetMail] = useState(props.route.params.email);
 const [avatarSource, setAvatarSource] = useState('');
 const [imageSource, setImageSource] = useState(props.route.params.photo);
 const [uriResponse, seturiResponse] = useState('');
 const { status } = useSelector((state) => state.editProfile);
 const [countryData, setCountryData] = useState(CountryCode);
 const [code, setCode] = useState('');
 const inputRef = useRef(null);
 const numberRef = useRef(null);
 const emailRef = useRef(null);
 const dispatch = useDispatch();
 const updateProfile = () => {
  let data = {
   name: name,
   email: mail,
   number: phone,
   photo: uriResponse
  };
  dispatch(editProfile(data)).then((response) => {
   console.warn('res screen', response.payload);
   if (response.payload.success == true) {
    DeviceEventEmitter.emit('profileUpdated', {
     Signal: true
    });
    navigation.goBack();
   }
  });
 };
 const _pickImagefromCamera = () => {
  ImagePicker.openCamera({
   width: 400,
   height: 300,
   cropping: true,
   includeBase64: true,
   freeStyleCropEnabled: true
  }).then((response) => {
   let source = { uri: response.path };
   setAvatarSource(source.path);
   seturiResponse(response.path);
   console.warn('mkm', avatarSource);
   console.warn('uri', uriResponse);
  });
 };
 const _pickImage = () => {
  ImagePicker.openPicker({
   width: 300,
   height: 400,
   cropping: true,
   includeBase64: true,
   freeStyleCropEnabled: true
  }).then((response) => {
   console.warn('response image', response.path);
   let source = response.path;
   setAvatarSource(source);
   seturiResponse(response.path);
   console.warn('mkm', avatarSource);
   //    console.warn('uri', uriResponse);
  });
 };

 const customAlert = () => {
  Alert.alert(
   '',
   'Choose Image From',
   [
    {
     text: 'Cancel',
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel'
    },
    {
     text: 'Take Photo',
     onPress: () => _pickImagefromCamera()
    },
    { text: 'Choose from Gallery', onPress: () => _pickImage() }
   ],
   { cancelable: false }
  );
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
  setAdjustNothing();
 }, []);
 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
   {status == 'loading' ? <Loader /> : null}
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    headerHeading={'Edit Profile'}
    notificationTrue={true}
    rightStyle={Styles.menuIcon}
   />
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.container}>
     <View style={Styles.profileView}>
      {!uriResponse ? (
       <Image style={Styles.userImage} source={{ uri: imageSource }} />
      ) : (
       <Image style={Styles.userImage} source={{ uri: uriResponse }} />
      )}
      <View style={Styles.cameraView}>
       <TouchableOpacity onPress={() => customAlert()}>
        <Image style={Styles.cameraIcon} source={CAMERA} />
       </TouchableOpacity>
      </View>
     </View>
     <View style={Styles.inputView}>
      <Image
       style={[Styles.inputIcon, { borderRadius: 15 }]}
       source={PROFILE}
      />
      <View style={{ width: '80%' }}>
       <TextInput
        ref={inputRef}
        // autoFocus={true}
        allowFontScaling={false}
        value={name}
        // placeholder="Name"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetName(text)}
        style={Styles.inputStyle}
       />
      </View>
      <TouchableOpacity onPress={() => inputRef.current.focus()}>
       <Image style={Styles.inputIcon} source={PENCIL} />
      </TouchableOpacity>
     </View>
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Image style={[Styles.inputIcon, { borderRadius: 15 }]} source={PHONE} />
      {/* {code ? (
       <Text style={Styles.codeText}>{code}</Text>
      ) : (
       <ActivityIndicator size={15} color={Colors.pink} />
      )} */}
      <View style={{ width: '80%' }}>
       <TextInput
        ref={numberRef}
        allowFontScaling={false}
        value={phone}
        placeholder="Phone"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetPhone(text)}
        style={Styles.inputStyle}
       />
      </View>
      <TouchableOpacity onPress={() => numberRef.current.focus()}>
       <Image style={Styles.inputIcon} source={PENCIL} />
      </TouchableOpacity>
     </View>
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Image style={[Styles.inputIcon, { borderRadius: 15 }]} source={MAIL} />
      <View style={{ width: '80%' }}>
       <TextInput
        ref={emailRef}
        allowFontScaling={false}
        value={mail}
        placeholder="E-mail"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetMail(text)}
        style={Styles.inputStyle}
       />
      </View>
      <TouchableOpacity onPress={() => emailRef.current.focus()}>
       <Image style={Styles.inputIcon} source={PENCIL} />
      </TouchableOpacity>
     </View>
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
     {/* <TouchableOpacity
      onPress={() => navigation.navigate('ResetPassword')}
      style={[Styles.inputView, { marginTop: '3%' }]}>
      <Text allowFontScaling={false} style={Styles.policyText}>
       Reset Password
      </Text>
     </TouchableOpacity> */}
     <View style={{ height: moderateScale(40) }} />
     <TouchableOpacity onPress={() => updateProfile()} style={Styles.loginBtn}>
      <Text allowFontScaling={false} style={Styles.loginText}>
       Save
      </Text>
     </TouchableOpacity>
     <View style={{ height: moderateScale(10) }} />
    </View>
   </ScrollView>
  </SafeAreaView>
 );
}
