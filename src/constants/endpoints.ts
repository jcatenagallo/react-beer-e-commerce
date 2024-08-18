export const mockApi = 'http://localhost:3000/api';

const endpoints = {
  /* Products */
  products: `${mockApi}/products`,
} as const;

export default endpoints;
