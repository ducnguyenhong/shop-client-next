'use client';

import { formatCurrency } from '@/utils/helper';
import { AspectRatio, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import InDecreaser from '../common/in-decreaser';
import PageSection from '../common/page-section';

const ProductDetailComponent: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Box pt={10}>
      <PageSection title="Chi tiết sản phẩm" />
      <Flex mt={10} gap={10}>
        <Flex flex={2 / 5}>
          <AspectRatio ratio={1 / 1} borderTopRadius={2} overflow="hidden" w="full">
            <Image
              src="https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg"
              alt="product"
              objectFit="contain"
              w="full"
            />
          </AspectRatio>
        </Flex>
        <Flex flex={3 / 5} direction="column" justify="space-between">
          <Box>
            <Text fontWeight={700} lineHeight="30px" fontSize={22}>
              Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
            </Text>

            <Text color="#D3232A" fontWeight={600} fontSize={20} mt={8}>
              {formatCurrency(100_000)}
            </Text>

            <Text fontWeight={500} lineHeight="22px" mt={8} fontSize={16}>
              Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2
              Âm Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
            </Text>
          </Box>

          <Box>
            <InDecreaser />

            <Button colorScheme="orange" mt={10}>
              Thêm vào giỏ hàng
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDetailComponent;
