import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import { setFirestoreData } from '@/shared/helpers/addDoc';
import errorHandler from '@/shared/helpers/errorsHandler';
import { getAllFirestoreData } from '@/shared/helpers/getData';
import { DataBasePath } from '@/shared/types/enums';
import type { Expenses, ExpensesTypes } from '@/shared/types/Types';

export const addExpenses = createAsyncThunk<
  void,
  Expenses,
  { rejectValue: string; state: RootState }
>('jobs/addExpenses', async (data: Expenses, { rejectWithValue }) => {
  try {
    await setFirestoreData(DataBasePath.EXPENSES, data.id, data);
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const getAllExpenses = createAsyncThunk<
  Expenses[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>('jobs/getAllExpenses', async ({ path, queryLimit }, { rejectWithValue }) => {
  try {
    const res = await getAllFirestoreData(path, queryLimit);
    return res as Expenses[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

const initialState = {
  expenses: []
} as ExpensesTypes;

const expensesSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllExpenses.fulfilled, (state, { payload }) => {
      state.expenses = payload;
    });
    builder.addCase(addExpenses.fulfilled, () => {});
  }
});

export default expensesSlise.reducer;
