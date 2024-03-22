import { ActionIcon, Button, Card, Flex, Group, Image, Text } from '@mantine/core'; // import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

import { mockdataEliteIronGates } from '@/mocData';

import classes from './CardDetalies2.module.css';

// const mockdata = [
//   { label: '4 passengers', icon: IconUsers },
//   { label: '100 km/h in 4 seconds', icon: IconGauge },
//   { label: 'Automatic gearbox', icon: IconManualGearbox },
//   { label: 'Electric', icon: IconGasStation }
// ];

export function CardDetalies2() {
  const { id } = useParams();

  const product = mockdataEliteIronGates.find((item) => item.id === id);

  // const features = mockdata.map((feature) => (
  //   <Center key={feature.label}>
  //     <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
  //     <Text size="xs">{feature.label}</Text>
  //   </Center>
  // ));

  return (
    <Flex direction="column" ml="auto" mr="auto">
      <Flex direction="row" gap={10} align="center" mb={30}>
        <FaArrowLeftLong />
        <Link className={classes.link} to="/elitni-kovani-vorota">
          Назад
        </Link>
      </Flex>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={product?.image} alt="Tesla Model S" />
        </Card.Section>
        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>{product?.title}</Text>
            <Group mt={10}>
              <Text c="gray">Code:</Text>
              <Text>{product?.code}</Text>
            </Group>
            <Group mt={10}>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                {`${product?.cost} грн. `}
              </Text>
            </Group>
          </div>
          <Text fw={900} c="red">
            Скидка 25%{' '}
          </Text>
          <Text fz="sm" c="green" className={classes.label}>
            Базова комплектація
          </Text>
        </Group>
        <Card.Section className={classes.section}>
          <Group gap={30}>
            <Button radius="xl" style={{ flex: 1 }}>
              Замовити
            </Button>
            <ActionIcon variant="default" radius="md" size={36}>
              <IconHeart className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card.Section>
      </Card>
    </Flex>
  );
}
