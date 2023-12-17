import { Text } from '@chakra-ui/react';
import { memo } from 'react';

interface SectionProps {
  title: string;
}

const HomeSection: React.FC<SectionProps> = ({ title }) => {
  return (
    <Text fontSize={24} mb={3} fontWeight={700}>
      {title}
    </Text>
  );
};

export default memo(HomeSection);
