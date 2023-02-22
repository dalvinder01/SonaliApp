import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
 },

 overlayStyle: {
  backgroundColor: '#0006',
  alignItems: 'center',
  justifyContent: 'space-around',
 },
 videoIcon: {
  width: moderateScale(50),
  height: moderateScale(50),
 },
 icon: {
  color: 'white',
  flex: 1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 25,
 },
 titleView: {
  width: '100%',
  padding: 5,
  justifyContent: 'center',
  backgroundColor: Colors.listColor,
 },
 title: {
  color: Colors.black,
  fontSize: 17,
  fontFamily: Fonts.montserratMedium,
  marginLeft: '3%',
 },
 description: {
  color: Colors.black,
  fontSize: 14,
  fontFamily: Fonts.ralewayRegular,
  marginLeft: '3%',
 },
 judgeView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '95%',
 },
 likeIcon: {
  width: moderateScale(20),
  height: moderateScale(12),
 },
 dislikeIcon: {
  width: moderateScale(20),
  height: moderateScale(12),
  top: 2,
 },
 likeView: {
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  width: '95%',
  marginLeft: '4%',
 },
 likeIconView: {
  flexDirection: 'row',
  width: moderateScale(50),
  justifyContent: 'space-between',
 },
 chatView: {
  width: '95%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
 },
 chatInput: {
  width: '82%',
  backgroundColor: Colors.lightPink,
  alignSelf: 'center',
  borderRadius: 7,
  height: moderateScale(45),
  justifyContent: 'center',
  fontFamily: Fonts.ralewayRegular,
 },
 sendView: {
  width: moderateScale(40),
  height: moderateScale(40),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.lightPink,
  borderRadius: 25,
 },
 sendIcon: {
  width: moderateScale(25),
  height: moderateScale(25),
 },
 chatList: {
  width: '70%',
  // height: moderateScale(30),
  padding: 7,
  justifyContent: 'center',
  backgroundColor: Colors.lightPink,
  margin: 6,
  borderRadius: 16,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
 },
 chatText: {
  color: Colors.black,
  fontFamily: Fonts.montserratMedium,
  marginLeft: '6%',
 },
 chatListView: {
  width: '100%',
  marginTop: '5%',
  height: moderateScale(100),
  // backgroundColor:'red'
 },
});
