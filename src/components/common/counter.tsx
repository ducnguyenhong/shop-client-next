'use client';

import { Flex, Icon, Input } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  onChange?: (data: number) => void;
  defaultValue?: number;
}

const Counter: React.FC<Props> = (props) => {
  const { onChange, defaultValue } = props;
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') {
      setCount(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  return (
    <Flex align="center" gap={4}>
      <button onClick={() => setCount((prev) => (prev < 2 ? 1 : prev - 1))}>
        <Icon as={IoRemoveCircleOutline} fontSize={30} color="sub.1" mt={1} />
      </button>
      <Input
        px={1}
        textAlign="center"
        type="number"
        w={14}
        value={count}
        fontWeight={600}
        fontSize={16}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        <Icon as={IoAddCircleOutline} fontSize={30} color="sub.1" mt={1} />
      </button>
    </Flex>
  );
};

export default memo(Counter);
