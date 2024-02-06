import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Button, Flex } from '@mantine/core';
import { FC } from 'react';
import classes from './ArticalCard.module.css';

type CardData = {
  id: string;
  title: string;
  image: string;
  code: string;
  cost: string;
  date: string;
};

type Props = {
  data: CardData[];
};

export const ArticalCard: FC<Props> = ({ data }) => {
  const cards = data.map((article) => (
    <Card
      shadow="lg"
      key={article.id}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Flex justify="flex-start" align="center">
        <Text c="dimmed" size="xs" mr={5} tt="uppercase" fw={700} mt="md">
          Код товару
        </Text>
        <Text c="dimmed" size="xl" tt="uppercase" fw={900} mt="md">
          {`${article.code}`}
        </Text>
      </Flex>
      <Text className={classes.cost} mt={5}>
        {`${article.cost} грн`}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Button variant="filled">Замовити</Button>
    </Card>
  ));
  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
};
