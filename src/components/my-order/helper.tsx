import { Text } from '@chakra-ui/react';

export const getOrderStatus = (status: 'INPROGRESS' | 'DONE' | 'DELIVERING' | 'CANCEL') => {
  switch (status) {
    case 'CANCEL':
      return (
        <Text
          color="#FFF"
          fontWeight={600}
          fontSize={13}
          bgColor="gray"
          borderRadius={5}
          textAlign="center"
          w={32}
          py={1}
        >
          Đã hủy
        </Text>
      );

    case 'INPROGRESS':
      return (
        <Text
          color="#FFF"
          fontWeight={600}
          fontSize={13}
          bgColor="#8950FC"
          borderRadius={5}
          textAlign="center"
          w={32}
          py={1}
        >
          Đang xử lý
        </Text>
      );

    case 'DELIVERING':
      return (
        <Text
          color="#FFF"
          fontWeight={600}
          fontSize={13}
          bgColor="#f9aa19"
          borderRadius={5}
          textAlign="center"
          w={32}
          py={1}
        >
          Đang giao hàng
        </Text>
      );

    case 'DONE':
      return (
        <Text
          color="#FFF"
          fontWeight={600}
          fontSize={13}
          bgColor="green"
          borderRadius={5}
          textAlign="center"
          w={32}
          py={1}
        >
          Đã hoàn thành
        </Text>
      );

    default:
      return null;
  }
};
