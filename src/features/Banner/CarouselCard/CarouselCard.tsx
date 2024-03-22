import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';

import classes from './CarouselCard.module.css';

const images = [
  'https://images.prom.ua/3754838004_3754838004.jpg',
  'https://images.prom.ua/2806183699_2806183699.jpg',
  'https://images.prom.ua/2332731040_2332731040.jpg',
  'https://images.prom.ua/2332728868_2332728868.jpg',
  'https://images.prom.ua/2810656459_2810656459.jpg'
];

export function CarouselCard() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} className={classes.images} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator
          }}>
          {slides}
        </Carousel>
      </Card.Section>
    </Card>
  );
}
