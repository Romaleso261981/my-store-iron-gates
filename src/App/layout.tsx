import { Box, Center, Container, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { FooterLinks } from '@/shared/components';
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs';
import { HeaderSearch } from '@/shared/components/HeaderSearch/HeaderSearch';
import { PaginationComponent } from '@/shared/components/Pagination/Pagination';
import ScrollToTop from '@/shared/components/ScrollToTop/ScrollToTop';

import s from './App.module.css';

export function Layout() {
  return (
    <Flex justify="space-between" className={s.layoutWrapper} display="-ms-grid" direction="column">
      <Box mb={60}>
        {/* <HeaderTabs /> */}
        <HeaderSearch />
      </Box>
      <Flex ml={40}>
        <Breadcrumbs />
      </Flex>
      <Container>
        <Outlet />
        <Center mb={20}>
          <PaginationComponent />
        </Center>
      </Container>
      <Box>
        <FooterLinks />
      </Box>
      <ScrollToTop />
    </Flex>
  );
}
