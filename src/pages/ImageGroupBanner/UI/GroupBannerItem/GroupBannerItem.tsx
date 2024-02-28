import { Button, Card, Flex, Image, Overlay, Text } from '@mantine/core';

import classes from './GroupBannerItem.module.css';

export function GroupBannerItem() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.35} zIndex={0} />

      <Flex direction="column" className={classes.content}>
        <Flex>
          <Image src="https://images.prom.ua/5125569884_vorota-kovani-rozpashni.jpg" />
        </Flex>
        <Flex direction="column">
          <Text size="lg" fw={700} className={classes.title}>
            Plan & save
          </Text>

          <Text size="sm" className={classes.description}>
            Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia
            Pacific
          </Text>

          <Button className={classes.action} variant="gradient" color="dark" size="md">
            <a href="https://desheva-kovka.com.ua/ua/g52276843-elitni-kovani-vorota">Перейти</a>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
