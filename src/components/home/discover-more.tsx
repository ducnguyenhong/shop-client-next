import { Box, Grid, GridItem } from '@chakra-ui/react';
import { memo } from 'react';
import ProductItem from '../common/product-item';
import HomeSection from './home-section';

const DiscoverMore: React.FC = () => {
  const DATA = [
    {
      id: 1,
      name: 'Áo khoác nam cao cấp',
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-lmyepf0vhb7pfa',
      price: 180_000
    },
    {
      id: 2,
      name: 'Công nghệ',
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-lmyepf0vhb7pfa',
      price: 180_000
    },
    {
      id: 3,
      name: 'Nội thất',
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-lmyepf0vhb7pfa',
      price: 180_000
    },
    {
      id: 4,
      name: 'Thời trang',
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-lmyepf0vhb7pfa',
      price: 180_000
    },
    {
      id: 5,
      name: 'Thời trang',
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-lmyepf0vhb7pfa',
      price: 180_000
    },
    {
      id: 6,
      name: 'Thời trang',
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-https://down-vn.img.susercontent.com/file/sg-11134201-7rbl5-lmyepf0vhb7pfa',
      price: 180_000
    }
  ];

  return (
    <Box mt={20}>
      <HomeSection title="Khám phá thêm" />
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
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
