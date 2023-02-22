import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    width: '100%',
    height: moderateScale(55),
    backgroundColor: Colors.pink,
    justifyContent: 'center',
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    alignSelf:'center'
  },
  arrowTextView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  arrowStyle: {
    width: moderateScale(23),
    height: moderateScale(25),
  },
  headerText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.montserratMedium,
    left:12
  },
});
