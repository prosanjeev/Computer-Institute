// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../AFS Panel/components/reduxSlice/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
