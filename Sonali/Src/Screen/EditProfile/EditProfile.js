import React, { useState, useEffect, useRef } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 TextInput,
 ScrollView,
 Alert
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
export default function EditProfile() {
 const navigation = useNavigation();
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');
 const [avatarSource, setAvatarSource] = useState('');
 const [uriResponse, seturiResponse] = useState('');
 const [videoSource, setVideoSource] = useState('');
 const inputRef = useRef(null);
 const _pickImagefromCamera = () => {
  ImagePicker.openCamera({
   width: 400,
   height: 300,
   cropping: true,
   includeBase64: true,
   freeStyleCropEnabled: true
  }).then((response) => {
   let source = { uri: response.path };
   setAvatarSource(source);
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
   console.warn('response', response.path);
   let source = response.path;
   setAvatarSource(source);
   seturiResponse(response.path);
   console.warn('mkm', source);
   console.warn('uri', uriResponse);
  });
 };
 const _pickVideo = () => {
  ImagePicker.openPicker({
   mediaType: 'video',
   duration: 200
  }).then((response) => {
   let source = response.path;
   // let source = {url: response.path};
   console.warn('video result ', source);
   //  {
   //   response.duration <= 20000
   //    ? setVideoSource(source)
   //    : Alert.alert('Choose video duration less than 20 sec');
   //  }
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
 const handleSendVideo = async () => {
  const url = videoSource;
  const lastSlashIndex = url.lastIndexOf('/');
  const path = url.substring(0, lastSlashIndex + 1); // 'file:///data/user/0/com.Sonali/cache/react-native-image-crop-picker/'
  const fileName = url.substring(lastSlashIndex + 1);
  console.warn('video path', path);
  console.warn('filename', fileName);
 };
 useEffect(() => {
  setAdjustNothing();
 }, []);
 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
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
      {avatarSource == '' ? (
       <Image style={Styles.profileIcon} source={PROFILE} />
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
        placeholder="Name"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetName(text)}
        style={Styles.inputStyle}
       />
      </View>
      {/* <TouchableOpacity onPress={() => inputRef.current.focus()}>
      <Image style={Styles.inputIcon} source={PENCIL} />
      </TouchableOpacity> */}
      <Image style={Styles.inputIcon} source={PENCIL} />
     </View>
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Image style={[Styles.inputIcon, { borderRadius: 15 }]} source={PHONE} />
      <View style={{ width: '80%' }}>
       <TextInput
        allowFontScaling={false}
        placeholder="Phone"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetPhone(text)}
        style={Styles.inputStyle}
       />
      </View>
      <Image style={Styles.inputIcon} source={PENCIL} />
     </View>
     <View style={[Styles.inputView, { marginTop: '3%' }]}>
      <Image style={[Styles.inputIcon, { borderRadius: 15 }]} source={MAIL} />
      <View style={{ width: '80%' }}>
       <TextInput
        allowFontScaling={false}
        placeholder="E-mail"
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetMail(text)}
        style={Styles.inputStyle}
       />
      </View>
      <Image style={Styles.inputIcon} source={PENCIL} />
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
     <TouchableOpacity
      onPress={() => navigation.navigate('ResetPassword')}
      style={[Styles.inputView, { marginTop: '3%' }]}>
      <Text allowFontScaling={false} style={Styles.policyText}>
       Reset Password
      </Text>
     </TouchableOpacity>
     <View style={{ height: moderateScale(40) }} />
     <TouchableOpacity
      onPress={() => handleSendVideo()}
      style={Styles.loginBtn}>
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
