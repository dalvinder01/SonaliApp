import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
 },

 loginContainer: {
  width: '82%',
  padding: 9,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: Colors.white,
  borderRadius: 5,
 },
 loginHeading: {
  color: Colors.black,
  fontSize: 32,
  textAlign: 'center',
  marginTop: '12%',
 },
 inputContainer: {
  width: '90%',
  marginTop: '13%',
  borderWidth: 1,
  alignSelf: 'center',
  padding: 4,
  borderRadius: 7,
 },
 inputNameView: {
  width: moderateScale(60),
  height: moderateScale(20),
  justifyContent: 'center',
  position: 'absolute',
  alignItems: 'center',
  top: moderateScale(-13),
  backgroundColor: Colors.white,
  left: moderateScale(14),
 },
 loginBtn: {
  width: '50%',
  padding: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.greenBtn,
  borderRadius: 5,
  alignSelf: 'center',

  marginTop: '15%',
 },
 loginText: {
  color: Colors.white,
  fontSize: 15,
  fontFamily: Fonts.montserratMedium,
 },
 centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
 },
 modalView: {
  // margin: 3,
  width: '68%',
  backgroundColor: Colors.white,
  borderRadius: 7,
  padding: 5,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
   width: 0,
   height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
 },
 button: {
  borderRadius: 5,
  width: '40%',
  padding: 10,
  elevation: 2,
  marginTop: '12%',
 },

 buttonClose: {
  backgroundColor: Colors.pink,
 },
 textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
 },
 modalText: {
  textAlign: 'center',
  marginTop: '6%',
  fontSize: 23,
 },
 inputStyle: {
  width: '85%',
  justifyContent: 'center',
  height: moderateScale(38),
  alignItems: 'center',
  padding: 5,
  borderWidth: 0.7,
  alignSelf: 'center',
  borderRadius: 6,
  marginTop: '9%',
  fontFamily: Fonts.ralewayRegular,
 },
 innerContainer: {
  alignSelf: 'center',
  flexDirection: 'row',
  width: '92%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginTop: '5%',
  marginLeft: '3%',
 },
 checkBtn: {
  width: moderateScale(20),
  height: moderateScale(20),
  borderWidth: 1.5,
  borderRadius: 5,
  borderColor: Colors.pink,
  justifyContent: 'center',
  alignItems: 'center',
 },
 tickIcon: {
  width: moderateScale(16),
  height: moderateScale(16),
 },
 policyText: {
  fontSize: 12,
  color: Colors.black,
 },
 btnText: {
  color: Colors.pink,
  fontSize: 12,
 },
 heading: {
  fontSize: 27,
  textAlign: 'center',
  color: Colors.black,
  fontFamily: Fonts.montserratMedium,
 },
 iconStyle: {
  width: moderateScale(100),
  height: moderateScale(100),
  alignSelf: 'center',
  marginTop: '9%',
 },
 innerText: {
  fontSize: 15,
  textAlign: 'center',
  color: Colors.black,
  fontFamily: Fonts.ralewayMedium,
 },
 forgotInput: {
  width: '90%',
  marginTop: '13%',
  alignSelf: 'center',
 },
 otpInput: {
  width: '90%',
  marginTop: '13%',
  alignSelf: 'center',
 },
 resetInput: {
  width: '90%',
  marginTop: '1%',
  alignSelf: 'center',
 },
 backBtn: {
  padding: 5,
  marginLeft: '8%',
  //   top: '4%',
  marginTop: '8%',
 },
 backIcon: {
  width: moderateScale(24),
  height: moderateScale(24),
 },
});
