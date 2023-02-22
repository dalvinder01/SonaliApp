import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
 Text,
 View,
 FlatList,
 TouchableOpacity,
 SafeAreaView,
 ScrollView,
 Image,
 ActivityIndicator
} from 'react-native';
import Styles from './Styles';
import AsyncStorage from '@react-native-community/async-storage';
import {
 BACKICON,
 EVENTARTIST,
 EVENTDJ,
 EVENTJUDGE,
 EVENTPRESENTER
} from '../../Constants/Images';
import Colors from '../../Constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { addRole } from '../../Modules/addRole';
import { useShowToast } from '../../Component/ShowMessage/ShowMessage';

export default function JoinAs() {
 const [typeIndex, setTypeIndex] = useState(null);
 const [userRole, setuserRole] = useState('');
 const [selectedIndices, setSelectedIndices] = useState([]);
 const navigation = useNavigation();
 const dispatch = useDispatch();
 const showToast = useShowToast('Network Error');
 const { status } = useSelector((state) => state.addRole);

 const DATA = [
  {
   id: 2,
   type: 'Presenter',
   icon: EVENTPRESENTER
  },
  {
   id: 3,
   type: 'Judge',
   icon: EVENTJUDGE
  },
  {
   id: 4,
   type: 'Artist',
   right: 8,
   icon: EVENTARTIST
  },
  {
   id: 5,
   type: 'Dj',
   icon: EVENTDJ
  }
 ];
 console.warn('role', userRole);
 const selectType = (item, index) => {
  setSelectedIndices([index]);
  console.warn('item', item.type);
  setuserRole(item.type);
 };

 const unselectType = (item, index) => {
  setSelectedIndices([]);
  console.warn('item', item.type);
  setuserRole('');
 };

 const addUserRole = () => {
  let data = {
   role: userRole !== '' ? userRole : 'Viewer'
  };
  dispatch(addRole(data)).then((response) => {
   console.warn('res', response.payload);
   if (response.payload.success == true) {
    saveData();
   } else {
    showToast();
   }
  });
 };
 const saveData = async () => {
  try {
   await AsyncStorage.setItem(
    'userType',
    userRole !== '' ? userRole : 'Viewer'
   );
   console.warn('Data successfully saved');
   navigation.navigate('Home');
  } catch (e) {
   console.warn('Failed to save the data to the storage');
  }
 };
 // showing list view in flatlist
 const typeList = ({ item, index }) => {
  const isSelected = selectedIndices.includes(index);
  return (
   <View style={Styles.listStyle}>
    <TouchableOpacity
     onPress={() => {
      isSelected ? unselectType(item, index) : selectType(item, index);
     }}
     style={[
      Styles.btnStyle,
      {
       backgroundColor: isSelected ? Colors.pink : Colors.listColor
      }
     ]}>
     <Image
      style={[
       Styles.userIcon,
       {
        right: item.right
       }
      ]}
      source={item.icon}
     />
     <Text
      allowFontScaling={false}
      style={[
       Styles.itemText,
       { color: isSelected ? Colors.white : Colors.black }
      ]}>
      {item.type}
     </Text>
    </TouchableOpacity>
   </View>
  );
 };
 return (
  <SafeAreaView style={Styles.container}>
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Styles.container}>
     <View style={Styles.joinView}>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={Styles.backBtn}>
       <Image style={Styles.backIcon} source={BACKICON} />
      </TouchableOpacity>
      <Text allowFontScaling={false} style={Styles.joinText}>
       Select your Account
      </Text>
      <View style={Styles.listView}>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        key={'_'}
        keyExtractor={(item) => '_' + item.id}
        numColumns={2}
        renderItem={typeList}
       />
       <View style={Styles.heightStyle} />
       <View style={Styles.skipView}>
        <Text style={Styles.skipText}>Skip to Continue as a </Text>

        <Text style={Styles.viewerText}>Viewer</Text>
       </View>
       <TouchableOpacity
        onPress={() => addUserRole()}
        style={[
         Styles.joinBtn,
         {
          backgroundColor: userRole !== '' ? Colors.pink : Colors.white,
          borderWidth: userRole !== '' ? 0 : 1
         }
        ]}>
        {status == 'loading' ? (
         <ActivityIndicator
          size={30}
          color={userRole !== '' ? Colors.white : Colors.pink}
         />
        ) : (
         <Text
          allowFontScaling={false}
          style={[
           Styles.btnText,
           { color: userRole !== '' ? Colors.white : Colors.black }
          ]}>
          {userRole !== '' ? 'Continue' : ' Skip'}
         </Text>
        )}
       </TouchableOpacity>
      </View>
     </View>
    </View>
    <View style={Styles.heightStyle} />
   </ScrollView>
  </SafeAreaView>
 );
}
