import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';
import ProductItem from '../common/product-item';

const FavoriteProductComponent: React.FC = () => {
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
      <Breadcrumb items={[{ title: 'Sản phẩm yêu thích', href: '/san-pham-yeu-thich' }]} />
      <PageSection title="Sản phẩm yêu thích" />

      <Box mt={10}>
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

export default FavoriteProductComponent;
