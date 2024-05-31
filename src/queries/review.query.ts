import API from '@/utils/api-client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

export const useCreateProductReview = () => {
  return useMutation({
    mutationFn: (params: any) =>
      API.request({
        url: '/api/user/review',
        method: 'POST',
        params
      })
  });
};

export const useQueryProductReviews = (productId?: string) => {
  const queryKey = ['GET_PRODUCT_REVIEW_LIST'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);

  const { data, isLoading, error } = useQuery<any>({
    queryKey,
    queryFn: () =>
      API.request({
        url: `/api/product/review/${productId}`,
        params: { pageNumber: 0, pageSize: 100 }
      }).then((res) => res?.content || []),
    enabled: isEmpty(dataClient) && !!productId
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};
