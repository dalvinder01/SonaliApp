import React from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Styles from './Styles';
import { CROSS, PLAY, PROFILE, TICKMARK } from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
export default function RequestList() {
 const DATA = [
  {
   id: 1,
   title: 'Live',
   uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
  },
  {
   id: 2,
   title: 'Live',
   uri: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_1MB.mp4',
  },
  {
   id: 3,
   title: 'Live',
   uri: 'https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_1MB.mp4',
  },
 ];

 const navigation = useNavigation();

 const requestList = ({item, index}) => {
  console.warn('item chec', item.uri);

  return (
   <View>
    <View style={Styles.listView}>
     <View style={Styles.innerView}>
      <View style={Styles.imageView}>
       <Image style={Styles.imageStyle} source={PROFILE} />
      </View>
      <View style={Styles.itemContainer}>
       <Text allowFontScaling={false} style={Styles.userText}>
        Artist Name
       </Text>
       <Text allowFontScaling={false} style={Styles.descriptionText}>
        Singer
       </Text>
       <View style={Styles.iconView}>
        <TouchableOpacity style={{padding: 5}}>
         <Image style={Styles.crossIcon} source={CROSS} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 5}}>
         <Image style={Styles.crossIcon} source={TICKMARK} />
        </TouchableOpacity>
       </View>
      </View>
     </View>
     <View style={Styles.videoView}>
      <TouchableOpacity
       onPress={() =>
        navigation.navigate('ArtistVideos', {
         item: item,
        })
       }
       style={Styles.videoBtn}>
       <Image style={Styles.playIcon} source={PLAY} />
      </TouchableOpacity>
     </View>
    </View>
   </View>
  );
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
    <Text allowFontScaling={false} style={Styles.heading}>
     Request List
    </Text>
    {/* {requestList()} */}
    <View style={{width: '100%', alignSelf: 'center'}}>
     <FlatList
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={requestList}
      keyExtractor={item => item.id}
     />
    </View>
   </View>
   <View style={{height: moderateScale(55)}} />
   <TouchableOpacity
    onPress={() => navigation.navigate('EventPublish')}
    style={[Styles.logOutBtn]}>
    <Text allowFontScaling={false} style={[Styles.btnText]}>
     Next
    </Text>
   </TouchableOpacity>
  </SafeAreaView>
 );
}
