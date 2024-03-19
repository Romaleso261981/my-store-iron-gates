import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import type { FC } from 'react';

import { CardsCarousel, ContactUs } from '@/shared/components';
import useScrollTop from '@/shared/helpers/useScrollTop';

import ImageGroupBanner from '../ImageGroupBanner/ImageGroupBanner';

const MainPage: FC = () => {
  useScrollTop();

  return (
    <Flex direction="column" mt={40}>
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
