import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import type { FC } from 'react';

import { CardsCarousel, ContactUs } from '@/shared/components';

import ImageGroupBanner from '../ImageGroupBanner/ImageGroupBanner';

const MainPage: FC = () => {
  return (
    <Flex direction="column">
      <ImageGroupBanner />
      <CardsCarousel />
      {/* <StatsGrid /> */}
      {/* <FaqWithHeader /> */}
      {/* <Asymmetrical /> */}
      {/* <CommentHtml /> */}
      <ContactUs />
    </Flex>
  );
};

export default MainPage;
