import type { Expenses, Job } from '../types/Types';

export const expensesTotal = (arr: Expenses[]) => {
  if (!arr || arr?.length === 0) return 0;

  let value = 0;

  arr.forEach((val: Expenses) => {
    value += val.price;
  });

  return value.toFixed(2);
};

export const incomeTotal = (arr: Job[]) => {
  if (!arr || arr?.length === 0) return 0;

  let value = 0;

  arr.forEach((val: Job) => {
    value += val.price;
  });

  return value.toFixed(2);
};
