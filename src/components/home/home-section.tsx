import { Heading } from '@chakra-ui/react';
import { memo } from 'react';

interface SectionProps {
  title: string;
}

const HomeSection: React.FC<SectionProps> = ({ title }) => {
  return (
    <Heading as="h3" fontSize={24} mb={3} fontWeight={500}>
      {title}
    </Heading>
  );
};

export default memo(HomeSection);
