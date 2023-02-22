import React from 'react';
import {
 Text,
 View,
 Image,
 TouchableOpacity,
 Modal,
 TextInput
} from 'react-native';
import Styles from './Styles';
import { UPLOAD } from '../../Constants/Images';
import Colors from '../../Constants/Colors';
const EventButton = (props) => {
 return (
  <View>
   <View style={Styles.btnView}>
    <TouchableOpacity
     onPress={props.onupcomingPress}
     style={[
      Styles.btnStyle,
      {
       backgroundColor: props.upcomingColor == 0 ? Colors.pink : Colors.white
      }
     ]}>
     <Text
      allowFontScaling={false}
      style={[
       Styles.btnText,
       { color: props.upcomingText == 0 ? Colors.white : Colors.black }
      ]}>
      Upcoming
     </Text>
    </TouchableOpacity>
    <TouchableOpacity
     onPress={props.onlivePress}
     style={[
      Styles.btnStyle,
      {
       backgroundColor: props.liveColor == 1 ? Colors.pink : Colors.white
      }
     ]}>
     <Text
      allowFontScaling={false}
      style={[
       Styles.btnText,
       { color: props.liveText == 1 ? Colors.white : Colors.black }
      ]}>
      Live
     </Text>
    </TouchableOpacity>
    <TouchableOpacity
     onPress={props.oncompletePress}
     style={[
      Styles.btnStyle,
      {
       backgroundColor: props.completeColor == 2 ? Colors.pink : Colors.white
      }
     ]}>
     <Text
      allowFontScaling={false}
      style={[
       Styles.btnText,
       { color: props.completeText == 2 ? Colors.white : Colors.black }
      ]}>
      Completed
     </Text>
    </TouchableOpacity>
   </View>
  </View>
 );
};
export default EventButton;
