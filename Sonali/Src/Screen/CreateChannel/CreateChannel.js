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

export default function CreateChannel() {
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
   let source = { uri: response.path };
   setAvatarSource(source);
   seturiResponse(response.path);
   console.warn('mkm', source);
   console.warn('uri', uriResponse);
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

 useEffect(() => {
  setAdjustNothing();
 }, []);
 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    headerHeading={'Create Channel'}
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
      <View style={{ width: '80%' }}>
       <TextInput
        allowFontScaling={false}
        placeholder="Description"
        // multiline={true}
        placeholderTextColor={Colors.black}
        onChangeText={(text) => SetPhone(text)}
        style={Styles.inputStyle}
       />
      </View>
      <Image style={Styles.inputIcon} source={PENCIL} />
     </View>

     <View style={{ height: moderateScale(140) }} />
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
