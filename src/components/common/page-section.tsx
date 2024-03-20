import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

interface Props {
  title: string;
}

const PageSection: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <Flex gap={2} align="center">
      <Box h="20px" w="3px" bgColor="sub.1" />

      <Text textTransform="uppercase" fontWeight={600} fontSize={20}>
        {title}
      </Text>
    </Flex>
  );
};

export default memo(PageSection);
