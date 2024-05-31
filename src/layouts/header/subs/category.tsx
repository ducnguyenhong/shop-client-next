import { useQueryCategoryList } from '@/queries/category.query';
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import { orderBy } from 'lodash';
import Link from 'next/link';
import { memo, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Category: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const popoverRef = useRef<any>();
  const { data = [] } = useQueryCategoryList();

  useOutsideClick({
    ref: popoverRef,
    handler: () => onClose()
  });

  return (
    <Box ref={popoverRef}>
      <Popover returnFocusOnClose={false} isOpen={isOpen} placement="bottom-start" autoFocus={false}>
        <PopoverTrigger>
          <Flex align="center" gap={1.5} onClick={onToggle} cursor="pointer">
            <Text fontWeight={600} color="#FFF">
              Danh mục
            </Text>
            <Icon as={FiChevronDown} color="#b9b9b9" />
          </Flex>
        </PopoverTrigger>
        <PopoverContent w="full" boxShadow="md" mt={3}>
          <PopoverBody py={3} px={8}>
            <Flex direction="column" gap={4}>
              {orderBy(data, 'priority', 'asc')?.map((item) => {
                const { id, name } = item;
                return (
                  <Link
                    href={`/san-pham?categoryId=${id}`}
                    key={id}
                    style={{ paddingBottom: '10px', borderBottom: '1px solid #f2f2f2' }}
                  >
                    <Flex align="center" gap={2}>
                      {/* <Image src={image} alt={title} objectFit="contain" w={8} h={8} borderRadius="full" /> */}
                      <Text fontWeight={600}>{name}</Text>
                    </Flex>
                  </Link>
                );
              })}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default memo(Category);
