'use client';

import { cartAtom } from '@/states/recoil';
import { Product } from '@/types/product.type';
import { convertSlugURL, formatCurrency, showToast } from '@/utils/helper';
import {
  AspectRatio,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { memo, useCallback, useState } from 'react';
import { IoCart } from 'react-icons/io5';
import { MdStar } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import Counter from './counter';

interface Props {
  data: Product;
}

interface LocalCartItem {
  id: string;
  quantity: number;
}

const ProductItem: React.FC<Props> = (props) => {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(1);
  const { name, image, price, id } = data || {};
  const [cart, setCart] = useRecoilState(cartAtom);

  const onAddCart = useCallback(() => {
    try {
      const isExists = cart.find((i) => i.id === id);
      let newCart: LocalCartItem[] = [];

      if (!isExists) {
        newCart = [
          {
            id,
            quantity: count
          },
          ...cart
        ];
      } else {
        newCart = cart.map((i) => {
          if (i.id === id) {
            return {
              id,
              quantity: count
            };
          }
          return i;
        });
      }
      setCart(newCart);
      showToast({ content: 'Thêm sản phẩm thành công', status: 'warning' });
    } catch (error) {}
    onClose();
  }, [cart, count, id, onClose, setCart]);

  if (isEmpty(data)) {
    return null;
  }

  return (
    <Box
      bgColor="#FFF"
      pos="relative"
      border="1px solid #e6e6e6"
      _hover={{ boxShadow: 'lg', borderColor: '#128387', top: '-1px' }}
      transitionDuration="300ms"
      borderRadius={3}
    >
      <Box>
        <Link href={`/san-pham/${convertSlugURL(name)}.1`}>
          <AspectRatio ratio={4 / 3} borderTopRadius={2} overflow="hidden">
            <Image src={image} alt={name} objectFit="contain" w="full" />
          </AspectRatio>
          <Box p={2.5}>
            <Text noOfLines={2} fontWeight={600} lineHeight="18px" h="36px">
              {name}
            </Text>
            <Flex justify="space-between" align="flex-end">
              <Box mt={2}>
                <Text color="#D3232A" fontWeight={600} fontSize={16}>
                  {formatCurrency(price)}
                </Text>
                <Flex align="center" gap="1px" mt={2}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon as={MdStar} key={i} color="#FFA132" fontSize={13} />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Link>

        <Button
          pos="absolute"
          bottom={2}
          right={2}
          onClick={onOpen}
          bgColor="sub.1"
          w={8}
          h={8}
          borderRadius="full"
          justifyItems="center"
          alignItems="center"
          minH={0}
          minW={0}
          _hover={{ bgColor: '#ff8800', transform: 'scale(1.05)' }}
          _active={{ bgColor: '#ff8800' }}
          title="Thêm vào giỏ hàng"
        >
          <Icon as={IoCart} fontSize={18} color="#FFF" />
        </Button>
      </Box>

      <Drawer isOpen={isOpen} placement="left" size={{ xs: 'xs', md: 'md' }} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize={{ xs: 16, md: 18, lg: 20 }}>Thêm sản phẩm vào giỏ hàng</Text>
          </DrawerHeader>

          <DrawerBody px={4}>
            <Flex direction="column">
              <AspectRatio ratio={4 / 3} borderTopRadius={2} overflow="hidden" w={{ xs: '80%', md: 2 / 3 }} mx="auto">
                <Image src={image} alt={name} objectFit="contain" w="full" />
              </AspectRatio>
              <Flex direction="column" align="center" p={2.5} mt={5}>
                <Text
                  noOfLines={2}
                  fontSize={{ xs: 15, lg: 18 }}
                  textAlign="center"
                  fontWeight={600}
                  lineHeight="18px"
                  h="36px"
                >
                  {name}
                </Text>
                <Flex justify="space-between" align="flex-end">
                  <Box mt={2}>
                    <Text color="#D3232A" fontWeight={600} fontSize={{ xs: 15, lg: 18 }}>
                      {formatCurrency(price)}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Flex direction="column" justify="center" gap={8} pb={5}>
              <Flex justify="center">
                <Counter onChange={(data) => setCount(data)} />
              </Flex>
              <Flex justify="center" gap={5} direction={{ xs: 'column', md: 'row' }}>
                <Button variant="outline" onClick={onClose} colorScheme="green" display={{ xs: 'none', md: 'flex' }}>
                  Xem chi tiết
                </Button>
                <Button colorScheme="green" onClick={onAddCart}>
                  Thêm vào giỏ hàng
                </Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default memo(ProductItem);
