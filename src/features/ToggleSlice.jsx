import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggles:'home',
  filter: 'all',
};

const toggleSlice = createSlice({
  name: 'toggles',
  initialState,
  reducers: {
    toggleSec: (state, action) => {
      state.toggles=action.payload.txt
    },
  },
});

export const { toggleSec } = toggleSlice.actions;
export default toggleSlice.reducer;
