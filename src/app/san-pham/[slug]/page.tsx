import ProductDetailComponent from '@/components/product-detail/product-detail';
import { NextPage } from 'next';

const ProductDetail: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const id = slug.split('.')[1];

  return <ProductDetailComponent id={id} />;
};

export default ProductDetail;
