import type { Job } from '@/pages/CommunityPage/model/type';

export const calculateTotal = (arr: Job[]) => {
  if (!arr || arr?.length === 0) return 0;

  const total = arr.reduce((acc, val) => acc + val.price, 0);

  return total.toFixed(2);
};
