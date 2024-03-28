'use client';

import { Box, Flex, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';
import OrderItem from './order-item';

const MyOrderComponent: React.FC = () => {
  const DATA = [
    {
      id: '1',
      status: 'INPROGRESS',
      products: [
        {
          id: '1a',
          quantity: 3,
          price: 100_000,
          image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
          name: 'Sản phẩm 1a'
        },
        {
          id: '1b',
          quantity: 1,
          price: 200_000,
          image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
          name: 'Sản phẩm 1b'
        }
      ],
      createdAt: 1711617840000
    },
    {
      id: '2',
      status: 'DELIVERING',
      products: [
        {
          id: '2a',
          quantity: 3,
          price: 100_000,
          image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
          name: 'Sản phẩm 2a'
        }
      ],
      createdAt: 1711617840000
    },
    {
      id: '3',
      status: 'DONE',
      products: [
        {
          id: '3a',
          quantity: 3,
          price: 100_000,
          image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
          name: 'Sản phẩm 3a'
        }
      ],
      createdAt: 1711617840000
    },
    {
      id: '4',
      status: 'CANCEL',
      products: [
        {
          id: '4a',
          quantity: 3,
          price: 100_000,
          image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
          name: 'Sản phẩm 4a'
        }
      ],
      createdAt: 1711617840000
    }
  ];

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
              {DATA.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Flex mt={10} justify="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default MyOrderComponent;
