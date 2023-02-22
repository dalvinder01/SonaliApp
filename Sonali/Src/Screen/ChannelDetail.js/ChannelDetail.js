import React, { useState } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 FlatList,
 TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Colors from '../../Constants/Colors';
import { DJMAN, MUSIC, NOTIFICATION, PENCIL } from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../Constants/Fonts';
import { moderateScale } from 'react-native-size-matters';
export default function ChannelDetail() {
 const [isStatus, SetisStatus] = useState(0);
 const navigation = useNavigation();
 const DATA = [
  {
   id: '1',
   name: ' Song Name',
   description: 'channels desrcription',
   active: ' Active'
  },
  {
   id: '1',
   name: ' Song Name',
   description: 'channels desrcription',
   active: ' Active'
  }
 ];
 // adding all songs list view in flatlist
 const songList = ({ item }) => {
  return (
   <View style={Styles.listContainer}>
    <View style={Styles.liveView}>
     <Image style={Styles.itemImage} source={MUSIC} />

     <View style={Styles.songView}>
      <Text allowFontScaling={false} style={Styles.liveText}>
       {item.name}
      </Text>
      <Text allowFontScaling={false} style={Styles.liveText}>
       Dj : XYZ
      </Text>
     </View>
    </View>
   </View>
  );
 };
 // adding favourite songs list view in flatlist

 const playList = ({ item }) => {
  return (
   <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => SetisStatus(1)}
    style={Styles.plalistContainer}>
    <View style={Styles.columnList}>
     <Image style={Styles.columnImage} source={MUSIC} />
    </View>
    <View style={Styles.columnView}>
     <Text allowFontScaling={false} style={Styles.liveText}>
      {item.name}
     </Text>
     <Text allowFontScaling={false} style={Styles.liveText}>
      Songs 12
     </Text>
    </View>
   </TouchableOpacity>
  );
 };
 // descritpion about channel
 const aboutView = () => {
  return (
   <View style={Styles.descriptionView}>
    <Text style={{ color: Colors.black, fontFamily: Fonts.ralewayRegular }}>
     All
     viewers..........................................................................................
     ...............................................................................................................
     ..............................................................................................................
     ...............................................................................................................
    </Text>
    <View style={Styles.aboutView}>
     <Text style={Styles.aboutDate}>Created at: 12\09\22</Text>
    </View>
   </View>
  );
 };
 // song flatlist
 const djSongView = () => {
  return (
   <View style={{ width: '100%', flex: 1 }}>
    <FlatList
     showsVerticalScrollIndicator={false}
     data={DATA}
     renderItem={songList}
     keyExtractor={(item) => item.id}
    />
   </View>
  );
 };
 //playlist flatlist
 const playListView = () => {
  return (
   <View style={{ width: '100%', flex: 1 }}>
    <FlatList
     showsVerticalScrollIndicator={false}
     data={DATA}
     key={'_'}
     keyExtractor={(item) => '_' + item.id}
     numColumns={2}
     renderItem={playList}
    />
   </View>
  );
 };
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <Header
    arrowTrue={true}
    headerHeading={'Channel Detail'}
    rightImage={NOTIFICATION}
   />
   <View style={Styles.container}>
    <View style={Styles.channelView}>
     <Image style={[Styles.itemImage, { borderRadius: 20 }]} source={DJMAN} />
    </View>
    <Text
     allowFontScaling={false}
     style={[
      Styles.liveText,
      {
       textAlign: 'center',
       marginTop: '3%'
      }
     ]}>
     Channel Name
    </Text>
    <View style={Styles.joinView}>
     <Text allowFontScaling={false} style={[Styles.liveText, Styles.djText]}>
      100 Joiner
     </Text>
     <View style={Styles.pointView} />
     <Text allowFontScaling={false} style={[Styles.liveText, Styles.djText]}>
      60 Songs
     </Text>
    </View>
    {/* <TouchableOpacity style={Styles.leaveBtn}>
      <Text
       allowFontScaling={false}
       style={[Styles.liveText, Styles.channelText]}>
        Leave Channel
      </Text>
     </TouchableOpacity> */}
    <View style={[Styles.channelBtn]}>
     <TouchableOpacity
      onPress={() => navigation.navigate('ManageDjSongs')}
      style={[Styles.leaveBtn, { backgroundColor: Colors.skyBlue }]}>
      <Text
       allowFontScaling={false}
       style={[Styles.liveText, Styles.channelText]}>
       Manage Songs
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => navigation.navigate('CreateChannel')}
      style={Styles.editBtn}>
      <Image style={Styles.editIcon} source={PENCIL} />
     </TouchableOpacity>
    </View>

    <View style={Styles.btnView}>
     <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => SetisStatus(0)}
      style={[
       Styles.btnStyle,
       {
        borderBottomColor: isStatus == 0 ? Colors.pink : Colors.colorGray
       }
      ]}>
      <Text allowFontScaling={false} style={Styles.btnText}>
       About
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => SetisStatus(1)}
      style={[
       Styles.btnStyle,
       {
        borderBottomColor: isStatus == 1 ? Colors.pink : Colors.colorGray
       }
      ]}>
      <Text allowFontScaling={false} style={Styles.btnText}>
       All Songs
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => SetisStatus(2)}
      style={[
       Styles.btnStyle,
       {
        borderBottomColor: isStatus == 2 ? Colors.pink : Colors.colorGray
       }
      ]}>
      <Text allowFontScaling={false} style={Styles.btnText}>
       Playlist
      </Text>
     </TouchableOpacity>
    </View>

    {isStatus == 0
     ? aboutView()
     : isStatus == 1
     ? djSongView()
     : isStatus == 2
     ? playListView()
     : null}

    {/* <TouchableOpacity style={Styles.liveBtn}>
     <Text allowFontScaling={false} style={Styles.goText}>
      Go Live
     </Text>
    </TouchableOpacity> */}
   </View>
  </SafeAreaView>
 );
}
