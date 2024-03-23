'use client';

import { formatCurrency } from '@/utils/helper';
import { AspectRatio, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { FaRegHeart } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import InDecreaser from '../common/in-decreaser';
import PageSection from '../common/page-section';

const ProductDetailComponent: React.FC<{ id: string }> = ({ id }) => {
  const pathname = usePathname();

  return (
    <Box pt={5}>
      <Breadcrumb
        items={[
          { title: 'Sản phẩm', href: '/san-pham' },
          { title: 'Chi tiết sản phẩm', href: pathname, isActive: true }
        ]}
      />
      <PageSection title="Chi tiết sản phẩm" />
      <Flex mt={10} gap={10}>
        <Flex flex={2 / 5}>
          <AspectRatio ratio={1 / 1} borderTopRadius={2} overflow="hidden" w="full">
            <Box w="full" pos="relative">
              <Image
                src="https://homefoodshop.vn/api/media-service/thumbnails/450/250/2ef68d64-b134-4c64-803f-2b03a0e76ad6.jpg"
                alt="product"
                objectFit="contain"
                w="full"
              />
              <Flex pos="absolute" bgColor="#ffffff7a" right={0} bottom={0}>
                <Button
                  leftIcon={<FaRegHeart color="red" />}
                  variant="outline"
                  border="none"
                  bgColor="transparent"
                  px={3}
                  h={8}
                  py={0}
                  fontSize={13}
                  _hover={{ bgColor: 'transparent' }}
                  _active={{ bgColor: 'transparent' }}
                >
                  Thêm vào yêu thích
                </Button>
              </Flex>
            </Box>
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

            <Button colorScheme="green" mt={10}>
              Thêm vào giỏ hàng
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDetailComponent;
