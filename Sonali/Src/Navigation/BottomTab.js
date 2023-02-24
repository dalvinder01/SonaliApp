import React, { useEffect, useState } from 'react';
import {
 SafeAreaView,
 Text,
 TouchableOpacity,
 View,
 Image,
 KeyboardAvoidingView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ARTISTTAB, EVENTTAB, HOMETAB, PROFILETAB } from '../Constants/Images';
import Profile from '../Screen/Profile/Profile';
import Notification from '../Screen/Notification/Notification';
import Colors from '../Constants/Colors';
import Channels from '../Screen/Channels/Channels';
import ChannelDetail from '../Screen/ChannelDetail.js/ChannelDetail';
import Artist from '../Screen/Artist.js/Artist';
import Event from '../Screen/Event/Event';
import ResetPassword from '../Screen/ResetPassword/ResetPassword';
import Home from '../Screen/Home/Home';
import EditProfile from '../Screen/EditProfile/EditProfile';
import Request from '../Screen/Request/Request';
import RequestList from '../Screen/RequestList/RequestList';
import ArtistVideos from '../Screen/RequestList/ArtistVideos';
import EventPublish from '../Screen/EventPublish/EventPublish';
import CreateEvent from '../Screen/CreateEvent/CreateEvent';
import CreateChannel from '../Screen/CreateChannel/CreateChannel';
import ManageDjSongs from '../Screen/ManageDjSongs/ManageDjSongs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const BottomTabNavigator = () => {
 
 return (
  <KeyboardAvoidingView
   behavior={Platform.OS === 'ios' ? 'padding' : null}
   style={{ flex: 1 }}
   keyboardVerticalOffset={-400} // Adjust the offset to match the height of the bottom tab
  >
   <Tab.Navigator
    screenOptions={{ headerShown: false, keyboardHidesTabBar: true }}
    tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen
     name="home"
     component={homeTab}
     options={{
      tabBarLabel: (
       <Text style={{ fontSize: 10 }} allowFontScaling={false}>
        {''}
       </Text>
      ),
      tabBarIcon: HOMETAB,
      //keyboardHidesTabBar: true,
      tabBarHideOnKeyboard: true
     }}
    />
    <Tab.Screen
     name="event"
     component={eventTab}
     options={{
      tabBarLabel: (
       <Text style={{ fontSize: 10 }} allowFontScaling={false}>
        {''}
       </Text>
      ),
      tabBarIcon: EVENTTAB,
      tabBarHideOnKeyboard: true
     }}
    />
    <Tab.Screen
     name="user"
     component={Artist}
     options={{
      tabBarLabel: (
       <Text style={{ fontSize: 10 }} allowFontScaling={false}>
        {''}
       </Text>
      ),
      tabBarIcon: ARTISTTAB,
      tabBarHideOnKeyboard: true
     }}
    />
    <Tab.Screen
     name=" "
     component={profileTab}
     options={{
      tabBarLabel: (
       <Text style={{ fontSize: 10 }} allowFontScaling={false}>
        {''}
       </Text>
      ),
      tabBarIcon: PROFILETAB,
      tabBarHideOnKeyboard: true
     }}
    />
   </Tab.Navigator>
  </KeyboardAvoidingView>
 );
};
const homeTab = () => {
 return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}>
   <Stack.Screen name="home" component={Home} />
   <Stack.Screen name="Channels" component={Channels} />
   <Stack.Screen name="ChannelDetail" component={ChannelDetail} />
   <Stack.Screen name="Notification" component={Notification} />
   <Stack.Screen name="Request" component={Request} />
   <Stack.Screen name="RequestList" component={RequestList} />
   <Stack.Screen name="ArtistVideos" component={ArtistVideos} />
   <Stack.Screen name="EventPublish" component={EventPublish} />
   <Stack.Screen name="CreateEvent" component={CreateEvent} />
   <Stack.Screen name="CreateChannel" component={CreateChannel} />
   <Stack.Screen name="ManageDjSongs" component={ManageDjSongs} />
  </Stack.Navigator>
 );
};
const profileTab = () => {
 return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}>
   <Stack.Screen name="Profile" component={Profile} />
   <Stack.Screen name="EditProfile" component={EditProfile} />
   <Stack.Screen name="ResetPassword" component={ResetPassword} />
  </Stack.Navigator>
 );
};
const eventTab = () => {
 return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}>
   <Stack.Screen name="Event" component={Event} />
   {/* <Stack.Screen name="StartStream" component={StartStream} /> */}
  </Stack.Navigator>
 );
};

// Custom TabBar Design
function CustomTabBar({ state, descriptors, navigation }) {
 return (
  <>
   <SafeAreaView
    style={{
     width: '100%',
     maxHeight: 80,
     alignContent: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: Colors.pink
    }}>
    <View
     style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignContent: 'center'
     }}>
     {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
       options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;
      const image =
       options.tabBarIcon !== undefined ? options.tabBarIcon : route.name;
      const isFocused = state.index === index;
      const onPress = () => {
       const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true
       });
       if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true });
       }
      };
      const onLongPress = () => {
       navigation.emit({
        type: 'tabLongPress',
        target: route.key
       });
      };
      return (
       <>
        <TouchableOpacity
         accessibilityRole="button"
         accessibilityState={isFocused ? { selected: true } : {}}
         accessibilityLabel={options.tabBarAccessibilityLabel}
         testID={options.tabBarTestID}
         onPress={onPress}
         onLongPress={onLongPress}
         style={{
          height: 70,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center'
         }}>
         <View
          style={{
           height: 50,
           width: 50,
           justifyContent: 'center',
           alignItems: 'center'
          }}>
          <Image
           source={image}
           resizeMode="contain"
           style={{
            height: '50%',
            width: '50%',
            tintColor: isFocused ? Colors.white : null
           }}></Image>
         </View>
         <Text
          style={{
           color: isFocused ? Colors.white : Colors.blue,
           position: 'absolute',
           bottom: 5,
           fontSize: 12
           //    fontFamily: Fonts.poppinRegular,
          }}>
          {label}
         </Text>
        </TouchableOpacity>
       </>
      );
     })}
    </View>
   </SafeAreaView>
  </>
 );
}
export default BottomTabNavigator;
