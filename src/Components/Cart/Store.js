// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Cart/Cartslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
