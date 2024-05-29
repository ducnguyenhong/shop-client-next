import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Text fontWeight={600} fontSize={16}>
        Hệ thống đang tải dữ liệu
      </Text>
      <Image src="/images/loading.svg" alt="loading" width={80} height={40} />
    </Flex>
  );
};

export default memo(LoadingScreen);
