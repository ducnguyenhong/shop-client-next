import { formatCurrency } from '@/utils/helper';
import { AspectRatio, Flex, Image, Td, Text, Tr } from '@chakra-ui/react';
import { memo } from 'react';
import InDecreaser from '../common/in-decreaser';

interface Props {
  item: any;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const {
    id,
    image = 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/05/vegetables.jpg',
    name = 'Sản phẩm 1',
    price = 100000
  } = item;

  return (
    <Tr>
      <Td>
        <Flex gap={2} flexDirection="column">
          <AspectRatio ratio={4 / 3} w={20} boxShadow="xs" borderRadius={4}>
            <Image src={image} alt={name} />
          </AspectRatio>
          <Text as="span" fontWeight={600}>
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatCurrency(price)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <InDecreaser />
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatCurrency(price)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <button>
          <Text as="span" color="red" fontWeight={500} fontSize={14}>
            Xoá
          </Text>
        </button>
      </Td>
    </Tr>
  );
};

export default memo(CartItem);
