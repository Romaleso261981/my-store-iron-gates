import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import authSlice from './slices/authSlice';
import expensesSlise from './slices/expensesSlice';
import jobSlise from './slices/jobSlise';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    jobSlise,
    expensesSlise,
    authSlice,
    userSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
