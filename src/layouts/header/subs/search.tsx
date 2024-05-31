import { Button, Flex, Icon, Input, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { memo, useCallback, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const popoverRef = useRef<any>();
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter();

  const onEnterSearch = useCallback(() => {
    if (!keyword) {
      return;
    }
    router.push(`/san-pham?keyword=${keyword.trim()}`);
  }, [keyword, router]);

  useOutsideClick({
    ref: popoverRef,
    handler: () => onClose()
  });

  return (
    <Flex direction="column" flex={1} ref={popoverRef}>
      <Flex flex={1}>
        <Input
          bgColor="#FFF"
          py="22px"
          borderRadius={4}
          placeholder="Tìm kiếm sản phẩm..."
          color="#292D32"
          pr="68px"
          fontWeight={600}
          onClick={onOpen}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onEnterSearch();
            }
          }}
        />
        <Button
          type="button"
          onClick={onEnterSearch}
          zIndex={5}
          pos="absolute"
          top={0}
          bottom={0}
          my="auto"
          right="3px"
          bgColor="sub.1"
          borderRadius={4}
          _hover={{ bgColor: 'sub.2' }}
          _active={{ bgColor: 'sub.2' }}
        >
          <Icon as={FiSearch} color="#FFF" fontSize={20} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(Search);
