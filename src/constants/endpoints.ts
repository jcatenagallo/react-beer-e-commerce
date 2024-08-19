export const mockApi = 'https://react-beer-e-commerce-backend.vercel.app/api';

const endpoints = {
  /* Products */
  products: `${mockApi}/products`,

  /* Stock and Price */
  stockPrice: `${mockApi}/stock-price`,
} as const;

export default endpoints;
