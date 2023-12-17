'use client';

import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { IoCart } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <Flex
      bgColor="#0B5052"
      h={HEADER_HEIGHT}
      pos="fixed"
      top={0}
      left={0}
      w="full"
      align="center"
      px={PX_ALL}
      color="#FFF"
      zIndex={1000}
      gap={10}
    >
      <Flex align="center" gap={10} w="full" pos="relative">
        <Flex align="center" pos="absolute" left="-100px" top={0} bottom={0} my="auto">
          <Link href="/">
            <Image src="/images/logo-white.png" alt="logo" width={48} height={48} />
          </Link>
        </Flex>

        <Flex align="center" gap={10}>
          <Flex align="center" gap={1.5}>
            <Text fontWeight={600}>Danh mục</Text>
            <Icon as={FiChevronDown} />
          </Flex>

          <Flex align="center" gap={1.5}>
            <Text fontWeight={600}>Giảm giá</Text>
          </Flex>

          <Flex align="center" gap={1.5}>
            <Text fontWeight={600}>Tin tức</Text>
          </Flex>
        </Flex>

        <Flex flex={1} pos="relative">
          <Input
            bgColor="#FFF"
            py="22px"
            borderRadius={4}
            placeholder="Tìm kiếm sản phẩm nhanh chóng..."
            color="#292D32"
            pr="68px"
          />
          <Button zIndex={5} pos="absolute" top={0} bottom={0} my="auto" right="3px" bgColor="#FF9E20" borderRadius={4}>
            <Icon as={FiSearch} color="#FFF" fontSize={20} />
          </Button>
        </Flex>

        <Flex align="center">
          <Text>Đăng ký</Text>
          <Text mx={2} color="#b9b9b9">
            |
          </Text>
          <Text>Đăng nhập</Text>
        </Flex>

        <Flex align="center" pos="absolute" right="-50px" top={0} bottom={0} my="auto">
          <button>
            <Icon as={IoCart} fontSize={22} mt={0.5} />
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Header);
