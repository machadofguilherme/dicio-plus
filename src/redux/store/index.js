import { configureStore } from '@reduxjs/toolkit';
import apiData from '../reducers/apiData';

const store = configureStore({
  reducer: apiData,
});

export default store;
