import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, memo } from 'react';
import { IoChevronForward, IoHome } from 'react-icons/io5';

interface Props {
  items: { title: string; href: string; isActive?: boolean }[];
}

const Breadcrumb: React.FC<Props> = (props) => {
  const { items } = props;
  const pathname = usePathname();

  return (
    <Flex mb={5} align="center" gap={2}>
      <Link href="/">
        <Flex align="center" gap={1}>
          <Icon as={IoHome} fontSize={14} />
          <Text as="span" fontWeight={600} mt={0.5}>
            Trang chủ
          </Text>
        </Flex>
      </Link>

      {items.map((item) => {
        const isActive = item.isActive || pathname === item.href;
        return (
          <Fragment key={item.href}>
            <Icon as={IoChevronForward} fontSize={14} color="#828282" />

            <Link href={item.href}>
              <Text as="span" fontWeight={isActive ? 700 : 500} mt={0.5} color={isActive ? 'sub.2' : undefined}>
                {item.title}
              </Text>
            </Link>
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default memo(Breadcrumb);
