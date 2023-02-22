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

 listContainer: {
  flexDirection: 'row',
  width: '100%',
  padding: moderateScale(7),
  backgroundColor: Colors.white,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'center',
  //   margin: 3,
  borderRadius: 4
 },
 listMainContainer: {
  width: '100%',
  backgroundColor: Colors.white,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  // margin: 3,
  borderRadius: 4
 },
 plalistContainer: {
  // flexDirection: 'row',
  width: '40%',
  padding: moderateScale(2),
  backgroundColor: Colors.white,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  margin: 8,
  borderRadius: 7
 },
 itemImage: {
  height: moderateScale(70),
  width: moderateScale(70),
  borderRadius: 9
 },
 liveView: {
  width: '55%',
  padding: 2,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'flex-end',
  borderRadius: 3,
  marginTop: '1%'
 },

 liveText: {
  color: Colors.black,
  fontSize: 15,
  fontFamily: Fonts.montserratMedium
 },
 channelView: {
  marginTop: '4%',
  width: moderateScale(100),
  height: moderateScale(100),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: moderateScale(70),
  elevation: 2,
  backgroundColor: Colors.white,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  alignSelf: 'center'
 },
 joinView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '50%',
  padding: 5,
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: '2%'
 },
 pointView: {
  width: moderateScale(8),
  height: moderateScale(8),
  backgroundColor: Colors.black,
  borderRadius: 40
 },
 leaveBtn: {
  width: '80%',
  backgroundColor: Colors.colorGray,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  padding: 8,
  borderRadius: 18,
  marginTop: '9%'
 },
 btnView: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  alignSelf: 'center',
  marginTop: '7%'
 },
 btnStyle: {
  width: '40%',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 5
 },
 btnText: {
  color: Colors.black,
  fontSize: 17,
  fontFamily: Fonts.montserratMedium
 },
 descriptionView: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8
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
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2
 },
 columnImage: {
  width: '100%',
  height: moderateScale(120),
  borderRadius: 2
 },
 columnView: {
  alignSelf: 'flex-start',
  alignItems: 'center',
  marginTop: '3%'
 },
 aboutView: {
  alignSelf: 'flex-start'
 },
 aboutDate: {
  color: Colors.black,
  marginTop: '7%',
  fontFamily: Fonts.ralewayRegular
 },
 songView: {
  justifyContent: 'center',
  width: moderateScale(100),
  alignItems: 'center'
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
 topBtnText: {
  color: Colors.white,
  fontFamily: Fonts.montserratMedium,
  fontSize: 13
 },
 btnView: {
  flexDirection: 'row',
  width: '60%',
  justifyContent: 'space-between',
  alignItems: 'center',
  //   alignSelf: 'center',
  marginTop: '6%',
  marginLeft: '6%'
 },
 menuBtn: {
  padding: 5,
  bottom: moderateScale(14)
 },
 menuIcon: {
  width: moderateScale(18),
  height: moderateScale(18)
 },
 uploadBtn: {
  backgroundColor: Colors.pink,
  width: moderateScale(130),
  padding: 13,
  justifyContent: 'center',
  alignItems: 'center',
  bottom: 12,
  alignSelf: 'flex-end',
  marginRight: '8%',
  borderRadius: 5
 },
 uploadText: {
  fontFamily: Fonts.montserratMedium,
  fontSize: 16,
  color: Colors.white
 },
 centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22
 },
 modalView: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: moderateScale(300),
  height: moderateScale(120),
  backgroundColor: Colors.white,
  shadowColor: '#000',
  shadowOffset: {
   width: 0,
   height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  borderRadius:12
 },
 deleteBtn: {
  width: moderateScale(70),
  padding: 6,
  justifyContent: 'center',
  alignSelf: 'center',
  backgroundColor: Colors.red,
  borderRadius: 7
 },

 textStyle: {
  color: 'white',
  fontFamily:Fonts.montserratMedium,
  textAlign: 'center'
 }
});
