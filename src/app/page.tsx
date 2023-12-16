import CategoryList from '@/components/home/category-list';
import Confidence from '@/components/home/confidence';
import DiscoverMore from '@/components/home/discover-more';
import FeaturedOffer from '@/components/home/featured-offer';
import HomeSlider from '@/components/home/home-slider';
import ProductTop from '@/components/home/product-top';

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <CategoryList />
      <ProductTop />
      <FeaturedOffer />
      <Confidence />
      <DiscoverMore />
    </div>
  );
}
