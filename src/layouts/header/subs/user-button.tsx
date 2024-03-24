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
import Link from 'next/link';
import { Fragment, memo, useRef } from 'react';
import { FaHistory, FaRegHeart, FaUserCircle } from 'react-icons/fa';

const UserButton: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const popoverRef = useRef<any>();

  const MENU_DATA = [
    {
      title: 'Thông tin cá nhân',
      icon: FaUserCircle,
      href: '/thong-tin-ca-nhan',
      showDivider: true
    },
    {
      title: 'Lịch sử mua hàng',
      icon: FaHistory,
      href: '/lich-su-mua-hang',
      showDivider: true
    },
    {
      title: 'Sản phẩm yêu thích',
      icon: FaRegHeart,
      href: '/san-pham-yeu-thich',
      showDivider: false
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
          <Flex
            onClick={onToggle}
            cursor="pointer"
            align="center"
            gap={2}
            border="1px solid #b9b9b9"
            pl={1}
            pr={3}
            py={1}
            borderRadius="full"
          >
            <Flex align="center" justify="center" w={8} h={8} borderRadius="full" bgColor="#999999">
              <Text as="span" color="#FFF" fontWeight={500} fontSize={18}>
                Đ
              </Text>
            </Flex>
            <Text as="span" color="#FFF" fontWeight={600}>
              Nguyễn Đức
            </Text>
          </Flex>
        </PopoverTrigger>
        <PopoverContent w="auto">
          <PopoverBody px={4} py={2}>
            <Flex direction="column">
              {MENU_DATA.map((item) => {
                const { title, showDivider, icon, href } = item;
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

                    {showDivider && <Divider my={2} />}
                  </Fragment>
                );
              })}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default memo(UserButton);
