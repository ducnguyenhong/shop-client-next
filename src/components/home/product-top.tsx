'use client';

import { useMediaQuery } from '@/utils/hooks';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import ProductItem from '../common/product-item';
import HomeSection from './home-section';

const ProductTop: React.FC = () => {
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

  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(min-width: 577px) and (max-width : 991px)');

  const FINAL_DATA = useMemo(() => {
    if (isMobile) {
      return DATA.slice(0, 4);
    }
    if (isTablet) {
      return DATA.slice(0, 8);
    }
    return DATA.slice(0, 10);
  }, [DATA, isMobile, isTablet]);

  return (
    <Box mt={{ xs: 10, lg: 12 }}>
      <Flex align="center" justify="space-between">
        <HomeSection title="Sản phẩm bán chạy" />
        <Link href="/san-pham">
          <Text fontWeight={600} borderBottom="1px solid #b9b9b9" lineHeight="16px">
            Xem thêm
          </Text>
        </Link>
      </Flex>
      <Grid templateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }} gap={4} mt={2}>
        {FINAL_DATA.map((item) => (
          <GridItem key={item.id}>
            <ProductItem data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(ProductTop);
