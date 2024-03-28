import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { memo, useCallback, useEffect } from 'react';

interface Props {
  show: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ModalConfirm: React.FC<Props> = (props) => {
  const { show, onClose, onConfirm } = props;
  const { isOpen, onOpen, onClose: onCloseChakra } = useDisclosure();

  const onCloseModal = useCallback(() => {
    onCloseChakra();
    onClose();
  }, [onClose, onCloseChakra]);

  useEffect(() => {
    if (show) {
      onOpen();
    }
  }, [onOpen, show]);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={18} mb={2}>
            Xác nhận đặt hàng
          </Text>
          <Divider />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={3}>
          <Text fontSize={16} fontWeight={600}>
            Bạn có chắc chắn đặt đơn hàng này không?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={5} onClick={onCloseModal} variant="outline">
            Huỷ
          </Button>
          <Button
            colorScheme="green"
            onClick={() => {
              onConfirm();
              onCloseModal();
            }}
          >
            Xác nhân đặt hàng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalConfirm);
