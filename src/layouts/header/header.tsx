'use client';

import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Flex, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import Category from './subs/category';
import Search from './subs/search';
import UserButton from './subs/user-button';

const CartButton = dynamic(() => import('./subs/cart-button'), { ssr: false });

const Header: React.FC = () => {
  return (
    <Flex
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

        <Flex align="center" gap={10}>
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

        <Flex flex={1} pos="relative">
          <Search />
        </Flex>

        <CartButton />

        <Flex align="center" pos="absolute" right="-150px" top={0} bottom={0} my="auto">
          <UserButton />

          {/* <Flex align="center">
          <Link href="/dang-ky">
            <Text fontWeight={600} color="#FFF">
              Đăng ký
            </Text>
          </Link>
          <Text mx={2} color="#b9b9b9">
            |
          </Text>
          <Link href="/dang-nhap">
            <Text fontWeight={600} color="#FFF">
              Đăng nhập
            </Text>
          </Link>
        </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Header);
