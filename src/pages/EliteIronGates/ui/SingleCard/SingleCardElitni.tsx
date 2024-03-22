import { Flex } from '@mantine/core';

import { HeaderSearch } from '@/shared/components';
import useScrollTop from '@/shared/helpers/useScrollTop';

// import CardDetalies from './ui/CardDetalies/CardDetalies';
import { CardDetalies2 } from './ui/CardDetalies2/CardDetalies2';

export default function SingleCardElitni() {
  useScrollTop();

  return (
    <>
      <HeaderSearch />
      <Flex mt={40} mb={40}>
        <CardDetalies2 />;
      </Flex>
    </>
  );
}
