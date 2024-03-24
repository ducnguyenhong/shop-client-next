import { CATEGORY_LIST } from '@/utils/const';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import HomeSection from './home-section';

const CategoryList: React.FC = () => {
  return (
    <Box bgColor="#FFF" mt={10}>
      <HomeSection title="Danh mục sản phẩm" />
      <Flex align="center" gap={10} justify="space-between" mt={4}>
        {CATEGORY_LIST.map((item) => {
          const { id, title, image } = item;
          return (
            <Link href={`/san-pham?categoryId=${id}`} key={id}>
              <Flex align="center" justify="center" gap={2} direction="column">
                <Image src={image} alt={title} objectFit="contain" w={20} h={20} borderRadius="full" />
                <Text fontWeight={600}>{title}</Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(CategoryList);
