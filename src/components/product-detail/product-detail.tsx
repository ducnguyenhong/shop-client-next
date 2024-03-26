'use client';

import { formatCurrency } from '@/utils/helper';
import { AspectRatio, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { FaRegHeart } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Breadcrumb from '../common/breadcrumb';
import Counter from '../common/counter';

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
      <Flex mt={{ xs: 0, lg: 10 }} gap={{ xs: 6, lg: 10 }} direction={{ xs: 'column', md: 'row' }}>
        <Flex flex={{ xs: 1, lg: 2 / 5 }}>
          <AspectRatio ratio={{ xs: 4 / 3, lg: 1 / 1 }} borderTopRadius={2} overflow="hidden" w="full">
            <PhotoProvider>
              <PhotoView src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg">
                <Box w="full" pos="relative">
                  <Image
                    cursor="pointer"
                    src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg"
                    alt="product"
                    objectFit="cover"
                    w="full"
                    h="full"
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
              </PhotoView>
            </PhotoProvider>
          </AspectRatio>
        </Flex>
        <Flex flex={{ xs: 1, lg: 3 / 5 }} direction="column" justify="space-between">
          <Flex direction="column" gap={{ xs: 4, lg: 8 }}>
            <Text fontWeight={700} lineHeight={{ xs: '24px', lg: '30px' }} fontSize={{ xs: 18, lg: 22 }}>
              Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
            </Text>

            <Text color="#D3232A" fontWeight={600} fontSize={{ xs: 16, lg: 22 }}>
              {formatCurrency(100_000)}
            </Text>

            <Text fontWeight={500} lineHeight="22px" fontSize={{ xs: 14, lg: 16 }}>
              Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2
              Âm Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
            </Text>
          </Flex>

          <Flex direction="column" align={{ xs: 'center', md: 'flex-start' }} mt={8}>
            <Counter />

            <Button colorScheme="green" mt={10}>
              Thêm vào giỏ hàng
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDetailComponent;
