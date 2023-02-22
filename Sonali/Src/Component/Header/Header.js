import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Styles from './Styles';
import {BACKARROW, NOTIFICATION} from '../../Constants/Images';
import {useNavigation} from '@react-navigation/native';
export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={Styles.headerView}>
      <View style={Styles.innerView}>
        <View style={Styles.arrowTextView}>
          {props.arrowTrue == true ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={Styles.arrowStyle} source={BACKARROW} />
            </TouchableOpacity>
          ) : (
            <View style={Styles.arrowStyle}></View>
          )}
          <Text allowFontScaling={false} style={Styles.headerText}>
            {props.headerHeading}
          </Text>
        </View>
        {props.notificationTrue == true ? (
          <TouchableOpacity onPress={props.onNotificationPress}>
            <Image style={[Styles.arrowStyle,props.rightStyle]} source={props.rightImage} />
          </TouchableOpacity>
        ) : (
          <View style={Styles.arrowStyle}></View>
        )}
      </View>
    </View>
  );
}
