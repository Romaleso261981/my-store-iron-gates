import { Button, Card, Flex, Image, Overlay, Text } from '@mantine/core';
import type { FC } from 'react';

import classes from './GroupBannerItem.module.css';

type Product = {
  id: string;
  title: string;
  image: string;
  code: string;
  cost: number;
  category: string;
  date: string;
};

type qroupBannerItemProps = {
  product: Product;
};

export const GroupBannerItem: FC<qroupBannerItemProps> = ({ product }) => {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.35} zIndex={0} />

      <Flex direction="column" className={classes.content}>
        <Flex>
          <Image src={product.image} />
        </Flex>
        <Flex direction="column">
          <Text size="lg" fw={700} className={classes.title}>
            {product.title}
          </Text>
          <Text size="sm" className={classes.description}>
            {product.category}
          </Text>
          <Text size="sm" className={classes.description}>
            {product.cost}
          </Text>
          animate
          <Button className={classes.action} variant="gradient" color="dark" size="md">
            <a href="https://desheva-kovka.com.ua/ua/g52276843-elitni-kovani-vorota">Перейти</a>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
