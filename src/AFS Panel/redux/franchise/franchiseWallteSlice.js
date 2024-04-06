// franchiseWallateSlice.js
import { createSlice } from '@reduxjs/toolkit';

const franchiseWallateSlice = createSlice({
  name: 'franchise',
  initialState: {
    wallet: 0,
    requestAmount: 0,
  },
  reducers: {
    setWallet(state, action) {
      state.wallet = action.payload;
    },
    setRequestAmount(state, action) {
      state.requestAmount = action.payload;
    },
  },
});

export const { setWallet, setRequestAmount } = franchiseWallateSlice.actions;
export default franchiseWallateSlice.reducer;
