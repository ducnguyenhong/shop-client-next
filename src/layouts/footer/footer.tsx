import { PX_ALL } from '@/utils/const';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';

const Footer: React.FC = () => {
  return (
    <Box mt={20} px={PX_ALL} bgColor="#f2f2f2" pt={20}>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={2}>
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          <Text>Gia Dụng Mới</Text>
          <Text>Mua sắm đồ gia dụng nhanh chóng, dễ dàng</Text>
        </GridItem>

        <GridItem colSpan={1}>
          <Text>Về chúng tôi</Text>
          <Flex direction="column">aaaaaaaaaa</Flex>
        </GridItem>

        <GridItem colSpan={1}>
          <Text>Dịch vụ</Text>
          <Flex direction="column">aaaaaaaaaa</Flex>
        </GridItem>

        <GridItem colSpan={1}>
          <Text>Về chúng tôi</Text>
          <Flex direction="column">
            <Text>Thông tin khác</Text>
            <Flex direction="column">aaaaaaaaaa</Flex>
          </Flex>
        </GridItem>
      </Grid>

      <Flex mt={10} justify="center" pb={5}>
        <Text>© Copyright 2024 - Bản quyền thuộc về GiaDungMoi</Text>
      </Flex>
    </Box>
  );
};

export default memo(Footer);
