import { Box, Image } from '@mantine/core';

export default function MainLogo() {
  return (
    <Box pl={40}>
      <a href="/">
        <Image
          radius="md"
          h={80}
          src="https://images.prom.ua/4643099495_w270_h100_desheva-kovka.jpg"
        />
      </a>
    </Box>
  );
}
