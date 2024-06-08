'use client';

import { useMutateChangePass } from '@/queries/auth.query';
import { userInfoAtom } from '@/states/recoil';
import { showToast } from '@/utils/helper';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import Breadcrumb from '../common/breadcrumb';

const ChangePassComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { mutateAsync: changePassMutate, isPending } = useMutateChangePass();
  const userInfo = useRecoilValue(userInfoAtom);

  const { phone, email } = userInfo || {};

  const onSubmit = useCallback(
    (data: any) => {
      const { newPass, oldPass, confNewPass } = data;
      if (newPass !== confNewPass) {
        showToast({ status: 'error', content: 'Xác nhận mật khẩu mới không chính xác' });
        return;
      }

      changePassMutate({ username: phone || email, newPassword: newPass, oldPassword: oldPass }).then(() => {
        reset();
      });
    },
    [changePassMutate, email, phone, reset]
  );

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Đổi mật khẩu', href: '/doi-mat-khau' }]} />

      <Flex justify="center" align="center" pt={{ xs: 10, md: 20 }} pb={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            direction="column"
            p={{ xs: 0, md: 10 }}
            borderRadius={10}
            boxShadow={{ xs: 'none', md: 'xl' }}
            gap={10}
            w={{ xs: '300px', md: '550px' }}
          >
            <Text textAlign="center" fontWeight={700} fontSize={{ xs: 20, md: 24 }}>
              Đổi mật khẩu
            </Text>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Mật khẩu cũ
              </Text>
              <Input type="password" placeholder="Mật khẩu" {...register('oldPass', { required: true })} />
              {errors.oldPass && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập mật khẩu cũ
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Mật khẩu mới
              </Text>
              <Input type="password" placeholder="Mật khẩu" {...register('newPass', { required: true })} />
              {errors.newPass && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập mật khẩu mới
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Xác nhận mật khẩu mới
              </Text>
              <Input type="password" placeholder="Mật khẩu mới" {...register('confNewPass', { required: true })} />
              {errors.confNewPass && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập xác nhận mật khẩu mới
                </Text>
              )}
            </Flex>

            <Button type="submit" colorScheme="green" isLoading={isPending}>
              Đổi mật khẩu
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default ChangePassComponent;
