import { tokenState, userInfoAtom } from '@/states/recoil';
import API from '@/utils/api-client';
import { showToast } from '@/utils/helper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/navigation';
import { useRecoilState, useSetRecoilState } from 'recoil';

export const useMutateLogin = () => {
  const setToken = useSetRecoilState(tokenState);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const router = useRouter();

  return useMutation({
    mutationFn: (params: Record<string, unknown>) => {
      return API.request({
        url: '/api/auth/login',
        method: 'POST',
        params: params
      })
        .then((res) => {
          const token = res?.token;
          setToken(token);

          API.request({
            url: '/api/user'
          }).then((user) => {
            setUserInfo(user);
            router.push('/');
          });
        })
        .catch(() => {
          showToast({ status: 'error', content: 'Tài khoản hoặc mật khẩu không chính xác' });
        });
    }
  });
};

export const useQueryUserInfo = (enabled?: boolean) => {
  const queryKey = ['GET_USER_INFO'];
  const queryClient = useQueryClient();
  const dataClient = queryClient.getQueryData(queryKey);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [token, setToken] = useRecoilState(tokenState);

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/api/user'
      }).then((res) => {
        setUserInfo(res);
        return res;
      }),
    enabled: isEmpty(dataClient) && !!token && enabled
  });

  if (!isEmpty(dataClient)) {
    return { data: dataClient, isLoading: false, error: null };
  }
  return { data, isLoading, error };
};

export const useMutateRegister = () => {
  return useMutation({
    mutationFn: (params: any) =>
      API.request({
        url: '/api/user',
        method: 'POST',
        params
      })
  });
};
