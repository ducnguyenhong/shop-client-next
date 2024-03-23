'use client';

import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';

const NewsDetailComponent: React.FC<{ id: string }> = ({ id }) => {
  const pathname = usePathname();

  return (
    <Box pt={5}>
      <Breadcrumb
        items={[
          { title: 'Tin tức', href: '/tin-tuc' },
          { title: 'Chi tiết tin tức', href: pathname, isActive: true }
        ]}
      />

      <Box mt={10}>
        <Text fontWeight={700} lineHeight="30px" fontSize={22}>
          Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
        </Text>

        <Flex align="center" gap={2} mt={3}>
          <Icon as={FaCalendarAlt} color="#828282" fontSize={14} />
          <Text as="span" fontWeight={500} mt={0.5}>
            22/03/2023
          </Text>
        </Flex>

        <Text fontWeight={500} lineHeight="22px" mt={8} fontSize={14}>
          Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm
          Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi
          Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng
          Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao
          Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai
          Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp
          Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai
          bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth
          5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm
          Thanh hifi Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi
          Kiểu Dáng Thể Thao Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng
          Thể Thao
        </Text>
      </Box>
    </Box>
  );
};

export default NewsDetailComponent;
