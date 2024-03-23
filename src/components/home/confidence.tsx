import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import HomeSection from './home-section';

const Confidence: React.FC = () => {
  const DATA = [
    {
      title: 'Giao hàng toàn quốc',
      description: 'Giao hàng nhanh chóng trên toàn quốc',
      image: '/images/delivery.png'
    },
    {
      title: 'Thanh toán nhanh',
      description: 'Thanh toán nhanh Thanh toán nhanh',
      image: '/images/card.png'
    },
    {
      title: 'Ưu đãi hàng ngày',
      description: 'Ưu đãi hàng ngày Ưu đãi hàng ngày',
      image: '/images/voucher.png'
    },
    {
      title: 'Chính sách đổi trả',
      description: 'Chính sách đổi trả Chính sách đổi trả',
      image: '/images/return.png'
    },
    {
      title: 'Hỗ trợ 24/7',
      description: 'Hỗ trợ 24/7 Hỗ trợ 24/7 Hỗ trợ 24/7',
      image: '/images/support.png'
    }
  ];

  return (
    <Box bgColor="#FFF" mt={20}>
      <HomeSection title="Thực Phẩm Việt có gì?" />
      <Flex align="center" gap={10} justify="space-between" mt={6}>
        {DATA.map((item) => {
          const { title, description, image } = item;
          return (
            <Flex flex={1} key={title} align="center" justify="space-between" direction="column">
              <Image src={image} alt={title} width={70} height={70} />
              <Text mt={5} fontWeight={600} fontSize={15}>
                {title}
              </Text>
              <Text textAlign="center" mt={2}>
                {description}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(Confidence);
