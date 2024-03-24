import { CATEGORY_LIST } from '@/utils/const';
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import HomeSection from './home-section';

const CategoryList: React.FC = () => {
  return (
    <Box bgColor="#FFF" mt={{ xs: 8, lg: 10 }}>
      <HomeSection title="Danh mục sản phẩm" />
      <Grid
        templateColumns={{ xs: 'repeat(4, 1fr)', lg: 'repeat(8, 1fr)' }}
        gap={{ xs: 4, lg: 10 }}
        mt={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {CATEGORY_LIST.map((item) => {
          const { id, title, image } = item;
          return (
            <GridItem key={id}>
              <Link href={`/san-pham?categoryId=${id}`}>
                <Flex align="center" justify="center" gap={2} direction="column">
                  <Image
                    src={image}
                    alt={title}
                    objectFit="contain"
                    w={{ xs: 10, lg: 20 }}
                    h={{ xs: 10, lg: 20 }}
                    borderRadius="full"
                  />
                  <Text fontWeight={600} fontSize={{ xs: 13, lg: 16 }}>
                    {title}
                  </Text>
                </Flex>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(CategoryList);
