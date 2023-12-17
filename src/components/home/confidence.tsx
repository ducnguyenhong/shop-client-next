import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { memo } from 'react';
import HomeSection from './home-section';

const Confidence: React.FC = () => {
  const DATA = [
    {
      title: 'Giao hàng toàn quốc',
      description: 'Giao hàng toàn quốc',
      image: 'https://cdn-icons-png.flaticon.com/128/744/744480.png'
    },
    {
      title: 'Thanh toán nhanh chóng',
      description: 'Giao hàng toàn quốc',
      image: 'https://cdn-icons-png.flaticon.com/128/8983/8983163.png'
    },
    {
      title: 'Ưu đãi hàng ngày',
      description: 'Giao hàng toàn quốc',
      image: 'https://cdn-icons-png.flaticon.com/128/1378/1378593.png'
    },
    {
      title: 'Chính sách đổi trả',
      description: 'Giao hàng toàn quốc',
      image: 'https://cdn-icons-png.flaticon.com/128/11153/11153363.png'
    },
    {
      title: 'Hỗ trợ 24/7',
      description: 'Giao hàng toàn quốc',
      image: 'https://cdn-icons-png.flaticon.com/128/10439/10439810.png'
    }
  ];

  return (
    <Box bgColor="#FFF" mt={20}>
      <HomeSection title="Gia Dụng Mới có gì?" />
      <Flex align="center" gap={10} justify="space-between" mt={4}>
        {DATA.map((item) => {
          const { title, description, image } = item;
          return (
            <Flex key={title} align="center" justify="space-between" direction="column">
              <Image src={image} alt={title} w={12} h={12} />
              <Text mt={5} fontWeight={600}>
                {title}
              </Text>
              <Text>{description}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(Confidence);
