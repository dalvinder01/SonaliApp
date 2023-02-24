import AsyncStorage from '@react-native-community/async-storage';

export let userType;
export let countryCode;

export function getUserType() {
 return new Promise(async (resolve) => {
  if (!userType) {
   userType = await AsyncStorage.getItem('userType');
  }
  resolve(userType);
 });
}
export function getCountryCode() {
 return new Promise(async (resolve) => {
  if (!countryCode) {
   countryCode = await AsyncStorage.getItem('countryCode');
  }
  resolve(countryCode);
 });
}
