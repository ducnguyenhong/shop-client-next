'use client';

import { Product } from '@/types/product.type';
import { formatCurrency } from '@/utils/helper';
import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { memo } from 'react';
import { MdStar } from 'react-icons/md';

interface Props {
  data: Product;
}

const ProductItem: React.FC<Props> = (props) => {
  const { data } = props;

  if (isEmpty(data)) {
    return null;
  }

  const { name, image, price } = data || {};

  return (
    <Box
      bgColor="#FFF"
      pos="relative"
      border="1px solid #e6e6e6"
      _hover={{ boxShadow: 'lg', borderColor: '#128387', top: '-1px' }}
      transitionDuration="300ms"
      borderRadius={3}
    >
      <Link href={'/'}>
        <AspectRatio ratio={1 / 1} borderTopRadius={2} overflow="hidden">
          <Image src={image} alt={name} objectFit="contain" w="full" />
        </AspectRatio>
        <Box p={2.5}>
          <Text noOfLines={2} fontWeight={600} lineHeight="18px" h="36px">
            {name}
          </Text>
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
        </Box>
      </Link>
    </Box>
  );
};

export default memo(ProductItem);
