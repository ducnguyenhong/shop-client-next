import API from '@/utils/api-client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

export const useQueryCategoryList = () => {
  const queryKey = ['GET_CATEGORY_LIST'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/category/get-all'
      }),
    enabled: isEmpty(dataClient)
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};
