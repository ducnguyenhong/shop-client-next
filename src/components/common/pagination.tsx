import { Button, Flex } from '@chakra-ui/react';
import { memo } from 'react';

const Pagination: React.FC = () => {
  return (
    <Flex align="center" gap={2}>
      <Button size="sm" colorScheme="orange" variant="outline">
        {'<'}
      </Button>
      <Button size="sm" colorScheme="orange">
        1
      </Button>
      <Button size="sm" colorScheme="orange" variant="outline">
        2
      </Button>
      <Button size="sm" colorScheme="orange" variant="outline">
        3
      </Button>
      <Button size="sm" colorScheme="orange" variant="outline">
        {'>'}
      </Button>
    </Flex>
  );
};

export default memo(Pagination);
