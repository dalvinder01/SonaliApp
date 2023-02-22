import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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

  loginContainer: {
    width: '82%',
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  loginHeading: {
    color: Colors.black,
    fontSize: 32,
    textAlign: 'center',
    marginTop: '12%',
    fontFamily: Fonts.montserratMedium,
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
});
