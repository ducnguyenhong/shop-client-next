import { Box, Flex } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';
import Pagination from '../common/pagination';

const HistoryOrderComponent: React.FC = () => {
  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Đơn hàng của tôi', href: '/don-hang-cua-toi' }]} />
      <PageSection title="Đơn hàng của tôi" />

      <Box mt={10}>haha</Box>
      <Flex mt={14} justify="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default HistoryOrderComponent;
