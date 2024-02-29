import { Card, Flex, Overlay, Text } from '@mantine/core';
import type { FC } from 'react';

import type { Job } from '@/shared/types/Types';

import classes from './GroupJobItem.module.css';

type GroupJobItemProps = {
  job: Job;
};

export const GroupJobItem: FC<GroupJobItemProps> = ({ job }) => {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.35} zIndex={0} />
      <Flex direction="column" className={classes.content}>
        <Flex direction="column">
          <Text size="lg" fw={700} className={classes.title}>
            {job.title}
          </Text>
          <Text size="sm" className={classes.description}>
            {job.description}
          </Text>
          <Flex>
            <Text size="sm" className={classes.description}>
              Вартість роботи
            </Text>
            <Text size="sm" className={classes.description}>
              {job.price}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
