'use client';

import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import ProductItem from '../common/product-item';
import HomeSection from './home-section';

const ProductTop: React.FC = () => {
  const DATA = [
    {
      id: '1',
      name: 'Áo khoác nam cao cấp Áo khoác nam cao cấp',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '2',
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '3',
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '4',
      name: 'Thời trang',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '5',
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '6',
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '64',
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '63',
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '62',
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: '61',
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    }
  ];

  return (
    <Box mt={20}>
      <Flex align="center" justify="space-between">
        <HomeSection title="Sản phẩm bán chạy" />
        <Link href="/top">
          <Text fontWeight={600} borderBottom="1px solid #b9b9b9" lineHeight="16px">
            Xem thêm
          </Text>
        </Link>
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={2}>
        {DATA.map((item) => (
          <GridItem key={item.id}>
            <ProductItem data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(ProductTop);
