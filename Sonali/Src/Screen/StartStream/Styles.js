import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
import {
 responsiveScreenHeight,
 responsiveScreenWidth
} from 'react-native-responsive-dimensions';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white
 },
 videoIconView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  alignSelf: 'center'
 },
 pinBtn: {
  padding: 5,
  position: 'absolute',
  bottom: moderateScale(25),
  left: moderateScale(20),
  tintColor: Colors.pink
 },
 pinImage: {
  width: moderateScale(22),
  height: moderateScale(22),
  tintColor: Colors.pink
 },
 deleteBtn: {
  padding: 5,
  position: 'absolute',
  bottom: 25,
  right: 10,
  tintColor: Colors.pink
 },
 deleteIcon: {
  width: moderateScale(22),
  height: moderateScale(22),
  tintColor: Colors.pink
 },
 noMediaView: {
  backgroundColor: 'grey',
  height: 600,
  width: responsiveScreenWidth(90),
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
 },
 pinViewList: {
  height: responsiveScreenHeight(80),
  marginVertical: 5,
  marginHorizontal: 5
 },
 unpinDeleteBtn: {
  padding: 5,
  position: 'absolute',
  bottom: 25,
  right: 7
 },
 unpinDeleteIcon: {
  width: moderateScale(30),
  height: moderateScale(30),
  tintColor: Colors.pink
 },
 unpinIcon: {
  width: moderateScale(30),
  height: moderateScale(30),
  tintColor: Colors.pink
 },

 streamList: {
  height: '50%',
  justifyContent: 'center',
  alignItems: 'center'
 },
 joinView: {
  flex: 1,
  backgroundColor: '#F6F6FF',
  justifyContent: 'center',
  alignItems: 'center'
 },
 noMediaText: {
  fontSize: 16,
  fontFamily: Fonts.montserratRegular,
  color: Colors.black
 },
 joinIcon: {
  width: moderateScale(35),
  height: moderateScale(35),
  top: 1
 },
 cameraIcon: {
  width: moderateScale(35),
  height: moderateScale(35),
  tintColor: Colors.pink,
  top: 4
 },
 micStyle: {
  width: moderateScale(35),
  height: moderateScale(35),
  tintColor: Colors.pink
 },
 leaveIcon: {
  width: moderateScale(35),
  height: moderateScale(35),
  tintColor: Colors.pink
 },
 publishIcon: {
  width: moderateScale(30),
  height: moderateScale(30)
 },
 streamBtnView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '95%',
  alignItems: 'center',
  alignSelf: 'center'
 },
 btnStyle: {
  padding: 6
 },
 bottomBtnStyle: {
  position: 'absolute',
  bottom: moderateScale(15),
  width: '100%'
 },
 publishView: {
  width: '40%',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  position: 'absolute',
  flexDirection: 'row',
  alignSelf: 'flex-end',
  top: 15
 }
});
