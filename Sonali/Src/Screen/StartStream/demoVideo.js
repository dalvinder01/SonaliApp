// import React, { useState } from 'react';
// import {
//  SafeAreaView,
//  TouchableOpacity,
//  Text,
//  TextInput,
//  View,
//  FlatList,
//  Image
// } from 'react-native';
// import {
//  MeetingProvider,
//  useMeeting,
//  useParticipant,
//  MediaStream,
//  RTCView
// } from '@videosdk.live/react-native-sdk';
// import { createMeeting, token } from './Src/Services/StreamApi';
// import Colors from './Src/Constants/Colors';

// import { moderateScale } from 'react-native-size-matters';
// import { DELETE, PIN, UNPIN } from './Src/Constants/Images';
// import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
// function JoinScreen(props) {
//  const [meetingVal, setMeetingVal] = useState('');
//  return (
//   <SafeAreaView
//    style={{
//     flex: 1,
//     backgroundColor: '#F6F6FF',
//     justifyContent: 'center',
//     paddingHorizontal: 6 * 10
//    }}>
//    <TouchableOpacity
//     onPress={() => {
//      props.getMeetingId();
//     }}
//     style={{ backgroundColor: '#1178F8', padding: 12, borderRadius: 6 }}>
//     <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>
//      Create Meeting
//     </Text>
//    </TouchableOpacity>

//    <Text
//     style={{
//      alignSelf: 'center',
//      fontSize: 22,
//      marginVertical: 16,
//      fontStyle: 'italic',
//      color: 'grey'
//     }}>
//     ---------- OR ----------
//    </Text>
//    <TextInput
//     value={meetingVal}
//     onChangeText={setMeetingVal}
//     placeholder={'XXXX-XXXX-XXXX'}
//     style={{
//      padding: 12,
//      borderWidth: 1,
//      borderRadius: 6,
//      fontStyle: 'italic'
//     }}
//    />
//    <TouchableOpacity
//     style={{
//      backgroundColor: '#1178F8',
//      padding: 12,
//      marginTop: 14,
//      borderRadius: 6
//     }}
//     onPress={() => {
//      props.getMeetingId(meetingVal);
//     }}>
//     <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>
//      Join Meeting
//     </Text>
//    </TouchableOpacity>
//   </SafeAreaView>
//  );
// }

// const Button = ({ onPress, buttonText, backgroundColor }) => {
//  return (
//   <TouchableOpacity
//    onPress={onPress}
//    style={{
//     backgroundColor: backgroundColor,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 12,
//     borderRadius: 4
//    }}>
//    <Text style={{ color: 'white', fontSize: 12 }}>{buttonText}</Text>
//   </TouchableOpacity>
//  );
// };

// function ControlsContainer({ join, leave, toggleWebcam, toggleMic }) {
//  return (
//   <View
//    style={{
//     padding: 24,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//    }}>
//    <Button
//     onPress={() => {
//      join();
//     }}
//     buttonText={'Join'}
//     backgroundColor={'#1178F8'}
//    />
//    <Button
//     onPress={() => {
//      toggleWebcam();
//     }}
//     buttonText={'Toggle Webcam'}
//     backgroundColor={'#1178F8'}
//    />
//    <Button
//     onPress={() => {
//      toggleMic();
//     }}
//     buttonText={'Toggle Mic'}
//     backgroundColor={'#1178F8'}
//    />
//    <Button
//     onPress={() => {
//      leave();
//     }}
//     buttonText={'Leave'}
//     backgroundColor={'#FF0000'}
//    />
//   </View>
//  );
// }
// function MeetingView() {
//  // Get `participants` from useMeeting Hook
//  const {
//   join,
//   leave,
//   toggleWebcam,
//   toggleMic,
//   participants,
//   pinnedParticipants
//  } = useMeeting({});
//  const participantsArrId = [...participants.keys()]; // Add this line
//  const pinUsers = [...pinnedParticipants.keys()];
//  const allUser = [...participants.values()]; // Add this line
//  console.warn('array 123', allUser);
//  return (
//   <View style={{ flex: 1 }}>
//    <ParticipantList
//     participants={participantsArrId}
//     pinUsers={pinUsers}
//     allUser={allUser}
//    />
//    <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
//     <ControlsContainer
//      join={join}
//      leave={leave}
//      toggleWebcam={toggleWebcam}
//      toggleMic={toggleMic}
//     />
//    </View>
//   </View>
//  );
// }
// function ParticipantView({ participantId, styleProps }) {
//  const { webcamStream, webcamOn, pinState, participant } =
//   useParticipant(participantId);
//  console.warn('length', participantId.length);
//  return webcamOn && webcamStream ? (
//   <View>
//    <RTCView
//     streamURL={new MediaStream([webcamStream.track]).toURL()}
//     objectFit={'cover'}
//     style={styleProps}
//    />
//    <View
//     style={{
//      flexDirection: 'row',
//      justifyContent: 'space-between',
//      width: '100%',
//      alignItems: 'center',
//      alignSelf: 'center'
//     }}>
//     <TouchableOpacity
//      onPress={() => participant.pin('CAM')}
//      style={{
//       padding: 5,
//       position: 'absolute',
//       bottom: 25,
//       left: 20,
//       tintColor: Colors.pink
//      }}>
//      <Image
//       style={{
//        width: moderateScale(22),
//        height: moderateScale(22),
//        tintColor: Colors.pink
//       }}
//       source={PIN}
//      />
//     </TouchableOpacity>
//     <TouchableOpacity
//      onPress={() => participant.remove()}
//      style={{
//       padding: 5,
//       position: 'absolute',
//       bottom: 25,
//       right: 10,
//       tintColor: Colors.pink
//      }}>
//      <Image
//       style={{
//        width: moderateScale(22),
//        height: moderateScale(22),
//        tintColor: Colors.pink
//       }}
//       source={DELETE}
//      />
//     </TouchableOpacity>
//    </View>
//   </View>
//  ) : (
//   <View
//    style={{
//     backgroundColor: 'grey',
//     height: 500,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center'
//    }}>
//    <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
//   </View>
//  );
// }
// function PinParticipantView({ pinUsers }) {
//  const { webcamStream, webcamOn, pinState, participant } =
//   useParticipant(pinUsers);
//  console.warn('state', pinState);
//  return webcamOn && webcamStream ? (
//   <View>
//    <RTCView
//     streamURL={new MediaStream([webcamStream.track]).toURL()}
//     objectFit={'cover'}
//     style={{
//      height: responsiveScreenHeight(80),
//      marginVertical: 5,
//      marginHorizontal: 5
//     }}
//    />
//    <View
//     style={{
//      flexDirection: 'row',
//      justifyContent: 'space-between',
//      width: '90%',
//      alignItems: 'center'
//     }}>
//     <TouchableOpacity
//      onPress={() => participant.unpin('CAM')}
//      style={{ padding: 5, position: 'absolute', bottom: 25, left: 20 }}>
//      <Image
//       style={{
//        width: moderateScale(30),
//        height: moderateScale(30),
//        tintColor: Colors.pink
//       }}
//       source={UNPIN}
//      />
//     </TouchableOpacity>
//     <TouchableOpacity
//      onPress={() => participant.remove()}
//      style={{ padding: 5, position: 'absolute', bottom: 25, right: -12 }}>
//      <Image
//       style={{
//        width: moderateScale(30),
//        height: moderateScale(30),
//        tintColor: Colors.pink
//       }}
//       source={DELETE}
//      />
//     </TouchableOpacity>
//    </View>
//   </View>
//  ) : (
//   <View
//    style={{
//     backgroundColor: 'red',
//     height: 300,
//     justifyContent: 'center'
//     // alignItems: 'center'
//    }}>
//    <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
//   </View>
//  );
// }
// function ParticipantList({ participants, pinUsers, allUser, }) {
//  const mapArr = allUser.map((item, index) => {
//   const { local, id } = item; // Destructure the item object
//   return { local, id }; // Return an object with multiple properties
//  });

