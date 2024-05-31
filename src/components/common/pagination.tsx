import { Button, Flex } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, useCallback } from 'react';

const Pagination: React.FC = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const page = searchParams.get('page') || 1;
  const categoryId = searchParams.get('categoryId') || '';
  const router = useRouter();

  const onChangePage = useCallback(
    (newPage: number) => {
      router.push(`/san-pham?keyword=${keyword}&page=${newPage}&categoryId=${categoryId}`);
    },
    [categoryId, keyword, router]
  );

  return (
    <Flex align="center" gap={2}>
      <Button
        size="sm"
        colorScheme="orange"
        variant="outline"
        onClick={() => onChangePage(Number(page) > 1 ? Number(page) - 1 : Number(page))}
      >
        {'<'}
      </Button>
      <Button
        size="sm"
        colorScheme="orange"
        variant={Number(page) === 1 ? undefined : 'outline'}
        onClick={() => onChangePage(1)}
      >
        1
      </Button>
      <Button
        size="sm"
        colorScheme="orange"
        variant={Number(page) === 2 ? undefined : 'outline'}
        onClick={() => onChangePage(2)}
      >
        2
      </Button>
      <Button
        size="sm"
        colorScheme="orange"
        variant={Number(page) === 3 ? undefined : 'outline'}
        onClick={() => onChangePage(3)}
      >
        3
      </Button>
      <Button
        size="sm"
        colorScheme="orange"
        variant={Number(page) === 4 ? undefined : 'outline'}
        onClick={() => onChangePage(4)}
      >
        4
      </Button>
      <Button
        size="sm"
        colorScheme="orange"
        variant={Number(page) === 5 ? undefined : 'outline'}
        onClick={() => onChangePage(5)}
      >
        5
      </Button>
      <Button size="sm" colorScheme="orange" variant="outline" onClick={() => onChangePage(Number(page) + 1)}>
        {'>'}
      </Button>
    </Flex>
  );
};

export default memo(Pagination);
