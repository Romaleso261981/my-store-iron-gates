import { Flex } from '@mantine/core';
import { SlBasketLoaded } from 'react-icons/sl';

import Badge from '@/features/Basket/UI/Badge/Badge';

import s from './IconBasket.module.css';

type IconBasket = {
  setIsShowBasket(): void;
};

export const IconBasket = ({ setIsShowBasket }: IconBasket) => {
  const basket = [];

  return (
    <Flex className={s.iconWrapper} onClick={setIsShowBasket}>
      <Badge count={basket.length}>
        <SlBasketLoaded size={27} />
      </Badge>
    </Flex>
  );
};
