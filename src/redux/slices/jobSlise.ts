import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import { setFirestoreData } from '@/shared/helpers/addDoc';
import errorHandler from '@/shared/helpers/errorsHandler';
import { getAllFirestoreData } from '@/shared/helpers/getData';
import { DataBasePath } from '@/shared/types/enums';
import type { Expenses, Job, JobTypes } from '@/shared/types/Types';

export const addJob = createAsyncThunk<void, Job, { rejectValue: string; state: RootState }>(
  'jobs/addJob',
  async (data: Job, { rejectWithValue }) => {
    try {
      await setFirestoreData(DataBasePath.JOBS, data.id, data);
    } catch (error) {
      return rejectWithValue(errorHandler(error, 'signIn Error'));
    }
  }
);

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

export const getAllJobs = createAsyncThunk<
  Job[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>('jobs/getAllJobs', async ({ path, queryLimit }, { rejectWithValue }) => {
  try {
    const res = await getAllFirestoreData(path, queryLimit);
    console.log('res', res);
    return res as Job[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const getAllExpenses = createAsyncThunk<
  Expenses[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>('jobs/getAllJobs', async ({ path, queryLimit }, { rejectWithValue }) => {
  try {
    const res = await getAllFirestoreData(path, queryLimit);
    console.log('Expenses', res);
    return res as Expenses[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

const initialState = {
  jobs: [],
  id: '',
  description: '',
  title: '',
  gotSalary: 0,
  quantity: 0,
  advance: 0,
  price: 0,
  dateAdded: 0
} as JobTypes;

const jobSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addJob.fulfilled, () => {});
    builder.addCase(getAllJobs.fulfilled, (state, { payload }) => {
      state.jobs = payload;
    });
  }
});

export default jobSlise.reducer;