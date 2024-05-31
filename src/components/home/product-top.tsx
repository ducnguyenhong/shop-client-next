'use client';

import { useQueryProductList } from '@/queries/product.query';
import { useMediaQuery } from '@/utils/hooks';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import ProductItem from '../common/product-item';
import HomeSection from './home-section';

const ProductTop: React.FC = () => {
  const { data: productList = [] } = useQueryProductList();

  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(min-width: 577px) and (max-width : 991px)');

  const FINAL_DATA = useMemo(() => {
    if (!Array.isArray(productList) || !productList.length) {
      return [];
    }
    if (isMobile) {
      return productList.slice(0, 4);
    }
    if (isTablet) {
      return productList.slice(0, 8);
    }
    return productList.slice(0, 10);
  }, [productList, isMobile, isTablet]);

  return (
    <Box mt={{ xs: 10, lg: 24 }}>
      <Flex align="center" justify="space-between">
        <HomeSection title="Sản phẩm mới nhất" />
        <Link href="/san-pham">
          <Text fontWeight={600} borderBottom="1px solid #b9b9b9" lineHeight="16px">
            Xem thêm
          </Text>
        </Link>
      </Flex>
      <Grid templateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4} mt={2}>
        {FINAL_DATA.map((item: any) => (
          <GridItem key={item.id}>
            <ProductItem data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(ProductTop);
