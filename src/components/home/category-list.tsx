import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { memo } from 'react';
import HomeSection from './home-section';

const CategoryList: React.FC = () => {
  const DATA = [
    {
      id: 1,
      name: 'Thời trang',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-deals.jpg'
    },
    {
      id: 2,
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-electronics.jpg'
    },
    {
      id: 3,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
    },
    {
      id: 4,
      name: 'Thời trang',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-deals.jpg'
    },
    {
      id: 5,
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-electronics.jpg'
    },
    {
      id: 6,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
    },
    {
      id: 444,
      name: 'Thời trang',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-deals.jpg'
    },
    {
      id: 555,
      name: 'Công nghệ',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-electronics.jpg'
    },
    {
      id: 666,
      name: 'Nội thất',
      image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
    }
  ];

  return (
    <Box bgColor="#FFF" mt={8}>
      <HomeSection title="Danh mục sản phẩm" />
      <Flex align="center" gap={10} justify="space-between">
        {DATA.map((item) => {
          const { id, name, image } = item;
          return (
            <Flex key={id} align="center" justify="center" gap={2} direction="column">
              <Image src={image} alt={name} objectFit="contain" w={20} h={20} borderRadius="full" />
              <Text>{name}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(CategoryList);
