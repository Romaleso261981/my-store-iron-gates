import {
  Badge,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title
} from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

import { mockdataGateWithCorrugatedBoard } from '@/mocData';

import classes from './CardDetalies2.module.css';

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation }
];

export function CardDetalies2() {
  const { id } = useParams();

  const product = mockdataGateWithCorrugatedBoard.find((item) => item.id === id);

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Container pt={40} pb={40}>
      <Flex direction="row" gap={10} align="center" mb={30}>
        <FaArrowLeftLong />
        <Link to="/vorota-profnastilom-kovanimi">
          <Title size={20}>Назад</Title>
        </Link>
      </Flex>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={product?.image} alt="Tesla Model S" />
        </Card.Section>

        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>{product?.title}</Text>
            <Text fz="xs" c="dimmed">
              {product?.code}
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            Basic configuration
          </Text>

          <Group gap={8} mb={-8}>
            {features}
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group gap={30}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                $168.00
              </Text>
              <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                кв.м
              </Text>
            </div>

            <Button radius="xl" style={{ flex: 1 }}>
              Замовити
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </Container>
  );
}
