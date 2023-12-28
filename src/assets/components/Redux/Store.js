import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Redux';

const store = configureStore({
  reducer: {
    state: counterReducer,
  },
});

export default store;