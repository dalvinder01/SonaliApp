import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
  justifyContent: 'center'
 },

 inputView: {
  width: '95%',
  backgroundColor: Colors.white,
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  padding: 9,
  alignSelf: 'center',
  marginTop: '11%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 inputStyle: {
  width: '85%',
  justifyContent: 'center',
  height: moderateScale(35),
  alignItems: 'center',
  padding: 5,
  borderWidth: 1,
  alignSelf: 'center',
  borderRadius: 3,
  fontFamily: Fonts.ralewayRegular
 },

 loginContainer: {
  width: '82%',
  padding: 9,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: Colors.white,
  borderRadius: 5,
  marginTop: '-12%'
 },
 loginHeading: {
  color: Colors.black,
  fontSize: 32,
  fontFamily: Fonts.montserratMedium
 },
 passwordView: {
  width: '76%',
  marginTop: '5%',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  borderWidth: 1
 },
 eyeIcon: {
  width: moderateScale(20),
  height: moderateScale(20)
 },
 forgotView: {
  width: '70%',
  padding: 12,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2%'
 },
 forgotText: {
  color: Colors.black,
  fontSize: 15,
  fontFamily: Fonts.ralewayRegular
 },
 loginBtn: {
  width: '95%',
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.pink,
  borderRadius: 3,
  marginTop: '8%'
 },
 loginText: {
  color: Colors.white,
  fontSize: 17,
  fontFamily: Fonts.ralewayMedium
 },
 accountView: {
  flexDirection: 'row',
  justifyContent: 'center',
  width: '90%'
 },
 accountText: {
  color: Colors.black,
  fontSize: 14,
  fontFamily: Fonts.ralewayRegular
 },
 signUpText: {
  color: Colors.pink,
  fontSize: 15,
  fontFamily: Fonts.ralewayMedium
 },
 loginDescription: {
  fontSize: 13,
  width: moderateScale(268),
  fontFamily: Fonts.ralewayRegular
 },
 useText: {
  color: Colors.pink,
  fontFamily: Fonts.ralewayRegular
 }
});
