import React, {useState, useEffect, useRef} from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 TouchableOpacity,
 Modal,
 BackHandler,
 StyleSheet,
 Dimensions,
 TouchableNativeFeedback,
 StatusBar,
 FlatList,
 Alert,
 ActivityIndicator,
} from 'react-native';
import Styles from './Styles';
import {CLOSE, CROSS, PLAY, PROFILE, TICKMARK} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

import {responsiveWidth} from 'react-native-responsive-dimensions';
const {width, height} = Dimensions.get('window');
export default function ArtistVideos(props) {
 console.warn('params', props.route.params.item);
 const [opacity, setOpacity] = useState(0);

 const [currentPlayingIndex, setCurrentPlayingIndex] = useState(-1);
 const navigation = useNavigation();
 const [name, SetName] = useState('');
 const [modalVisible, setModalVisible] = useState(false);
 let lastTap = null;
 const [Fullscreen, setFullscreen] = useState(false);
 const [paused, setpaused] = useState(false);
 const [currentTime, setcurrentTime] = useState(0);
 const [duration, setduration] = useState(0.1);
 const [overlay, setoverlay] = useState(false);
 const [loader, setLoader] = useState(false);

 const playerRef = useRef();
 useEffect(() => {
  const backHandler = BackHandler.addEventListener(
   'hardwareBackPress',
   backAction,
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
   },
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
 const onslide = slide => {
  playerRef.current.seek(slide * duration);
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => setoverlay(false), 3000);
 };
 const getTime = t => {
  const digit = n => (n < 10 ? `0${n}` : `${n}`);
  const sec = digit(Math.floor(t % 60));
  const min = digit(Math.floor((t / 60) % 60));
  const hr = digit(Math.floor((t / 3600) % 60));
  // return hr + ':' + min + ':' + sec;
  return min + ':' + sec;
 };
 const load = ({duration}) => {
  setLoader(false);
  setduration(duration);
 };
 const progress = ({currentTime}) => setcurrentTime(currentTime);
 const onLoadStart = () => {
  setLoader(true);
 };

 return (
  <SafeAreaView style={Styles.container}>
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    headerHeading={'Request List'}
    notificationTrue={true}
    rightStyle={Styles.menuIcon}
   />

   <View style={Styles.container}>
    <View style={{flex: 1, backgroundColor: Colors.transparent}}>
     <View style={Styles.centeredView}>
      <View style={Styles.modalView}>
       <View style={Fullscreen ? styles.fullscreenVideo : styles.video}>
        <TouchableOpacity
         activeOpacity={0.8}
         onPress={() => navigation.goBack()}
         style={Styles.closeBtn}>
         <Image style={Styles.crossIcon} source={CROSS} />
        </TouchableOpacity>
        {loader ? (
         <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={Colors.pink} />
         </View>
        ) : null}
        <Video
         source={{
          uri: props.route.params.item.uri,
         }}
         style={{...StyleSheet.absoluteFill}}
         ref={playerRef}
         paused={paused}
         repeat={true}
         onLoad={load}
         onLoadStart={onLoadStart}
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
            justifyContent: 'space-around',
           }}>
           <View style={{width: 50, height: 50}}>
            <Icon name="replay-10" style={styles.icon} onPress={backward} />
           </View>
           <View style={{width: 50, height: 50}}>
            <Icon
             name={paused ? 'play-arrow' : 'pause'}
             style={styles.icon}
             onPress={() => setpaused(!paused)}
            />
           </View>
           <View style={{width: 50, height: 50}}>
            <Icon name="forward-10" style={styles.icon} onPress={forward} />
           </View>
           <View style={styles.sliderCont}>
            <View
             style={{
              margin: 5,
              alignSelf: 'flex-end',
              marginRight: '5%',
             }}>
             {/* <Icon
            onPress={FullscreenToggle}
            name={Fullscreen ? 'fullscreen' : 'fullscreen-exit'}
            style={{fontSize: 20, color: 'white'}}
           /> */}
            </View>
            <Slider
             style={{margin: 5}}
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
              alignSelf: 'center',
             }}>
             <Text style={{color: 'white'}}>{getTime(currentTime)}</Text>
             <Text style={{color: 'white'}}>{getTime(duration)}</Text>
            </View>
           </View>
          </View>
         ) : (
          <View style={styles.overlaySet}>
           <TouchableNativeFeedback onPress={ShowHideOverlay}>
            <View style={{flex: 1}} />
           </TouchableNativeFeedback>
          </View>
         )}
        </View>
       </View>
      </View>
     </View>
    </View>
   </View>
  </SafeAreaView>
 );
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 video: {
  width: responsiveWidth(88),
  borderRadius: 7,
  height: width * 0.8,
  backgroundColor: 'black',
  //   marginTop:'-5%'
 },
 fullscreenVideo: {
  backgroundColor: 'black',
  ...StyleSheet.absoluteFill,
  elevation: 1,
 },
 overlay: {
  ...StyleSheet.absoluteFillObject,
 },
 overlaySet: {
  flex: 1,
  flexDirection: 'row',
 },
 icon: {
  color: 'white',
  flex: 1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 25,
 },
 loader: {
  flex: 1,
  justifyContent: 'center',
 },
 sliderCont: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
 },
 timer: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 5,
 },
});
