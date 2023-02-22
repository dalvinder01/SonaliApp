import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white
 },

 listStyle: {
  width: '45%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: moderateScale(12),
  margin: 8
 },
 btnStyle: {
  backgroundColor: Colors.listColor,
  padding: 8,
  width: moderateScale(155),
  justifyContent: 'center',
  alignItems: 'center',
  margin: 4,
  borderRadius: 5
 },
 userIcon: {
  width: moderateScale(70),
  height: moderateScale(70)
 },
 backIcon: {
  width: moderateScale(30),
  height: moderateScale(30)
 },
 textView: {
  alignSelf: 'flex-start',
  width: moderateScale(80)
 },
 backBtn: {
  padding: 6,
  marginLeft: '3%'
 },
 itemText: {
  fontSize: 18,
  color: Colors.black,
  fontFamily: Fonts.montserratMedium,
  marginTop: '3%'
 },
 joinView: {
  width: '100%',
  justifyContent: 'center',
  marginTop: '9%',
  alignSelf: 'center'
 },
 joinText: {
  //   textAlign: 'center',
  fontSize: moderateScale(26),
  fontFamily: Fonts.montserratSemiBold,
  color: Colors.black,
  marginLeft: '6%',
  marginTop: '9%'
 },
 listView: {
  marginTop: '8%',
  marginLeft: '1%'
 },
 joinBtn: {
  width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: Colors.pink,
  borderWidth: 0.8,
  padding: 13,
  alignSelf: 'center',
  borderRadius: 5,
  marginTop: '10%',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 3
 },
 btnText: {
  color: Colors.black,
  fontSize: 17,
  fontFamily: Fonts.montserratMedium
 },
 radioBtn: {
  height: moderateScale(10),
  width: moderateScale(10),
  backgroundColor: Colors.pink,
  borderRadius: 8
 },
 heightStyle: {
  height: moderateScale(100)
 },
 skipView: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: moderateScale(180),
  alignItems: 'center',
  marginLeft: '9%',
  top: moderateScale(15)
 },
 skipText: {
  color: Colors.black,
  fontFamily: Fonts.ralewayRegular
 },
 viewerText: {
  color: Colors.pink,
  fontFamily: Fonts.montserratMedium
 }
});
