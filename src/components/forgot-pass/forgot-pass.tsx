'use client';

import { useMutateForgotPass, useMutateSendEmail } from '@/queries/auth.query';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Breadcrumb from '../common/breadcrumb';

const ForgotPassComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { mutateAsync: resetPassMutate, isPending } = useMutateForgotPass();
  const { mutateAsync: sendEmailMutate, isPending: loadingSendEmail } = useMutateSendEmail();
  const [step, setStep] = useState(1);
  const [forgotUsername, setForgotUsername] = useState<string>('');
  const router = useRouter();

  const onSubmit = useCallback(
    (data: any) => {
      const { newPass, code } = data;
      resetPassMutate({ username: forgotUsername.trim(), newPassword: newPass, code }).then(() => {
        reset();
        setStep(1);
        router.push('/dang-nhap');
      });
    },
    [resetPassMutate, forgotUsername, reset, router]
  );

  const onSendEmail = useCallback(() => {
    sendEmailMutate({
      username: forgotUsername.trim()
    }).then(() => setStep(2));
  }, [forgotUsername, sendEmailMutate]);

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Quên mật khẩu', href: '/quen-mat-khau' }]} />

      <Flex justify="center" align="center" pt={{ xs: 10, md: 20 }} pb={10}>
        <Flex
          direction="column"
          p={{ xs: 0, md: 10 }}
          borderRadius={10}
          boxShadow={{ xs: 'none', md: 'xl' }}
          gap={10}
          w={{ xs: '300px', md: '550px' }}
        >
          <Text textAlign="center" fontWeight={700} fontSize={{ xs: 20, md: 24 }}>
            Quên mật khẩu
          </Text>
          <Box>
            <Flex direction="column">
              <Text fontWeight={700} mb={4}>
                Nhập email hoặc số điện thoại của bạn
              </Text>
              <Input
                isDisabled={step === 2}
                placeholder="Email hoặc số điện thoại"
                value={forgotUsername}
                onChange={(e) => setForgotUsername(e.target.value)}
              />

              <Button
                mt={8}
                onClick={onSendEmail}
                colorScheme="green"
                isLoading={loadingSendEmail}
                isDisabled={!forgotUsername.trim().length || step === 2}
              >
                Tiếp tục
              </Button>
            </Flex>
          </Box>

          {step === 2 && (
            <Box mt={6}>
              <Text my={4} fontWeight={600} fontSize={16} color="sub.1">
                Một email mới vừa được gửi đến bạn. Hãy kiểm tra email của bạn để lấy mã xác minh và tiếp tục.
              </Text>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column" gap={10}>
                  <Flex direction="column">
                    <Text fontWeight={700} mb={1}>
                      Mã xác minh
                    </Text>
                    <Input placeholder="Mã xác minh từ email" {...register('code', { required: true })} />
                    {errors.code && (
                      <Text as="span" color="red" mt={0.5}>
                        Vui lòng nhập mã xác minh
                      </Text>
                    )}
                  </Flex>

                  <Flex direction="column">
                    <Text fontWeight={700} mb={1}>
                      Mật khẩu mới
                    </Text>
                    <Input type="password" placeholder="Mật khẩu mới" {...register('newPass', { required: true })} />
                    {errors.newPass && (
                      <Text as="span" color="red" mt={0.5}>
                        Vui lòng nhập mật khẩu mới
                      </Text>
                    )}
                  </Flex>

                  <Button type="submit" colorScheme="green" isLoading={isPending}>
                    Đặt lại mật khẩu
                  </Button>
                </Flex>
              </form>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ForgotPassComponent;
