// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import packageReducer from './features/packageSlice';
import customerReducer from './features/customerSlice';

export const store = configureStore({
  reducer: {
    package: packageReducer,
    customer: customerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
