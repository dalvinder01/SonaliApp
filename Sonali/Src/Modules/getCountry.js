import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { COUNTRY_URL } from '../Config/Url';
export const getCountry = createAsyncThunk('getCountry', async (dispatch) => {
 console.warn('api params', dispatch);

 return await fetch(COUNTRY_URL)
  .then((response) => response.json())
  .then((data) => {
   console.log(data);
   return data
  })
  .catch((error) => {
   console.log(error);
  });
});

const getCountrySlice = createSlice({
 name: 'getCountry',
 initialState: {
  countryData: [],
  status: null
 },
 extraReducers: {
  [getCountry.pending]: (state, action) => {
   state.status = 'loading';
  },
  [getCountry.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [getCountry.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default getCountrySlice.reducer;
