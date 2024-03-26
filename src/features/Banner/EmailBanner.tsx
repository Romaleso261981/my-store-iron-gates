import { Button, Flex, Text, TextInput, Title } from '@mantine/core';
import { useState } from 'react';

import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';

import { CarouselCard } from './CarouselCard/CarouselCard';
import classes from './EmailBanner.module.css';
// import image from './image.svg';

export function EmailBanner() {
  const [value, setValue] = useState('');

  const handleSendMessage = () => {
    sendMessage(value);
    setValue('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <Flex className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Дешева ковка</Title>
        <Text fw={500} fz="lg" mb={5}>
          Що ми пропонуємо нашим клієнтам
        </Text>
        <Text fz="sm" c="cyan">
          Ми зрадістю відповімо Вам на всі запитання та допоможемо оформити замовлення, для
          консультації телефон +380680013381.
        </Text>
        <Text fz="sm" c="cyan">
          Понад 25 років працюємо на ринку України. Потужність нашого виробництва дозволяє працювати
          нам не тільки в роздріб,а також з оптовими покупцями.
        </Text>
        <Text fz="sm" c="cyan">
          Ковані вироби виготовляємо будь якої складності, якість гарантована. Виготовляємо ворота,
          забори, альтанки, ковані лавочки, сходи, перила, монгали та грилі, прибори для каміну,
          грати, козирки, ганки та багато іншого.
        </Text>

        <Flex className={classes.controls}>
          <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder="Ваш номер телефону"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            onKeyDown={handleKeyPress}
          />
          <Button onClick={handleSendMessage} ml={10} className={classes.control}>
            Замовити
          </Button>
        </Flex>
      </div>
      <Flex className={classes.slide}>
        <CarouselCard />
      </Flex>
      {/* <Image src={image} className={classes.image} /> */}
    </Flex>
  );
}
