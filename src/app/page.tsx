import CategoryList from '@/components/home/category-list';
import HomeSlider from '@/components/home/home-slider';
import ProductTop from '@/components/home/product-top';

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <CategoryList />
      <ProductTop />
    </div>
  );
}
