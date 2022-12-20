import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ChangeViewerPhoto {
  flagShow: boolean;
  valueScreen: number
}

// Define the initial state using that type
const initialState: ChangeViewerPhoto = { 
  flagShow: false,
  valueScreen: 6
};

export const viewerPhotoSlice = createSlice({
  name: 'viewerphotoslice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {value: initialState},
  reducers: {
    changeViewer6Photo: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { changeViewer6Photo } = viewerPhotoSlice.actions;

export default viewerPhotoSlice.reducer;
