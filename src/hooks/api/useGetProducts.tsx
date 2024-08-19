import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/utils/api';
import endpoints from '@/constants/endpoints';
import { Product } from '@/types/products';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = async () => {
  return api({
    url: `${endpoints.products}`,
    method: 'GET',
    label: 'products',
  });
};

const useGetProducts = <T = Product[],>(
  opts?: UseQueryOptions<Product[], unknown, T, [typeof GET_PRODUCTS]>,
) => useQuery([GET_PRODUCTS], getProducts, opts);

export default useGetProducts;
