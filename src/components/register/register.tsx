'use client';

import { useMutateLogin } from '@/queries/login.query';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
  confPassword: string;
  fullName: string;
  phone: string;
  address: string;
};

const RegisterComponent: React.FC = () => {
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
    <Flex justify="center" align="center" pt={28} pb={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" p={10} borderRadius={10} boxShadow="xl" gap={10} w="550px">
          <Text textAlign="center" fontWeight={700} fontSize={24} color="main.1">
            Đăng ký tài khoản
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

          <Flex direction="column">
            <Input type="password" placeholder="Nhập lại mật khẩu" {...register('confPassword', { required: true })} />
            {errors.confPassword && (
              <Text as="span" color="red" mt={0.5}>
                Vui lòng nhập lại mật khẩu
              </Text>
            )}
          </Flex>

          <Flex direction="column">
            <Input placeholder="Họ và tên" {...register('fullName', { required: true })} />
            {errors.fullName && (
              <Text as="span" color="red" mt={0.5}>
                Vui lòng nhập họ tên của bạn
              </Text>
            )}
          </Flex>

          <Flex direction="column">
            <Input placeholder="Số điện thoại" {...register('phone', { required: true })} />
            {errors.phone && (
              <Text as="span" color="red" mt={0.5}>
                Vui lòng nhập số điện thoại
              </Text>
            )}
          </Flex>

          <Flex direction="column">
            <Input placeholder="Địa chỉ" {...register('address', { required: true })} />
            {errors.address && (
              <Text as="span" color="red" mt={0.5}>
                Vui lòng nhập địa chỉ
              </Text>
            )}
          </Flex>

          <Button type="submit" colorScheme="orange" isLoading={isPending}>
            Đăng ký
          </Button>

          <Text textAlign="center">
            Bạn đã có tài khoản?{' '}
            <Link href="/dang-nhap">
              <Text as="span" fontWeight={500} color="sub.1">
                Đăng nhập ngay
              </Text>
            </Link>
          </Text>
        </Flex>
      </form>
    </Flex>
  );
};

export default RegisterComponent;
