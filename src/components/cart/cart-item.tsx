import { cartAtom } from '@/states/recoil';
import { convertSlugURL, formatCurrency } from '@/utils/helper';
import { Flex, Image, Td, Text, Tr } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Counter from '../common/counter';
import { cartDeleteAtom } from './cart.recoil';

interface Props {
  item: any;
  isConfirm?: boolean;
}

const CartItem: React.FC<Props> = ({ item, isConfirm }) => {
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
            <Image src={imagesUrl?.[0]} alt={name} style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
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
        <Counter onChange={onChangeCount} defaultValue={quantity} isConfirm={isConfirm} />
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatCurrency(price * quantity)}
          </Text>
        </Flex>
      </Td>
      {!isConfirm && (
        <Td>
          <button onClick={() => setCartDelete({ show: true, id })}>
            <Text as="span" color="red" fontWeight={500} fontSize={14}>
              Xoá
            </Text>
          </button>
        </Td>
      )}
    </Tr>
  );
};

export default memo(CartItem);
