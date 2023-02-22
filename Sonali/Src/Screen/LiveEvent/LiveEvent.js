import React, { useRef, useState, useEffect } from 'react';
import {
 View,
 StyleSheet,
 BackHandler,
 Dimensions,
 TouchableNativeFeedback,
 Text,
 StatusBar,
 ScrollView,
 KeyboardAvoidingView,
 Image,
 TouchableOpacity,
 FlatList,
 TextInput,
 SafeAreaView
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import Header from '../../Component/Header/Header';
import { DISLIKE, LIKE, SEND } from '../../Constants/Images';
import Colors from '../../Constants/Colors';
import Styles from './Styles';
// import Rating from 'react-native-easy-rating';
const { width, height } = Dimensions.get('window');
Icon.loadFont();
let overlayTimer;
let Timer;
const LiveEvent = ({ navigation }) => {
 let lastTap = null;
 const [Fullscreen, setFullscreen] = useState(false);
 const [paused, setpaused] = useState(false);
 const [currentTime, setcurrentTime] = useState(0);
 const [duration, setduration] = useState(0.1);
 const [overlay, setoverlay] = useState(false);
 const playerRef = useRef();
 const [isMuted, setIsMuted] = React.useState(false);
 const [rating, setRating] = useState();
 const DATA = [
  {
   id: '1',
   title: 'Text'
  },
  {
   id: '2',
   title: 'Text'
  }
 ];
 useEffect(() => {
  const backHandler = BackHandler.addEventListener(
   'hardwareBackPress',
   backAction
  );
  return () => backHandler.remove();
 }, []);

 const backAction = () => {
  // navigation.goBack();
  return true;
 };

 const FullscreenToggle = () => {
  if (Fullscreen) {
   Orientation.lockToPortrait();
   StatusBar.setHidden(false);
   // navigation.setOptions({ headerShown: true });
   setFullscreen(false);
  } else {
   Orientation.lockToLandscape();
   StatusBar.setHidden(true);
   // navigation.setOptions({ headerShown: false });
   setFullscreen(true);
  }
 };

 const handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
  const now = Date.now();
  const DOUBLE_PRESS_DELAY = 300;
  if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
   clearTimeout(Timer);
   doubleTapCallback();
  } else {
   lastTap = now;
   Timer = setTimeout(() => {
    singleTapCallback();
   }, DOUBLE_PRESS_DELAY);
  }
 };

 const ShowHideOverlay = () => {
  handleDoubleTap(
   () => {},
   () => {
    setoverlay(true);
    overlayTimer = setTimeout(() => setoverlay(false), 5000);
   }
  );
 };
 const backward = () => {
  playerRef.current.seek(currentTime - 10);
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => setoverlay(false), 3000);
 };
 const forward = () => {
  playerRef.current.seek(currentTime + 10);
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => setoverlay(false), 3000);
 };
 const onslide = (slide) => {
  playerRef.current.seek(slide * duration);
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => setoverlay(false), 3000);
 };
 const getTime = (t) => {
  const digit = (n) => (n < 10 ? `0${n}` : `${n}`);
  const sec = digit(Math.floor(t % 60));
  const min = digit(Math.floor((t / 60) % 60));
  const hr = digit(Math.floor((t / 3600) % 60));
  // return hr + ':' + min + ':' + sec;
  return min + ':' + sec;
 };
 const load = ({ duration }) => setduration(duration);
 const progress = ({ currentTime }) => setcurrentTime(currentTime);
 const chatList = ({ item }) => {
  return (
   <View style={Styles.chatList}>
    <Text allowFontScaling={false} style={Styles.chatText}>
     {item.title}
    </Text>
   </View>
  );
 };
 const chatView = () => {
  return (
   <View style={Styles.chatListView}>
    <FlatList
     // inverted={true}
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}
     data={DATA}
     renderItem={chatList}
     keyExtractor={(item) => item.id}
    />
   </View>
  );
 };
 return (
  <KeyboardAvoidingView
   style={{ flex: 1 }}
   behavior={Fullscreen == false ? 'padding' : null}>
   <SafeAreaView style={styles.container}>
    <View style={styles.container}>
     <Header
      arrowTrue={true}
      onArrowPress={() => navigation.goBack()}
      onNotificationPress={() => navigation.navigate('Profile')}
      headerHeading={'LiveEvent'}
     />
     <View style={Fullscreen ? styles.fullscreenVideo : styles.video}>
      <Video
       source={{
        uri: 'https://cdn.videosdk.live/meetings-hls/a530ada7-3674-42a2-bd5a-8ea7f980c437/index.m3u8'
       }}
       style={{ ...StyleSheet.absoluteFill }}
       ref={playerRef}
       paused={paused}
       repeat={true}
       onLoad={load}
       onProgress={progress}
       resizeMode={'contain'}
       muted={false}
       rate={1.0}
      />
      <View style={styles.overlay}>
       {overlay ? (
        <View
         style={{
          ...styles.overlaySet,
          backgroundColor: '#0006',
          alignItems: 'center',
          justifyContent: 'space-around'
         }}>
         <View style={{ width: 50, height: 50 }}>
          <Icon name="replay-10" style={styles.icon} onPress={backward} />
         </View>
         <View style={{ width: 50, height: 50 }}>
          <Icon
           name={paused ? 'play-arrow' : 'pause'}
           style={styles.icon}
           onPress={() => setpaused(!paused)}
          />
         </View>
         <View style={{ width: 50, height: 50 }}>
          <Icon name="forward-10" style={styles.icon} onPress={forward} />
         </View>
         <View style={styles.sliderCont}>
          {/* <View style={{ ...styles.timer, alignItems: "center" }}>
                  
                
                </View> */}
          <View
           style={{
            margin: 5,
            alignSelf: 'flex-end',
            marginRight: '5%'
           }}>
           <Icon
            onPress={FullscreenToggle}
            name={Fullscreen ? 'fullscreen' : 'fullscreen-exit'}
            style={{ fontSize: 20, color: 'white' }}
           />
          </View>
          <Slider
           style={{ margin: 5 }}
           maximumTrackTintColor="white"
           minimumTrackTintColor="white"
           thumbTintColor="white"
           value={currentTime / duration}
           onValueChange={onslide}
          />
          <View
           style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center'
           }}>
           <Text style={{ color: 'white' }}>{getTime(currentTime)}</Text>
           <Text style={{ color: 'white' }}>{getTime(duration)}</Text>
          </View>
         </View>
        </View>
       ) : (
        <View style={styles.overlaySet}>
         <TouchableNativeFeedback onPress={ShowHideOverlay}>
          <View style={{ flex: 1 }} />
         </TouchableNativeFeedback>
        </View>
       )}
      </View>
     </View>

     {Fullscreen == false ? (
      <ScrollView>
       <View style={Styles.titleView}>
        <Text allowFontScaling={false} style={Styles.title}>
         Title
        </Text>
        <Text style={Styles.description}>Description:-</Text>
       </View>
       <View style={[Styles.titleView, { marginTop: '2%' }]}>
        <View style={Styles.judgeView}>
         <Text allowFontScaling={false} style={Styles.description}>
          Judge name
         </Text>
         <Text allowFontScaling={false} style={Styles.description}>
          7/8
         </Text>
        </View>
       </View>
       <View style={[Styles.titleView, { marginTop: '2%' }]}>
        <View style={Styles.likeView}>
         <View style={Styles.likeIconView}>
          <TouchableOpacity>
           <Image style={Styles.likeIcon} source={LIKE} />
          </TouchableOpacity>
          <TouchableOpacity>
           <Image style={Styles.dislikeIcon} source={DISLIKE} />
          </TouchableOpacity>
         </View>
         {/* <Rating
          rating={rating}
          min={0}
          max={5}
          iconWidth={24}
          iconHeight={24}
          onRate={setRating}
         /> */}
        </View>
       </View>

       {/* <View style={{height: '25%'}}></View> */}
       {chatView()}
      </ScrollView>
     ) : null}
     {Fullscreen == false ? (
      <View style={Styles.chatView}>
       <TextInput
        placeholder="Add Comments"
        placeholderTextColor={Colors.black}
        style={Styles.chatInput}
       />
       <TouchableOpacity style={Styles.sendView}>
        <Image style={Styles.sendIcon} source={SEND} />
       </TouchableOpacity>
      </View>
     ) : null}
    </View>
   </SafeAreaView>
  </KeyboardAvoidingView>
 );
};
const styles = StyleSheet.create({
 container: {
  flex: 1
 },
 video: { width, height: width * 0.6, backgroundColor: 'black' },
 fullscreenVideo: {
  backgroundColor: 'black',
  ...StyleSheet.absoluteFill,
  elevation: 1
 },
 overlay: {
  ...StyleSheet.absoluteFillObject
 },
 overlaySet: {
  flex: 1,
  flexDirection: 'row'
 },
 icon: {
  color: 'white',
  flex: 1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 25
 },
 TextStyle: {
  fontSize: 20,
  textAlign: 'center',
  marginVertical: 100,
  color: '#6200ee',
  fontWeight: 'bold'
 },
 sliderCont: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0
 },
 timer: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 5
 }
});
export default LiveEvent;
