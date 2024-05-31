'use client';

import { useQueryCategoryList } from '@/queries/category.query';
import { Box, Flex, Text } from '@chakra-ui/react';
import { orderBy } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import HomeSection from './home-section';

const CategoryList: React.FC = () => {
  const { data = [] } = useQueryCategoryList();

  return (
    <Box bgColor="#FFF" mt={{ xs: 8, lg: 20 }}>
      <HomeSection title="Danh mục sản phẩm" />
      <Flex gap={{ xs: 4, lg: 10 }} mt={4} justifyContent="space-evenly" alignItems="center" flexWrap="wrap">
        {orderBy(data, 'priority', 'asc')?.map((item) => {
          const { id, name } = item;
          return (
            <Flex key={id}>
              <Link href={`/san-pham?categoryId=${id}`}>
                <Flex align="center" justify="center" gap={2} direction="column">
                  <Image src="/images/category.png" alt={name} width={60} height={60} />
                  <Text fontWeight={600} fontSize={{ xs: 13, lg: 16 }}>
                    {name}
                  </Text>
                </Flex>
              </Link>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(CategoryList);
