'use client';

import { memo } from 'react';
import HeaderDesktop from './subs/header-desktop';
import HeaderMobile from './subs/header-mobile';

const Header: React.FC = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default memo(Header);
