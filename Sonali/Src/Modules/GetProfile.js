import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { BASE_URL } from '../Config/Url';
export const getProfile = createAsyncThunk('getProfile', async (dispatch) => {
 console.warn('login api params', dispatch);
 let token = await AsyncStorage.getItem('token');
 const api = create({
  baseURL: '',
  headers: {
   Accept: 'application/json',
   Authorization: `Bearer ${token}` // pass the authorization token here
  }
 });
 let data = new FormData();
 return await api
  .get(BASE_URL + 'get-profile', data, {})
  .then((res) => {
   console.warn('res api', res);
   return res.data;
  })
  .catch((error) => console.warn(error));
});
const getProfileSlice = createSlice({
 name: 'getProfile',
 initialState: {
  editData: [],
  status: null
 },
 extraReducers: {
  [getProfile.pending]: (state, action) => {
   state.status = 'loading';
  },
  [getProfile.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [getProfile.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});
export default getProfileSlice.reducer;
