import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title
} from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

import { mockdataGateWithCorrugatedBoard } from '@/mocData';

import classes from './CardDetalies.module.css';

const badges = [
  { emoji: '☀️', label: 'Sunny weather' },
  { emoji: '🦓', label: 'Onsite zoo' },
  { emoji: '🌊', label: 'Sea' },
  { emoji: '🌲', label: 'Nature' },
  { emoji: '🤽', label: 'Water sports' }
];

export default function CardDetalies() {
  const { id } = useParams();

  const product = mockdataGateWithCorrugatedBoard.find((item) => item.id === id);

  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <>
      <Container pt={40} pb={40}>
        <Card withBorder radius="md" p="md" className={classes.card}>
          <Flex direction="row" gap={10} align="center" mb={30}>
            <FaArrowLeftLong />
            <Link to="/vorota-profnastilom-kovanimi">
              <Title size={20}>Назад</Title>
            </Link>
          </Flex>
          <Card.Section>
            <Image src={product?.image} alt={product?.title} className={classes.image} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group justify="apart">
              <Text fz="lg" fw={500}>
                {product?.title}
              </Text>
              <Badge size="sm" variant="light">
                {product?.code}
              </Badge>
              <Badge size="sm" variant="light">
                {product?.cost}
              </Badge>
            </Group>
          </Card.Section>
          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect for you, if you enjoy
            </Text>
            <Group gap={7} mt={5}>
              {features}
            </Group>
          </Card.Section>

          <Group mt="xs">
            <Button size="md" w={200} radius="md" style={{ flex: 1 }}>
              Замовити
            </Button>
            <ActionIcon variant="default" radius="md" size={36}>
              <IconHeart className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card>
      </Container>
    </>
  );
}
