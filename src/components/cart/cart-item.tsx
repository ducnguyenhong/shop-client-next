import { cartAtom } from '@/states/recoil';
import { convertSlugURL, formatCurrency } from '@/utils/helper';
import { AspectRatio, Flex, Image, Td, Text, Tr } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Counter from '../common/counter';
import { cartDeleteAtom } from './cart.recoil';

interface Props {
  item: any;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { id, quantity, imagesUrl, name, price } = item;
  const [cart, setCart] = useRecoilState(cartAtom);
  const setCartDelete = useSetRecoilState(cartDeleteAtom);

  const onChangeCount = useCallback(
    (count: number) => {
      const newCart = cart.map((i) => {
        if (i.id === id) {
          return {
            id,
            quantity: count
          };
        }
        return i;
      });
      setCart(newCart);
    },
    [cart, id, setCart]
  );

  return (
    <Tr>
      <Td>
        <Link href={`/san-pham/${convertSlugURL(name)}.1`} target="_blank" rel="noopener noreferrer">
          <Flex gap={2} flexDirection="column">
            <AspectRatio ratio={4 / 3} w={20} boxShadow="xs" borderRadius={4}>
              <Image src={imagesUrl?.[0]} alt={name} />
            </AspectRatio>
            <Text as="span" fontWeight={600}>
              {name}
            </Text>
          </Flex>
        </Link>
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatCurrency(price)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Counter onChange={onChangeCount} defaultValue={quantity} />
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatCurrency(price * quantity)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <button onClick={() => setCartDelete({ show: true, id })}>
          <Text as="span" color="red" fontWeight={500} fontSize={14}>
            Xoá
          </Text>
        </button>
      </Td>
    </Tr>
  );
};

export default memo(CartItem);
