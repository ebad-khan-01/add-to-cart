import { configureStore, createReducer } from '@reduxjs/toolkit';
import counterReducer from '../slices/CounterSlice';
import CartReducer from '../slices/CartSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    allcart: CartReducer
    
  },

});

export default store;

