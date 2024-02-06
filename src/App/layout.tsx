import { Outlet } from 'react-router-dom';

import { FooterLinks, HeaderTabs } from '@/shared/components';

export function Layout() {
  return (
    <>
      <HeaderTabs />
      <Outlet />
      <FooterLinks />
    </>
  );
}
