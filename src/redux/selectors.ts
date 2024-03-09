import type { RootState } from './store';

export const getExpenses = (state: RootState) => state.expensesSlise.expenses;
export const getJobs = (state: RootState) => state.jobSlise.jobs;
export const getCaptcha = (state: RootState) => state.authSlice.captchaFetch;
