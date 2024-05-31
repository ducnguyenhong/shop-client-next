'use client';

import { useQueryCategoryList } from '@/queries/category.query';
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
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, useState } from 'react';

const ProductFilter: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 576px)');
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const page = searchParams.get('page') || 1;
  const categoryId = searchParams.get('categoryId') || '';
  const router = useRouter();
  const { data: categoryList = [] } = useQueryCategoryList();

  const [currentKeyword, setCurrentKeyword] = useState(keyword);

  const filterTmp = (
    <Box mt={{ xs: 5, md: 10 }}>
      <Grid templateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={5} mt={2}>
        <GridItem>
          <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
            Tìm kiếm
          </Text>
          <Box pos="relative">
            <Input
              defaultValue={keyword}
              placeholder="Nhập từ khoá"
              border="1px solid #ccc"
              h="38px"
              onChange={(e) => setCurrentKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  router.push(`/san-pham?keyword=${currentKeyword?.trim()}&page=${page}&categoryId=${categoryId}`);
                }
              }}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Text fontWeight={600} fontSize={13} mb={1} color="main.1">
            Danh mục
          </Text>
          <Select
            defaultValue={categoryId}
            placeholder="Chọn danh mục"
            onChange={(e) => {
              router.push(`/san-pham?keyword=${currentKeyword?.trim()}&page=${page}&categoryId=${e.target.value}`);
            }}
          >
            {categoryList?.map((i: any) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </Select>
        </GridItem>
        {/* <GridItem>
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
        </GridItem> */}
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
