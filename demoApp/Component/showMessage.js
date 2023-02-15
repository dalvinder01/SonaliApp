import Toast from 'react-native-simple-toast';
export function showToast(msg) {
 console.log('msg', msg);
 return Toast.showWithGravity(msg, Toast.SHORT, Toast.CENTER);
}
