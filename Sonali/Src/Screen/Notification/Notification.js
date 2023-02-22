import React from 'react';
import {Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import Styles from './Styles';
import {EVENT, NOTIFICATION, NOTIFY} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import {useNavigation} from '@react-navigation/native';
export default function Notification() {
 const navigation = useNavigation();
 const DATA = [
  {
   id: '1',
   title: 'Get Even more out of app',
   description:
    'Make sure that you experinced complete app making one is simple and only takes a moment.',
  },
  {
   id: '2',
   title: 'Get Even more out of app',
   description:
    'Make sure that you experinced complete app making one is simple and only takes a moment.',
  },
 ];
 const EventView = ({item, index}) => {
  return (
   <View style={Styles.listContainer}>
    <Image style={Styles.itemImage} source={NOTIFY} />
    <View style={{width: '69%'}}>
     <Text allowFontScaling={false} style={Styles.itemHeading}>
      {item.title}
     </Text>
     <Text allowFontScaling={false} style={Styles.description}>
      {item.description}
     </Text>
    </View>
   </View>
  );
 };

 return (
  <SafeAreaView style={{flex: 1}}>
   <Header
    arrowTrue={true}
    onArrowPress={() => navigation.goBack()}
    onNotificationPress={() => navigation.navigate('Profile')}
    headerHeading={'Notification'}
    rightImage={NOTIFICATION}
   />
   <View style={Styles.container}>
    <View style={{width: '100%'}}>
     <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={EventView}
      keyExtractor={item => item.id}
     />
    </View>
   </View>
  </SafeAreaView>
 );
}
