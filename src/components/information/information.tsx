import { Box } from '@chakra-ui/react';
import Breadcrumb from '../common/breadcrumb';
import PageSection from '../common/page-section';

const InformationComponent: React.FC = () => {
  return (
    <Box pt={5}>
      <Breadcrumb items={[{ title: 'Thông tin cá nhân', href: '/thong-tin-ca-nhan' }]} />
      <PageSection title="Thông tin cá nhân" />

      <Box mt={10}>Nguyễn Đức</Box>
    </Box>
  );
};

export default InformationComponent;
