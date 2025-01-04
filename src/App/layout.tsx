import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { FooterLinks } from "@/shared/components";
import { HeaderSearch } from "@/shared/components/HeaderSearch/HeaderSearch";
import { Categories } from "@/shared/components/Kategjry/Kategjry";
import ScrollToTop from "@/shared/components/ScrollToTop/ScrollToTop";

export function Layout() {
  return (
    <Flex justify="space-between" display="-ms-grid" direction="column">
      <HeaderSearch />
      <Categories />
      <Outlet />
      <FooterLinks />
      <ScrollToTop />
    </Flex>
  );
}
