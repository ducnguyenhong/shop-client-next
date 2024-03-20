'use client';

import { cartAtom } from '@/states/recoil';
import { formatCurrency } from '@/utils/helper';
import { Box, Button, Flex, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IoCard } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import PageSection from '../common/page-section';
import CartItem from './cart-item';

const CartComponent: NextPage = () => {
  const cart = useRecoilValue(cartAtom);

  return (
    <Box pt={10}>
      <PageSection title="Giỏ hàng của tôi" />

      <Box mt={10}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="main.1">Sản phẩm</Th>
                <Th color="main.1">Đơn giá</Th>
                <Th color="main.1">Số lượng</Th>
                <Th color="main.1">Hành động</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((item) => (
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
              {formatCurrency(1000000)}
            </Text>
          </Flex>

          <Button leftIcon={<IoCard />} colorScheme="green">
            Thanh toán
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartComponent;
