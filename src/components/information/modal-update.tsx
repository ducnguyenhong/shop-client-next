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
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Textarea
} from '@chakra-ui/react';
import { memo } from 'react';
import FieldLabel from '../form/field-label';

interface Props {
  show: boolean;
  onClose: () => void;
}

const ModalUpdate: React.FC<Props> = (props) => {
  const { show, onClose } = props;
  // const userInfo = useRecoilValue(userInfoAtom);
  // const { address, email, fullname, gender, hasNotification } = userInfo || {};
  // const queryClient = useQueryClient();

  // const { mutate: updateMutate, isPending } = useMutation(
  //   (variables:any) => {
  //     const { address, email, fullname, gender, hasNotification } = variables;
  //     return API.request({
  //       method: 'PUT',
  //       url: `/api/profile/update`,
  //       params: { address, email, fullname, gender, hasNotification }
  //     });
  //   },
  //   {
  //     onSuccess: () => {
  //       showToast({
  //         content: 'Chỉnh sửa thông tin thành công',
  //         status: 'success'
  //       });
  //       // queryClient.invalidateQueries(['GET_USER_INFO']);
  //       // resetForm();
  //       onClose();
  //     },
  //     onError: (e: Error) =>
  //       showToast({
  //         status: 'error',
  //         content: `Chỉnh sửa thông tin thất bại. ${e.message}`
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
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chỉnh sửa thông tin cá nhân</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody p={{ xs: 6, lg: 10 }}>
          <Flex direction="column" mx="auto" gap={10}>
            <Flex direction="column">
              <FieldLabel title="Họ và tên" isRequired />
              <Input name="fullname" />
              {/* {errors.fullname && touched.fullname && (
                      <Text mt={1} color="red" fontSize={13}>
                        {errors.fullname}
                      </Text>
                    )} */}
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Giới tính" />
              <RadioGroup
              // value={values.gender ? 'MALE' : 'FEMALE'}
              // onChange={(value) => {
              //   setFieldValue('gender', value === 'MALE');
              // }}
              >
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="green" value="MALE" size="lg">
                    Nam
                  </Radio>
                  <Radio colorScheme="green" value="FEMALE" size="lg">
                    Nữ
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Email" />
              <Input name="email" />
              {/* {errors.email && touched.email && (
                      <Text mt={1} color="red" fontSize={13}>
                        {errors.email}
                      </Text>
                    )} */}
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Địa chỉ" />
              <Textarea name="address" />
              {/* {errors.address && touched.address && (
                      <Text mt={1} color="red" fontSize={13}>
                        {errors.address}
                      </Text>
                    )} */}
            </Flex>

            <Flex align="center" gap={5}>
              <FieldLabel title="Nhận thông báo" />
              <Switch
                size="lg"
                // isChecked={values.hasNotification}
                // onChange={(e) => setFieldValue('hasNotification', e.target.checked)}
              />
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
            // isLoading={isLoading}
            type="submit"
            //  onClick={handleSubmit}
          >
            Xác nhận
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalUpdate);
