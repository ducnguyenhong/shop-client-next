'use client';

import { useMutateLogin } from '@/queries/login.query';
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

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
    // loginMutate(data)
    console.log(data);
  }, []);

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
              <Input placeholder="Email" {...register('email', { required: true })} />
              {errors.email && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập email
                </Text>
              )}
            </Flex>

            <Flex direction="column">
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
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default LoginComponent;
