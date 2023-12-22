import { configureStore } from '@reduxjs/toolkit'
import { authSlice, promotionSlice, membershipSlice, partnerProgramSlice } from './'

export const store = configureStore({
  reducer: {
    // cada uno de nuestros reducer
    auth: authSlice.reducer,
    promotions: promotionSlice.reducer,
    memberships: membershipSlice.reducer,  
    partnerPrograms: partnerProgramSlice.reducer,  
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch