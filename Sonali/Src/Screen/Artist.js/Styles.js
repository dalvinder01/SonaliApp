import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  padding: 6,
 },

 plalistContainer: {
  // flexDirection: 'row',
  width: '45%',
  padding: moderateScale(2),
  backgroundColor: Colors.white,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  margin: 8,
  borderRadius: 7,
 },
 djlistContainer: {
  // flexDirection: 'row',
  width: moderateScale(160),
  padding: moderateScale(2),
  backgroundColor: Colors.white,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  margin: 8,
  borderRadius: 7,
 },
 columnList: {
  width: '100%',
  height: moderateScale(120),
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.white,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
 },
 columnImage: {
  width: moderateScale(120),
  height: moderateScale(120),
  borderRadius: 2,
 },
 columnView: {
  alignSelf: 'flex-start',
  marginTop: '3%',
  width: '60%',
 },
 itemText: {
  color: Colors.black,
  fontSize: 15,
  fontFamily: Fonts.montserratMedium,
 },
 headingText: {
  color: Colors.black,
  fontFamily: Fonts.montserratRegular,
  fontSize: 19,
  marginLeft: '4%',
  marginTop: '4%',
 },
 btnView: {
  width: '100%',
  flexDirection: 'row',
  backgroundColor: Colors.white,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 btnStyle: {
  width: moderateScale(150),
  padding: 7,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomColor: Colors.pink,
  borderBottomWidth: 1,
 },
 djliveView: {
  width: moderateScale(50),
  padding: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.red,
  alignSelf: 'flex-end',
  borderRadius: 4,
  position: 'absolute',
  bottom: 0,
  right: -15,
 },
 liveText: {
  color: Colors.white,
  fontSize: 12,
  fontFamily: Fonts.ralewayRegular,
 },
 socialView: {
  width: '80%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 5,
  alignItems: 'center',
  alignSelf: 'flex-start',
  marginTop: '5%',
 },
 socialIcon: {
  width: moderateScale(20),
  height: moderateScale(20),
 },
});
