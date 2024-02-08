import { Button, Container, Text, Title } from '@mantine/core';

import classes from './HeroSection.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Ворота{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}>
                від виробника
              </Text>{' '}
              безкоштовна доставка!!!
            </Title>

            <Text className={classes.description} mt={30}>
              Виготовлення за 4 дні, виготовлення виробів за фото, ворота виготовляємо
              індивідуально, без коштовна доставка по всій Україні.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}>
              Замовити консультацію
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
