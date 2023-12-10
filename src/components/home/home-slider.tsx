import { Flex, Image } from '@chakra-ui/react';
import { memo } from 'react';

const HomeSlider: React.FC = () => {
  return (
    <Flex gap={3} pt={6}>
      <Flex flex={2 / 3}>
        <Image
          src="https://img.freepik.com/premium-vector/1212-special-shopping-day-background-poster-text-effect_500245-68.jpg?w=1380"
          alt="banner"
          objectFit="cover"
        />
      </Flex>
      <Flex flex={1 / 3}>
        <Flex direction="column" gap={3} h="full">
          <Flex flex={1}>
            <Image
              src="https://img.freepik.com/premium-vector/1212-special-shopping-day-background-poster-text-effect_500245-68.jpg?w=1380"
              alt="banner"
              objectFit="cover"
            />
          </Flex>
          <Flex flex={1}>
            <Image
              src="https://img.freepik.com/premium-vector/1212-special-shopping-day-background-poster-text-effect_500245-68.jpg?w=1380"
              alt="banner"
              objectFit="cover"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(HomeSlider);
