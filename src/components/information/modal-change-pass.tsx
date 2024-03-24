import {
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { memo } from 'react';
import FieldLabel from '../form/field-label';

interface Props {
  show: boolean;
  onClose: () => void;
}

const ModalChangePass: React.FC<Props> = (props) => {
  const { show, onClose } = props;

  // const { mutate: updateMutate, isLoading } = useMutation(
  //   (variables) => {
  //     const { password } = variables;
  //     return API.request({
  //       method: 'PUT',
  //       url: `/api/profile/change-password`,
  //       params: { password }
  //     });
  //   },
  //   {
  //     onSuccess: (_, { resetForm }) => {
  //       showToast({
  //         content: 'Đổi mật khẩu thành công',
  //         status: 'success'
  //       });
  //       resetForm();
  //       onClose();
  //     },
  //     onError: (e) =>
  //       showToast({
  //         status: 'error',
  //         content: `Đổi mật khẩu thất bại. ${e.message || e.error}`
  //       })
  //   }
  // );

  return (
    <Modal
      isOpen={show}
      onClose={() => {
        onClose();
        // resetForm();
      }}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Đổi mật khẩu</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody p={{ xs: 6, lg: 10 }}>
          <Flex direction="column" mx="auto" gap={10}>
            <Flex direction="column">
              <FieldLabel title="Mật khẩu mới" isRequired />
              <Input
                name="password"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.password}
                type="password"
              />
              {/* {errors.password && touched.password && (
                      <Text mt={1} color="red" fontSize={13}>
                        {errors.password}
                      </Text>
                    )} */}
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Xác nhận mật khẩu mới" isRequired />
              <Input
                name="confPassword"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.confPassword}
                type="password"
              />
              {/* {errors.confPassword && touched.confPassword && (
                      <Text mt={1} color="red" fontSize={13}>
                        {errors.confPassword}
                      </Text>
                    )} */}
            </Flex>
          </Flex>
        </ModalBody>

        <Divider />
        <ModalFooter>
          <Button
            colorScheme="green"
            variant="outline"
            mr={5}
            onClick={() => {
              onClose();
              // resetForm();
            }}
            type="button"
          >
            Huỷ bỏ
          </Button>
          <Button
            colorScheme="green"
            //  isLoading={isLoading}
            type="submit"
            //  onClick={handleSubmit}
          >
            Đổi mật khẩu
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalChangePass);
