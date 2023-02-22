import React, { useState, useEffect } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 FlatList,
 TouchableOpacity,
 ScrollView,
 Alert
} from 'react-native';
import Styles from './Styles';
import {
 ADDEVENT,
 ARTISTICON,
 DJMAN,
 EVENT,
 EVENTICON,
 HEADPHONE,
 JUDGEICON,
 NOTIFICATION
} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../Constants/Fonts';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {
 const [userType, setuserType] = useState('');

 const navigation = useNavigation();
 const DATA = [
  {
   id: '1',
   title: 'Live'
  },
  {
   id: '1',
   title: 'Live'
  }
 ];
 const getTypeData = async () => {
  let type = await AsyncStorage.getItem('userType');
  console.warn('check', type);
  setuserType(type);
 };

 async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
   console.log('Authorization status:', authStatus);
  }
 }
 const getFCMToken = async () => {
  try {
   await messaging().registerDeviceForRemoteMessages();
   console.log('Device registered for remote messages');

   // Wait for registration to complete before getting the initial FCM token
   messaging().onTokenRefresh(async (token) => {
    console.log('FCM token refreshed: ', token);
   });

   messaging().onMessage(async (remoteMessage) => {
    console.log('FCM message received:', remoteMessage);
   });

   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('FCM message received while in background:', remoteMessage);
   });

   const token = await messaging().getToken();
   console.log('FCM token:', token);
  } catch (e) {
   console.log(e);
  }
 };
 useEffect(() => {
  getTypeData();
  requestUserPermission();
  getFCMToken();

  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
   console.log('remoteMessage', JSON.stringify(remoteMessage));
   DisplayNotification(remoteMessage);
   //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
  return unsubscribe;
 }, []);

 async function DisplayNotification(remoteMessage) {
  // Create a channel
  const channelId = await notifee.createChannel({
   id: 'default',
   name: 'Default Channel',
   importance: AndroidImportance.HIGH
  });

  // Display a notification
  await notifee.displayNotification({
   title: remoteMessage.notification.title,
   body: remoteMessage.notification.body,
   android: {
    channelId,
    smallIcon: 'ic_launcher'
   }
  });
 }

 //presenter view

 const presenterTopView = () => {
  return (
   <View>
    <Text allowFontScaling={false} style={Styles.welcomeText}>
     Welcome Back
    </Text>
    <View style={Styles.presenterEventView}>
     <TouchableOpacity style={Styles.presenterEventIcon}>
      <Image style={Styles.topIcon} source={EVENTICON} />
      <Text allowFontScaling={false} style={Styles.topText}>
       Events
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={Styles.presenterEventIcon}>
      <Image style={Styles.topIcon} source={JUDGEICON} />
      <Text allowFontScaling={false} style={Styles.topText}>
       Judges
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={Styles.presenterEventIcon}>
      <Image style={Styles.topIcon} source={ARTISTICON} />
      <Text allowFontScaling={false} style={Styles.topText}>
       Artist
      </Text>
     </TouchableOpacity>
    </View>
    <TouchableOpacity
     onPress={() => navigation.navigate('CreateEvent')}
     style={Styles.addEventIcon}>
     <Image style={Styles.addIcon} source={ADDEVENT} />
     <Text allowFontScaling={false} style={Styles.addText}>
      Add Event
     </Text>
    </TouchableOpacity>
   </View>
  );
 };
 // live events view list
 const EventView = ({ item }) => {
  return (
   <View style={Styles.listContainer}>
    <Image style={Styles.itemImage} source={EVENT} />
    <View style={Styles.liveView}>
     <Text allowFontScaling={false} style={Styles.liveText}>
      Live
     </Text>
    </View>
   </View>
  );
 };
 // all dj's view list
 const DjView = ({ item }) => {
  return (
   <View style={Styles.djlistContainer}>
    <View style={Styles.djliveView}>
     <Text allowFontScaling={false} style={Styles.liveText}>
      Live
     </Text>
    </View>
    <View style={Styles.djView}>
     <Image style={Styles.djitemImage} source={DJMAN} />
    </View>
    <Text allowFontScaling={false} style={Styles.djText}>
     Dj Name
    </Text>
    <Text
     allowFontScaling={false}
     style={[Styles.djText, { fontFamily: Fonts.montserratMedium }]}>
     Channel Name
    </Text>
    <TouchableOpacity style={Styles.djBtn}>
     <Text allowFontScaling={false} style={Styles.btnText}>
      Join Live
     </Text>
    </TouchableOpacity>
   </View>
  );
 };
 // all upcoming events view list
 const UpcomingView = ({ item }) => {
  return (
   <View style={Styles.listContainer}>
    <Image style={Styles.itemImage} source={EVENT} />
   </View>
  );
 };
 return (
  <SafeAreaView style={Styles.container}>
   <Header
    onNotificationPress={() => navigation.navigate('Notification')}
    // headerHeading={'Home'}
    rightImage={NOTIFICATION}
    notificationTrue={true}
   />
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.container}>
     <View style={Styles.searchView}>
      <View style={Styles.innerSeacrh}>
       <Text allowFontScaling={false} style={Styles.searchText}>
        Search...
       </Text>
      </View>
      <TouchableOpacity
       style={{ padding: 4 }}
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Channels')}>
       <Image style={Styles.earIcon} source={HEADPHONE} />
      </TouchableOpacity>
     </View>
     {presenterTopView()}
     <Text style={Styles.listHeading}>Live Events</Text>
     <View style={{ width: '100%', alignSelf: 'center' }}>
      <FlatList
       showsHorizontalScrollIndicator={false}
       showsVerticalScrollIndicator={false}
       horizontal={true}
       data={DATA}
       renderItem={EventView}
       keyExtractor={(item) => item.id}
      />
     </View>

     <View>
      <Text style={Styles.listHeading}>Dj's</Text>
      <View style={{ width: '100%' }}>
       <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        renderItem={DjView}
        keyExtractor={(item) => item.id}
       />
      </View>
     </View>

     <Text style={Styles.listHeading}>Upcoming Events</Text>
     <View style={{ width: '100%' }}>
      <FlatList
       data={DATA}
       showsHorizontalScrollIndicator={false}
       horizontal={true}
       renderItem={UpcomingView}
       keyExtractor={(item) => item.id}
      />
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 );
}
