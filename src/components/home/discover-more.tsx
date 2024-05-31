'use client';

import { useQueryProductList } from '@/queries/product.query';
import { useMediaQuery } from '@/utils/hooks';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import ProductItem from '../common/product-item';
import HomeSection from './home-section';

const DiscoverMore: React.FC = () => {
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
      return productList.slice(0, 4);
    }
    return productList.slice(0, 5);
  }, [productList, isMobile, isTablet]);

  return (
    <Box mt={{ xs: 6, md: 10, lg: 20 }}>
      <HomeSection title="Khám phá thêm" />
      <Grid templateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4} mt={4}>
        {FINAL_DATA.map((item: any) => (
          <GridItem key={item.id}>
            <ProductItem data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(DiscoverMore);
