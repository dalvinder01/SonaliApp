import React, { useState } from 'react';
import {
 SafeAreaView,
 TouchableOpacity,
 Text,
 View,
 FlatList,
 Image
} from 'react-native';
import {
 MeetingProvider,
 useMeeting,
 useParticipant,
 MediaStream,
 RTCView
} from '@videosdk.live/react-native-sdk';
import { token } from '../../Services/StreamApi';
import Colors from '../../Constants/Colors';
import {
 CAM,
 DELETE,
 JOIN,
 LEAVE,
 MICROPHONE,
 MUTE,
 PIN,
 PUBLISH,
 RECORDING,
 UNPIN
} from '../../Constants/Images';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Styles from './Styles';
export default function StartStream(props) {
 const [isMic, setisMic] = useState(false);
 const [micOn, setMicon] = useState(true);
 function MeetingView() {
  // Get `participants` from useMeeting Hook
  const {
   join,
   leave,
   toggleWebcam,
   toggleMic,
   participants,
   pinnedParticipants
  } = useMeeting({});

  const participantsArrId = [...participants.keys()]; // Add this line
  const pinUsers = [...pinnedParticipants.keys()];
  const allUser = [...participants.values()]; // Add this line
  console.warn('alluser arr', allUser);
  const checkMic = () => {
   setMicon(!micOn);
   toggleMic();
  };
  return (
   <View style={{ flex: 1 }}>
    <ParticipantList
     participants={participantsArrId}
     pinUsers={pinUsers}
     allUser={allUser}
    />
    <View style={Styles.bottomBtnStyle}>
     <View style={Styles.streamBtnView}>
      <TouchableOpacity onPress={() => join()} style={Styles.btnStyle}>
       <Image style={Styles.joinIcon} source={JOIN} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleWebcam()} style={Styles.btnStyle}>
       <Image style={Styles.cameraIcon} source={CAM} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => checkMic()} style={Styles.btnStyle}>
       {micOn ? (
        <Image style={Styles.micStyle} source={MICROPHONE} />
       ) : (
        <Image style={Styles.micStyle} source={MUTE} />
       )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => leave()} style={Styles.btnStyle}>
       <Image style={Styles.leaveIcon} source={LEAVE} />
      </TouchableOpacity>
     </View>
    </View>
   </View>
  );
 }
 function ParticipantView({ participantId, styleProps }) {
  const { webcamStream, webcamOn, pinState, participant } =
   useParticipant(participantId);
  console.warn('length', participantId.length);
  return webcamOn && webcamStream ? (
   <View>
    <RTCView
     streamURL={new MediaStream([webcamStream.track]).toURL()}
     objectFit={'cover'}
     style={styleProps}
    />
    <View style={Styles.publishView}>
     <TouchableOpacity style={Styles.btnStyle}>
      <Image style={Styles.publishIcon} source={PUBLISH} />
     </TouchableOpacity>
     <TouchableOpacity style={Styles.btnStyle}>
      <Image style={Styles.publishIcon} source={RECORDING} />
     </TouchableOpacity>
    </View>
    <View style={Styles.videoIconView}>
     <TouchableOpacity
      onPress={() => participant.pin('CAM')}
      style={Styles.pinBtn}>
      <Image style={Styles.pinImage} source={PIN} />
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => participant.remove()}
      style={Styles.deleteBtn}>
      <Image style={Styles.deleteIcon} source={DELETE} />
     </TouchableOpacity>
    </View>
   </View>
  ) : (
   <View style={Styles.noMediaView}>
    <Text style={Styles.noMediaText}>NO MEDIA</Text>
   </View>
  );
 }
 function PinParticipantView({ pinUsers }) {
  const { webcamStream, webcamOn, pinState, participant } =
   useParticipant(pinUsers);
  console.warn('state', pinState);
  return webcamOn && webcamStream ? (
   <View>
    <RTCView
     streamURL={new MediaStream([webcamStream.track]).toURL()}
     objectFit={'cover'}
     style={Styles.pinViewList}
    />
    <View style={[Styles.videoIconView, { width: '95%' }]}>
     <TouchableOpacity
      onPress={() => participant.unpin('CAM')}
      style={Styles.pinBtn}>
      <Image style={Styles.unpinIcon} source={UNPIN} />
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => participant.remove()}
      style={Styles.unpinDeleteBtn}>
      <Image style={Styles.unpinDeleteIcon} source={DELETE} />
     </TouchableOpacity>
    </View>
   </View>
  ) : (
   <View style={Styles.noMediaView}>
    <Text style={Styles.noMediaText}>NO MEDIA</Text>
   </View>
  );
 }
 function ParticipantList({ participants, pinUsers, allUser }) {
  const mapArr = allUser.map((item, index) => {
   const { local, id } = item; // Destructure the item object
   return { local, id }; // Return an object with multiple properties
  });
  console.warn('listusers', mapArr);
  var allArr = mapArr.filter(function (el) {
   return el.local != true;
  });
  console.warn('all filter', allArr);
  var selArr = mapArr.filter(function (el) {
   return el.local != false;
  });
  console.warn('self filter', selArr);
  return pinUsers?.length > 0 ? (
   <View>
    <FlatList
     data={pinUsers}
     renderItem={({ item }) => {
      return <PinParticipantView pinUsers={item} />;
     }}
    />
   </View>
  ) : selArr?.length > 0 ? (
   <View style={{ flex: 1 }}>
    <View style={Styles.streamList}>
     <FlatList
      data={selArr}
      key={'_'}
      keyExtractor={(item) => '_' + item.id}
      numColumns={2}
      renderItem={({ item }) => {
       return (
        <ParticipantView
         participantId={item.id}
         styleProps={{
          height: 250,
          width: responsiveScreenWidth(95),
          margin: 8
         }}
        />
       );
      }}
     />
    </View>
    <View style={Styles.streamList}>
     <FlatList
      data={allArr}
      key={'_'}
      keyExtractor={(item) => '_' + item.id}
      numColumns={2}
      renderItem={({ item }) => {
       return (
        <ParticipantView
         participantId={item.id}
         styleProps={{
          height: 200,
          width: allArr.length > 1 ? 160 : responsiveScreenWidth(95),
          margin: 8
         }}
        />
       );
      }}
     />
    </View>
   </View>
  ) : (
   <View style={Styles.joinView}>
    <Text style={Styles.noMediaText}>Press Join button to enter meeting.</Text>
   </View>
  );
 }
 console.warn('id', props.route.params.meetingId);
 return props.route.params.meetingId ? (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.listColor }}>
   <MeetingProvider
    config={{
     meetingId: props.route.params.meetingId,
     micEnabled: micOn,
     webcamEnabled: true,
     name: 'Test User'
    }}
    token={token}>
    <MeetingView />
   </MeetingProvider>
  </SafeAreaView>
 ) : null;
}
