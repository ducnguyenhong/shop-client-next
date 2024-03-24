import { Box, Grid, GridItem } from '@chakra-ui/react';
import { memo } from 'react';
import ProductItem from '../common/product-item';
import HomeSection from './home-section';

const DiscoverMore: React.FC = () => {
  const DATA = [
    {
      id: '1',
      name: 'Áo khoác nam cao cấp',
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
      name: 'Thời trang',
      image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
      price: 180_000
    }
  ];

  return (
    <Box mt={20}>
      <HomeSection title="Khám phá thêm" />
      <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={4}>
        {DATA.map((item) => (
          <GridItem key={item.id}>
            <ProductItem data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(DiscoverMore);
