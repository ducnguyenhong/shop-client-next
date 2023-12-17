import { Box, Flex, Image } from '@chakra-ui/react';
import { memo } from 'react';
import HomeSection from './home-section';

const FeaturedOffer: React.FC = () => {
  return (
    <Box bgColor="#FFF" mt={20}>
      <HomeSection title="Ưu đãi nổi bật" />

      <Flex gap={3}>
        <Flex flex={1}>
          <Image
            src="https://img.freepik.com/premium-vector/1212-special-shopping-day-background-poster-text-effect_500245-68.jpg?w=1380"
            alt="banner"
            objectFit="cover"
          />
        </Flex>
        <Flex flex={1}>
          <Flex direction="column" gap={3} h="full">
            <Flex flex={1} gap={3}>
              <Flex flex={1}>
                <Image
                  src="https://motta.uix.store/wp-content/uploads/2022/07/homev3-trade.jpg"
                  alt="banner"
                  objectFit="cover"
                />
              </Flex>
              <Flex flex={1}>
                <Image
                  src="https://motta.uix.store/wp-content/uploads/2022/07/homev3-trade.jpg"
                  alt="banner"
                  objectFit="cover"
                />
              </Flex>
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
    </Box>
  );
};

export default memo(FeaturedOffer);
