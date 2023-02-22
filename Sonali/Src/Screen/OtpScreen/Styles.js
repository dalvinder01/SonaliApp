import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white
  //   justifyContent: 'center',
 },
 loginBtn: {
  width: '93%',
  padding: 17,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.pink,
  borderRadius: 3,
  marginTop: '15%'
 },
 loginText: {
  color: Colors.white,
  fontSize: 19,
  fontFamily: Fonts.ralewayMedium
 },
 topView: {
  marginTop: '8%',
  marginLeft: '4%'
 },
 headingText: {
  fontSize: 25,
  fontFamily: Fonts.montserratBold,
  width: '75%',
  marginTop: '8%',
  marginLeft: '2%',
  color: Colors.black
 },
 inputView: {
  marginTop: '18%',
  width: '100%',
  marginLeft: '3%',
  alignSelf: 'center',
  justifyContent: 'center'
 },
 backIcon: {
  width: moderateScale(30),
  height: moderateScale(30)
 },
 phoneText: {
  fontSize: 12,
  color: Colors.black,
  fontFamily: Fonts.montserratRegular,
  marginTop: '5%',
  width: '92%'
 },
 inputStyle: {
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.white,
  height: moderateScale(40),
  fontFamily:Fonts.montserratRegular,
  fontSize:20
 },
 viewInput: {
  width: '92%',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.white,
  height: moderateScale(50),
  marginTop: '3%'
 },
 passwordView: {
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  alignSelf: 'center'
 },
 eyeIcon: {
  width: moderateScale(20),
  height: moderateScale(20)
 },
 hideBtn: {
  position: 'absolute',
  right: moderateScale(50),
  bottom: 16
 }
});
