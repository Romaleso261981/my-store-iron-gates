import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import { setFirestoreData } from '@/shared/helpers/addDoc';
import errorHandler from '@/shared/helpers/errorsHandler';
import { getAllFirestoreData } from '@/shared/helpers/getData';
import { DataBasePath } from '@/shared/types/enums';
import type { Job, JobTypes } from '@/shared/types/Types';

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

export const getAllJobs = createAsyncThunk<
  Job[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>('jobs/getAllJobs', async ({ path, queryLimit }, { rejectWithValue }) => {
  try {
    const res = await getAllFirestoreData(path, queryLimit);
    return res as Job[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

const initialState = {
  jobs: [],
  lastId: ''
} as JobTypes;

const jobSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addJob.fulfilled, () => {});
    builder.addCase(getAllJobs.fulfilled, (state, { payload }) => {
      state.jobs = payload;
      state.lastId = payload[payload.length - 1].id;
    });
  }
});

export default jobSlise.reducer;
