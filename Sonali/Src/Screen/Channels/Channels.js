import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from './Styles';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Constants/Colors';
import {
  BACKARROW,
  EVENT,
  HEADPHONE,
  NOTIFICATION,
} from '../../Constants/Images';
import Header from '../../Component/Header/Header';
import {useNavigation} from '@react-navigation/native';
export default function Channels() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      name: ' Channel Name',
      description: 'channels desrcription',
      active: ' Active',
    },
    {
      id: '1',
      name: ' Channel Name',
      description: 'channels desrcription',
      active: ' Active',
    },
    {
      id: '3',
      name: ' Channel Name',
      description: 'channels desrcription',
      active: ' Active',
    },
  ];
  const EventView = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={Styles.listContainer}
        onPress={() => navigation.navigate('ChannelDetail')}>
        <View style={Styles.liveView}>
          <Image style={Styles.itemImage} source={EVENT} />
          <Text allowFontScaling={false} style={Styles.liveText}>
            {item.name}
          </Text>
        </View>
        <Text
          allowFontScaling={false}
          style={[Styles.liveText, {color: Colors.green}]}>
          {item.active}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        arrowTrue={true}
        headerHeading={'Channels'}
        rightImage={NOTIFICATION}
      />
      <ScrollView>
        <View style={Styles.container}>
          <View style={{marginTop: '4%'}} />
          <View style={{width: '100%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={EventView}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
