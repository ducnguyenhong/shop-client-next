'use client';

import { useMediaQuery } from '@/utils/hooks';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { memo, useMemo } from 'react';
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

  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(min-width: 577px) and (max-width : 991px)');

  const FINAL_DATA = useMemo(() => {
    if (isMobile) {
      return DATA.slice(0, 4);
    }
    if (isTablet) {
      return DATA.slice(0, 4);
    }
    return DATA.slice(0, 5);
  }, [DATA, isMobile, isTablet]);

  return (
    <Box mt={{ xs: 6, md: 10, lg: 20 }}>
      <HomeSection title="Khám phá thêm" />
      <Grid templateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }} gap={4} mt={4}>
        {FINAL_DATA.map((item) => (
          <GridItem key={item.id}>
            <ProductItem data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(DiscoverMore);
