import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: 'skyblue'
 },
 mainView: {
  width: moderateScale(310),
  padding: moderateScale(5),
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: Colors.white,
  marginTop: '10%',
  borderRadius: 4
 },
 heading: {
  fontSize: 17,
  color: Colors.black,
  marginTop: '8%'
 },
 listView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: moderateScale(260)
 },
 textView: {
  marginLeft: '6%',
  width: moderateScale(130)
 },
 itemName: {
  color: Colors.black,
  fontSize: 14
 },
 description: {
  color: Colors.lightBlack,
  fontSize: 12,
  marginTop: '3%'
 },
 imageStyle: {
  width: moderateScale(80),
  height: moderateScale(80),
  borderRadius: 5,
  left: 5
 }
});
