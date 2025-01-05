import { Button, Card, Flex, Image, Overlay, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { FC } from "react";

import TextTruncate from "@/shared/helpers/truncateText";

import classes from "./GroupBannerItem.module.css";

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

type GroupBannerItemProps = {
  product: Product;
};

export const GroupBannerItem: FC<GroupBannerItemProps> = ({ product }) => {
  const machets = useMediaQuery("(min-width: 25em)");
  return (
    <Card radius="md" h={machets ? 600 : "100%"} shadow="xs" padding="md">
      <Overlay opacity={0.01} zIndex={0} />
      <Flex direction="column" h={"100%"} justify="space-between">
        <Flex>
          <Image src={product.image} />
        </Flex>
        <Flex direction="column" h={"100%"} pt={10} align={"center"} justify="space-between">
          <Text size="lg" fw={700}>
            {product.title}
          </Text>
          <Text size="sm" className={classes.description}>
            <TextTruncate text={product.description} maxLength={250} />
          </Text>
          <Button variant="gradient" color="dark" size="md">
            <a href={product.to}>Перейти</a>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
