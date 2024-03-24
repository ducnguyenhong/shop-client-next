import { FormLabel, Text } from '@chakra-ui/react';
import { memo } from 'react';

interface Props {
  title: string;
  isRequired?: boolean;
}

const FieldLabel: React.FC<Props> = (props) => {
  const { title, isRequired } = props;
  return (
    <FormLabel fontWeight={600}>
      {title}{' '}
      {isRequired && (
        <Text as="span" color="red">
          *
        </Text>
      )}
    </FormLabel>
  );
};

export default memo(FieldLabel);
