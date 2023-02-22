import React, { useState, useEffect } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 ScrollView,
 ImageBackground,
 TextInput,
 Alert
} from 'react-native';
import Styles from './Styles';
import { DATE, EVENT, PENCIL, PROFILE, TIMEICON } from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import { moderateScale } from 'react-native-size-matters';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import { setAdjustNothing } from 'rn-android-keyboard-adjust';

export default function CreateEvent() {
 const navigation = useNavigation();
 const [value, setValue] = useState(null);
 const [isFocus, setIsFocus] = useState(false);
 const [judgeValue, setjudgeValue] = useState(null);
 const [judgeisFocus, setjudgeisFocuss] = useState(false);
 const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 const [isStartTimeOpen, setStartTimeOpen] = useState(false);
 const [isEndTimeOpen, setEndTimeOpen] = useState(false);
 const [date, setDate] = useState('');
 const [startTime, setStartTime] = useState('');
 const [endTime, setEndTime] = useState('');
 const [totalDuration, settotalDuration] = useState('');
 const [avatarSource, setAvatarSource] = useState('');
 const [uriResponse, seturiResponse] = useState('');
 const _pickImagefromCamera = () => {
  ImagePicker.openCamera({
   width: 400,
   height: 300,
   cropping: true,
   includeBase64: true,
   freeStyleCropEnabled: true
  }).then((response) => {
   let source = { uri: response.path };
   setAvatarSource(source);
   seturiResponse(response.path);
   console.warn('mkm', avatarSource);
   console.warn('uri', uriResponse);
  });
 };
 const _pickImage = () => {
  ImagePicker.openPicker({
   width: 300,
   height: 400,
   cropping: true,
   includeBase64: true,
   freeStyleCropEnabled: true
  }).then((response) => {
   let source = { uri: response.path };
   setAvatarSource(source);
   seturiResponse(response.path);
   console.warn('mkm', avatarSource);
   console.warn('uri', uriResponse);
  });
 };
 const customAlert = () => {
  Alert.alert(
   '',
   'Choose Image From',
   [
    {
     text: 'Cancel',
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel'
    },
    {
     text: 'Take Photo',
     onPress: () => _pickImagefromCamera()
    },
    { text: 'Choose from Gallery', onPress: () => _pickImage() }
   ],
   { cancelable: false }
  );
 };
 useEffect(() => {
  setAdjustNothing();
 }, []);
 const showDatePicker = () => {
  setDatePickerVisibility(true);
 };
 const hideDatePicker = () => {
  setDatePickerVisibility(false);
 };
 const handleConfirm = (date) => {
  console.warn('A date has been picked: ', date);
  let myDate = moment(date).format('DD-MM-YYYY');
  setDate(myDate);
  hideDatePicker();
 };
 const showStartTimePicker = () => {
  setStartTimeOpen(true);
 };
 const hideStartTimePicker = () => {
  setStartTimeOpen(false);
 };
 const confirmStartTime = (time) => {
  console.warn('A date has been picked: ', time);
  let myTime = moment(time).format('HH:mm ');
  setStartTime(myTime);
  hideStartTimePicker();
 };
 const showEndTimePicker = () => {
  setEndTimeOpen(true);
 };
 const hideEndTimePicker = () => {
  setEndTimeOpen(false);
 };
 const confirmEndTime = (time) => {
  console.warn('A date has been picked: ', time);
  let myTime = moment(time).format('HH:mm ');
  setEndTime(myTime);
  const myStartTime = moment(startTime, 'HH:mm:ss');
  const myEndTime = moment(myTime, 'HH:mm:ss');
  // calculate total duration
  const duration = moment.duration(myEndTime.diff(myStartTime));
  // duration in hours
  const hours = parseInt(duration.asHours());
  // duration in minutes
  const minutes = parseInt(duration.asMinutes()) % 60;
  console.warn(hours + ' hour and ' + minutes + ' minutes.');
  settotalDuration(hours + ' hour and ' + minutes + ' minutes.');
  hideEndTimePicker();
 };
 const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' }
 ];
 const judgeData = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' }
 ];
 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    headerHeading={'Create Event'}
    notificationTrue={true}
    rightStyle={Styles.menuIcon}
   />
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.container}>
     <View style={Styles.profileView}>
      {avatarSource == '' ? (
       <ImageBackground style={Styles.profileIcon} source={EVENT}>
        <TouchableOpacity onPress={() => customAlert()} style={Styles.editView}>
         <Image style={Styles.editStyle} source={PENCIL} />
        </TouchableOpacity>
       </ImageBackground>
      ) : (
       <ImageBackground
        style={Styles.profileIcon}
        source={{ uri: uriResponse }}>
        <TouchableOpacity onPress={() => customAlert()} style={Styles.editView}>
         <Image style={Styles.editStyle} source={PENCIL} />
        </TouchableOpacity>
       </ImageBackground>
      )}
     </View>
     <View style={Styles.inputView}>
      <TextInput
       placeholder="Event Theme"
       allowFontScaling={false}
       placeholderTextColor={Colors.black}
       style={Styles.inputStyle}
      />
     </View>
     <View style={[Styles.inputView, Styles.dateView]}>
      <Text
       allowFontScaling={false}
       placeholderTextColor={Colors.black}
       style={[Styles.inputStyle, { left: 12 }]}>
       {date !== '' ? date : 'Date'}
      </Text>
      <TouchableOpacity onPress={showDatePicker} style={{ padding: 5 }}>
       <Image style={Styles.dateIcon} source={DATE} />
      </TouchableOpacity>
      <DateTimePickerModal
       isVisible={isDatePickerVisible}
       mode="date"
       onConfirm={handleConfirm}
       onCancel={hideDatePicker}
      />
     </View>
     <View style={Styles.timeView}>
      <View style={[Styles.inputView, Styles.innerTimeView]}>
       <Text
        allowFontScaling={false}
        placeholderTextColor={Colors.black}
        style={[Styles.inputStyle, { left: 9 }]}>
        {startTime !== '' ? startTime : 'Start Time'}
       </Text>
       <TouchableOpacity onPress={showStartTimePicker} style={{ padding: 5 }}>
        <Image style={Styles.timeIcon} source={TIMEICON} />
       </TouchableOpacity>
       <DateTimePickerModal
        isVisible={isStartTimeOpen}
        mode="time"
        onConfirm={confirmStartTime}
        onCancel={hideStartTimePicker}
       />
      </View>
      <View style={[Styles.inputView, Styles.innerTimeView]}>
       <Text
        allowFontScaling={false}
        placeholderTextColor={Colors.black}
        style={[Styles.inputStyle, { left: 9 }]}>
        {endTime !== '' ? endTime : 'End Time'}
       </Text>
       <TouchableOpacity onPress={showEndTimePicker} style={{ padding: 5 }}>
        <Image style={Styles.timeIcon} source={TIMEICON} />
       </TouchableOpacity>
       <DateTimePickerModal
        isVisible={isEndTimeOpen}
        mode="time"
        onConfirm={confirmEndTime}
        onCancel={hideEndTimePicker}
       />
      </View>
     </View>
     <View style={[Styles.inputView]}>
      <Text allowFontScaling={false} style={Styles.inputStyle}>
       {totalDuration !== '' ? totalDuration : 'Event Duration'}
      </Text>
     </View>
     <View style={[Styles.inputView, { marginTop: '4%' }]}>
      <Dropdown
       style={[Styles.dropdown, isFocus && { borderColor: 'blue' }]}
       placeholderStyle={Styles.placeholderStyle}
       selectedTextStyle={Styles.selectedTextStyle}
       iconStyle={Styles.iconStyle}
       data={data}
       maxHeight={moderateScale(200)}
       labelField="label"
       valueField="value"
       placeholder={!isFocus ? 'Performance Count' : '...'}
       value={value}
       onFocus={() => setIsFocus(true)}
       onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
       }}
      />
     </View>
     <View style={[Styles.inputView, { marginTop: '4%' }]}>
      <Dropdown
       style={[Styles.dropdown, judgeisFocus && { borderColor: 'blue' }]}
       placeholderStyle={Styles.placeholderStyle}
       selectedTextStyle={Styles.selectedTextStyle}
       iconStyle={Styles.iconStyle}
       data={judgeData}
       maxHeight={moderateScale(200)}
       labelField="label"
       valueField="value"
       placeholder={!judgeisFocus ? 'No. of Judges' : '...'}
       value={judgeValue}
       onFocus={() => setjudgeisFocuss(true)}
       onChange={(item) => {
        setjudgeValue(item.value);
        setjudgeisFocuss(false);
       }}
      />
     </View>
     <View style={{ height: moderateScale(50) }} />
     <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[Styles.logOutBtn]}>
      <Text allowFontScaling={false} style={[Styles.btnText]}>
       Create
      </Text>
     </TouchableOpacity>
    </View>
    <View style={{ height: moderateScale(30) }} />
   </ScrollView>
  </SafeAreaView>
 );
}
