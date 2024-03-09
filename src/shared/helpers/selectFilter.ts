/* eslint-disable no-plusplus */

enum SortBy {
  DATEADDED = 'dateAdded',
  DATE = 'date',
  TITLE = 'title'
}
export type Job = {
  price: number;
  keywords: string;
  description: string;
  brand: string;
  title: string;
  name: string;
  dateAdded: string;
};
export type Filter = {
  maxPrice: number;
  keyword: string;
  sortBy: SortBy;
  brand: string;
  minPrice: number;
};

/* eslint-disable no-else-return */
export const selectFilter = (products: Job[], filter: Filter) => {
  if (!products || products.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();

  return products
    .filter((product) => {
      const isInRange = filter.maxPrice
        ? product.price >= filter.minPrice && product.price <= filter.maxPrice
        : true;
      const matchKeyword = product.keywords ? product.keywords.includes(keyword) : true;
      // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;
      const matchDescription = product.description
        ? product.description.toLowerCase().includes(keyword)
        : true;
      const matchBrand = product.brand ? product.brand.toLowerCase().includes(filter.brand) : true;

      return (matchKeyword || matchDescription) && matchBrand && isInRange;
    })
    .sort((a, b) => {
      if (filter.sortBy === SortBy.DATEADDED) {
        return a.dateAdded < b.dateAdded ? 1 : -1;
      } else if (filter.sortBy === SortBy.DATE) {
        return a.name > b.name ? 1 : -1;
      } else if (filter.sortBy === SortBy.TITLE) {
        return a.title < b.title ? 1 : -1;
      }

      return a.price > b.price ? 1 : -1;
    });
};

// Select product with highest price
export const selectMax = (jobs: Job[]) => {
  if (!jobs || jobs.length === 0) return 0;

  let high = jobs[0];

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].price > high.price) {
      high = jobs[i];
    }
  }

  return Math.floor(high.price);
};

// Select product with lowest price
export const selectMin = (jobs: Job[]) => {
  if (!jobs || jobs.length === 0) return 0;
  let low = jobs[0];

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].price < low.price) {
      low = jobs[i];
    }
  }

  return Math.floor(low.price);
};
