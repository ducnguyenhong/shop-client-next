'use client';

import { useMutateRegister } from '@/queries/auth.query';
import { showToast } from '@/utils/helper';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Breadcrumb from '../common/breadcrumb';

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
    formState: { errors },
    setError
  } = useForm<Inputs>();
  const { mutateAsync: registerMutate, isPending } = useMutateRegister();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      const { password, confPassword, email, phone, address, fullName } = data;
      if (password !== confPassword) {
        setError('confPassword', { message: 'Xác nhận mật khẩu không đúng' });
        return;
      }
      registerMutate({ password, email, phone, address, fullName })
        .then(() => {
          showToast({ status: 'warning', content: 'Đăng ký tài khoản thành công' });
          router.push('/dang-nhap');
        })
        .catch((e) => {
          showToast({ status: 'error', content: `Đăng ký thất bại. ${e.message}` });
        });
    },
    [registerMutate, router, setError]
  );

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Đăng ký', href: '/dang-ky' }]} />
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
              Đăng ký tài khoản
            </Text>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Email
              </Text>
              <Input placeholder="Email" {...register('email', { required: true })} />
              {errors.email && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập email
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

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Nhập lại mật khẩu
              </Text>
              <Input
                type="password"
                placeholder="Nhập lại mật khẩu"
                {...register('confPassword', { required: 'Vui lòng nhập lại mật khẩu' })}
              />
              {errors.confPassword && (
                <Text as="span" color="red" mt={0.5}>
                  {errors.confPassword.message}
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Họ và tên
              </Text>
              <Input placeholder="Họ và tên" {...register('fullName', { required: true })} />
              {errors.fullName && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập họ tên của bạn
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Số điện thoại
              </Text>
              <Input placeholder="Số điện thoại" {...register('phone', { required: true })} />
              {errors.phone && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập số điện thoại
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <Text fontWeight={700} mb={1}>
                Địa chỉ
              </Text>
              <Input placeholder="Địa chỉ" {...register('address', { required: true })} />
              {errors.address && (
                <Text as="span" color="red" mt={0.5}>
                  Vui lòng nhập địa chỉ
                </Text>
              )}
            </Flex>

            <Button type="submit" colorScheme="green" isLoading={isPending}>
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
    </Box>
  );
};

export default RegisterComponent;
