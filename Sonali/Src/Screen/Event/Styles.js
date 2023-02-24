import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white
 },

 listContainer: {
  width: '100%',
  padding: moderateScale(5),
  backgroundColor: Colors.listColor,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  alignSelf: 'center',
  margin: 5,
  borderRadius: 4,
  flexDirection: 'row'
 },
 itemImage: {
  height: moderateScale(75),
  width: moderateScale(75),
  marginTop: '1%',
  borderRadius: 12
 },
 liveView: {
  width: '15%',
  padding: 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.red,
  alignSelf: 'flex-end',
  borderRadius: 3,
  marginTop: '1%'
 },
 description: {
  color: Colors.black,
  fontSize: 14,
  marginLeft: '7%',
  fontFamily: Fonts.ralewayRegular,
  marginTop: '2%'
 },
 itemHeading: {
  color: Colors.black,
  fontSize: 17,
  marginLeft: '7%',
  fontWeight: '600',
  fontFamily: Fonts.montserratMedium
 },
 presentView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  alignSelf: 'center'
 },
 timerView: {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: Colors.pink,
  borderRadius: 3
 },
 btnStyle: {
  width: moderateScale(90),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.pink,
  padding: 12,
  borderRadius: 20,
  borderColor: Colors.pink,
  borderWidth: 1
 },
 btnText: {
  color: Colors.white,
  fontFamily: Fonts.ralewayRegular,
  fontSize: 12
 },
 btnView: {
  flexDirection: 'row',
  width: '90%',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: '4%'
 },
 liveView: {
  width: moderateScale(50),
  height: moderateScale(20),
  backgroundColor: Colors.listColor,
  alignSelf: 'flex-end',
  justifyContent: 'center',
  alignItems: 'center'
 },
 liveStyle: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: moderateScale(40),
  alignItems: 'center'
 },
 liveText: {
  color: Colors.red,
  fontFamily: Fonts.ralewayRegular,
  fontSize: 14
 },
 pointView: {
  height: moderateScale(6),
  width: moderateScale(6),
  borderRadius: 8,
  backgroundColor: Colors.red,
  alignSelf: 'center',
  top: 2,
  left: 2
 },
 descView: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: moderateScale(220),
  alignItems: 'center',
  position: 'absolute',
  bottom: moderateScale(20)
 },
 playIcon: {
  width: moderateScale(15),
  height: moderateScale(15)
 },
 durationText: {
  color: Colors.black,
  fontFamily: Fonts.ralewayRegular,
  fontSize: 13
 },
 liveEventView: {
  height: moderateScale(100),
  width: '100%'
 },
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
 participateBtn: {
  width: moderateScale(110),
  padding: 5,
  justifyContent: 'center',
  alignItems: 'center',
  left: 13,
  marginTop: '2%',
  borderRadius: 5,
  backgroundColor: Colors.colorBlue
 },
 participateText: {
  color: Colors.white,
  fontSize: 10,
  fontFamily: Fonts.ralewayRegular
 }
});
