import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI } from '../Services/apiMethod';
import AsyncStorage from '@react-native-community/async-storage';
import { API_BASE_URL } from '../Services/apiUrl';
export const getList = createAsyncThunk(
 'getList',
 async (dispatch, getState) => {
  console.warn('dispatch', dispatch);
  let token = await AsyncStorage.getItem('token');
  const header = { Authorization: `Bearer ${token}` };
  return await getAPI(API_BASE_URL + 'user/recipe', header)
   .then(async (response) => {
    const { data } = response;
    return data;
   })
   .catch((e) => {
    console.warn(e);
   });
 }
);

const getListSlice = createSlice({
 name: 'getList',
 initialState: {
  listData: [],
  status: null
 },
 extraReducers: {
  [getList.pending]: (state, action) => {
   state.status = 'loading';
  },
  [getList.fulfilled]: (state, action) => {
   state.status = 'success';
   state.listData = action.payload;
  },
  [getList.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default getListSlice.reducer;
