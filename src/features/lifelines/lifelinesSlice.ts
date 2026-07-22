import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type LifelineType = 'callAFriend' | 'fiftyFifty' | 'audience';

export interface LifelineState {
  callAFriend: number;
  fiftyFifty: number;
  audience: number;
}

const initialState: LifelineState = {
  callAFriend: 3,
  fiftyFifty: 3,
  audience: 3,
};

export const lifelinesSlice = createSlice({
  name: 'lifelines',
  initialState,
  reducers: {
    decrementLifeline: (state, action: PayloadAction<LifelineType>) => {
      const lifelineType = action.payload;
      if (state[lifelineType] > 0) {
        state[lifelineType] -= 1;
      }
    },
    resetLifelines: (state) => {
      state.callAFriend = 3;
      state.fiftyFifty = 3;
      state.audience = 3;
    },
    setLifelines: (state, action: PayloadAction<LifelineState>) => {
      state.callAFriend = action.payload.callAFriend;
      state.fiftyFifty = action.payload.fiftyFifty;
      state.audience = action.payload.audience;
    },
  },
});

export const { decrementLifeline, resetLifelines, setLifelines } = lifelinesSlice.actions;
export default lifelinesSlice.reducer;