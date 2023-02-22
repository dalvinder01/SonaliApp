import React, { useEffect, useState } from 'react';
import {
 Text,
 View,
 Image,
 SafeAreaView,
 FlatList,
 TouchableOpacity,
 ImageBackground
} from 'react-native';
import Styles from './Styles';
import {
 ARTIST,
 DJICON,
 FACEBOOK,
 INSTAGRAM,
 NOTIFICATION,
 TWITTER
} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../Constants/Fonts';
import AsyncStorage from '@react-native-community/async-storage';
import { PRESENTER } from '../../Constants/Type';

export default function Artist() {
 const [isStatus, SetisStatus] = useState(0);
 const navigation = useNavigation();
 const [userType, setuserType] = useState('');
 const getTypeData = async () => {
  let type = await AsyncStorage.getItem('userType');
  console.warn('check', type);
  setuserType(type);
 };
 useEffect(() => {
  getTypeData();
 }, []);
 const DATA = [
  {
   id: '1',
   name: ' Name',
   description: 'channels desrcription'
  },
  {
   id: '1',
   name: ' Name',
   description: 'channels desrcription'
  },
  {
   id: '1',
   name: ' Name',
   description: 'channels desrcription'
  },
  {
   id: '1',
   name: ' Name',
   description: 'channels desrcription'
  },
  {
   id: '1',
   name: ' Name',
   description: 'channels desrcription'
  },
  {
   id: '1',
   name: ' Name',
   description: 'channels desrcription'
  }
 ];
 // here we can see all the list of artist
 const artistList = ({ item }) => {
  return (
   <View style={Styles.plalistContainer}>
    <View style={Styles.columnList}>
     <Image style={Styles.columnImage} source={ARTIST} />
    </View>
    <View style={Styles.columnView}>
     <Text allowFontScaling={false} style={Styles.itemText}>
      {item.name}
     </Text>
     <Text
      allowFontScaling={false}
      style={[Styles.itemText, { fontFamily: Fonts.ralewayRegular }]}>
      Profession:
     </Text>
    </View>
    <View style={Styles.socialView}>
     <TouchableOpacity>
      <Image style={Styles.socialIcon} source={FACEBOOK} />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image style={Styles.socialIcon} source={INSTAGRAM} />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image style={Styles.socialIcon} source={TWITTER} />
     </TouchableOpacity>
    </View>
   </View>
  );
 };
 // here we can see all the list dj songs
 const djList = ({ item }) => {
  return (
   <View style={Styles.djlistContainer}>
    <View style={[Styles.columnList]}>
     <ImageBackground style={Styles.columnImage} source={DJICON}>
      <TouchableOpacity style={Styles.djliveView}>
       <Text allowFontScaling={false} style={Styles.liveText}>
        Join
       </Text>
      </TouchableOpacity>
     </ImageBackground>
    </View>
    <View style={Styles.columnView}>
     <Text allowFontScaling={false} style={Styles.itemText}>
      {item.name}
     </Text>
     <Text
      allowFontScaling={false}
      style={[Styles.itemText, { fontFamily: Fonts.ralewayRegular }]}>
      Profession
     </Text>
    </View>
    <View style={Styles.socialView}>
     <TouchableOpacity>
      <Image style={Styles.socialIcon} source={FACEBOOK} />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image style={Styles.socialIcon} source={INSTAGRAM} />
     </TouchableOpacity>
     <TouchableOpacity>
      <Image style={Styles.socialIcon} source={TWITTER} />
     </TouchableOpacity>
    </View>
   </View>
  );
 };
 // adding artist list in flatlist
 const artistListView = () => {
  return (
   <View style={{ width: '100%', flex: 1 }}>
    <FlatList
     showsVerticalScrollIndicator={false}
     data={DATA}
     key={'_'}
     contentContainerStyle={{ flex: 1, alignSelf: 'center' }}
     keyExtractor={(item) => '_' + item.id}
     numColumns={2}
     renderItem={artistList}
    />
   </View>
  );
 };
 // adding dj's list in flatlist

 const djListView = () => {
  return (
   <View style={{ width: '100%', flex: 1 }}>
    <FlatList
     showsVerticalScrollIndicator={false}
     data={DATA}
     key={'_'}
     contentContainerStyle={{ flex: 1, alignSelf: 'center' }}
     keyExtractor={(item) => '_' + item.id}
     numColumns={2}
     renderItem={djList}
    />
   </View>
  );
 };
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <Header
    arrowTrue={true}
    headerHeading={'Artist'}
    rightImage={NOTIFICATION}
   />
   <View style={Styles.container}>
    <View style={Styles.btnView}>
     <TouchableOpacity
      onPress={() => SetisStatus(0)}
      style={[Styles.btnStyle, { borderBottomWidth: isStatus == 0 ? 2 : 0 }]}>
      <Text allowFontScaling={false} style={Styles.headingText}>
       Singers
      </Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={() => SetisStatus(1)}
      style={[Styles.btnStyle, { borderBottomWidth: isStatus == 1 ? 2 : 0 }]}>
      <Text allowFontScaling={false} style={Styles.headingText}>
       {userType == PRESENTER ? 'Judges' : 'Dj'}
      </Text>
     </TouchableOpacity>
    </View>
    {isStatus == 0 ? artistListView() : djListView()}
   </View>
  </SafeAreaView>
 );
}
