import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: Colors.white
 },
 mainView: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5%'
 },
 heading: {
  color: Colors.black,
  fontSize: 20,
  marginLeft: '5%'
 },
 textView: {
  alignSelf: 'flex-start',
  marginLeft: '5%'
 },
 inputStyle: {
  padding: 4,
  width: '90%',
  height: moderateScale(50),
  backgroundColor: Colors.white,
  borderRadius: 4,
  borderWidth: 0.5,
  elevation: 4
 },
 emailText: {
  color: Colors.black,
  fontSize: 15,
  marginTop: '3%'
 },
 passwordText: {
  color: 'black',
  fontSize: 15,
  marginTop: '5%'
 },
 loginBtn: {
  width: '90%',
  padding: moderateScale(13),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.blue,
  marginTop: '12%',
  borderRadius: 5,
  elevation: 4
 },
 btnText: {
  color: Colors.white,
  fontSize: 15
 }
});
