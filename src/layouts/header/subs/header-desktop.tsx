'use client';

import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import CartButton from '../subs/cart-button';
import Category from '../subs/category';
import Search from '../subs/search';
import UserButton from '../subs/user-button';

const HeaderDesktop: React.FC = () => {
  return (
    <Flex
      display={{ xs: 'none', lg: 'flex' }}
      bgColor="main.1"
      h={`${HEADER_HEIGHT}px`}
      pos="fixed"
      top={0}
      left={0}
      w="full"
      align="center"
      px={PX_ALL}
      zIndex={1000}
      gap={10}
    >
      <Flex align="center" gap={10} w="full" pos="relative">
        <Flex align="center" pos="absolute" left="-100px" top={0} bottom={0} my="auto">
          <Link href="/">
            <Image src="/images/logo-white.png" alt="logo" width={40} height={40} />
          </Link>
        </Flex>

        <Flex align="center" gap={12}>
          <Category />

          <Flex align="center" gap={1.5}>
            <Link href="/san-pham">
              <Text fontWeight={600} color="#FFF">
                Sản phẩm
              </Text>
            </Link>
          </Flex>

          <Flex align="center" gap={1.5}>
            <Link href="/tin-tuc">
              <Text fontWeight={600} color="#FFF">
                Tin tức
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Flex flex={1} pos="relative" mx={10}>
          <Search />
        </Flex>

        <CartButton />

        <Flex align="center" pos="absolute" right="-150px" top={0} bottom={0} my="auto">
          <UserButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HeaderDesktop);
