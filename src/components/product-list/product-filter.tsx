import { useMediaQuery } from '@/utils/hooks';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Input,
  Select,
  Text
} from '@chakra-ui/react';
import { memo } from 'react';

const ProductFilter: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 576px)');

  const filterTmp = (
    <Box mt={{ xs: 5, md: 10 }}>
      <Grid templateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={5} mt={2}>
        <GridItem>
          <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
            Tìm kiếm
          </Text>
          <Input placeholder="Nhập từ khoá" border="1px solid #ccc" h="38px" />
        </GridItem>
        <GridItem>
          <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
            Danh mục
          </Text>
          <Select placeholder="Chọn loại sản phẩm" />
        </GridItem>
        <GridItem>
          <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
            Loại sản phẩm
          </Text>
          <Select placeholder="Chọn loại sản phẩm" />
        </GridItem>
        <GridItem>
          <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
            Hiện trạng
          </Text>
          <Select placeholder="Chọn loại sản phẩm" />
        </GridItem>
      </Grid>
    </Box>
  );

  if (!isMobile) {
    return filterTmp;
  }

  return (
    <Accordion allowToggle>
      <AccordionItem borderTop="none">
        <AccordionButton borderTop="none" outline="none">
          <Box as="span" flex="1" textAlign="left">
            Bộ lọc
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{filterTmp}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default memo(ProductFilter);
