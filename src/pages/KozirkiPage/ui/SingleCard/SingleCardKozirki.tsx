import { Flex } from '@mantine/core';

import useScrollTop from '@/shared/helpers/useScrollTop';

import { CardDetalies2 } from './ui/CardDetalies2/CardDetalies2';

export default function SingleCardElitni() {
  useScrollTop();

  return (
    <>
      <Flex mt={40}>
        <CardDetalies2 />;
      </Flex>
    </>
  );
}
