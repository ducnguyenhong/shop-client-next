import { HEADER_HEIGHT } from '@/utils/const';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { BsList } from 'react-icons/bs';

const HeaderMobile: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bgColor="main.1"
      h={`${HEADER_HEIGHT - 20}px`}
      pos="fixed"
      top={0}
      left={0}
      w="full"
      align="center"
      justify="space-between"
      zIndex={1000}
      px={4}
    >
      <button onClick={onOpen}>
        <Icon as={BsList} color="#FFF" fontSize={26} />
      </button>

      <Link href="/">
        {/* <Image src="/images/logo-white.png" alt="logo" width={32} height={32} /> */}
        <Text color="#FFF" fontWeight={600} fontSize={15}>
          Thực Phẩm Việt
        </Text>
      </Link>

      <button>
        <Image src="/images/user.png" alt="logo" width={32} height={32} />
      </button>

      <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>aaaaaaaa</DrawerBody>

          <DrawerFooter>aaaaaaaa</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default memo(HeaderMobile);
