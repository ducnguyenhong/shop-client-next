import { convertSlugURL, formatCurrency } from '@/utils/helper';
import { AspectRatio, Flex, Image, Td, Text, Tr } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo } from 'react';

interface Props {
  item: any;
}

const OrderItem: React.FC<Props> = ({ item }) => {
  const { orders, id, createdAt, price: totalPrice, status } = item;

  return (
    <Tr>
      <Td>
        <Text fontWeight={600}>{id}</Text>
      </Td>
      <Td>
        <Flex direction="column" gap={4}>
          {orders?.map((item: any) => {
            const { quantity, product } = item || {};
            const { id: productId, imagesUrl, title, price } = product;

            return (
              <Flex gap={3} key={id}>
                <Link
                  href={`/san-pham/${convertSlugURL(title)}.${productId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AspectRatio w={16} h={16} boxShadow="xs" borderRadius={4}>
                    <Image src={imagesUrl?.[0]} alt={title} fit="cover" borderRadius={3} />
                  </AspectRatio>
                </Link>
                <Flex direction="column" flex={1}>
                  <Link
                    href={`/san-pham/${convertSlugURL(title)}.${productId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text fontWeight={600} fontSize={14} noOfLines={2}>
                      {title}
                    </Text>
                  </Link>
                  <Text fontWeight={500} fontSize={12} color="#828282" mt={1}>
                    Số lượng: {quantity}
                  </Text>
                  <Text fontWeight={500} fontSize={12} color="#828282">
                    Đơn giá: {formatCurrency(price)}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatCurrency(totalPrice)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontWeight={500}>{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
      </Td>
      <Td>{status}</Td>
    </Tr>
  );
};

export default memo(OrderItem);
