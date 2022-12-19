import { configureStore } from '@reduxjs/toolkit'
import { viewerPhotoSlice } from './handleImages'

export const store = configureStore({
  reducer: {
    viewerphotoslice: viewerPhotoSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch