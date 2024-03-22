import { Box, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

import { BreadcrumbsComponent } from '@/features/Breadcrumbs/Breadcrumbs';
import { FooterLinks } from '@/shared/components';
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs';
import { HeaderSearch } from '@/shared/components/HeaderSearch/HeaderSearch';
import ScrollToTop from '@/shared/components/ScrollToTop/ScrollToTop';

import s from './App.module.css';

export function Layout() {
  const matches = useMediaQuery('(min-width: 25em)');

  return (
    <Flex justify="space-between" className={s.layoutWrapper} display="-ms-grid" direction="column">
      <Box mb={matches ? 60 : 15}>
        {/* <HeaderTabs /> */}
        <HeaderSearch />
      </Box>
      <Flex mb={matches ? 40 : 10}>
        <Box ml={40}>
          <Breadcrumbs />
        </Box>
        <Flex ml={40}>
          <BreadcrumbsComponent />
        </Flex>
      </Flex>
      <Outlet />
      <Box>
        <FooterLinks />
      </Box>
      <ScrollToTop />
    </Flex>
  );
}
