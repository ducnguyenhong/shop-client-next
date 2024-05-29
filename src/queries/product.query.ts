import { cartAtom } from '@/states/recoil';
import API from '@/utils/api-client';
import { showToast } from '@/utils/helper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { useRecoilValue } from 'recoil';

export const useQueryProductList = () => {
  const queryKey = ['GET_PRODUCT_LIST'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/product/search'
      }).then((res) => {
        return res?.content;
      }),
    enabled: isEmpty(dataClient)
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};

export const useQueryProductInCart = () => {
  const queryKey = ['GET_PRODUCT_LIST_IN_CART'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);
  const cart = useRecoilValue(cartAtom);

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/product/cache-list-products',
        params: { productIds: cart.map((i) => i.id).join(',') }
      }).then((res) => {
        return res;
      }),
    enabled: isEmpty(dataClient) && !!cart.length
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (params: Record<string, unknown>) => {
      return API.request({
        url: '/api/product/order',
        method: 'POST',
        params
      }).catch((e) => {
        showToast({ status: 'error', content: `Đặt hàng thất bại. ${e?.message}` });
        return Promise.reject(e);
      });
    }
  });
};
