export const mockApi = 'http://localhost:3000/api';

const endpoints = {
  /* Products */
  products: `${mockApi}/products`,

  /* Stock and Price */
  stockPrice: `${mockApi}/stock-price`,
} as const;

export default endpoints;
