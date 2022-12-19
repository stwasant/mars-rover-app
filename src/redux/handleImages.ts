import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';

// Define a type for the slice state
interface ChangeViewerPhoto {
  flagShow: boolean;
  valueScreen: number;
  refreshing: number;
}

// Define the initial state using that type
const initialState: ChangeViewerPhoto = {
  flagShow: false,
  valueScreen: 6,
  refreshing: 0,
};

export const viewerPhotoSlice = createSlice({
  name: 'viewerphotoslice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeViewer6Photo: (state, action) => {
      state.flagShow = action.payload;
    },
    refreshingData: (state, action) => {
      state.refreshing = action.payload
    },
  },
});

export const { changeViewer6Photo, refreshingData } = viewerPhotoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFlagViewerStatusPhoto = (state: RootState) => state.viewerphotoslice.flagShow;
export const selectValueViewerStatusPhoto = (state: RootState) => state.viewerphotoslice.valueScreen;
export const selectValueRefreshingPhoto = (state: RootState) => state.viewerphotoslice.refreshing;

export default viewerPhotoSlice.reducer;
