import { formatCurrency } from '@/utils/helper';
import {
  AspectRatio,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import Link from 'next/link';
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
    router.push(`/tim-kiem?tu-khoa=${keyword.trim()}`);
  }, [keyword, router]);

  useOutsideClick({
    ref: popoverRef,
    handler: () => onClose()
  });

  return (
    <Flex direction="column" flex={1} ref={popoverRef}>
      <Popover matchWidth returnFocusOnClose={false} isOpen={isOpen} placement="bottom-start" autoFocus={false}>
        <PopoverTrigger>
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
        </PopoverTrigger>
        <PopoverContent w="full" boxShadow="md">
          <PopoverBody py={3}>
            <Flex direction="column" gap={4}>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Flex key={item} boxShadow="base" transitionDuration="200ms" _hover={{ boxShadow: 'md' }}>
                    <Link href={`/san-pham/abc.1`} onClick={onClose}>
                      <Flex gap={3}>
                        <AspectRatio ratio={16 / 9} borderRadius={3} overflow="hidden" w={28}>
                          <Image
                            src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg"
                            alt="product"
                            objectFit="contain"
                            w="full"
                          />
                        </AspectRatio>
                        <Flex direction="column" flex={1} gap={2}>
                          <Text noOfLines={2} fontWeight={600}>
                            Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
                          </Text>
                          <Text color="#D3232A" fontWeight={600} fontSize={14}>
                            {formatCurrency(100_000)}
                          </Text>
                        </Flex>
                      </Flex>
                    </Link>
                  </Flex>
                );
              })}
            </Flex>
            <Flex justify="center" mt={3}>
              <button onClick={onEnterSearch}>
                <Text as="span" color="sub.1" fontWeight={600}>
                  Xem tất cả kết quả
                </Text>
              </button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default memo(Search);
