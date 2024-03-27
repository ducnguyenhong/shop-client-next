import { cartAtom } from '@/states/recoil';
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
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartDeleteAtom } from './cart.recoil';

const ModalDeleteCart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartDelete, setCartDelete] = useRecoilState(cartDeleteAtom);
  const { show, id } = cartDelete || {};
  const setCart = useSetRecoilState(cartAtom);

  const onCloseModal = useCallback(() => {
    setCartDelete({ show: false, id: undefined });
    onClose();
  }, [onClose, setCartDelete]);

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
            Xác nhận xoá
          </Text>
          <Divider />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={3}>
          <Text fontSize={16} fontWeight={600}>
            Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={5} onClick={onCloseModal} variant="outline">
            Huỷ
          </Button>
          <Button
            colorScheme="orange"
            onClick={() => {
              setCart((prev) => prev.filter((i) => i.id !== id));
              onCloseModal();
            }}
          >
            Xác nhận
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalDeleteCart);
