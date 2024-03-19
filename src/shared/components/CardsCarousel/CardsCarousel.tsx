import { Carousel } from '@mantine/carousel';
import { Container, Flex, Image } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import s from './CardsCarousel.module.css';
import { mockdata } from './mockData';

export function CardsCarousel() {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 10000 }));
  const slides = mockdata.map((url) => (
    <Carousel.Slide key={url.id}>
      <Image src={url.image} alt={url.title} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md">
      <Flex className={s.carouselWrapper}>
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withIndicators>
          {slides}
        </Carousel>
      </Flex>
    </Container>
  );
}
