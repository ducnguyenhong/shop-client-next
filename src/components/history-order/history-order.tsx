import { Box, Flex } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const HistoryOrderComponent: React.FC = () => {
  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Lịch sử mua hàng', href: '/lich-su-mua-hang' }]} />
      <PageSection title="Lịch sử mua hàng" />

      <Box mt={10}>haha</Box>
      <Flex mt={14} justify="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default HistoryOrderComponent;
