import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.transparent
 },
 modalView: {
  //   flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '95%',
  padding: moderateScale(12),
  backgroundColor: Colors.white,
  shadowColor: '#000',
  shadowOffset: {
   width: 0,
   height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  borderRadius: 12
 },
 deleteBtn: {
  width: moderateScale(300),
  padding: 6,
  justifyContent: 'center',
  alignSelf: 'center',
  backgroundColor: Colors.pink,
  borderRadius: 7,
  marginTop: '5%'
 },

 textStyle: {
  color: 'white',
  fontFamily: Fonts.montserratMedium,
  textAlign: 'center'
 },
 uploadView: {
  width: '95%',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: Colors.white,
  flexDirection: 'row',
  marginTop: '2%'
 },
 uploadBtn: {
  padding: 12,
  backgroundColor: Colors.listColor,
  borderRadius: 7,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.4,
  shadowRadius: 2,
  elevation: 2,
  alignItems: 'center',
  justifyContent: 'center',
  width: moderateScale(90)
 },
 uploadIcon: {
  width: moderateScale(25),
  height: moderateScale(25)
 },
 uploadText: {
  fontSize: 12,
  fontFamily: Fonts.montserratRegular,
  color: Colors.black
 },
 inputView: {
  width: '65%',
  height: moderateScale(35),
  borderRadius: 7,
  borderBottomWidth: 0,
  backgroundColor: Colors.listColor,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.4,
  shadowRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 2
 },
 inputStyle: {
  width: '90%',
  height: moderateScale(35),
  borderRadius: 7,
  borderBottomWidth: 0
 }
});
