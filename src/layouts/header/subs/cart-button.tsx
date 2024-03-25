'use client';

import { cartAtom } from '@/states/recoil';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { IoCart } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';

const CartButton: React.FC = () => {
  const cart = useRecoilValue(cartAtom);
  const cartCount = cart?.length || 0;

  return (
    <Link href="/gio-hang">
      <Box pos="relative" _hover={{ transform: 'scale(1.05)' }} transitionDuration="150ms">
        <button>
          <Icon as={IoCart} fontSize={22} mt={0.5} color="#FFF" />
        </button>
        {!!cartCount && (
          <Flex
            pos="absolute"
            bgColor="#e60000"
            borderRadius="full"
            top={-1}
            right={-2}
            align="center"
            justify="center"
            w={4}
            h={4}
          >
            <Text as="span" color="#FFF" fontSize={12}>
              {cartCount}
            </Text>
          </Flex>
        )}
      </Box>
    </Link>
  );
};

export default memo(CartButton);
