'use client';

import { useMutateLogin } from '@/queries/auth.query';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Breadcrumb from '../common/breadcrumb';

type Inputs = {
  email: string;
  password: string;
};

const LoginComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const { mutateAsync: loginMutate, isPending } = useMutateLogin();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      const { email, password } = data;
      loginMutate({ password, username: email });
    },
    [loginMutate]
  );

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Đăng nhập', href: '/dang-nhap' }]} />

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
              Đăng nhập
            </Text>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Email hoặc số điện thoại
              </Text>
              <Input placeholder="Email hoặc số điện thoại" {...register('email', { required: true })} />
              {errors.email && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập thông tin
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Mật khẩu
              </Text>
              <Input type="password" placeholder="Mật khẩu" {...register('password', { required: true })} />
              {errors.password && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập mật khẩu
                </Text>
              )}
            </Flex>

            <Button type="submit" colorScheme="green" isLoading={isPending}>
              Đăng nhập
            </Button>

            <Text textAlign="center">
              Bạn chưa có tài khoản?{' '}
              <Link href="/dang-ky">
                <Text as="span" fontWeight={500} color="sub.1">
                  Đăng ký ngay
                </Text>
              </Link>
            </Text>

            <Flex justify="center" mt={-5}>
              <Link href="/quen-mat-khau">
                <Text as="span" fontWeight={500} color="sub.1">
                  Quên mật khẩu
                </Text>
              </Link>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default LoginComponent;
