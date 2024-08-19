import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { api } from '@/utils/api';
import endpoints from '@/constants/endpoints';
import { StockPrice } from '@/types/products';

export const GET_STOCK_PRICE_BY_ID = 'GET_STOCK_PRICE_BY_ID';

export const getStockPriceById = async (id: number) => {
  return api({
    url: `${endpoints.stockPrice}/${id}`,
    label: 'Stock and Price',
    method: 'GET',
  });
};

const useGetStockPriceById = <T = StockPrice | undefined>(
  id: number,
  opts?: UseQueryOptions<T, [typeof GET_STOCK_PRICE_BY_ID, typeof id]>
) => {
  return useQuery([GET_STOCK_PRICE_BY_ID, id], () => getStockPriceById(id), opts);
};

export default useGetStockPriceById;
