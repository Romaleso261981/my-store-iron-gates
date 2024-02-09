import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import type { FC } from 'react';

import { CardsCarousel, ContactUs, NavbarNested, StatsGrid } from '@/shared/components';
import { CommentHtml } from '@/shared/components/CommentHtml/CommentHtml';
import { FaqWithHeader } from '@/shared/components/FaqWithHeader/FaqWithHeader';

const MainPage: FC = () => {
  return (
    <Flex direction="column" p={20}>
      <Flex pl={20} pr={10}>
        <NavbarNested />
        <CardsCarousel />
      </Flex>
      <StatsGrid />
      <FaqWithHeader />
      <CommentHtml />
      <ContactUs />
    </Flex>
  );
};

export default MainPage;
