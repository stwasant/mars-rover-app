import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';

// Define a type for the slice state
interface RefreshingData {
  refreshing: number;
}

// Define the initial state using that type
const initialState: RefreshingData = {
  refreshing: 0,
};

export const refreshingPhotoSlice = createSlice({
  name: 'refreshing',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: { value: initialState },
  reducers: {
    refreshingData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { refreshingData } = refreshingPhotoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectValueRefreshingPhoto = (state: RootState) => state.viewerphotoslice;

export default refreshingPhotoSlice.reducer;
