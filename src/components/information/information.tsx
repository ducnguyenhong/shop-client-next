'use client';

import { Box, Button, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { FaEnvelope, FaLock, FaMapMarkerAlt, FaMars, FaPencilAlt, FaPhone } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import ModalChangePass from './modal-change-pass';
import ModalUpdate from './modal-update';

const InformationComponent: React.FC = () => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [showChangePass, setShowChangePass] = useState<boolean>(false);

  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Thông tin cá nhân', href: '/thong-tin-ca-nhan' }]} />
      <PageSection title="Thông tin cá nhân" />

      <Box mt={10}>
        <Grid
          templateColumns={{ xs: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)', '2xl': 'repeat(3, 1fr)' }}
          rowGap={{ xs: 10, lg: 24 }}
          columnGap={10}
        >
          <GridItem>
            <Flex gap={5} align="center">
              <Image src="/images/user.png" alt="user" width={40} height={40} style={{ borderRadius: '100%' }} />
              <Flex direction="column" gap={1}>
                <Text fontSize={{ xs: 15, lg: 17 }} fontWeight={700}>
                  Nguyễn Đức
                </Text>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex gap={3} h="full" direction="column">
              <Flex align="center" gap={2}>
                <Icon as={FaPhone} fontSize={14} color="main.1" />
                <Text color="main.1" fontSize={{ xs: 14, lg: 15 }} fontWeight={500}>
                  Số điện thoại:
                </Text>
              </Flex>

              <Text fontSize={{ xs: 15, lg: 17 }} fontWeight={700} textAlign="left">
                0987654321
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex gap={3} h="full" direction="column">
              <Flex align="center" gap={2}>
                <Icon as={FaEnvelope} fontSize={14} color="main.1" />
                <Text color="main.1" fontSize={{ xs: 14, lg: 15 }} fontWeight={500}>
                  Email:
                </Text>
              </Flex>

              <Text fontSize={{ xs: 15, lg: 17 }} fontWeight={700} textAlign="left">
                abc@gmail.com
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex gap={3} h="full" direction="column">
              <Flex align="center" gap={2}>
                <Icon as={FaMars} fontSize={{ xs: 15, lg: 18 }} color="main.1" />
                <Text color="main.1" fontSize={{ xs: 14, lg: 15 }} fontWeight={500}>
                  Giới tính:
                </Text>
              </Flex>

              <Text fontSize={{ xs: 15, lg: 17 }} fontWeight={700} textAlign="left">
                {/* {gender ? 'Nam' : 'Nữ'} */}
                Nam
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex gap={3} h="full" direction="column">
              <Flex align="center" gap={2}>
                <Icon as={FaMapMarkerAlt} fontSize={{ xs: 15, lg: 16 }} color="main.1" />
                <Text color="main.1" fontSize={{ xs: 14, lg: 15 }} fontWeight={500}>
                  Địa chỉ:
                </Text>
              </Flex>

              <Text fontSize={{ xs: 15, lg: 17 }} fontWeight={700} textAlign="left">
                Ba Đình, Hà Nội
              </Text>
            </Flex>
          </GridItem>

          {/* <GridItem>
              <Flex gap={3} h="full" direction="column">
                <Flex align="center" gap={2}>
                  <Icon as={FaBell} fontSize={{ xs: 15, lg: 18 }} color="main.1" />
                  <Text color="main.1" fontSize={{ xs: 14, lg: 15 }}>
                    Thông báo:
                  </Text>
                </Flex>

                <Text fontSize={{ xs: 15, lg: 18 }} fontWeight={700} textAlign="left">
                  {hasNotification ? 'Bật' : 'Tắt'}
                </Text>
              </Flex>
            </GridItem> */}
        </Grid>

        <Flex justify="center" mt={{ xs: 10, lg: 20 }} gap={{ xs: 5, lg: 10 }} direction={{ xs: 'column', lg: 'row' }}>
          <Button leftIcon={<FaPencilAlt />} colorScheme="green" px={5} onClick={() => setShowUpdate(true)}>
            Chỉnh sửa thông tin
          </Button>

          <Button leftIcon={<FaLock />} colorScheme="orange" px={10} onClick={() => setShowChangePass(true)}>
            Đổi mật khẩu
          </Button>
        </Flex>
      </Box>

      <ModalUpdate show={showUpdate} onClose={() => setShowUpdate(false)} />
      <ModalChangePass show={showChangePass} onClose={() => setShowChangePass(false)} />
    </Box>
  );
};

export default InformationComponent;
