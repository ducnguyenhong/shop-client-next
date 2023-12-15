import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import { memo } from 'react';
import HomeSection from './home-section';

const FeaturedOffer: React.FC = () => {
  return (
    <Box bgColor="#FFF" p={4} mt={8}>
      <HomeSection title="Ưu đãi nổi bật" />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Image src="https://motta.uix.store/wp-content/uploads/2022/07/homev3-trade.jpg" alt="offer" w="full" />
        </GridItem>
        <GridItem colSpan={1}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={1}>
              <Image src="https://motta.uix.store/wp-content/uploads/2022/07/homev3-trade.jpg" alt="offer" w="full" />
            </GridItem>
            <GridItem colSpan={1}>
              <Image src="https://motta.uix.store/wp-content/uploads/2022/07/homev3-trade.jpg" alt="offer" w="full" />
            </GridItem>
            <GridItem colSpan={2}>
              <Image src="https://motta.uix.store/wp-content/uploads/2022/07/homev3-trade.jpg" alt="offer" w="full" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default memo(FeaturedOffer);