//  console.warn('listusers', mapArr);
//  var allArr = mapArr.filter(function (el) {
//   return el.local != true;
//  });
//  console.warn('all filter', allArr);
//  var selArr = mapArr.filter(function (el) {
//   return el.local != false;
//  });
//  console.warn('self filter', selArr);

//  return pinUsers?.length > 0 ? (
//   <View>
//    <FlatList
//     data={pinUsers}
//     renderItem={({ item }) => {
//      return <PinParticipantView pinUsers={item} />;
//     }}
//    />
//   </View>
//  ) : selArr?.length > 0 ? (
//   <View style={{ flex: 1 }}>
//    <View
//     style={{
//      height: '50%',
//      justifyContent: 'center',
//      alignItems: 'center'
//     }}>
//     <FlatList
//      data={selArr}
//      key={'_'}
//      keyExtractor={(item) => '_' + item.id}
//      numColumns={2}
//      renderItem={({ item }) => {
//       return (
//        <ParticipantView
//         participantId={item.id}
//         styleProps={{
//          height: 250,
//          width: responsiveScreenWidth(95),
//          margin: 8
//         }}
//        />
//       );
//      }}
//     />
//    </View>
//    <View
//     style={{
//      height: '50%',
//      justifyContent: 'center',
//      alignItems: 'center'
//     }}>
//     <FlatList
//      data={allArr}
//      key={'_'}
//      keyExtractor={(item) => '_' + item.id}
//      numColumns={2}
//      renderItem={({ item }) => {
//       return (
//        <ParticipantView
//         participantId={item.id}
//         styleProps={{
//          height: 200,
//          width: allArr.length > 1 ? 160 : responsiveScreenWidth(95),
//          margin: 8
//         }}
//        />
//       );
//      }}
//     />
//    </View>
//   </View>
//  ) : (
//   <View
//    style={{
//     flex: 1,
//     backgroundColor: '#F6F6FF',
//     justifyContent: 'center',
//     alignItems: 'center'
//    }}>
//    <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
//   </View>
//  );
// }

// export default function App() {
//  const [meetingId, setMeetingId] = useState(null);

//  const getMeetingId = async (id) => {
//   const meetingId = id == null ? await createMeeting({ token }) : id;
//   console.warn('meetingId', meetingId);
//   setMeetingId(meetingId);
//  };

//  return meetingId ? (
//   <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6FF' }}>
//    <MeetingProvider
//     config={{
//      meetingId,
//      micEnabled: false,
//      webcamEnabled: true,
//      name: 'Test User'
//     }}
//     token={token}>
//     <MeetingView />
//    </MeetingProvider>
//   </SafeAreaView>
//  ) : (
//   <JoinScreen getMeetingId={getMeetingId} />
//  );
// }