import { Flex } from '@mantine/core';

import { KategjryLink } from '../HeaderSearch/UI';

export default function Breadcrumbs() {
  return (
    <Flex gap={20} justify="space-around">
      <KategjryLink title="Наші Вироби" />
    </Flex>
  );
}
