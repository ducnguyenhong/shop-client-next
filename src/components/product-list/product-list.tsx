'use client';

import { useQueryProductList } from '@/queries/product.query';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import LoadingScreen from '../common/loading-screen';
import Pagination from '../common/pagination';
import ProductItem from '../common/product-item';
import ProductFilter from './product-filter';

const ProductListComponent: React.FC = () => {
  const { data: productList = [], isLoading } = useQueryProductList();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Sản phẩm', href: '/san-pham' }]} />
      <ProductFilter />
      <Box mt={{ xs: 10, md: 12, lg: 20 }}>
        <Grid templateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }} gap={4} mt={2}>
          {productList?.map((item: any) => (
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
