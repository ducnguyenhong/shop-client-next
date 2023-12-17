import { AspectRatio, Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import HomeSection from './home-section';

const ProductTop: React.FC = () => {
  const DATA = [
    {
      id: 1,
      name: 'Áo khoác nam cao cấp',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 2,
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 3,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 4,
      name: 'Thời trang',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 5,
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 6,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 64,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 63,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 62,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    },
    {
      id: 61,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg',
      price: 180_000
    }
  ];

  return (
    <Box mt={20}>
      <HomeSection title="Sản phẩm bán chạy" />
      <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={4}>
        {DATA.map((item) => {
          const { id, name, image } = item;
          return (
            <GridItem
              key={id}
              bgColor="#FFF"
              boxShadow="base"
              borderColor="#f2f2f2"
              borderWidth="1px solid"
              _hover={{ boxShadow: 'md' }}
              transitionDuration="250ms"
            >
              <Link href={'/'}>
                <AspectRatio ratio={1 / 1}>
                  <Image src={image} alt={name} objectFit="contain" w="full" />
                </AspectRatio>
                <Box p={4}>
                  <Text>{name}</Text>
                </Box>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(ProductTop);
