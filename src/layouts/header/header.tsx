'use client';

import { HEADER_HEIGHT } from '@/utils/const';
import { Box, Flex, Icon, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { FiChevronDown } from 'react-icons/fi';
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
      px={60}
      color="#FFF"
      gap={10}
      zIndex={1000}
    >
      <Box mr={10}>
        <Link href="/">
          <Image src="/images/logo-white.png" alt="logo" width={50} height={50} />
        </Link>
      </Box>

      <Flex align="center" gap={3}>
        <Flex align="center" gap={1.5}>
          <Text fontWeight={600}>Danh mục</Text>
          <Icon as={FiChevronDown} />
        </Flex>

        <Flex align="center" gap={1.5}>
          <Text fontWeight={600}>Tin tức</Text>
          <Icon as={FiChevronDown} />
        </Flex>
      </Flex>

      <Flex flex={1}>
        <Input bgColor="#FFF" />
      </Flex>

      <Flex gap={2} align="center">
        <Text>Đăng ký</Text>
        <Text>Đăng nhập</Text>
        <Icon as={IoCart} />
      </Flex>
    </Flex>
  );
};

export default memo(Header);
