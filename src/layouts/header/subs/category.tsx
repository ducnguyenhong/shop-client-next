import { CATEGORY_LIST } from '@/utils/const';
import {
  Box,
  Flex,
  Icon,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Category: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const popoverRef = useRef<any>();

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
          <PopoverBody py={3}>
            <Flex direction="column" gap={4}>
              {CATEGORY_LIST.map((item) => {
                const { id, title, image } = item;
                return (
                  <Link href={`/san-pham?categoryId=${id}`} key={id}>
                    <Flex align="center" gap={2}>
                      <Image src={image} alt={title} objectFit="contain" w={8} h={8} borderRadius="full" />
                      <Text fontWeight={600}>{title}</Text>
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
