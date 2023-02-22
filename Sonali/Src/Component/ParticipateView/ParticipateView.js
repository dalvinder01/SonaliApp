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
const ParticipateView = (props) => {
 return (
  <View>
   <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
    <View style={Styles.centeredView}>
     <View style={Styles.modalView}>
      <View style={Styles.uploadView}>
       <TouchableOpacity style={Styles.uploadBtn}>
        <Image style={Styles.uploadIcon} source={UPLOAD} />
        <Text style={Styles.uploadText}>Upload Clip</Text>
       </TouchableOpacity>
       <View style={Styles.inputView}>
        <TextInput
         placeholder="write message..."
         placeholderTextColor={Colors.black}
         style={Styles.inputStyle}
        />
       </View>
      </View>

      <TouchableOpacity style={[Styles.deleteBtn]} onPress={props.closeModal}>
       <Text style={Styles.textStyle}>Send Request</Text>
      </TouchableOpacity>
     </View>
    </View>
   </Modal>
  </View>
 );
};
export default ParticipateView;
