import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import heroSlice from '../features/hero/heroSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    hero: heroSlice
  },
})

// Infer RootState & AppDispatch types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
