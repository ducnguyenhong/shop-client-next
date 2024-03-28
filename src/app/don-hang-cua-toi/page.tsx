import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const MyOrderComponent = dynamic(() => import('@/components/my-order/my-order'), { ssr: false });

const MyOrder: NextPage = () => {
  return <MyOrderComponent />;
};

export default MyOrder;
