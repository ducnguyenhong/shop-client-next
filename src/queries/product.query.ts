import { cartAtom } from '@/states/recoil';
import API from '@/utils/api-client';
import { showToast } from '@/utils/helper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { useSearchParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';

export const useQueryProductList = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const page = searchParams.get('page') || 1;
  const categoryId = searchParams.get('categoryId');
  const queryKey = ['GET_PRODUCT_LIST', keyword, page, categoryId];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey) || [];

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/product/search',
        params: {
          pageNumber: Number(page) - 1,
          pageSize: 12,
          title: keyword,
          categoryId
        }
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

export const useQueryFavoriteProducts = () => {
  const queryKey = ['GET_PRODUCT_FAVORITE_LIST'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey) || [];

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/product/order/favorite-search',
        params: { pageNumber: 0, pageSize: 100 }
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

export const useAddProductFavorite = () => {
  return useMutation({
    mutationFn: (params: Record<string, unknown>) => {
      return API.request({
        url: `/api/product/favorite/${params.productId}`,
        method: 'POST'
      }).catch((e) => {
        showToast({ status: 'error', content: `Thao tác thất bại. ${e?.message}` });
        return Promise.reject(e);
      });
    }
  });
};

export const useRemoveProductFavorite = () => {
  return useMutation({
    mutationFn: (params: Record<string, unknown>) => {
      return API.request({
        url: `/api/product/favorite/${params.productId}`,
        method: 'DELETE'
      }).catch((e) => {
        showToast({ status: 'error', content: `Thao tác thất bại. ${e?.message}` });
        return Promise.reject(e);
      });
    }
  });
};

export const useQueryProductDetail = (id?: string) => {
  const queryKey = ['GET_PRODUCT_DETAIL', id];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: `/api/product/get-by-id/${id}`
      }),
    enabled: isEmpty(dataClient) && !!id
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};
