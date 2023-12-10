'use client';

import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Box, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { IoCart } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <Flex
      bgColor="#28714d"
      h={HEADER_HEIGHT}
      pos="fixed"
      top={0}
      left={0}
      w="full"
      align="center"
      px={PX_ALL}
      color="#FFF"
      gap={5}
    >
      <Box>logo</Box>

      <Flex align="center" gap={3}>
        <Flex align="center" gap={1.5}>
          <Text>Danh mục</Text>
          <Icon as={FiChevronDown} />
        </Flex>

        <Flex align="center" gap={1.5}>
          <Text>Tin tức</Text>
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
