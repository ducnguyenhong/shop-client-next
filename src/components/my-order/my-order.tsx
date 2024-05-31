'use client';

import { useQueryMyOrders } from '@/queries/order.query';
import { Box, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import OrderItem from './order-item';

const MyOrderComponent: React.FC = () => {
  const { data = [] } = useQueryMyOrders();

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Đơn hàng của tôi', href: '/don-hang-cua-toi' }]} />
      <PageSection title="Đơn hàng của tôi" />

      <Box mt={{ xs: 5, md: 10 }}>
        <Text display={{ xs: 'block', md: 'none' }} mb={3} color="#828282" fontStyle="italic">
          (Kéo ngang màn hình để xem chi tiết)
        </Text>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="main.1">Mã đơn hàng</Th>
                <Th color="main.1">Sản phẩm</Th>
                <Th color="main.1">Tổng tiền</Th>
                <Th color="main.1">Ngày đặt hàng</Th>
                <Th color="main.1">Trạng thái</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item: any) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MyOrderComponent;
