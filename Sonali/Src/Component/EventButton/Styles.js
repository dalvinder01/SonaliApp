import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({

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
 
 
});
