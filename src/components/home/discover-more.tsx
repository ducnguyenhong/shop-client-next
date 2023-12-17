import { AspectRatio, Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
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
        {DATA.map((item) => {
          const { id, name, image } = item;
          return (
            <GridItem
              key={id}
              bgColor="#FFF"
              boxShadow="sm"
              borderColor="#FFF"
              borderWidth="1px solid"
              _hover={{ boxShadow: 'base', borderColor: 'green' }}
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

export default memo(DiscoverMore);
