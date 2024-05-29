'use client';

import { useQueryUserInfo } from '@/queries/auth.query';
import { memo } from 'react';
import HeaderDesktop from './subs/header-desktop';
import HeaderMobile from './subs/header-mobile';

const Header: React.FC = () => {
  useQueryUserInfo();

  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default memo(Header);
