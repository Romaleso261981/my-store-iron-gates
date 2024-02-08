import { Carousel } from '@mantine/carousel';
import { Box, Button, Flex, Image, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import classes from './CardsCarousel.module.css';
import { mockdata } from './mockData';

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  console.log(mobile);
  const slides = mockdata.map((url) => (
    <Carousel.Slide key={url.id}>
      <Box className={classes.cardBox}>
        <Box className={classes.image}>
          <Image src={url.image} alt={url.title} />
        </Box>
        <Box className={classes.description}>
          <Title order={3} className={classes.title}>
            {url.title}
          </Title>
          <Text className={classes.category} size="xs">
            {url.code}
          </Text>
          <Title order={3} className={classes.cost}>
            {`${url.cost} грн`}
          </Title>
          <Button variant="gradient" color="dark" className={classes.button}>
            Замовити
          </Button>
        </Box>
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Flex justify="center" align="center" mt={20} mb={20}>
      <Carousel withIndicators>{slides}</Carousel>
    </Flex>
  );
}
