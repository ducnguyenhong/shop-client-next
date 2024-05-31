'use client';

import { useQueryFavoriteProducts } from '@/queries/product.query';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { get } from 'lodash';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import ProductItem from '../common/product-item';

const FavoriteProductComponent: React.FC = () => {
  const { data = [] } = useQueryFavoriteProducts();
  const productList = data?.map((item: any) => get(item, 'orders.0.product'))?.filter((item: any) => !!item);

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Sản phẩm yêu thích', href: '/san-pham-yeu-thich' }]} />
      <PageSection title="Sản phẩm yêu thích" />

      <Box mt={10}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={2}>
          {productList?.map((item: any) => (
            <GridItem key={item.id}>
              <ProductItem data={item} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FavoriteProductComponent;
