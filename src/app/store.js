import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/ToggleSlice';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});