import API from '@/utils/api-client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

export const useQueryMyOrders = () => {
  const queryKey = ['GET_MY_ORDER_LIST'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);

  const { data, isLoading, error } = useQuery<any>({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/product/order/get-by-me',
        params: {
          pageNumber: 0,
          pageSize: 100,
          type: 'BUY'
        }
      }).then((res) => res?.content || []),
    enabled: isEmpty(dataClient)
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};
