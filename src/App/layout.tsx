import { Box, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { FooterLinks, HeaderTabs } from '@/shared/components';

export function Layout() {
  return (
    <Flex justify="space-between" display="-ms-grid" direction="column">
      <Box mb={60}>
        <HeaderTabs />
      </Box>
      <Box>
        <Outlet />
      </Box>
      <Box mt={150}>
        <FooterLinks />
      </Box>
    </Flex>
  );
}
