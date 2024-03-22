import { Flex, Image } from '@mantine/core';

import s from './MainLogo.module.css';

export default function MainLogo() {
  return (
    <Flex className={s.imageWrapper}>
      <a href="/">
        <Image
          radius="md"
          h={80}
          src="https://images.prom.ua/4643099495_w270_h100_desheva-kovka.jpg"
        />
      </a>
    </Flex>
  );
}
