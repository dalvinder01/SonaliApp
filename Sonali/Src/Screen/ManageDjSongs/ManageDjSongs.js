import React, { useState } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 FlatList,
 TouchableOpacity,
 Modal
} from 'react-native';
import Styles from './Styles';
import Colors from '../../Constants/Colors';
import { MENU, MUSIC, NOTIFICATION } from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import { moderateScale } from 'react-native-size-matters';

export default function ManageDjSongs() {
 const [isStatus, SetisStatus] = useState(0);
 const [modalVisible, setModalVisible] = useState(false);
 const [singleFile, setSingleFile] = useState('');
 const [multipleFile, setMultipleFile] = useState([]);
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

 //upload audio file
 const selectOneFile = async () => {
  //Opening Document Picker for selection of one file
  try {
   const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.audio]
   });
   //Printing the log realted to the file
   console.warn('res : ' + JSON.stringify(res));
   const url = res[0].uri;
   const lastSlashIndex = url.lastIndexOf('/');
   const path = url.substring(0, lastSlashIndex + 1);
   const fileName = url.substring(lastSlashIndex + 1);
   console.warn(' path', path);
   console.warn('filename', fileName);
   console.warn('URI : ' + res[0].uri);
   console.warn('Type : ' + res[0].type);
   //   console.warn('File Name : ' + res[0].name);
   //   console.warn('File Size : ' + res[0].size);
   //Setting the state to show single file attributes
   setSingleFile(res);
  } catch (err) {
   //Handling any exception (If any)
   if (DocumentPicker.isCancel(err)) {
    //If user canceled the document selection
    alert('Canceled from single doc picker');
   } else {
    //For Unknown Error
    alert('Unknown Error: ' + JSON.stringify(err));
    throw err;
   }
  }
 };
 // adding all songs list view in flatlist
 const songList = ({ item }) => {
  return (
   <View style={Styles.listMainContainer}>
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
     <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={Styles.menuBtn}>
      <Image style={Styles.menuIcon} source={MENU} />
     </TouchableOpacity>
    </View>
    <View style={Styles.centeredView}>
     <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={Styles.centeredView}>
       <View style={Styles.modalView}>
        <TouchableOpacity
         style={Styles.deleteBtn}
         onPress={() => setModalVisible(!modalVisible)}>
         <Text style={Styles.textStyle}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[
          Styles.deleteBtn,
          { width: moderateScale(120), backgroundColor: Colors.pink }
         ]}
         onPress={() => setModalVisible(!modalVisible)}>
         <Text style={Styles.textStyle}>Add To Playlist</Text>
        </TouchableOpacity>
       </View>
      </View>
     </Modal>
    </View>
   </View>
  );
 };
 // adding favourite songs list view in flatlist

 const playList = ({ item }) => {
  return (
   <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => SetisStatus(0)}
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
 const uploadBtn = () => {
  return (
   <TouchableOpacity onPress={() => selectOneFile()} style={Styles.uploadBtn}>
    <Text allowFontScaling={false} style={Styles.uploadText}>
     Upload Song
    </Text>
   </TouchableOpacity>
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
    {uploadBtn()}
   </View>
  );
 };
 const addPlaylistBtn = () => {
  return (
   <TouchableOpacity style={Styles.uploadBtn}>
    <Text allowFontScaling={false} style={Styles.uploadText}>
     Add Playlist
    </Text>
   </TouchableOpacity>
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
    {addPlaylistBtn()}
   </View>
  );
 };
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <Header
    arrowTrue={true}
    headerHeading={'Manage Songs'}
    rightImage={NOTIFICATION}
   />
   <View style={Styles.container}>
    <View style={Styles.btnView}>
     <TouchableOpacity
      onPress={() => SetisStatus(0)}
      style={[
       Styles.btnStyle,
       {
        backgroundColor: isStatus == 0 ? Colors.pink : Colors.white
       }
      ]}>
      <Text
       allowFontScaling={false}
       style={[
        Styles.topBtnText,
        { color: isStatus == 0 ? Colors.white : Colors.black }
       ]}>
       All Songs
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => SetisStatus(1)}
      style={[
       Styles.btnStyle,
       {
        backgroundColor: isStatus == 1 ? Colors.pink : Colors.white
       }
      ]}>
      <Text
       allowFontScaling={false}
       style={[
        Styles.topBtnText,
        { color: isStatus == 1 ? Colors.white : Colors.black }
       ]}>
       Playlist
      </Text>
     </TouchableOpacity>
    </View>

    <View style={{ flex: 1, justifyContent: 'center' }}>
     {isStatus == 0 ? djSongView() : isStatus == 1 ? playListView() : null}
    </View>
   </View>
  </SafeAreaView>
 );
}
