import React, {useState, useEffect} from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 TextInput,
 ScrollView,
 Alert,
} from 'react-native';
import Styles from './Styles';
import {CAMERA, MAIL, PENCIL, PHONE, PROFILE} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../Constants/Fonts';

export default function Request() {
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
    headerHeading={'Request'}
    notificationTrue={true}
    rightStyle={Styles.menuIcon}
   />
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.container}>
     <View style={Styles.profileView}>
      <Image style={Styles.profileIcon} source={PROFILE} />
     </View>
     <TouchableOpacity
      onPress={() => navigation.navigate('CreateEvent')}
      style={Styles.editBtn}>
      <Image style={Styles.editIcon} source={PENCIL} />
     </TouchableOpacity>
     <View style={Styles.inputView}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       Presenter Name
      </Text>
     </View>
     <View style={Styles.inputViewStyle}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       Event Theme
      </Text>
     </View>
     <View style={Styles.inputViewStyle}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       Date
      </Text>
     </View>
     <View style={Styles.inputViewStyle}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       Event Timing
      </Text>
     </View>
     <View style={Styles.inputViewStyle}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       Event Duration
      </Text>
     </View>
     <View style={Styles.inputViewStyle}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       No. of Performance
      </Text>
     </View>
     <View style={[Styles.inputViewStyle, {flexDirection: 'column'}]}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       Judges Name
      </Text>
      {/* <Text allowFontScaling={false} style={Styles.inputStyle}>
      Judges Name
      </Text> */}
     </View>

     <View style={{height: moderateScale(60)}} />
     <TouchableOpacity
      onPress={() => navigation.navigate('RequestList')}
      style={[
       Styles.logOutBtn,
       {backgroundColor: Colors.colorBlue, borderWidth: 0, bottom: '3%'},
      ]}>
      <Text
       allowFontScaling={false}
       style={[Styles.btnText, {color: Colors.white}]}>
       Request Box
      </Text>
     </TouchableOpacity>
    </View>
    <View style={{height: moderateScale(30)}} />
   </ScrollView>
  </SafeAreaView>
 );
}
