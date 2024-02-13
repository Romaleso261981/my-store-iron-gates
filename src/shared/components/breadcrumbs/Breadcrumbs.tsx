import { Flex } from '@mantine/core';

import { KategjryLink } from '../HeaderSearch/UI';

export default function Breadcrumbs() {
  return (
    <Flex gap={20} justify="space-around">
      <KategjryLink title="Головна" />
      <KategjryLink title="Товари" />
      <KategjryLink title="Ковані вироби" />
    </Flex>
  );
}
