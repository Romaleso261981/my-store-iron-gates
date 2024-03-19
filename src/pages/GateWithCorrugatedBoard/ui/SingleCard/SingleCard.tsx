import { Flex } from '@mantine/core';

import { HeaderSearch } from '@/shared/components';
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs';

// import CardDetalies from './ui/CardDetalies/CardDetalies';
import { CardDetalies2 } from './ui/CardDetalies2/CardDetalies2';

export default function SingleCard() {
  return (
    <>
      <HeaderSearch />
      <Flex mb={40} mt={40} ml={40}>
        <Breadcrumbs />
      </Flex>
      <CardDetalies2 />;
    </>
  );
}
