import React, { useState } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 TextInput
} from 'react-native';
import Styles from './Styles';
import { HIDEEYE } from '../../Constants/Images';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import { ScrollView } from 'react-native-gesture-handler';
import Fonts from '../../Constants/Fonts';
export default function UserSignUp(props) {
 const navigation = useNavigation();
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');

 return (
  <View>
   <Text allowFontScaling={false} style={Styles.loginHeading}>
    Sign Up
   </Text>
   <View style={Styles.inputContainer}>
    <View style={Styles.inputNameView}>
     <Text style={Styles.innerText}>Name</Text>
    </View>
    <TextInput
     allowFontScaling={false}
     placeholder=""
     placeholderTextColor={Colors.black}
     onChangeText={(text) => SetName(text)}
     style={Styles.inputStyle}
    />
   </View>
   <View style={Styles.inputContainer}>
    <View style={Styles.inputNameView}>
     <Text style={Styles.innerText}>E-mail</Text>
    </View>
    <TextInput
     allowFontScaling={false}
     placeholder=""
     placeholderTextColor={Colors.black}
     onChangeText={(text) => SetName(text)}
     style={Styles.inputStyle}
    />
   </View>
   <View style={Styles.inputContainer}>
    <View style={[Styles.inputNameView, { width: moderateScale(82) }]}>
     <Text style={Styles.innerText}>MObile No.</Text>
    </View>
    <TextInput
     allowFontScaling={false}
     placeholder=""
     placeholderTextColor={Colors.black}
     onChangeText={(text) => SetName(text)}
     style={Styles.inputStyle}
    />
   </View>
   <View style={Styles.inputContainer}>
    <View style={[Styles.inputNameView, { width: moderateScale(78) }]}>
     <Text style={Styles.innerText}>Password</Text>
    </View>
    <View style={Styles.passwordView}>
     <TextInput
      allowFontScaling={false}
      placeholder=""
      placeholderTextColor={Colors.black}
      onChangeText={(text) => SetName(text)}
      style={Styles.inputStyle}
     />
     <TouchableOpacity>
      <Image
       style={{ width: moderateScale(24), height: moderateScale(24) }}
       source={HIDEEYE}
      />
     </TouchableOpacity>
    </View>
   </View>
   <View style={Styles.inputContainer}>
    <View style={[Styles.inputNameView, { width: moderateScale(120) }]}>
     <Text style={Styles.innerText}>Confirm Password</Text>
    </View>
    <View style={Styles.passwordView}>
     <TextInput
      allowFontScaling={false}
      placeholder=""
      placeholderTextColor={Colors.black}
      onChangeText={(text) => SetName(text)}
      style={Styles.inputStyle}
     />
     <TouchableOpacity>
      <Image
       style={{ width: moderateScale(24), height: moderateScale(24) }}
       source={HIDEEYE}
      />
     </TouchableOpacity>
    </View>
   </View>
   <Text
    style={{
     marginLeft: '10%',
     color: Colors.black,
     marginTop: '1%',
     fontFamily: Fonts.ralewayMedium
    }}>
    Atleast 8 Characters
   </Text>
  </View>
 );
}
