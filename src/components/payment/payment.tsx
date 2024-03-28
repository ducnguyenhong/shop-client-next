'use client';

import { cartAtom } from '@/states/recoil';
import { formatCurrency, showToast } from '@/utils/helper';
import { Box, Button, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import ModalConfirm from './modal-confirm';

const PaymentComponent: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [paymentMethod, setPaymentMethod] = useState<'BANK' | 'COD'>('BANK');
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const router = useRouter();

  const cartFromApi = cart.map((i) => ({
    ...i,
    price: 100_000,
    image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
    name: 'Sản phẩm 1'
  }));

  const totalPrice = useMemo(() => {
    return cartFromApi.reduce((prev, curr) => {
      const { quantity, price } = curr;
      return prev + quantity * price;
    }, 0);
  }, [cartFromApi]);

  const onConfirm = useCallback(() => {
    setCart([]);
    showToast({
      content: 'Đặt hàng thành công!',
      status: 'warning'
    });
    router.push('/don-hang-cua-toi');
  }, [router, setCart]);

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Thanh toán', href: '/thanh-toan' }]} />
      <PageSection title="Thanh toán đơn hàng" />

      <Box mt={10}>
        <Flex direction="column" gap={10} pl={10}>
          <Flex align="center" gap={2}>
            <Text fontWeight={600} fontSize={16}>
              • Tổng số sản phẩm:{' '}
            </Text>
            <Text fontWeight={700} fontSize={16} color="sub.2">
              {cart.length}
            </Text>
          </Flex>

          <Flex align="center" gap={2}>
            <Text fontWeight={600} fontSize={16}>
              • Tổng số tiền:{' '}
            </Text>
            <Text fontWeight={700} fontSize={16} color="sub.2">
              {formatCurrency(totalPrice)}
            </Text>
          </Flex>

          <Flex gap={5} direction="column">
            <Text fontWeight={600} fontSize={16}>
              • Hình thức thanh toán:
            </Text>

            <Box pl={10}>
              <RadioGroup defaultValue="BANK" onChange={(data: 'BANK' | 'COD') => setPaymentMethod(data)}>
                <Stack spacing={10} direction="row">
                  <Radio colorScheme="green" value="BANK">
                    Chuyển khoản
                  </Radio>
                  <Radio colorScheme="green" value="COD">
                    Tiền mặt (COD)
                  </Radio>
                </Stack>
              </RadioGroup>

              {paymentMethod === 'BANK' && (
                <Flex direction="column" gap={2} mt={5} border="1px solid #e6e6e6" borderRadius={5} p={5}>
                  <Text fontWeight={500}>Bạn vui lòng chuyển khoản ngân hàng để thanh toán đơn hàng này!</Text>
                  <Text fontWeight={500}>Thông tin chuyển khoản:</Text>
                  <Text pl={4} fontWeight={500}>
                    • Ngân hàng:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      NGÂN HÀNG QUÂN ĐỘI (MB Bank)
                    </Text>
                  </Text>
                  <Text pl={4} fontWeight={500}>
                    • Chủ tài khoản:{' '}
                    <Text as="span" fontWeight={600} color="sub.2">
                      NGUYỄN HỒNG ĐỨC
                    </Text>
                  </Text>
                  <Text pl={4} fontWeight={500}>
                    • Số tài khoản:{' '}
                    <Text as="span" fontWeight={600} color="sub.2">
                      140056789999
                    </Text>
                  </Text>
                  <Text pl={4} fontWeight={500}>
                    • Số tiền:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      {formatCurrency(totalPrice)}
                    </Text>
                  </Text>
                  <Text pl={4} fontWeight={500}>
                    • Nội dung chuyển khoản:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      Họ và tên + Số điện thoại của bạn
                    </Text>
                  </Text>
                </Flex>
              )}

              {paymentMethod === 'COD' && (
                <Flex direction="column" gap={2} mt={5} border="1px solid #e6e6e6" borderRadius={5} p={5}>
                  <Text fontWeight={500}>Bạn đã chọn hình thức thanh toán tiền mặt (COD).</Text>
                  <Text fontWeight={500}>
                    Vui lòng thanh toán tiền mặt cho nhân viên giao hàng khi bạn nhận được hàng.
                  </Text>
                  <Text pl={4} fontWeight={500}>
                    • Số tiền:{' '}
                    <Text as="span" fontWeight={700} color="sub.2">
                      {formatCurrency(totalPrice)}
                    </Text>
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
        </Flex>

        <Flex justify="center" mt={14}>
          <Button colorScheme="green" onClick={() => setShowConfirm(true)}>
            Xác nhận đặt hàng
          </Button>
        </Flex>
      </Box>

      <ModalConfirm show={showConfirm} onConfirm={onConfirm} onClose={() => setShowConfirm(false)} />
    </Box>
  );
};

export default PaymentComponent;
