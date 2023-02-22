import {useToast} from 'react-native-toast-notifications';

export const useShowToast = msg => {
 const toast = useToast();

 const showToast = () => {
  toast.show(msg, {
   type: 'normal',
   placement: 'center',
   duration: 1500,
   offset: 10,
   animationType: 'slide-in ',
  });
 };

 return showToast;
};
