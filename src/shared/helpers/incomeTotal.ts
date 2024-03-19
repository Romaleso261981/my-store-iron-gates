import type { Product } from '../types/Types';

export const incomeTotal = (arr: Product[]) => {
  if (!arr || arr?.length === 0) return 0;

  return arr.reduce((acc, val) => acc + val.cost, 0).toFixed(2);
};
