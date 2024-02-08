import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import type { FC } from 'react';

import { CardsCarousel } from '@/shared/components/CardsCarousel/CardsCarousel';
import { ContactUs } from '@/shared/components/ContactUs/ContactUs';
import { NavbarNested } from '@/shared/components/NavbarNested/NavbarNested';

const MainPage: FC = () => {
  return (
    <Flex direction="column" p={20}>
      <Flex pl={20} pr={10}>
        <NavbarNested />
        <CardsCarousel />
      </Flex>
      <ContactUs />
    </Flex>
  );
};

export default MainPage;
