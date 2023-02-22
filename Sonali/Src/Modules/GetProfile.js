import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {getAPI, postAPI} from '../../config/apiMethod';
import {url} from '../../config/url';
import AsyncStorage from '@react-native-community/async-storage';
export const getProfile = createAsyncThunk('getProfile', async dispatch => {
 // console.warn('api token on home ', dispatch);
 let token = await AsyncStorage.getItem('saveToken');
 let data = {
  user_token: token,
 };
 return await postAPI(url.BASE_URL + 'getCustomerProfile', data)
  .then(async response => {
   const {data} = response;
   console.warn('get prifiel api res', response);
   return data;
  })
  .catch(e => {
   console.warn(e);
   if (e.response) {
    console.warn('api issue', e.response);
    console.warn(e.response.data.message);
   } else if (e.request) {
    console.warn('No data found');
   } else {
    console.warn('No data found');
   }
  });
});

const getProfileSlice = createSlice({
 name: 'getProfile',
 initialState: {
  profileData: [],
  status: null,
 },
 extraReducers: {
  [getProfile.pending]: (state, action) => {
   state.status = 'loading';
  },
  [getProfile.fulfilled]: (state, action) => {
   state.status = 'success';
   state.profileData = action.payload;
  },
  [getProfile.rejected]: (state, action) => {
   state.status = 'failed';
  },
 },
});

export default getProfileSlice.reducer;