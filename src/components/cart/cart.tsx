'use client';

import { useQueryProductInCart } from '@/queries/product.query';
import { cartAtom } from '@/states/recoil';
import { formatCurrency } from '@/utils/helper';
import { useScrollTop } from '@/utils/hooks';
import { Box, Button, Flex, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { IoCard } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import Breadcrumb from '../common/breadcrumb';
import LoadingScreen from '../common/loading-screen';
import PageSection from '../common/page-section';
import CartItem from './cart-item';
import ModalDeleteCart from './modal-delete';

const CartComponent: NextPage = () => {
  const cart = useRecoilValue(cartAtom);
  const router = useRouter();

  const { data: productList = [], isLoading } = useQueryProductInCart();

  const cartFromApi = cart.map((i) => {
    const currentProduct = productList.find((p: any) => `${p.id}` === `${i.id}`);
    return { ...currentProduct, ...i };
  });

  const totalPrice = useMemo(() => {
    return cartFromApi.reduce((prev, curr) => {
      const { quantity, price } = curr;
      return prev + quantity * price;
    }, 0);
  }, [cartFromApi]);

  useScrollTop();

  if (isLoading) {
    return (
      <Box pt={20}>
        <LoadingScreen />
      </Box>
    );
  }

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Giỏ hàng', href: '/gio-hang' }]} />
      <PageSection title="Giỏ hàng của tôi" />

      <Box mt={10}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="main.1">Sản phẩm</Th>
                <Th color="main.1">Đơn giá</Th>
                <Th color="main.1">Số lượng</Th>
                <Th color="main.1">Thành tiền</Th>
                <Th color="main.1">Hành động</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartFromApi.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Flex justify="flex-end" mt={10}>
        <Flex direction="column" align="flex-end" gap={10}>
          <Flex gap={3} align="center">
            <Text color="main.1" fontWeight={600} fontSize={18}>
              Tổng cộng:
            </Text>
            <Text color="#1c78ce" fontWeight={700} fontSize={20} mt={0.5}>
              {formatCurrency(totalPrice)}
            </Text>
          </Flex>

          <Button
            leftIcon={<IoCard />}
            colorScheme="green"
            isDisabled={!cart.length}
            onClick={() => router.push('/thanh-toan')}
          >
            Thanh toán
          </Button>
        </Flex>
      </Flex>

      <ModalDeleteCart />
    </Box>
  );
};

export default CartComponent;
