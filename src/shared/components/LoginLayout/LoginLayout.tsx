import { Box, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { ReactNode } from "react";

import { FooterLinks } from "@/shared/components";
import { HeaderSearch } from "@/shared/components/HeaderSearch/HeaderSearch";

import s from "./LoginLayout.module.css";

export function LoginLayout({ children }: { children: ReactNode }) {
  const matches = useMediaQuery("(min-width: 25em)");

  return (
    <Flex justify="space-between" className={s.layoutWrapper} display="-ms-grid" direction="column">
      <Box mb={matches ? 60 : 15}>
        <HeaderSearch />
      </Box>
      {children}
      <Box>
        <FooterLinks />
      </Box>
    </Flex>
  );
}
