import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { BASE_URL } from '../Config/Url';
export const addRole = createAsyncThunk('addRole', async (dispatch) => {
 console.warn('login api params', dispatch.role);
 let token = await AsyncStorage.getItem('token');
 const api = create({
  baseURL: '',
  headers: {
   Accept: 'application/json',
   Authorization: `Bearer ${token}` // pass the authorization token here
  }
 });
 let data = new FormData();
 data.append('role', dispatch.role);
 return await api
  .post(BASE_URL + 'add-role', data, {})
  .then((res) => {
   console.warn('res api', res);
   return res.data;
  })
  .catch((error) => console.warn(error));
});

const addRoleSlice = createSlice({
 name: 'addRole',
 initialState: {
  loginData: [],
  status: null
 },
 extraReducers: {
  [addRole.pending]: (state, action) => {
   state.status = 'loading';
  },
  [addRole.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [addRole.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default addRoleSlice.reducer;
