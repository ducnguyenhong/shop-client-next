import API from '@/utils/api-client';
import { useMutation } from '@tanstack/react-query';

export const useMutateLogin = () => {
  return useMutation({
    mutationFn: () =>
      API.request({
        url: '/'
      })
  });
};
