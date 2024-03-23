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
import { memo, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const DATA = [
  {
    id: 1,
    name: 'Thời trang',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-deals.jpg'
  },
  {
    id: 3,
    name: 'Nội thất',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
  },
  {
    id: 5,
    name: 'Công nghệ',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-electronics.jpg'
  },
  {
    id: 6,
    name: 'Nội thất',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
  },
  {
    id: 555,
    name: 'Công nghệ',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-electronics.jpg'
  },
  {
    id: 666,
    name: 'Nội thất',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
  },
  {
    id: 6363,
    name: 'Công nghệ',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-electronics.jpg'
  },
  {
    id: 65376468766,
    name: 'Nội thất',
    image: 'https://motta.uix.store/wp-content/uploads/2022/08/homev3-homegarden.jpg'
  }
];

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
              {DATA.map((item) => {
                const { id, name, image } = item;
                return (
                  <Flex key={id} align="center" gap={2}>
                    <Image src={image} alt={name} objectFit="contain" w={10} h={10} borderRadius="full" />
                    <Text fontWeight={600}>{name}</Text>
                  </Flex>
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
