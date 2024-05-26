'use client';

import CategoryList from '@/components/home/category-list';
import Confidence from '@/components/home/confidence';
import DiscoverMore from '@/components/home/discover-more';
import FeaturedOffer from '@/components/home/featured-offer';
import HomeSlider from '@/components/home/home-slider';
import ProductTop from '@/components/home/product-top';
import { useQueryUserInfo } from '@/queries/auth.query';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { isLoading } = useQueryUserInfo(isClient);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isLoading) {
    return null;
  }

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
