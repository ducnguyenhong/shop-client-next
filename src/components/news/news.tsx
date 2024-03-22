'use client';

import { AspectRatio, Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import PageSection from '../common/page-section';

const NewsComponent: React.FC = () => {
  return (
    <Box pt={10}>
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
                      src="https://motta.uix.store/wp-content/uploads/2022/07/homev2-toysgames.jpg"
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
    </Box>
  );
};

export default NewsComponent;
