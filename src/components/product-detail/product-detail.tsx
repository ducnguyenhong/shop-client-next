'use client';

import { useAddProductFavorite, useQueryProductDetail } from '@/queries/product.query';
import { useCreateProductReview, useQueryProductReviews } from '@/queries/review.query';
import { userInfoAtom } from '@/states/recoil';
import { formatCurrency, showToast } from '@/utils/helper';
import { AspectRatio, Box, Button, Flex, Icon, Image, Text, Textarea } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useRecoilValue } from 'recoil';
import Breadcrumb from '../common/breadcrumb';
import Counter from '../common/counter';

const ProductDetailComponent: React.FC<{ id: string }> = ({ id }) => {
  const pathname = usePathname();
  const [review, setReview] = useState('');
  const [rate, setRate] = useState(5);
  const { mutateAsync: createReviewMutate, isPending: loadingCreateReview } = useCreateProductReview();
  const { mutateAsync: addFavoriteMutate, isPending: loadingAddFavorite } = useAddProductFavorite();
  const { data } = useQueryProductDetail(id);
  const { data: reviewList = [] } = useQueryProductReviews(id);
  const { imagesUrl, title, description, price } = data || {};
  const queryClient = useQueryClient();
  const userInfo = useRecoilValue(userInfoAtom);

  const onAddFavorite = useCallback(() => {
    if (isEmpty(userInfo)) {
      showToast({ status: 'warning', content: 'Bạn cần đăng nhập để sử dụng chức năng này' });
      return;
    }
    addFavoriteMutate({ productId: id }).then(() => {
      showToast({ status: 'warning', content: 'Thêm vào danh sách yêu thích thành công' });
    });
  }, [addFavoriteMutate, id, userInfo]);

  const onCreateReview = useCallback(() => {
    const { id: userId } = userInfo || {};

    createReviewMutate({
      comment: review,
      rate,
      userId,
      productId: Number(id)
    })
      .then(() => {
        showToast({ status: 'warning', content: 'Gửi đánh giá thành công' });
        setReview('');
        setRate(5);
        queryClient.resetQueries({ queryKey: ['GET_PRODUCT_REVIEW_LIST'] });
      })
      .catch((e) => {
        showToast({ status: 'error', content: 'Gửi đánh giá thất bại. Vui lòng thử lại sau' });
      });
  }, [createReviewMutate, id, queryClient, rate, review, userInfo]);

  return (
    <Box pt={5}>
      <Breadcrumb
        items={[
          { title: 'Sản phẩm', href: '/san-pham' },
          { title: 'Chi tiết sản phẩm', href: pathname, isActive: true }
        ]}
      />
      <Flex mt={{ xs: 0, lg: 10 }} gap={{ xs: 6, lg: 10 }} direction={{ xs: 'column', md: 'row' }}>
        <Flex flex={{ xs: 1, lg: 2 / 5 }}>
          <AspectRatio ratio={{ xs: 4 / 3, lg: 1 / 1 }} borderTopRadius={2} overflow="hidden" w="full" maxH="400px">
            <PhotoProvider>
              <PhotoView src={imagesUrl?.[0]}>
                <Box w="full" pos="relative">
                  <Image cursor="pointer" src={imagesUrl?.[0]} alt="product" objectFit="cover" w="full" h="full" />
                </Box>
              </PhotoView>
            </PhotoProvider>
          </AspectRatio>
        </Flex>
        <Flex flex={{ xs: 1, lg: 3 / 5 }} direction="column" justify="space-between">
          <Flex direction="column" gap={{ xs: 4, lg: 8 }}>
            <Text fontWeight={700} lineHeight={{ xs: '24px', lg: '30px' }} fontSize={{ xs: 18, lg: 22 }}>
              {title}
            </Text>

            <Text color="#D3232A" fontWeight={600} fontSize={{ xs: 16, lg: 22 }}>
              {formatCurrency(price)}
            </Text>
          </Flex>

          <Flex direction="column" align={{ xs: 'center', md: 'flex-start' }} mt={8}>
            <Button
              mb={10}
              px={0}
              isDisabled={loadingAddFavorite}
              onClick={onAddFavorite}
              leftIcon={<FaRegHeart color="red" />}
              variant="outline"
              border="none"
              bgColor="transparent"
              py={0}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
            >
              Thêm vào yêu thích
            </Button>

            <Counter />

            <Button colorScheme="green" mt={10}>
              Thêm vào giỏ hàng
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Box mt={10}>
        <Text
          fontWeight={500}
          lineHeight="22px"
          fontSize={{ xs: 14, lg: 16 }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></Text>
      </Box>

      <Box mt={20}>
        <Text fontWeight={700} fontSize={20}>
          Đánh giá về sản phẩm
        </Text>

        <Box>
          <Flex align="center" gap={2} mt={5}>
            {Array.from({ length: rate }, (_, i) => i + 1).map((i) => (
              <Icon as={FaStar} key={i} fontSize={22} cursor="pointer" onClick={() => setRate(i)} color="sub.1" />
            ))}
            {Array.from({ length: 5 - rate }, (_, i) => i + 1).map((i) => (
              <Icon
                as={FaRegStar}
                key={i}
                fontSize={22}
                cursor="pointer"
                onClick={() => setRate(rate + i)}
                color="sub.1"
              />
            ))}
          </Flex>
          <Textarea
            placeholder="Viết đánh giá về sản phẩm"
            maxLength={1000}
            mt={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Box mt={5}>
            <Button colorScheme="orange" isLoading={loadingCreateReview} onClick={onCreateReview}>
              Gửi đánh giá
            </Button>
          </Box>
        </Box>
      </Box>

      <Flex direction="column" mt={20} gap={6}>
        {reviewList?.map((item: any) => {
          const { id: reviewId, fullName: reviewUser, comment: reviewContent, rate: reviewRate } = item || {};

          return (
            <Flex direction="column" key={reviewId} gap={2}>
              <Flex gap={2} align="center">
                <NextImage width={30} height={30} src="/images/user.png" alt="user" />
                <Text fontWeight={700}>{reviewUser || 'Người dùng ẩn danh'}</Text>
              </Flex>
              <Flex gap={1}>
                {Array.from({ length: reviewRate }, (_, i) => i + 1).map((i) => (
                  <Icon
                    as={FaStar}
                    fontSize={16}
                    key={i}
                    cursor="pointer"
                    onClick={() => setRate(rate + i)}
                    color="sub.1"
                  />
                ))}
              </Flex>
              <Text>{reviewContent}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ProductDetailComponent;
