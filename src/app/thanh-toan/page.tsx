import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const PaymentComponent = dynamic(() => import('@/components/payment/payment'), { ssr: false });

const Payment: NextPage = () => {
  return <PaymentComponent />;
};

export default Payment;
