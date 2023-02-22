import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
 },

 listContainer: {
  width: '100%',
  padding: moderateScale(7),
  backgroundColor: Colors.listColor,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  alignSelf: 'center',
  margin: 5,
  borderRadius: 4,
  flexDirection: 'row',
 },
 itemImage: {
  height: moderateScale(75),
  width: moderateScale(75),
//   marginTop: '1%',
top:8,
  borderRadius: 12,
 },
 liveView: {
  width: '15%',
  padding: 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.red,
  alignSelf: 'flex-end',
  borderRadius: 3,
  marginTop: '1%',
 },
 description: {
  color: Colors.black,
  fontSize: 14,
  marginLeft: '7%',
  fontFamily: Fonts.ralewayRegular,
 },
 itemHeading: {
  color: Colors.black,
  fontSize: 17,
  marginLeft: '7%',
  fontFamily: Fonts.montserratMedium,
 },
});
