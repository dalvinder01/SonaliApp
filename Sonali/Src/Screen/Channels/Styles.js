import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: moderateScale(7),
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 1,
    borderRadius: 4,
  },
  itemImage: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: 40,
  },
  liveView: {
    width: '55%',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 3,
    marginTop: '1%',
  },

  liveText: {
    color: Colors.black,
    fontSize: 15,
    fontFamily:Fonts.ralewayRegular
  },
});
