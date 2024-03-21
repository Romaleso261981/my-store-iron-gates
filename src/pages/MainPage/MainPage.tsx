import '@mantine/core/styles.css';

import { Container, Flex } from '@mantine/core';
import { type FC, useEffect } from 'react';

import { EmailBanner } from '@/features/Banner/EmailBanner';
import { CardsCarousel, ContactUs } from '@/shared/components';
import useScrollTop from '@/shared/helpers/useScrollTop';

import ImageGroupBanner from '../ImageGroupBanner/ImageGroupBanner';

const MainPage: FC = () => {
  useScrollTop();

  const getData = async () => {
    fetch('http://deshevakovka.up.railway.app/products/all_products_group').then((data) =>
      console.log('res', data)
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex direction="column" mt={40}>
      <EmailBanner />
      <CardsCarousel />
      <Container size="lg">
        <ImageGroupBanner />
      </Container>
      {/* <StatsGrid /> */}
      {/* <FaqWithHeader /> */}
      {/* <Asymmetrical /> */}
      {/* <CommentHtml /> */}
      <ContactUs />
    </Flex>
  );
};

export default MainPage;
