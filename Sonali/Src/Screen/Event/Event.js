import React, { useState, useEffect } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 FlatList,
 TouchableOpacity,
 ImageBackground,
 KeyboardAvoidingView
} from 'react-native';
import Styles from './Styles';
import { NOTIFICATION, PLAY, THEME } from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import { createMeeting, validateMeeting } from '../../Services/StreamApi';
import Fonts from '../../Constants/Fonts';
import moment from 'moment';
import { moderateScale } from 'react-native-size-matters';
import ParticipateView from '../../Component/ParticipateView/ParticipateView';
import EventButton from '../../Component/EventButton/EventButton';
import { setAdjustNothing,setAdjustResize } from 'rn-android-keyboard-adjust';

export default function Event() {
 const navigation = useNavigation();
 const [isStatus, SetIsStatus] = useState(0);
 const [meetId, setMeetId] = useState('');
 const [manualId, setmanualId] = useState('');
 const [modalVisible, setModalVisible] = useState(false);
 const [isJoined, setJoined] = useState(false);
 const [loader, setLoader] = useState(false);
 const DATA = [
  {
   id: '1',
   title: 'Event Name and Date',
   description:
    'Make sure that you experinced complete app making one is simple and only takes a moment.'
  },
  {
   id: '2',
   title: 'Event Name and Date',
   description:
    'Make sure that you experinced complete app making one is simple and only takes a moment.'
  }
 ];
 const [totalDuration, setTotalDuration] = useState(0);

 useEffect(() => {
  // Coundown timer for a given expiry date-time
  let date = moment().format('YYYY-MM-DD hh:mm:ss');

  // Getting the current date-time
  // You can set your own date-time
  let expirydate = '2023-03-01 05:00:45';

  let diffr = moment.duration(moment(expirydate).diff(moment(date)));
  // Difference of the expiry date-time
  var hours = parseInt(diffr.asHours());
  var minutes = parseInt(diffr.minutes());
  var seconds = parseInt(diffr.seconds());

  // Converting in seconds
  var d = hours * 60 * 60 + minutes * 60 + seconds;

  // Settign up the duration of countdown
  setTotalDuration(d);
 }, []);
 const getMeetingId = async () => {
  setLoader(true);
  await createMeeting().then((res) => {
   setMeetId(res);
   console.warn('id hook', res);
   setLoader(false);
   navigation.navigate('StartStream', {
    meetingId: res
   });
  });
 };
 const enterToMeeting = async () => {
  console.warn('id before', meetId);
  await validateMeeting(manualId).then((res) => {
   console.warn('id hook', res.roomId);
   navigation.navigate('StartStream', {
    meetingId: res?.roomId
   });
  });
 };
 useEffect(() => {
  setAdjustNothing();
 }, []);
 const UpcomingList = ({ item, index }) => {
  return (
   <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
    <View style={Styles.listContainer}>
     <ImageBackground
      style={[
       Styles.itemImage,
       { alignItems: 'center', justifyContent: 'center' }
      ]}
      source={THEME}>
      <Image style={Styles.playIcon} source={PLAY} />
     </ImageBackground>
     <View style={{ width: '69%' }}>
      <Text allowFontScaling={false} style={Styles.itemHeading}>
       {item.title}
      </Text>
      <Text
       numberOfLines={2}
       allowFontScaling={false}
       style={Styles.description}>
       {item.description}
      </Text>
      <View style={Styles.presentView}>
       <Text
        numberOfLines={2}
        allowFontScaling={false}
        style={Styles.description}>
        Presented By:-
       </Text>
       <View style={{ marginTop: '4%' }}>
        {/* <CountDown
      style={{padding:4 }}
       digitStyle={{ backgroundColor: Colors.pink }}
       digitTxtStyle={{ color: Colors.white }}
       separatorStyle={{ backgroundColor:'red' }}
       until={totalDuration}
       //duration of countdown in seconds
       timetoShow={('H', 'M')}
       //formate to show
       onFinish={() => alert('finished')}
       //on Finish call
       onPress={() => alert('hello')}
       //on Press call
       size={9}
      /> */}
       </View>
       <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
         width: moderateScale(110),
         padding: 5,
         justifyContent: 'center',
         alignItems: 'center',
         left: 13,
         marginTop: '2%',
         borderRadius: 5,
         backgroundColor: Colors.colorBlue
        }}>
        <Text
         style={{
          color: Colors.white,
          fontSize: 10,
          fontFamily: Fonts.ralewayRegular
         }}>
         Tap To Participate
        </Text>
       </TouchableOpacity>
      </View>
     </View>
    </View>
   </KeyboardAvoidingView>
  );
 };
 const CompletedList = ({ item, index }) => {
  return (
   <View style={Styles.listContainer}>
    <ImageBackground
     style={[
      Styles.itemImage,
      { alignItems: 'center', justifyContent: 'center' }
     ]}
     source={THEME}>
     <TouchableOpacity style={{ padding: 7 }}>
      <Image style={Styles.playIcon} source={PLAY} />
     </TouchableOpacity>
    </ImageBackground>
    <View style={{ width: '69%' }}>
     <Text allowFontScaling={false} style={Styles.itemHeading}>
      {item.title}
     </Text>
     <Text
      numberOfLines={2}
      allowFontScaling={false}
      style={Styles.description}>
      {item.description}
     </Text>
     <Text
      numberOfLines={2}
      allowFontScaling={false}
      style={Styles.description}>
      Presented By:-
     </Text>
    </View>
   </View>
  );
 };
 const upComingView = () => {
  return (
   <View style={{ width: '100%', marginTop: '5%' }}>
    <FlatList
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}
     data={DATA}
     renderItem={UpcomingList}
     keyExtractor={(item) => item.id}
    />
   </View>
  );
 };
 const completeView = () => {
  return (
   <View style={{ width: '100%', marginTop: '5%' }}>
    <FlatList
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}
     data={DATA}
     renderItem={CompletedList}
     keyExtractor={(item) => item.id}
    />
   </View>
  );
 };
 const LiveEventList = ({ item, index }) => {
  return (
   <View style={[Styles.listContainer]}>
    <TouchableOpacity
     onPress={() => getMeetingId()}
     style={Styles.liveEventView}>
     <ImageBackground style={Styles.liveEventView} source={THEME}>
      <View style={Styles.liveView}>
       <View style={Styles.liveStyle}>
        <Text allowFontScaling={false} style={Styles.liveText}>
         Live
        </Text>
        <View style={Styles.pointView} />
       </View>
      </View>
      <View style={Styles.descView}>
       <View>
        <Image style={Styles.playIcon} source={PLAY} />
       </View>
       <Text allowFontScaling={false} style={Styles.durationText}>
        Event Name and Duration
       </Text>
      </View>
     </ImageBackground>
    </TouchableOpacity>
   </View>
  );
 };
 const liveEventView = () => {
  return (
   <View style={{ width: '100%', marginTop: '5%' }}>
    <FlatList
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}
     data={DATA}
     renderItem={LiveEventList}
     keyExtractor={(item) => item.id}
    />
   </View>
  );
 };
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    onNotificationPress={() => navigation.navigate('Profile')}
    headerHeading={'Event'}
    rightImage={NOTIFICATION}
   />
   <View style={Styles.container}>
    <EventButton
     onupcomingPress={() => SetIsStatus(0)}
     upcomingColor={isStatus}
     upcomingText={isStatus}
     onlivePress={() => SetIsStatus(1)}
     liveColor={isStatus}
     liveText={isStatus}
     oncompletePress={() => SetIsStatus(2)}
     completeColor={isStatus}
     completeText={isStatus}
    />
    {isStatus == 1
     ? liveEventView()
     : isStatus == 2
     ? completeView()
     : upComingView()}
    <ParticipateView
     modalVisible={modalVisible}
     closeModal={() => setModalVisible(!modalVisible)}
    />
   </View>
  </SafeAreaView>
 );
}
