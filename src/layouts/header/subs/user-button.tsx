'use client';

import { userInfoAtom } from '@/states/recoil';
import { LS_JWT_TOKEN } from '@/utils/const';
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
import { FaHistory, FaLock, FaRegHeart, FaSignOutAlt } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';

const UserButton: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const popoverRef = useRef<any>();
  const userInfo = useRecoilValue(userInfoAtom);

  const { fullName } = userInfo || {};

  const MENU_DATA = [
    // {
    //   title: 'Thông tin cá nhân',
    //   icon: FaUserCircle,
    //   href: '/thong-tin-ca-nhan'
    // },
    {
      title: 'Đơn hàng của tôi',
      icon: FaHistory,
      href: '/don-hang-cua-toi'
    },
    {
      title: 'Sản phẩm yêu thích',
      icon: FaRegHeart,
      href: '/san-pham-yeu-thich'
    },
    {
      title: 'Đổi mật khẩu',
      icon: FaLock,
      href: '/doi-mat-khau'
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
              <Image src="/images/user.png" alt="user" width={32} height={32} />
              <Text as="span" color="#FFF" fontWeight={600} ml={2}>
                {fullName?.split(' ')?.slice(-1)}
              </Text>
              <Icon as={IoChevronDown} color="#FFF" />
            </Flex>
          </div>
        </PopoverTrigger>
        <PopoverContent w="auto">
          <PopoverBody px={4} py={2}>
            <Flex align="center" gap={2}>
              <Image src="/images/user.png" alt="logo" width={32} height={32} />
              <Text fontWeight={600}>{fullName}</Text>
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

              <Flex
                cursor="pointer"
                align="center"
                gap={2}
                onClick={() => {
                  localStorage.removeItem(LS_JWT_TOKEN);
                  window.location.reload();
                }}
              >
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
