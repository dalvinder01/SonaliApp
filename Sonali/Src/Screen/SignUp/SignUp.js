import React, {useState} from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 TextInput,
 ScrollView,
 Modal,
} from 'react-native';
import Styles from './Styles';
import {TICK} from '../../Constants/Images';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import UserSignUp from '../../Component/UserSignUp.js/UserSignUp';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../Constants/Fonts';
export default function SignUp() {
 const navigation = useNavigation();
 const [isStatus, SetisStatus] = useState(false);
 const [modalVisible, setModalVisible] = useState(false);
 const [name, SetName] = useState('');
 const [phone, SetPhone] = useState('');
 const [mail, SetMail] = useState('');
 const userLogin = () => {
  setModalVisible(!modalVisible);
  navigation.navigate('JoinAs');
 };
 return (
  <SafeAreaView style={Styles.container}>
   <View style={Styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
     <UserSignUp />
     <View style={{height: '10%'}} />
     <View style={Styles.innerContainer}>
      {isStatus == true ? (
       <TouchableOpacity
        onPress={() => SetisStatus(!isStatus)}
        style={Styles.checkBtn}>
        <Image style={Styles.tickIcon} source={TICK} />
       </TouchableOpacity>
      ) : (
       <TouchableOpacity
        onPress={() => SetisStatus(!isStatus)}
        style={Styles.checkBtn}></TouchableOpacity>
      )}
      <View style={{width: moderateScale(250)}}>
       <Text allowFontScaling={false} style={Styles.policyText}>
        I agree to the all collection and sharing my information to create my
        app account and
       </Text>
       <Text allowFontScaling={false} style={{fontSize: 12, marginTop: 0}}>
        <TouchableOpacity disabled={true}>
         <Text allowFontScaling={false} style={Styles.policyText}>
          I agree to the
         </Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text
          allowFontScaling={false}
          style={[Styles.btnText, {fontFamily: Fonts.ralewayMedium}]}>
          Terms of Use
         </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true}>
         <Text allowFontScaling={false} style={Styles.policyText}>
          and
         </Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text
          allowFontScaling={false}
          style={[Styles.btnText, {fontFamily: Fonts.ralewayMedium}]}>
          Privacy policy.
         </Text>
        </TouchableOpacity>
       </Text>
      </View>
     </View>
     <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={Styles.loginBtn}>
      <Text allowFontScaling={false} style={Styles.loginText}>
       Next
      </Text>
     </TouchableOpacity>
     <View style={Styles.centeredView}>
      <Modal
       // animationType="slide"
       transparent={true}
       visible={modalVisible}>
       <View style={{flex: 1, backgroundColor: Colors.transparent}}>
        <View style={Styles.centeredView}>
         <View style={Styles.modalView}>
          <Text allowFontScaling={false} style={Styles.modalText}>
           Verification
          </Text>
          <View style={{width: '90%', marginTop: '13%'}}>
           <TextInput
            allowFontScaling={false}
            placeholder="Email OTP"
            placeholderTextColor={Colors.black}
            onChangeText={text => SetName(text)}
            style={Styles.inputStyle}
           />
          </View>
          <View style={{width: '90%', marginTop: '5%'}}>
           <TextInput
            allowFontScaling={false}
            placeholder="Mobile OTP"
            placeholderTextColor={Colors.black}
            onChangeText={text => SetName(text)}
            style={Styles.inputStyle}
           />
          </View>
          <TouchableOpacity
           style={[Styles.button, Styles.buttonClose]}
           onPress={() => userLogin()}>
           <Text allowFontScaling={false} style={Styles.textStyle}>
            Next
           </Text>
          </TouchableOpacity>
          <View style={{height: moderateScale(20)}} />
         </View>
        </View>
       </View>
      </Modal>
     </View>
     <View style={{height: moderateScale(200)}} />
    </ScrollView>
   </View>
  </SafeAreaView>
 );
}
