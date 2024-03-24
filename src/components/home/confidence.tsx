'use client';

import { useMediaQuery } from '@/utils/hooks';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo, useMemo } from 'react';
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
      description: 'Thanh toán nhanh qua chuyển khoản, COD',
      image: '/images/card.png'
    },
    {
      title: 'Ưu đãi hàng ngày',
      description: 'Rất nhiều ưu đãi theo từng ngày',
      image: '/images/voucher.png'
    },
    {
      title: 'Chính sách đổi trả',
      description: 'Chính sách đổi trả minh bạch, an toàn',
      image: '/images/return.png'
    },
    {
      title: 'Hỗ trợ 24/7',
      description: 'Hỗ trợ khách hàng mua sản phẩm 24/7',
      image: '/images/support.png'
    }
  ];

  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(min-width: 577px) and (max-width : 991px)');

  const imageSize = useMemo(() => {
    if (isMobile) {
      return 40;
    }
    if (isTablet) {
      return 50;
    }
    return 70;
  }, [isMobile, isTablet]);

  return (
    <Box bgColor="#FFF" mt={{ xs: 10, lg: 20 }}>
      <HomeSection title="Thực Phẩm Việt có gì?" />
      <Flex align="center" justify="space-evenly" mt={6} flexWrap="wrap">
        {DATA.map((item) => {
          const { title, description, image } = item;
          return (
            <Flex
              w={{ xs: '33%', md: '20%' }}
              key={title}
              align="center"
              justify="space-between"
              direction="column"
              px={2}
              mb={{ xs: 4, md: 0 }}
            >
              <Image src={image} alt={title} width={imageSize} height={imageSize} />
              <Text
                mt={{ xs: 1, md: 5 }}
                h={{ xs: '36px', md: 'auto' }}
                fontWeight={600}
                fontSize={{ xs: 12, lg: 15 }}
                textAlign="center"
              >
                {title}
              </Text>
              <Text textAlign="center" mt={2} display={{ xs: 'none', lg: 'block' }}>
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
