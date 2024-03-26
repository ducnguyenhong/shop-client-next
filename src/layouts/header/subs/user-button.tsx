import {
  Box,
  Divider,
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
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, memo, useRef } from 'react';
import { FaHistory, FaRegHeart, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

const UserButton: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const popoverRef = useRef<any>();

  const MENU_DATA = [
    {
      title: 'Thông tin cá nhân',
      icon: FaUserCircle,
      href: '/thong-tin-ca-nhan'
    },
    {
      title: 'Lịch sử mua hàng',
      icon: FaHistory,
      href: '/lich-su-mua-hang'
    },
    {
      title: 'Sản phẩm yêu thích',
      icon: FaRegHeart,
      href: '/san-pham-yeu-thich'
    }
  ];

  useOutsideClick({
    ref: popoverRef,
    handler: () => onClose()
  });

  return (
    <Box ref={popoverRef}>
      <Popover autoFocus={false} placement="bottom-end" onClose={onClose} isOpen={isOpen}>
        <PopoverTrigger>
          <div>
            <Box display={{ xs: 'block', lg: 'none' }}>
              <button onClick={onToggle}>
                <Image src="/images/user.png" alt="logo" width={32} height={32} />
              </button>
            </Box>

            <Flex display={{ xs: 'none', lg: 'flex' }} onClick={onToggle} cursor="pointer" align="center" gap={1.5}>
              <Text as="span" color="#FFF" fontWeight={600}>
                Nguyễn Đức
              </Text>
              <Icon as={IoChevronDown} color="#FFF" />
            </Flex>
          </div>
        </PopoverTrigger>
        <PopoverContent w="auto">
          <PopoverBody px={4} py={2}>
            <Flex align="center" gap={2}>
              <Image src="/images/user.png" alt="logo" width={32} height={32} />
              <Text fontWeight={600}>Nguyễn Đức</Text>
            </Flex>

            <Divider my={2} />

            <Flex direction="column">
              {MENU_DATA.map((item) => {
                const { title, icon, href } = item;
                return (
                  <Fragment key={title}>
                    <Link href={href} onClick={onClose}>
                      <Flex align="center" gap={2}>
                        <Icon as={icon} color="#828282" />
                        <Text as="span" fontWeight={600}>
                          {title}
                        </Text>
                      </Flex>
                    </Link>

                    <Divider my={2} />
                  </Fragment>
                );
              })}

              <Flex cursor="pointer" align="center" gap={2}>
                <Icon as={FaSignOutAlt} color="#828282" />
                <Text as="span" fontWeight={600}>
                  Đăng xuất
                </Text>
              </Flex>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default memo(UserButton);
