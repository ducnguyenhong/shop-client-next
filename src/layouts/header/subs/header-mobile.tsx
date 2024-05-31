import { cartAtom } from '@/states/recoil';
import { HEADER_HEIGHT } from '@/utils/const';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useCallback, useState } from 'react';
import { BsList } from 'react-icons/bs';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdApps } from 'react-icons/io';
import { IoCart, IoHome } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import UserButton from './user-button';

const HeaderMobile: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter();
  const cart = useRecoilValue(cartAtom);

  const DATA_MENU = [
    {
      title: 'Trang chủ',
      href: '/',
      icon: <Icon as={IoHome} w={4} fontSize={13} />
    },
    {
      title: 'Sản phẩm',
      href: '/san-pham',
      icon: <Icon as={IoMdApps} w={4} />
    }
  ];

  const DATA_AUTH = [
    {
      title: 'Đăng nhập',
      href: '/dang-nhap',
      icon: <Icon as={FaSignInAlt} w={4} fontSize={13} color="#4d4d4d" />
    },
    {
      title: 'Đăng ký',
      href: '/dang-ky',
      icon: <Icon as={FaUserPlus} w={4} fontSize={13} color="#4d4d4d" />
    }
  ];

  const onSearch = useCallback(() => {
    if (!keyword) {
      return;
    }
    onClose();
    router.push(`/san-pham?keyword=${keyword.trim()}`);
  }, [keyword, onClose, router]);

  return (
    <Flex
      display={{ xs: 'flex', lg: 'none' }}
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
        <Text color="#FFF" fontWeight={600} fontSize={15}>
          Thực Phẩm Việt
        </Text>
      </Link>

      <UserButton />

      <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose} autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={2} />
          <DrawerHeader bgColor="#f5f5f5" py={4}>
            <Link href="/" onClick={onClose}>
              <Flex align="center" gap={3}>
                <Image src="/images/logo.png" alt="logo" width={30} height={30} />
                <Text mt={1}>Thực Phẩm Việt</Text>
              </Flex>
            </Link>
          </DrawerHeader>

          <DrawerBody pt={4} px={4}>
            <Flex flex={1} pos="relative">
              <Input
                bgColor="#FFF"
                h="40px"
                borderRadius={4}
                placeholder="Tìm kiếm sản phẩm..."
                color="#292D32"
                pr="68px"
                fontWeight={600}
                fontSize={14}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button
                type="button"
                onClick={onSearch}
                zIndex={5}
                pos="absolute"
                top={0}
                bottom={0}
                h="38px"
                my="auto"
                right="1px"
                bgColor="sub.1"
                borderRadius={4}
                _hover={{ bgColor: 'sub.2' }}
                _active={{ bgColor: 'sub.2' }}
              >
                <Icon as={FiSearch} color="#FFF" fontSize={18} />
              </Button>
            </Flex>

            <Flex mt={5}>
              <Link href="/gio-hang" onClick={onClose}>
                <Flex align="center" gap={2}>
                  <Icon as={IoCart} w={4} />
                  <Text as="span" fontWeight={600}>
                    Giỏ hàng của tôi{' '}
                    <Text as="span" color="sub.2">
                      ({cart.length})
                    </Text>
                  </Text>
                </Flex>
              </Link>
            </Flex>

            <Divider mt={5} />

            <Flex direction="column" gap={3} mt={5}>
              {DATA_MENU.map((item) => {
                const { title, href, icon } = item;
                return (
                  <Flex key={href}>
                    <Link href={href} onClick={onClose}>
                      <Flex align="center" gap={2}>
                        {icon}
                        <Text as="span" fontWeight={600}>
                          {title}
                        </Text>
                      </Flex>
                    </Link>
                  </Flex>
                );
              })}
            </Flex>

            <Divider mt={5} />

            <Flex direction="column" gap={3} mt={5}>
              {DATA_AUTH.map((item) => {
                const { title, href, icon } = item;
                return (
                  <Flex key={href}>
                    <Link href={href} onClick={onClose}>
                      <Flex align="center" gap={2}>
                        {icon}
                        <Text as="span" fontWeight={600}>
                          {title}
                        </Text>
                      </Flex>
                    </Link>
                  </Flex>
                );
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default memo(HeaderMobile);
