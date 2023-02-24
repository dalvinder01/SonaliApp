import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { BASE_URL } from '../Config/Url';
export const editProfile = createAsyncThunk('editProfile', async (dispatch) => {
 console.warn('login api params', dispatch.photo);
 let token = await AsyncStorage.getItem('token');
 const api = create({
  baseURL: '',
  headers: {
   Accept: 'application/json',
   'Content-Type': 'multipart/form-data',
   Authorization: `Bearer ${token}` // pass the authorization token here
  }
 });
 let data = new FormData();
 data.append('name', dispatch.name);
 data.append('email', dispatch.email);
 data.append('mobile_no', dispatch.number);
 data.append('photo', {
  uri: dispatch.photo,
  name: 'image.jpg',
  fileName: 'image',
  type: 'image/jpg'
 });
 console.warn('all data', data);

 return await api
  .post(BASE_URL + 'edit-profile', data, {})
  .then((res) => {
   console.warn('res api', res);
   return res.data;
  })
  .catch((error) => console.warn(error));
});

const editProfileSlice = createSlice({
 name: 'editProfile',
 initialState: {
  editData: [],
  status: null
 },
 extraReducers: {
  [editProfile.pending]: (state, action) => {
   state.status = 'loading';
  },
  [editProfile.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [editProfile.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default editProfileSlice.reducer;
