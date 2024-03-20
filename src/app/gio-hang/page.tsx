import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const CartComponent = dynamic(() => import('@/components/cart/cart'), { ssr: false });

const Cart: NextPage = () => {
  return <CartComponent />;
};

export default Cart;
