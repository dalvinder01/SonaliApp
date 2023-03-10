import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
 },

 profileView: {
  width: '95%',
  height: moderateScale(150),
  borderRadius: moderateScale(5),
  alignSelf: 'center',
  backgroundColor: Colors.listColor,
  elevation: 1,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 1},
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '9%',
 },
 profileIcon: {
  width: '99%',
  borderRadius: 8,
  height: moderateScale(145),
  alignSelf: 'center',
 },
 userImage: {
  width: moderateScale(130),
  height: moderateScale(130),
  borderRadius: moderateScale(65),
 },

 cameraView: {
  width: '20%',
  height: moderateScale(30),
  borderRadius: moderateScale(80),
  alignSelf: 'center',
  backgroundColor: Colors.pink,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 1,
  alignSelf: 'flex-end',
  right: moderateScale(12),
 },
 cameraIcon: {
  width: moderateScale(25),
  height: moderateScale(25),
  tintColor: Colors.white,
 },
 inputIcon: {
  width: moderateScale(22),
  height: moderateScale(22),
 },
 inputView: {
  width: '95%',
  backgroundColor: Colors.white,
  borderWidth: 1.5,
  borderColor: Colors.colorGray,
  //   elevation: 4,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 1},
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  padding: 9,
  borderRadius: 7,
  alignSelf: 'center',
  marginTop: '11%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 inputViewStyle: {
  width: '95%',
  backgroundColor: Colors.white,
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 3,
  padding: 9,
  borderRadius: 7,
  alignSelf: 'center',
  marginTop: '3%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 inputStyle: {
  width: '100%',
  justifyContent: 'center',
  height: 30,
  alignItems: 'center',
  padding: 5,
  fontFamily: Fonts.ralewayRegular,
  color: Colors.black,
  fontSize: 15,
 },
 policyText: {
  fontSize: 16,
  color: Colors.black,
  marginLeft: '4%',
  fontFamily: Fonts.montserratRegular,
 },
 logOutBtn: {
  width: '45%',
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.darkGreen,
  alignSelf: 'center',
  borderRadius: 7,
  // position:'absolute',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
 },
 btnText: {
  color: Colors.white,
  fontSize: 15,
  fontFamily: Fonts.montserratMedium,
 },
 menuIcon: {
  width: moderateScale(20),
  height: moderateScale(20),
 },
 editBtn: {
  width: moderateScale(35),
  height: moderateScale(35),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.colorGray,
  alignSelf: 'flex-end',
  position: 'absolute',
  top: '5%',
  right: 15,
  borderRadius: 20,
 },
 editText: {
  color: Colors.white,
  fontFamily: Fonts.montserratMedium,
  fontSize: 13,
  textAlign: 'center',
 },
 editIcon: {
  width: moderateScale(15),
  height: moderateScale(15),
 },
 dropdown: {
  width: '100%',
  height: moderateScale(30),
  borderColor: 'gray',
  //   borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
 },
 icon: {
  marginRight: 5,
 },
 label: {
  position: 'absolute',
  backgroundColor: 'white',
  left: 22,
  top: 8,
  zIndex: 999,
  paddingHorizontal: 8,
  fontSize: 14,
 },
 placeholderStyle: {
  fontSize: 16,
  color: Colors.black,
 },
 selectedTextStyle: {
  fontSize: 16,
  color: Colors.black,
  fontFamily: Fonts.ralewayRegular,
 },
 iconStyle: {
  width: 20,
  height: 20,
 },
 inputSearchStyle: {
  height: 40,
  fontSize: 16,
 },
 editView: {
  width: moderateScale(30),
  height: moderateScale(30),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.white,
  borderRadius: 20,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 4,
  bottom: 5,
  right: 5,
 },
 editStyle: {
  width: moderateScale(15),
  height: moderateScale(15),
 },
 dateView: {
  marginTop: '4%',
  justifyContent: 'space-around',
 },
 dateIcon: {
  width: moderateScale(22),
  height: moderateScale(22),
  right: 9,
 },
 timeView: {
  width: '95%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignSelf: 'center',
  marginTop: '4%',
 },
 innerTimeView: {
  marginTop: '4%',
  justifyContent: 'space-around',
  width: '48%',
 },
 timeIcon: {
  width: moderateScale(15),
  height: moderateScale(15),
  right: 9,
 },
});
