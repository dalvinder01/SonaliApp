import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white
 },

 profileView: {
  width: '39%',
  height: moderateScale(140),
  borderRadius: moderateScale(120),
  alignSelf: 'center',
  backgroundColor: Colors.white,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '14%'
 },
 profileIcon: {
  width: '35%',
  height: moderateScale(55)
 },
 userImage: {
  width: moderateScale(130),
  height: moderateScale(130),
  borderRadius: moderateScale(65)
 },

 cameraView: {
  width: '20%',
  height: moderateScale(30),
  borderRadius: moderateScale(80),
  alignSelf: 'center',
  backgroundColor: Colors.pink,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 1,
  alignSelf: 'flex-end',
  right: moderateScale(12)
 },
 cameraIcon: {
  width: moderateScale(25),
  height: moderateScale(25),
  tintColor: Colors.white
 },
 inputIcon: {
  width: moderateScale(22),
  height: moderateScale(22)
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
  borderRadius: 22,
  alignSelf: 'center',
  marginTop: '11%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 inputStyle: {
  width: '100%',
  justifyContent: 'center',
  height: 30,
  alignItems: 'center',
  padding: 5,
  color: Colors.black,
  fontFamily: Fonts.montserratRegular
 },
 policyText: {
  fontSize: 16,
  color: Colors.black,
  marginLeft: '4%',
  fontFamily: Fonts.montserratRegular
 },
 logOutBtn: {
  width: '90%',
  padding: 13,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.red,
  alignSelf: 'center',
  borderRadius: 12
  //   marginTop: '46%',
 },
 btnText: {
  color: Colors.white,
  fontSize: 15
 },
 
 menuIcon: {
  width: moderateScale(20),
  height: moderateScale(20)
 },
 editBtn: {
  width: moderateScale(50),
  padding: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.pink,
  alignSelf: 'flex-end',
  position: 'absolute',
  top: '5%',
  right: 12,
  borderRadius: 5
 },
 editText: {
  color: Colors.white,
  fontFamily: Fonts.montserratMedium,
  fontSize: 13,
  textAlign: 'center'
 }
});
