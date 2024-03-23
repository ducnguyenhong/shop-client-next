'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const NewsComponent: React.FC = () => {
  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Tin tức', href: '/tin-tuc' }]} />
      <PageSection title="Tin tức" />

      <Flex mt={10} gap={8} direction="column">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <Flex
              key={item}
              boxShadow="base"
              borderRadius={5}
              overflow="hidden"
              _hover={{ boxShadow: 'md' }}
              transitionDuration="200ms"
            >
              <Link href={`/tin-tuc/abc.${item}`}>
                <Flex>
                  <AspectRatio ratio={16 / 9} overflow="hidden" w={80}>
                    <Image
                      src="https://homefoodshop.vn/api/media-service/thumbnails/450/250/2ef68d64-b134-4c64-803f-2b03a0e76ad6.jpg"
                      alt="product"
                      objectFit="contain"
                      w="full"
                    />
                  </AspectRatio>

                  <Flex direction="column" flex={1} px={5} py={3} justify="space-between">
                    <Flex direction="column" gap={3}>
                      <Text fontSize={16} fontWeight={700}>
                        Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
                      </Text>
                      <Text>
                        Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao Tws Tai Nghe Chụp Tai
                        bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao
                      </Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Icon as={FaCalendarAlt} color="#828282" fontSize={14} />
                      <Text as="span" fontWeight={500} mt={0.5}>
                        22/03/2023
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          );
        })}
      </Flex>

      <Flex mt={14} justify="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default NewsComponent;
