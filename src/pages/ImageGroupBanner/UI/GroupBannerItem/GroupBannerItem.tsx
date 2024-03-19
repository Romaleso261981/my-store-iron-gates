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
  to: string;
  description: string;
};

type qroupBannerItemProps = {
  product: Product;
};

export const GroupBannerItem: FC<qroupBannerItemProps> = ({ product }) => {
  return (
    <Card radius="md">
      <Overlay opacity={0.01} zIndex={0} />

      <Flex direction="column" justify="space-between">
        <Flex>
          <Image src={product.image} />
        </Flex>
        <Flex direction="column" justify="space-around">
          <Text size="lg" fw={700}>
            {product.title}
          </Text>
          <Text size="sm" className={classes.description}>
            {product.description}
          </Text>
          <Button variant="gradient" color="dark" size="md">
            <a href={product.to}>Перейти</a>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
