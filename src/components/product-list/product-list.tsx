'use client';

import { Box, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import Select from 'react-select';
import Breadcrumb from '../common/breadcrumb';
import Pagination from '../common/pagination';
import ProductItem from '../common/product-item';

const ProductListComponent: React.FC = () => {
  const DATA = [
    {
      id: '1',
      name: 'Áo khoác nam cao cấp Áo khoác nam cao cấp',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '2',
      name: 'Công nghệ',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '3',
      name: 'Nội thất',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '4',
      name: 'Thời trang',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '5',
      name: 'Công nghệ',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '6',
      name: 'Nội thất',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '64',
      name: 'Nội thất',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '63',
      name: 'Nội thất',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '62',
      name: 'Nội thất',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    },
    {
      id: '61',
      name: 'Nội thất',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    }
  ];

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Sản phẩm', href: '/san-pham' }]} />
      <Box mt={10}>
        <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={2}>
          <GridItem>
            <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
              Tìm kiếm
            </Text>
            <Input placeholder="Nhập từ khoá" border="1px solid #ccc" h="38px" />
          </GridItem>
          <GridItem>
            <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
              Danh mục
            </Text>
            <Select placeholder="Chọn loại sản phẩm" />
          </GridItem>
          <GridItem>
            <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
              Loại sản phẩm
            </Text>
            <Select placeholder="Chọn loại sản phẩm" />
          </GridItem>
          <GridItem>
            <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
              Hiện trạng
            </Text>
            <Select placeholder="Chọn loại sản phẩm" />
          </GridItem>
        </Grid>
      </Box>
      <Box mt={20}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={2}>
          {[...DATA, ...DATA].map((item) => (
            <GridItem key={item.id}>
              <ProductItem data={item} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Flex mt={14} justify="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default ProductListComponent;
