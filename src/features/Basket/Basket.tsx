import { Box, Drawer, Flex, Text, Title } from '@mantine/core';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';

import { incomeTotal } from '@/shared/helpers/incomeTotal';
import type { Product } from '@/shared/types/Types';

import s from './Basket.module.css';
import { SingleCard } from './UI/CardItem/CardItem';

type Props = {
  setIsShowBasket: () => void;
  opened: boolean;
};

export const Basket: FC<Props> = ({ setIsShowBasket, opened }) => {
  const orderedProduct: Product[] = [];

  const handleOpenBasket = () => {
    setIsShowBasket();
  };

  const { t } = useTranslation();

  return (
    <Drawer opened={opened} onClose={handleOpenBasket} title="Register" padding="xl" size="sm">
      <Box ml="auto" onClick={handleOpenBasket} className={s.close}>
        <IoClose />
      </Box>
      {orderedProduct &&
        orderedProduct.map((item) => (
          <Flex display="flex" gap={5} key={item.id}>
            <SingleCard data={item} />
          </Flex>
        ))}
      <Flex>
        <Flex>
          <Text>{`${t('basket.totalDue')} ${incomeTotal(orderedProduct).toLocaleString()} грн.`}</Text>
        </Flex>
      </Flex>
      :
      <Flex className={s.basketEmpty}>
        <Title className={s.basketEmptyMsg}>{t('basket.basketEmpty')}</Title>
        <Box ml="auto" onClick={handleOpenBasket} className={s.close}>
          <IoClose />
        </Box>
      </Flex>
    </Drawer>
  );
};
