import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
 },

 innerText: {
  color: Colors.black,
  fontSize: 14,
  fontFamily: Fonts.ralewayRegular,
 },
 inputContainer: {
  width: '90%',
  marginTop: '13%',
  borderWidth: 1,
  alignSelf: 'center',
  padding: 4,
  borderRadius: 7,
 },
 inputNameView: {
  width: moderateScale(58),
  height: moderateScale(20),
  justifyContent: 'center',
  position: 'absolute',
  alignItems: 'center',
  top: moderateScale(-13),
  backgroundColor: Colors.white,
  left: moderateScale(14),
 },
 passwordView: {
  width: '85%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
 },
 inputStyle: {
  width: '85%',
  justifyContent: 'center',
  height: moderateScale(35),
  alignItems: 'center',
  padding: 5,
  alignSelf: 'center',
  borderRadius: 3,
 },
 loginBtn: {
    width: '55%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.greenBtn,
    borderRadius: 3,
    alignSelf:'center',
    marginTop:'15%',
    borderRadius:7
   },
   loginText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.ralewayMedium,
   },
});
