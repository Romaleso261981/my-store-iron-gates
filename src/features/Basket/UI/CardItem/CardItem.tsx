import { Flex, Image, Text } from '@mantine/core';
import type { FC } from 'react';

import type { Product } from '@/shared/types/Types';

import s from './SingleCard.module.css';

type SingleCardProps = {
  data: Product;
};

export const SingleCard: FC<SingleCardProps> = ({ data }) => {
  return (
    <Flex mb={5} className={s.card}>
      <Image src={data.image} height={100} />
      <Flex mr={100}>
        <Text>{`Cost ${data.cost} $.`}</Text>
      </Flex>
    </Flex>
  );
};
