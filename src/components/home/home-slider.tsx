import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface SliderItemProps {
  href: string;
  image: string;
  priority?: boolean;
}

const SliderItem: React.FC<SliderItemProps> = (props) => {
  const { href, image, priority } = props;
  return (
    <Link href={href} style={{ display: 'block', width: '100%', height: '100%', overflow: 'hidden' }}>
      <Flex
        w="full"
        h="full"
        pos="relative"
        boxShadow="base"
        overflow="hidden"
        borderRadius={6}
        transitionDuration="250ms"
        _hover={{ transform: 'scale(1.02)' }}
        border="1px solid #e6e6e6"
      >
        <Image
          priority={priority}
          src={image}
          alt="banner"
          fill
          style={{ objectFit: 'cover', borderRadius: 6, width: '100%' }}
        />
      </Flex>
    </Link>
  );
};

const HomeSlider: React.FC = () => {
  return (
    <Flex gap={3} pt={{ xs: 4, lg: 3 }} h={{ xs: '200px', md: '350px', lg: '400px' }}>
      <Flex w={{ xs: 'full', md: '60%' }}>
        <SliderItem href="/san-pham" image="/images/banner-1.png" priority />
      </Flex>
      <Flex display={{ xs: 'none', md: 'flex' }} w="40%" direction="column" gap={3} h="full">
        <SliderItem href="/san-pham?categoryId=1" image="/images/banner-2.png" />
        <SliderItem href="/san-pham?categoryId=4" image="/images/banner-3.png" />
      </Flex>
    </Flex>
  );
};

export default memo(HomeSlider);
